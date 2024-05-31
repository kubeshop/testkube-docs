import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as path from 'path';
import axios from 'axios';

interface OpenAPI {
    openapi: string;
    info: object;
    tags?: object;
    paths: { [key: string]: object };
    components?: object;
}

async function fetchOpenAPI(url: string): Promise<OpenAPI> {
    const response = await axios.get(url);
    return yaml.load(response.data) as OpenAPI;
}

async function splitOpenAPIByPaths(url: string, outputDir: string, docsDir: string): Promise<void> {
    const openapi = await fetchOpenAPI(url);
    const paths = openapi.paths;
    const components = openapi.components;
    const redocSpecs: Object[] = [];
    const redocSidebar: Object[] = [];
    const openapis = new Map<string, Map<string, any>>()

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, {recursive: true});
    }

    // extract components to shared file
    if (components) {
        const componentsFile = path.join(outputDir, 'components.yaml');
        fs.writeFileSync(componentsFile, yaml.dump({components: components}, {sortKeys: false}));
    }

    // aggregate paths per root path segment
    for (const pathKey in paths) {
        const basePath = pathKey.substring(1).split('/')[0];
        if (!openapis.has(basePath)) {
            openapis.set(basePath, new Map());
        }
        // @ts-ignore
        openapis.get(basePath).set(pathKey, paths[pathKey])
    }

    // now create new openapi file for each root path segment
    openapis.forEach((paths, rootPath) => {
        const outputFile = path.join(outputDir, `${rootPath}.yaml`);
        const newOpenAPI: OpenAPI = {
            openapi: openapi.openapi || '3.0.0',
            info: openapi.info,
            paths: {},
        };

        paths.forEach((value, key) => {
            // delete tags to flatten redoc sidebar
            for (let key in value) {
                delete value[key]?.tags
            }

            newOpenAPI.paths[key] = value;
        });

        // generate YAML and replace component references to point to external file
        let openApiYaml = yaml.dump(newOpenAPI, {sortKeys: false})
        openApiYaml = openApiYaml.replace(/#\/components/g, './components.yaml#/components');

        fs.writeFileSync(outputFile, openApiYaml);
        console.log("written " + outputFile + ", " + paths.size + " paths");

        // create mdx placeholder
        fs.writeFileSync( path.join( docsDir, "openapi", rootPath + ".mdx"),
            "---\n" +
            "title: Testkube /" + rootPath + " operations\n" +
            "---\n" +
            "\n" +
            "import ApiDocMdx from '@theme/ApiDocMdx';\n" +
            "\n" +
            "<ApiDocMdx id=\"" + rootPath  + "\" />\n");

        // add generated file to redoc config and sidebar
        redocSpecs.push({spec: outputFile, url: openApiUrl, id: rootPath});
        redocSidebar.push({type: "doc", label: "/" + rootPath, id: "openapi/" + rootPath});
    });

    // write generated redoc specs and sidebar
    fs.writeFileSync(path.join(outputDir, "redoc-specs.js"), "module.exports = " + JSON.stringify(redocSpecs));
    fs.writeFileSync(path.join(outputDir, "redoc-sidebar.js"), "module.exports = " + JSON.stringify(redocSidebar));
}

const openApiUrl = 'https://raw.githubusercontent.com/kubeshop/testkube/main/api/v1/testkube.yaml';
const outputDir = 'src/openapi';
const docsDir = 'docs'
splitOpenAPIByPaths(openApiUrl, outputDir, docsDir);
