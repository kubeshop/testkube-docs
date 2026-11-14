// @ts-check

/**
 * Adds `<meta name="robots" content="noindex, follow">` to the built pages
 * whose URL starts with one of `prefixes`.
 *
 * This keeps generated reference pages (the CLI and CRD references) out of
 * search results while leaving them fetchable. A `Disallow` rule in
 * robots.txt would also stop AI agents from reading them, and /llms.txt
 * points agents at these pages.
 */

const fs = require("fs/promises");
const path = require("path");

const META = '<meta name="robots" content="noindex, follow">';

/**
 * @param {import('@docusaurus/types').LoadContext} _context
 * @param {{prefixes?: string[]}} options
 * @returns {import('@docusaurus/types').Plugin}
 */
module.exports = function noindexPlugin(_context, options) {
  const { prefixes = [] } = options;

  return {
    name: "noindex",

    async postBuild({ outDir, routesPaths }) {
      const routes = routesPaths.filter((route) =>
        prefixes.some((prefix) => route.startsWith(prefix))
      );
      await Promise.all(
        routes.map(async (route) => {
          const file = path.join(outDir, route, "index.html");
          const html = await fs.readFile(file, "utf8").catch(() => null);
          if (html === null || html.includes('name="robots"')) return;
          await fs.writeFile(file, html.replace("<head>", `<head>${META}`));
        })
      );
    },
  };
};
