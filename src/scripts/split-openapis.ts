import * as fs from "fs";
import * as yaml from "js-yaml";
import * as path from "path";
import axios from "axios";

interface OpenAPI {
  openapi: string;
  info: object;
  tags?: object;
  paths: { [key: string]: object };
  servers?: object[];
  components?: object;
}

// fetch the specified OpenAPI definition
async function fetchOpenAPI(url: string): Promise<OpenAPI> {
  console.log("Retrieving OpenAPI definition from " + url);
  const response = await axios.get(url, {
    headers: {
      // token needs to have read access to private Testkube repos
      Authorization:
        "Bearer " + process.env.TESTKUBE_OPENAPI_GITHUB_ACCESS_TOKEN,
    },
  });
  return yaml.load(response.data) as OpenAPI;
}

function prepareOutputFolder(outputDir: string) {
  // make sure folder exists
  fs.mkdirSync(outputDir, { recursive: true });

  // delete old files that might not be needed anymore
  const files = fs.readdirSync(outputDir);
  for (const file of files) {
    fs.unlinkSync(path.join(outputDir, file));
  }
}

// main worker
// - splits the specified OpenAPI definition into smaller pieces
// - creates OpenAPI doc mdx files for each piece
// - creates corresponding redocusaurus configuration file and docusaurus sidebars
async function splitOpenAPIByPaths(
  openApiUrl: string,
  outputDir: string,
  docsDir: string,
  title: string,
  pathFilter?: (path: string) => {
    basePath?: string;
    submenu?: string;
  } | null
): Promise<void> {
  const openapi = await fetchOpenAPI(openApiUrl);
  const paths = openapi.paths;
  const components = openapi.components;
  const redocSpecs: Object[] = [];
  const redocSidebar: Object[] = [];
  const sidebars: Map<string, string[]> = new Map();
  const openapis = new Map<string, Map<string, any>>();

  prepareOutputFolder(outputDir);
  prepareOutputFolder(docsDir);

  // extract components to shared file
  if (components) {
    const componentsFile = path.join(outputDir, "components.yaml");
    fs.writeFileSync(
      componentsFile,
      yaml.dump({ components: components }, { sortKeys: false })
    );
  }

  // aggregate paths per root path segment
  for (let pathKey in paths) {
    // use provided function or root path segment to determine menu entry
    const mapping = pathFilter
      ? pathFilter(pathKey)
      : { basePath: "/" + pathKey.substring(1).split("/")[0] };

    // set to default basePath if no basePath was provided by mapping function
    if (pathFilter && mapping && !mapping.basePath) {
      mapping.basePath = "/" + pathKey.substring(1).split("/")[0];
    }

    if (mapping?.basePath && mapping.basePath.length > 1) {
      const submenu = mapping.submenu || "default";
      const mappingKey = submenu + ":" + mapping.basePath;

      // add to corresponding mapping
      if (!openapis.has(mappingKey)) {
        openapis.set(mappingKey, new Map());
      }
      // @ts-ignore
      openapis.get(mappingKey).set(pathKey, paths[pathKey]);

      // add to submenu
      if (!sidebars.has(submenu)) {
        sidebars.set(submenu, []);
      }

      let sidebar = sidebars.get(submenu);
      if (sidebar && sidebar.indexOf(mappingKey) == -1) {
        sidebar.push(mappingKey);
      }
    }
  }

  // now create new openapi file for each mapping
  openapis.forEach((paths, rootPath) => {
    const fileName = rootPath.replace(/[\/\s{}:\.]/g, "-");
    const outputFile = path.join(outputDir, `${fileName}.yaml`);
    const newOpenAPI: OpenAPI = {
      openapi: openapi.openapi || "3.0.0",
      info: openapi.info,
      servers: [
        {
          url: "https://api.testkube.io",
          description: "Testkube Cloud API Endpoint",
        },
        {
          url: "https://<your-testkube-api-host>",
          description: "Testkube On-Prem API Endpoint",
        },
      ],
      paths: {},
    };

    paths.forEach((value, key) => {
      // delete tags to flatten redoc sidebar
      for (let key in value) {
        delete value[key]?.tags;
      }

      newOpenAPI.paths[key] = value;
    });

    // generate YAML and replace component references to point to external file
    let openApiYaml = yaml.dump(newOpenAPI, { sortKeys: false });
    openApiYaml = openApiYaml.replace(
      /#\/components/g,
      "./components.yaml#/components"
    );

    fs.writeFileSync(outputFile, openApiYaml);
    console.log("written " + outputFile + ", " + paths.size + " paths");

    // create mdx placeholder
    let mdxFilePath = path.join(docsDir, fileName + ".mdx");

    let pageTitle =
      title +
      " " +
      (rootPath.split(":")[0] === "default"
        ? "Operations"
        : rootPath.split(":")[0]) +
      ": " +
      rootPath.split(":")[1];

    fs.writeFileSync(
      mdxFilePath,
      "---\n" +
        "title: '" +
        pageTitle +
        "'\n" +
        "---\n" +
        "<head>\n" +
        '  <meta name="docsearch:indexPrefix" content="reference-doc" />\n' +
        "</head>\n" +
        "\n" +
        "import ApiDocMdx from '@theme/ApiDocMdx';\n" +
        "\n" +
        '<ApiDocMdx id="' +
        fileName +
        '" />\n'
    );

    console.log("written " + mdxFilePath);

    // add generated file to redoc config and sidebar
    redocSpecs.push({ spec: outputFile, url: openApiUrl, id: fileName });
  });

  // build sidebars
  sidebars.forEach((v, k) => {
    // default sidebar entries are under the root category
    if (k === "default") {
      v.forEach((basePath) => {
        redocSidebar.push({
          type: "doc",
          label: basePath.split(":")[1],
          id:
            docsDir.substring(docsDir.indexOf("/") + 1) +
            "/" +
            basePath.replace(/[\/\s{}:\.]/g, "-"),
        });
      });
    } else {
      const subbar: Object[] = [];
      v.forEach((basePath) => {
        subbar.push({
          type: "doc",
          label: basePath.split(":")[1],
          id:
            docsDir.substring(docsDir.indexOf("/") + 1) +
            "/" +
            basePath.replace(/[\/\s{}:\.]/g, "-"),
        });
      });

      // non-default sidebar entries get their own category
      redocSidebar.push({
        type: "category",
        label: k,
        items: subbar,
      });
    }
  });

  // write generated redoc specs and sidebar
  fs.writeFileSync(
    path.join(outputDir, "redoc-specs.js"),
    "module.exports = " + JSON.stringify(redocSpecs)
  );
  fs.writeFileSync(
    path.join(outputDir, "redoc-sidebar.js"),
    "module.exports = " + JSON.stringify(redocSidebar)
  );
}

