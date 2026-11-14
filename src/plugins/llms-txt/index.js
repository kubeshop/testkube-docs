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
 * The build warns about every listed page that has no `description`.
 */

const fs = require("fs/promises");
const path = require("path");

/**
 * @typedef {{title: string, path: string, description?: string}} OptionalLink
 * @typedef {{
 *   sidebar?: string,
 *   excludePrefixes?: string[],
 *   optional?: OptionalLink[],
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
        const link = `- [${title}](${siteUrl}${doc.permalink})`;
        if (!doc.frontMatter.description) {
          undescribed.push(sourcePath);
          return link;
        }
        return `${link}: ${oneLine(doc.frontMatter.description)}`;
      };

      /** @type {string[]} */
      const sections = [];
      /** @param {string} title @param {string[]} lines */
      const addSection = (title, lines) => {
        if (lines.length) {
          sections.push([`## ${title}`, "", ...lines].join("\n"));
        }
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
      addSection("Overview", await listPages(topLevelPages));

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
        addSection(category.label, lines);
        for (const subsection of subsections) {
          addSection(subsection.title, subsection.lines);
        }
      }

      addSection(
        "Optional",
        optional.map(({ title, path: urlPath, description }) => {
          const link = `- [${title}](${siteUrl}${urlPath})`;
          return description ? `${link}: ${description}` : link;
        })
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
