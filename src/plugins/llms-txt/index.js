// @ts-check

/**
 * Writes /llms.txt (https://llmstxt.org) into the build output.
 *
 * The file starts with the hand-written introduction in `header.md`, followed
 * by the pages of the docs sidebar in sidebar order, each with its title, URL
 * and the `description` from its frontmatter. A top-level sidebar category
 * becomes a section, and so does each category directly inside it
 * ("Using Testkube: Test Workflows"); deeper levels are flattened into those.
 *
 * Pages whose URL starts with one of `excludePrefixes` (generated reference
 * content such as the CLI, OpenAPI and CRD pages) are left out, and `optional`
 * adds a closing "Optional" section that points at those references instead.
 *
 * Every page is also written as Markdown, at its URL plus ".md", and llms.txt
 * links to that version. Each section's pages are written to one file too,
 * /llms-full/<section>.txt, linked at the end of the section.
 *
 * The build warns about every listed page that has no `description`.
 */

const fs = require("fs/promises");
const path = require("path");
const { toMarkdown } = require("./to-markdown");

/**
 * @typedef {{title: string, path: string, description?: string}} OptionalLink
 * @typedef {{
 *   sidebar?: string,
 *   excludePrefixes?: string[],
 *   optional?: OptionalLink[],
 *   markdownExcludePrefixes?: string[],
 * }} PluginOptions
 */

/** @param {string} text */
const oneLine = (text) => text.replace(/\s+/g, " ").trim();

/**
 * The page's H1. Docusaurus falls back to the file name for a page whose H1
 * comes after an MDX export, so the title is read from the source instead.
 * @param {string} source
 */
