import path from 'path';

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("./src/themes/prism-testkube-light");
const darkCodeTheme = require("./src/themes/prism-testkube-dark");
const redirects = require("./redirects");
const agentRedocSpecs = require("./src/openapi/agent/redoc-specs");
const cloudRedocSpecs = require("./src/openapi/cloud/redoc-specs");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Testkube Documentation",
  tagline:
    "Kubernetes-native Continuous Testing Platform for Cloud-Native Applications",
  url: "https://docs.testkube.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/logo.svg",
  markdown: {
    format: "detect",
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'throw',
    },
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "kubeshop", // Usually your GitHub org/user name.
  projectName: "testkube", // Usually your repo name.

  scripts: [
    {
      src: "https://app.usercentrics.eu/browser-ui/latest/loader.js",
      id: "usercentrics-cmp",
      "data-settings-id": "WQ2gSqnsK",
      async: true,
    },
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/kubeshop/testkube/tree/develop/docs",
          // Generating BreadCrumbs for the docs
          breadcrumbs: false,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-G7HWN1EDK5",
        },
        googleTagManager: {
          containerId: "GTM-PQK4DKN",
        },
        sitemap: {
          createSitemapItems: async (params) => {
            const lowPrioPaths = [
              "/openapi/agent/",
              "/openapi/cloud/",
              "/articles/crds/",
              "/cli/",
            ];

            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            items.forEach((item) => {
              lowPrioPaths.forEach((path) => {
                if (item.url.includes(path)) {
                  item.priority = 0.1;
                }
              });
            });
            return items;
          },
        },
      },
    ],
    // Redocusaurus config
    [
      "redocusaurus",
      {
        specs: [...agentRedocSpecs, ...cloudRedocSpecs],
        theme: {
          primaryColor: "#818cf8",
          options: {
            hideDownloadButtons: true,
          }
        },
      },
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        logo: {
          alt: "Testkube",
          src: "img/logo.large.bright.svg",
          srcDark: "img/logo.large.svg",
          href: "/",
        },
        items: [
          {
            label: "Get Started",
            position: "right",
            href: "https://testkube.io/get-started",
          },
          {
            label: "Contact",
            position: "right",
            href: "https://testkube.io/contact",
          },
          {
            label: "Slack",
            position: "right",
            href: "https://bit.ly/testkube-slack",
          },
          {
            type: "html",
            position: "right",
            value: `<iframe src="https://ghbtns.com/github-btn.html?user=kubeshop&repo=testkube&type=star&count=true&color=dark" style='margin-top: 6px' frameborder="0" scrolling="0" width="110" height="20" title="GitHub"></iframe>`,
          },
          {
            type: "search",
            position: "left",
          },
        ],
      },

      announcementBar: {
        id: "testkube-122-release",
        content:
          '<b>Testkube 1.22 is out! A new AI Agent Framework that integrates with external MCP Servers for agentic troubleshooting, remediation, etc. <a href="/changelog">Read More</a></b>',
        backgroundColor: "#8951ff",
        textColor: "#fff",
      },

      footer: {
        style: "dark",
        links: [
          {
            label: "Website",
            href: "https://testkube.io",
          },
          {
            label: "Getting Started",
            href: "https://testkube.io/get-started?utm_source=docs",
          },
          {
            label: "Learn",
            href: "https://testkube.io/learn",
          },
          {
            label: "Slack",
            href: "https://bit.ly/testkube-slack",
          },
          {
            label: "Twitter",
            href: "https://twitter.com/Testkube_io",
          },
          {
            label: "GitHub",
            href: "https://github.com/kubeshop/testkube",
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kubeshop.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "QRREOKFLDE",

        // Public API key: it is safe to commit it
        apiKey: "97a76158bf582346aa0c2605cbc593f6",
        indexName: "testkube",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: false,

        facets: ["indexPrefix"],
        searchParameters: {
          facetFilters: [
            "indexPrefix: -reference-doc",
            "indexPrefix: -legacy-doc",
          ],
        },

        //... other Algolia params
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      mermaid: {
        theme: {
          light: 'neutral',
          dark: 'dark',
        },
      },
    },
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        id: "redirects",
        redirects: redirects,
        createRedirects(existingPath) {
          if (existingPath.includes("/cli")) {
            // Redirect from /cli-reference and /reference/cli (old links) to /cli
            return [
              existingPath.replace("/cli", "/cli-reference"),
              existingPath.replace("/cli", "/reference/cli"),
            ];
          }

          return undefined; // Return a falsy value: no redirect created
        },
      }
    ]
  ],
};

module.exports = config;
