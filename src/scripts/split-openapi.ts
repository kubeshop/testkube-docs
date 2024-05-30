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

async function splitOpenAPIByPaths(url: string, outputDir: string): Promise<void> {
    const openapi = await fetchOpenAPI(url);
    const paths = openapi.paths;
    const components = openapi.components;
    const redocSpecs: Object[] = [];
    const redocSidebar: Object[] = [];

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, {recursive: true});
    }

    if (components) {
        const componentsFile = path.join(outputDir, 'components.yaml');
        fs.writeFileSync(componentsFile, yaml.dump({components: components}, {sortKeys: false}));
    }

    const openapis = new Map<string, Map<string, any>>()

    for (const pathKey in paths) {
        const basePath = pathKey.substring(1).split('/')[0];
        if (!openapis.has(basePath)) {
            openapis.set(basePath, new Map());
        }
        // @ts-ignore
        openapis.get(basePath).set(pathKey, paths[pathKey])
    }

    openapis.forEach((paths, rootPath) => {

        const outputFile = path.join(outputDir, `${rootPath}.yaml`);

        const newOpenAPI: OpenAPI = {
            openapi: openapi.openapi || '3.0.0',
            info: openapi.info,
            paths: {},
        };

        paths.forEach((value, key) => {
            for (let key in value) {
                delete value[key]?.tags
            }

            newOpenAPI.paths[key] = value;
        });

        let openApiYaml = yaml.dump(newOpenAPI, {sortKeys: false})
        openApiYaml = openApiYaml.replace(/#\/components/g, './components.yaml#/components');

        fs.writeFileSync(outputFile, openApiYaml);
        console.log("written " + outputFile + ", " + paths.size + " paths");

        redocSpecs.push({spec: outputFile, route: "openapi/testkube-" + rootPath});
        redocSidebar.push({type: "link", label: rootPath, href: "/openapi/testkube-" + rootPath});
    });

    fs.writeFileSync(path.join(outputDir, "redoc-specs.js"), "module.exports = " + JSON.stringify(redocSpecs));
    fs.writeFileSync(path.join(outputDir, "redoc-sidebar.js"), "module.exports = " + JSON.stringify(redocSidebar));
}


const url = 'https://raw.githubusercontent.com/kubeshop/testkube/main/api/v1/testkube.yaml';
const outputDir = 'src/openapi';
splitOpenAPIByPaths(url, outputDir);