function readHeading(source) {
  const body = source.replace(/^---\n[\s\S]*?\n---\n/, "");
  const heading = body.match(/^#\s+(.+)$/m);
  return heading ? oneLine(heading[1].replace(/\{#[^}]*\}/g, "")) : undefined;
}

/**
 * @param {import('@docusaurus/types').LoadContext} context
 * @param {PluginOptions} options
 * @returns {import('@docusaurus/types').Plugin}
 */
module.exports = function llmsTxtPlugin(context, options) {
  const {
    sidebar: sidebarId = "main",
    excludePrefixes = [],
    optional = [],
    markdownExcludePrefixes = [],
  } = options;
  const siteUrl = context.siteConfig.url.replace(/\/$/, "");

  /** @type {any} */
  let docsContent;

  return {
    name: "llms-txt",

    async allContentLoaded({ allContent }) {
      docsContent = allContent["docusaurus-plugin-content-docs"]?.default;
    },

    async postBuild({ outDir }) {
      const version = docsContent?.loadedVersions?.[0];
      const sidebar = version?.sidebars?.[sidebarId];
      if (!sidebar) {
        throw new Error(`llms-txt: sidebar "${sidebarId}" not found`);
      }

      /** @type {Map<string, any>} */
      const docsById = new Map(version.docs.map((doc) => [doc.id, doc]));
      const seen = new Set();

      // Every page is also published as Markdown, at its URL plus ".md"
      // ("/index.md" for the home page), and llms.txt links to that version.
      /** @type {Map<string, any>} */
      const markdownDocs = new Map();
      /** @type {Map<string, string>} */
      const permalinkBySource = new Map();
      for (const doc of version.docs) {
        if (doc.unlisted || doc.draft) continue;
        const file = path.join(
          context.siteDir,
          doc.source.replace(/^@site\//, "")
        );
        permalinkBySource.set(file, doc.permalink);
        if (
          !markdownExcludePrefixes.some((prefix) =>
            doc.permalink.startsWith(prefix)
          )
        ) {
          markdownDocs.set(doc.permalink, { ...doc, file });
        }
      }
      /** @param {string} permalink */
      const markdownPath = (permalink) =>
        `${permalink === "/" ? "/index" : permalink}.md`;
      /** The URL of a page: its Markdown version when it has one. */
      const pageUrl = (/** @type {string} */ permalink) =>
        siteUrl +
        (markdownDocs.has(permalink) ? markdownPath(permalink) : permalink);

      /**
       * Makes a link in a page absolute. A link to a source file
       * ("./other.md") or to a page ("/articles/other") becomes the URL of
       * that page's Markdown version.
       * @param {string} href
       * @param {string} fromFile
       */
      const resolveLink = (href, fromFile) => {
        if (/^([a-z][a-z0-9+.-]*:|#|\/\/)/i.test(href)) return href;
        const [, target, suffix] = /** @type {RegExpMatchArray} */ (
          href.match(/^([^?#]*)(.*)$/)
        );
        const fromPermalink = permalinkBySource.get(fromFile) ?? "/";
        let permalink;
        if (/\.mdx?$/.test(target)) {
          const file = target.startsWith("/")
            ? path.join(context.siteDir, "docs", target)
            : path.resolve(path.dirname(fromFile), target);
          permalink = permalinkBySource.get(file);
        }
        permalink ??= new URL(
          target.replace(/\.mdx?$/, ""),
          `${siteUrl}${fromPermalink}`
        ).pathname;
        if (permalink.length > 1) permalink = permalink.replace(/\/$/, "");
        return pageUrl(permalink) + suffix;
      };

      /** The Markdown of each page, by permalink. @type {Map<string, string>} */
      const markdown = new Map();
      for (const [permalink, doc] of markdownDocs) {
        let content = toMarkdown(doc.file, {
          siteDir: context.siteDir,
          resolveLink,
        });
        if (!/^# /m.test(content.replace(/^(```|~~~)[\s\S]*?^\1/gm, ""))) {
          content = `# ${doc.title}\n\n${content}`;
        }
        markdown.set(permalink, content);
        const file = path.join(outDir, markdownPath(permalink));
        await fs.mkdir(path.dirname(file), { recursive: true });
        await fs.writeFile(file, content);
      }
      /** @type {string[]} */
      const undescribed = [];

      /** @param {string} id */
      const entryForDoc = async (id) => {
        const doc = docsById.get(id);
        if (!doc || doc.unlisted || doc.draft) return null;
        if (excludePrefixes.some((prefix) => doc.permalink.startsWith(prefix)))
          return null;
        if (seen.has(doc.permalink)) return null;
        seen.add(doc.permalink);

        const sourcePath = doc.source.replace(/^@site\//, "");
        const title =
          doc.frontMatter.title ??
          readHeading(
            await fs.readFile(path.join(context.siteDir, sourcePath), "utf8")
          ) ??
          doc.title;
        const link = `- [${title}](${pageUrl(doc.permalink)})`;
        if (!doc.frontMatter.description) {
          undescribed.push(sourcePath);
          return link;
        }
        return `${link}: ${oneLine(doc.frontMatter.description)}`;
      };

      /** @type {string[]} */
      const sections = [];
      /** @type {Map<string, string>} */
      const permalinkByUrl = new Map(
        [...markdown.keys()].map((permalink) => [pageUrl(permalink), permalink])
      );
      await fs.mkdir(path.join(outDir, "llms-full"), { recursive: true });

      /**
       * Adds a section to llms.txt. The Markdown of its pages is also written
       * to one file, /llms-full/<section>.txt, which the section links to.
       * @param {string} title
       * @param {string[]} lines
       * @param {boolean} [withFullFile]
       */
      const addSection = async (title, lines, withFullFile = true) => {
        if (!lines.length) return;
        const pages = lines.flatMap((line) => {
          const url = line.match(/\]\((\S+?)\)/)?.[1] ?? "";
          const permalink = permalinkByUrl.get(url);
          const content = permalink && markdown.get(permalink);
          return content ? [`Source: ${url}\n\n${content.trim()}`] : [];
        });
        const list = [...lines];
        if (withFullFile && pages.length) {
          const slug = title
            .toLowerCase()
            .replace(/&/g, "and")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");
          const file = `/llms-full/${slug}.txt`;
          await fs.writeFile(
            path.join(outDir, file),
            `${[`# Testkube Documentation: ${title}`, ...pages].join(
              "\n\n---\n\n"
            )}\n`
          );
          list.push(
            `- [All "${title}" pages in one file](${siteUrl}${file}): The full Markdown of the ${pages.length} ${pages.length === 1 ? "page" : "pages"} listed in this section.`
          );
        }
        sections.push([`## ${title}`, "", ...list].join("\n"));
      };

      /**
       * Lists the pages of `items`. Categories go to `onCategory` when it is
       * given, and are flattened into the list otherwise.
       * @param {any[]} items
       * @param {(category: any) => Promise<void>} [onCategory]
       */
      const listPages = async (items, onCategory) => {
        /** @type {string[]} */
        const lines = [];
        for (const item of items) {
          if (item.type === "doc" || item.type === "ref") {
            const entry = await entryForDoc(item.id);
            if (entry) lines.push(entry);
          } else if (item.type === "category") {
            if (onCategory) {
              await onCategory(item);
            } else {
              lines.push(...(await listPages(categoryItems(item))));
            }
          }
        }
        return lines;
      };

      /** A category's own page, when it has one, followed by its items. */
      const categoryItems = (/** @type {any} */ category) =>
        category.link?.type === "doc"
          ? [{ type: "doc", id: category.link.id }, ...category.items]
          : category.items;

      const topLevelPages = sidebar.filter(
        (/** @type {any} */ item) => item.type !== "category"
      );
      await addSection("Overview", await listPages(topLevelPages));

      for (const category of sidebar) {
        if (category.type !== "category") continue;
        /** @type {{title: string, lines: string[]}[]} */
        const subsections = [];
        const lines = await listPages(
          categoryItems(category),
          async (subcategory) => {
            subsections.push({
              title: `${category.label}: ${subcategory.label}`,
              lines: await listPages(categoryItems(subcategory)),
            });
          }
        );
        await addSection(category.label, lines);
        for (const subsection of subsections) {
          await addSection(subsection.title, subsection.lines);
        }
      }

      await addSection(
        "Optional",
        optional.map(({ title, path: urlPath, description }) => {
          const link = `- [${title}](${pageUrl(urlPath)})`;
          return description ? `${link}: ${description}` : link;
        }),
        false
      );

      if (undescribed.length) {
        console.warn(
          `[WARNING] llms-txt: ${undescribed.length} page(s) have no "description" in their frontmatter and are listed in llms.txt without one:\n${undescribed
            .map((file) => `  - ${file}`)
            .join("\n")}`
        );
      }

      const header = await fs.readFile(
        path.join(__dirname, "header.md"),
        "utf8"
      );
      await fs.writeFile(
        path.join(outDir, "llms.txt"),
        `${[header.trim(), ...sections].join("\n\n")}\n`
      );
    },
  };
};
