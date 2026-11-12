// @ts-check

/**
 * Converts the Markdown or MDX source of a docs page to plain Markdown that
 * an agent can read without a browser:
 *
 * - frontmatter, `import` and `export` statements, JSX comments and layout
 *   components are removed;
 * - an imported Markdown partial (`<SimpleK6 />`) is replaced by its content;
 * - a tab becomes a bold label followed by its content;
 * - an admonition becomes a blockquote;
 * - images are removed, since their files are not published next to the page;
 * - links are made absolute through `resolveLink`.
 *
 * Code blocks are copied as they are.
 */

const fs = require("fs");
const path = require("path");

const MAX_PARTIAL_DEPTH = 5;

/**
 * @typedef {{
 *   siteDir: string,
 *   resolveLink: (href: string, fromFile: string) => string,
 * }} Options
 */

/** @param {string} line */
const bracketDelta = (line) => {
  let delta = 0;
  for (const char of line) {
    if ("({[".includes(char)) delta++;
    else if (")}]".includes(char)) delta--;
  }
  return delta;
};

/** @param {string} text */
const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

/**
 * @param {string} file absolute path of the page or partial
 * @param {Options} options
 * @param {number} [depth]
 * @returns {string}
 */
function toMarkdown(file, options, depth = 0) {
  const source = fs
    .readFileSync(file, "utf8")
    .replace(/^---\n[\s\S]*?\n---\n/, "");

  /** Imported Markdown partials, by component name. @type {Map<string, string>} */
  const partials = new Map();
  /** @type {string[]} */
  const out = [];

  let fence = "";
  let statementDepth = 0; // inside a multi-line import or export
  /** @type {string[]} */
  let statement = [];
  let inImport = false;
  let inHead = false;
  let inJsxTag = false; // inside a multi-line component tag
  let jsxDepth = 0;
  let inHtmlTag = ""; // inside a multi-line <div>, <iframe> or <img> tag
  let htmlDepth = 0;
  let inComment = false;
  /** Markers of the open admonitions, innermost last. @type {string[]} */
  const admonitions = [];
  let layoutDepth = 0; // inside <div> and similar layout elements
  /** @type {number | null} */
  let layoutIndent = null;

  const quote = () => "> ".repeat(admonitions.length);
  /** @param {string} text */
  const emit = (text) =>
    out.push(text === "" ? quote().trimEnd() : quote() + text);

  /** @param {string} text */
  const inline = (text) =>
    text
      .replace(/\{\/\*.*?\*\/\}/g, "")
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
      .replace(/<img\b[^>]*\/?>/g, "")
      .replace(
        /\]\(([^)\s]+)((?:\s+"[^"]*")?)\)/g,
        (_match, href, title) => `](${options.resolveLink(href, file)}${title})`
      );

  /**
   * An index page defines its cards in an exported component. Lists each
   * card ({label, description, href}) as a link.
   * @param {string} code
   */
  const emitCards = (code) => {
    const cards = code.matchAll(
      /label:\s*(["'`])(.+?)\1([\s\S]*?)href:\s*(["'`])(.+?)\4/g
    );
    let count = 0;
    for (const [, , label, between, , href] of cards) {
      const link = `- [${label}](${options.resolveLink(href, file)})`;
      const description = between.match(/description:\s*(["'`])([\s\S]+?)\1/);
      if (description) {
        emit(`${link}: ${description[2].trim()}`);
      } else {
        // A description written as JSX: keep its prose, and list the
        // ['key', 'value'] pairs it passes to a component.
        const prose = between
          .split("\n")
          .map((line) => line.replace(/<[^>]*>/g, "").trim())
          .filter(
            (line) =>
              /^[A-Za-z]/.test(line) &&
              !/[{}[\]=]/.test(line) &&
              !/^\w+:\s*\(?$/.test(line)
          )
          .join(" ");
        emit(prose ? `${link}: ${prose}` : link);
        const pairs = between.matchAll(
          /\[\s*(["'])(.+?)\1\s*,\s*(["'])(.+?)\3\s*\]/g
        );
        for (const [, , key, , value] of pairs) emit(`  - ${key}: ${value}`);
      }
      count++;
    }
    if (count) emit("");
  };

  for (const rawLine of source.split("\n")) {
    let line = rawLine;
    const trimmed = line.trim();

    // Code blocks are copied as they are, without the indentation of a
    // surrounding layout element.
    if (fence) {
      if (layoutIndent)
        line = line.replace(new RegExp(`^ {0,${layoutIndent}}`), "");
      // Docusaurus line-highlight markers are not part of the code.
      if (/^(\/\/|#)\s*highlight-(next-line|start|end)$/.test(trimmed))
        continue;
      emit(line);
      if (trimmed.startsWith(fence)) fence = "";
      continue;
    }

    if (inComment) {
      if (trimmed.includes("*/}") || trimmed.includes("-->")) inComment = false;
      continue;
    }
    if (
      (trimmed.startsWith("{/*") && !trimmed.includes("*/}")) ||
      (trimmed.startsWith("<!--") && !trimmed.includes("-->"))
    ) {
      inComment = true;
      continue;
    }
    if (/^(\{\/\*.*\*\/\}|<!--.*-->)$/.test(trimmed)) continue;

    if (inHead) {
      if (trimmed.startsWith("</head>")) inHead = false;
      continue;
    }
    if (trimmed.startsWith("<head>")) {
      inHead = !trimmed.includes("</head>");
      continue;
    }

    // import and export statements, which may span lines
    if (inImport) {
      if (/\bfrom\s+["']/.test(line) || /["'];?\s*$/.test(line))
        inImport = false;
      continue;
    }
    if (statementDepth > 0) {
      statement.push(line);
      statementDepth = Math.max(0, statementDepth + bracketDelta(line));
      if (statementDepth === 0) emitCards(statement.join("\n"));
      continue;
    }
    if (/^import\s/.test(line)) {
      const partial = line.match(
        /^import\s+(\w+)\s+from\s+["']([^"']+\.mdx?)["']/
      );
      if (partial) {
        const target = partial[2].startsWith("@site/")
          ? path.join(options.siteDir, partial[2].slice("@site/".length))
          : path.resolve(path.dirname(file), partial[2]);
        partials.set(partial[1], target);
      }
      inImport = !/["'];?\s*$/.test(line);
      continue;
    }
    if (/^export\s/.test(line)) {
      statement = [line];
      statementDepth = Math.max(0, bracketDelta(line));
      continue;
    }

    if (inHtmlTag) {
      htmlDepth += bracketDelta(line);
      if (htmlDepth <= 0 && />\s*$/.test(trimmed)) {
        const opensLayout =
          /^(div|section|article)$/.test(inHtmlTag) &&
          !/\/>\s*$/.test(trimmed) &&
          !trimmed.includes(`</${inHtmlTag}>`);
        if (opensLayout) layoutDepth++;
        inHtmlTag = "";
      }
      continue;
    }

    if (inJsxTag) {
      // The tag ends where its braces are balanced again. Prose passed to
      // the component in a prop is kept.
      jsxDepth += bracketDelta(line);
      if (jsxDepth <= 0 && /\/?>\s*$/.test(trimmed)) {
        inJsxTag = false;
        continue;
      }
      const text = trimmed
        .replace(/<\/?[a-z][^>]*>/g, "")
        .replace(/<\/?>/g, "")
        .trim();
      if (/^[A-Za-z]/.test(text) && !/[{}=]/.test(text)) emit(inline(text));
      else if (text === "" && out[out.length - 1] !== "") emit("");
      continue;
    }

    const fenceMatch = trimmed.match(/^(```+|~~~+)/);
    if (fenceMatch) {
      if (layoutIndent)
        line = line.replace(new RegExp(`^ {0,${layoutIndent}}`), "");
      line = line.replace(/\s+showLineNumbers\b/, "");
      fence = fenceMatch[1];
      emit(line);
      continue;
    }

    // admonitions: ":::tip Title" ... ":::"
    const admonition = trimmed.match(/^(:{3,})\s*(\w+)?\s*(.*)$/);
    if (admonition) {
      const [, marker, type, title] = admonition;
      if (type) {
        const label = [capitalize(type), inline(title)].filter(Boolean);
        admonitions.push(marker);
        emit(`**${label.join(": ")}**`);
        emit("");
      } else if (admonitions.length) {
        admonitions.pop();
        emit("");
      }
      continue;
    }

    // components and layout elements that take a whole line
    const tag = trimmed.match(/^<(\/?)([A-Za-z][A-Za-z0-9]*)\b([^]*)$/);
    const isComponent = tag && /^[A-Z][a-z]/.test(tag[2]);
    if (tag && isComponent) {
      const [, closing, name, rest] = tag;
      if (!closing && partials.has(name) && depth < MAX_PARTIAL_DEPTH) {
        const partial = /** @type {string} */ (partials.get(name));
        if (fs.existsSync(partial)) {
          for (const partialLine of toMarkdown(partial, options, depth + 1)
            .trim()
            .split("\n")) {
            emit(partialLine);
          }
        }
        continue;
      }
      if (!closing && name === "TabItem") {
        // The label is a string, or JSX: label={<span>Text (<code>x</code>)</span>}
        const label =
          rest.match(/label=["']([^"']+)["']/)?.[1] ??
          rest
            .match(/label=\{([^]*)\}/)?.[1]
            .replace(/<code>(.*?)<\/code>/g, "`$1`")
            .replace(/<[^>]*>/g, "")
            .trim();
        if (label) {
          emit(`**${label}**`);
          emit("");
        }
        if (!/>\s*$/.test(trimmed)) {
          inJsxTag = true;
          jsxDepth = bracketDelta(line);
        }
        continue;
      }
      if (!closing && name === "Admonition") {
        const type = rest.match(/type=["'](\w+)["']/);
        const title = rest.match(/title=["']([^"']+)["']/);
        const label = [type && capitalize(type[1]), title && title[1]];
        if (label.some(Boolean)) {
          emit(`**${label.filter(Boolean).join(": ")}**`);
          emit("");
        }
      }
      // A tag that does not end on this line continues on the next ones.
      if (!/>\s*$/.test(trimmed)) {
        inJsxTag = true;
        jsxDepth = bracketDelta(line);
      }
      // Text after the tag on the same line is kept: "<Tag>text</Tag>".
      const text = trimmed.replace(/<\/?[A-Z][A-Za-z0-9]*\b[^>]*>/g, "").trim();
      if (text && !inJsxTag) emit(inline(text));
      continue;
    }
    // an HTML element whose opening tag spans lines
    if (
      tag &&
      !tag[1] &&
      /^(div|section|article|iframe|img|video)$/.test(tag[2]) &&
      /^<[a-z]+(\s[^>]*)?$/.test(trimmed.replace(/\{\{[^]*?\}\}/g, ""))
    ) {
      inHtmlTag = tag[2];
      htmlDepth = bracketDelta(line);
      continue;
    }
    if (
      tag &&
      /^(div|section|article|span|p|iframe|img|br|hr|details|summary)$/.test(
        tag[2]
      ) &&
      /^<[^>]*>$/.test(trimmed.replace(/\{\{[^]*?\}\}/g, ""))
    ) {
      if (/^(div|section|article)$/.test(tag[2])) {
        layoutDepth = Math.max(0, layoutDepth + (tag[1] ? -1 : 1));
        if (layoutDepth === 0) layoutIndent = null;
      }
      continue;
    }

    // Content nested in a layout element is indented in the source, which
    // Markdown would read as a code block.
    if (layoutDepth > 0 && trimmed) {
      layoutIndent ??= line.length - line.trimStart().length;
      line = line.replace(new RegExp(`^ {0,${layoutIndent}}`), "");
    }

    // reference-style link definition: "[name]: /articles/page"
    const definition = line.match(/^(\s{0,3}\[[^\]]+\]:\s+)(\S+)(.*)$/);
    if (definition) {
      const [, start, href, rest] = definition;
      emit(
        `${start}${options.resolveLink(href.replace(/^<|>$/g, ""), file)}${rest}`
      );
      continue;
    }

    const heading = line.match(/^(#{1,6}\s+.*?)\s*\{#[^}]*\}\s*$/);
    if (heading) line = heading[1];

    const converted = inline(line);
    // A line that only held an image or a comment disappears.
    if (converted.trim() === "" && trimmed !== "") continue;
    emit(converted);
  }

  return `${out
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()}\n`;
}

module.exports = { toMarkdown };