// Core OpenAPI definition goes into agent folder
splitOpenAPIByPaths(
  "https://raw.githubusercontent.com/kubeshop/testkube/refs/heads/main/api/v1/testkube.yaml",
  "src/openapi/agent",
  "docs/openapi/agent",
  "Standalone Agent",
  (opPath) => {
    return opPath.split("/").indexOf("uploads") >= 0 ? null : {};
  }
);

// Control-plane OpenAPI definition goes into cloud folder
splitOpenAPIByPaths(
  "https://raw.githubusercontent.com/kubeshop/testkube-cloud-api/refs/heads/main/api/v1/testkube-cloud.yaml",
  "src/openapi/cloud",
  "docs/openapi/cloud",
  "Control Plane",
  (opPath) => {
    console.log( "mapping path " + opPath)
    // only show these in the docs
    let segments = opPath.split("/");
    if (
      ![
        "status-pages",
        "users",
        "health",
        "organizations",
        "environments",
      ].includes(segments[1])
    )
      return null;

    let lastSegment = segments[segments.length - 1];
    if (
      lastSegment === "suggestions" ||
      lastSegment === "environments-versions" ||
      lastSegment === "uploads" ||
      lastSegment.includes("slug")
    )
      return null;

    // mapped agent operations
    if (
      opPath
        .toLowerCase()
        .startsWith("/organizations/{id}/environments/{environmentid}/agent/")
    ) {
      const p = opPath.substring(
        "/organizations/{id}/environments/{environmentID}/agent/".length
      );
      return { basePath: "../" + p.split("/")[0], submenu: "Agent Operations" };
    }

    // environment-specific operations
    if (
      opPath
        .toLowerCase()
        .startsWith("/organizations/{id}/environments/{environmentid}/")
    ) {
      const p = opPath.substring(
        "/organizations/{id}/environments/{environmentID}/".length
      );
      return {
        basePath: "../" + p.split("/")[0],
        submenu: "Environment Operations",
      };
    }

    // filter operations at the organization level - this is ultimately a hack, should be controlled in the API
    // definition itself which operations that should be made public
    if (opPath.toLowerCase().startsWith("/organizations/")) {
      if (
        [
          "/join-demo",
          "/limits",
          "/usage",
          "/payments",
          "/features-usage",
          "/agent-analytics",
          "/features",
          "/settings",
        ].filter((str) => opPath.includes(str)).length > 0
      )
        return null;

      // org-level ops
      if (!segments[2].startsWith("{")) {
        return { basePath: "/" + segments[2], submenu: "Core Operations" };
      }

      // org-mgmt ops go to core category
      if (segments[2].startsWith("{") && segments.length === 3) {
        return { basePath: "/" + segments[1], submenu: "Core Operations" };
      }

      // org-level ops
      if (segments.length === 3) {
        return {
          basePath: "/" + segments[1],
          submenu: "Organization Operations",
        };
      }

      return {
        basePath: "../" + segments[3],
        submenu: "Organization Operations",
      };
    }

    return segments.length > 1
      ? {
          basePath: segments.slice(0, 2).join("/"),
          submenu: "Core Operations",
        }
      : { basePath: opPath, submenu: "Core Operations" };
  }
);
