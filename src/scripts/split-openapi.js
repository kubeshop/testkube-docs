"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var yaml = require("js-yaml");
var path = require("path");
function splitOpenAPIByPaths(inputFile, outputDir) {
    var _a;
    var fileContent = fs.readFileSync(inputFile, 'utf8');
    var openapi = yaml.load(fileContent);
    var paths = openapi.paths;
    var components = openapi.components;
    var tags = openapi.tags;
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    if (components) {
        var componentsFile = path.join(outputDir, 'components.yaml');
        fs.writeFileSync(componentsFile, yaml.dump({ components: components }, { sortKeys: false }));
    }
    for (var pathKey in paths) {
        if (paths.hasOwnProperty(pathKey)) {
            var pathItem = paths[pathKey];
            var pathName = pathKey.trim().replace(/\//g, '_').replace(/{/g, '').replace(/}/g, '');
            var outputFile = path.join(outputDir, "".concat(pathName, ".yaml"));
            var newOpenAPI = {
                openapi: openapi.openapi || '3.0.0',
                info: openapi.info,
                paths: (_a = {}, _a[pathKey] = pathItem, _a),
                tags: openapi.tags
            };
            if (components) {
                // Add a reference to the components file
                newOpenAPI['$ref'] = './components.yaml';
            }
            fs.writeFileSync(outputFile, yaml.dump(newOpenAPI, { sortKeys: false }));
        }
    }
}
var inputFile = 'path/to/your/openapi.yaml';
var outputDir = 'path/to/output/directory';
splitOpenAPIByPaths(inputFile, outputDir);
