# Working with Testkube Documentation (testkube-docs)

## Purpose

- Docusaurus-based documentation website for Testkube, hosted at https://docs.testkube.io
- Provides user guides, API references, CLI documentation, and conceptual documentation
- Uses MDX for rich content with React components and Markdown

## Directory Structure

- `docs/` - All documentation content (MDX and Markdown files)
  - `articles/` - Main documentation articles
    - `crd/` - Testkube CRD docs (auto-generated)
    - `examples/` - Testkube examples in docs
    - `images/` - Image assets
    - `install/` - Installation Guides
    - `inventory/` - Testkube Docker Image Inventory (auto-generated)
    - `tutorial/` - Tutorials
  - `cli/` - CLI reference documentation (auto-generated)
  - `legacy-cli/` - Legacy CLI documentation
  - `openapi/` - OpenAPI reference documentation (auto-generated)
  - `test-types/` - Legacy Test Executor documentation
  - `workflows/` - Sample TestWorkflows used in the documentation
  - `img/` - Images and assets for documentation
- `src/` - Docusaurus source code and customizations
  - `components/` - Custom React components (Card, LegacyBanner, etc.)
  - `openapi/` - OpenAPI spec files and generated sidebar configs
  - `scripts/` - Build scripts (e.g., `split-openapis.ts`)
  - `theme/` - Custom theme components (Navbar, SearchBar, CodeBlock, etc.)
  - `themes/` - Custom Prism syntax highlighting themes
- `static/` - Static assets (images, OpenAPI files)
- `sidebars.js` - Sidebar navigation configuration

## Key Files

- `docusaurus.config.js` - Main Docusaurus configuration
- `sidebars.js` - Sidebar navigation structure (must be updated when adding new docs)
- `package.json` - Dependencies and npm scripts
- `.env` - Environment variables (if needed)

## Development Workflow

### Local Setup

1. Install dependencies: `npm install`
2. Start dev server: `npm run start` (defaults to port 3000, use `-- --port XXXX` to change)
3. Preview at: http://localhost:3000

### Adding New Documentation

1. Create/edit files in `docs/` folder (use `.mdx` for rich content, `.md` for simple Markdown)
2. **Update `sidebars.js`** to add the new document to navigation:
   ```js
   {
     type: "category",
     label: "Concepts",
     items: [
       "concepts/tests/tests-creating",
       "concepts/new-document"  // Add here
     ]
   }
   ```
3. Test locally: `npm run start`
4. Build to check for errors: `npm run build` (catches broken links, etc.)
5. Commit and create PR

## Documentation Patterns

### Styling

- **Admonitions**: Use Docusaurus [admonitions](https://docusaurus.io/docs/markdown-features/admonitions) for warnings/info messages:
  ```mdx
  :::warning
  This is a warning message
  :::
  ```

- **Code Block Titles**: Use Docusaurus [code block titles](https://docusaurus.io/docs/markdown-features/code-blocks#code-title):
  ````mdx
  ```js title="file.js"
  // code content
  ```
  ````
  **Don't** put the filename above the code block as plain text.

- **Tabs**: Use tabs for multi-option content (e.g., installation methods). Note: Headlines inside tab content appear in navigation but won't work as direct links unless under the default/first tab.

### Legacy Content

- Deprecated APIs should include a legacy warning banner:
  ```mdx
  import LegacyWarning from '../_legacy-warning.mdx';
  
  <LegacyWarning />
  ```

## Auto-Generated Documentation

### OpenAPI Reference Docs

- Generated from Testkube agent and control plane OpenAPI specs
- **Regeneration**: Run `npm run split-openapis` (requires `TESTKUBE_OPENAPI_GITHUB_ACCESS_TOKEN` env var for control plane API)
- The script:
  - Fetches OpenAPI definitions from GitHub
  - Splits large specs into smaller ones in `src/openapi/`
  - Generates MDX files in `docs/openapi/`
  - Generates sidebar configs (`redoc-sidebar.js`) and spec configs (`redoc-specs.js`)
  - Creates aggregated OpenAPI files in `static/openapi/`
- **After regeneration**: Commit the generated files back to the repo

### CLI Reference Docs

- Generated in the [testkube repository](https://github.com/kubeshop/testkube) by running `make docs`
- **Update process**:
  1. Run `make docs` in testkube repo root
  2. Copy generated files from `gen/docs/cli/` to `/docs/cli/` in this repo
  3. Clear the `/docs/cli/` folder first to remove old files
  4. Test build: `npm run build`
  5. Fix any errors manually if needed

### CRD Reference Docs

- Generated from Go types using [kubeshop/crd-ref-docs](https://github.com/kubeshop/crd-ref-docs) fork
- **Update process**:
  1. Ensure `testkube-operator` submodule is up to date (pull `main` branch)
  2. Set Kubernetes version in `config.yaml` (at least v1.28)
  3. Run `go generate gen-crds.go`
  4. Verify links in `/docs/articles/crds.md` are correct
  5. Add deprecation warnings to deprecated API docs (see Legacy Content above)
  6. Commit and create PR

## Search Indexing

- Search uses Algolia with 3 distinct indexes: `Main`, `Reference`, and `Legacy`
- Default index is `Main` (contains all pages not explicitly in other indexes)
- **To add a page to a specific index**: Add meta tag in page frontmatter:
  ```mdx
  ---
  title: Page Title
  ---
  <meta name="docsearch:indexPrefix" content="Reference" />
  ```

## Build & Deployment

- **Build**: `npm run build` (uses increased memory: `NODE_OPTIONS="--max_old_space_size=16384"`)
- **Type checking**: `npm run typecheck`
- **Clear cache**: `npm run clear`
- **Serve built site**: `npm run serve`
- Site is automatically deployed with Vercel.

## Custom Components

- `src/components/` - Reusable React components:
  - `Card/` - Documentation cards
  - `CardWrapper/` - Card container
  - `LegacyBanner/` - Legacy content warnings
  - `LegacyCliBanner/` - Legacy CLI warnings
  - `TwoColumns/` - Two-column layout

## Theme Customizations

- `src/theme/` - Custom Docusaurus theme components:
  - `Navbar/` - Navigation bar
  - `SearchBar/` - Search functionality with filter
  - `CodeBlock/` - Code block with copy button
  - `DocCard/` - Documentation card styling
- `src/themes/` - Custom Prism syntax highlighting themes (light, dark, mirage)

## Tips

- Always run `npm run build` before committing to catch broken links and build errors
- Update `sidebars.js` when adding new documentation files
- Use MDX (`.mdx`) for rich content with React components
- Use Markdown (`.md`) for simple text-only documentation
- Follow Docusaurus conventions for code blocks, admonitions, and tabs
- Keep images in `docs/img/` and reference them with relative paths
