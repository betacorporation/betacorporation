// Writes the list of pages to export for GitHub Pages (run with bun before `GITHUB_PAGES=true vite build`).
import { writeFileSync } from "node:fs";
import { staticPagePaths } from "../src/lib/static-pages";

const paths = [...new Set(staticPagePaths())];
writeFileSync(".github-pages-paths.json", JSON.stringify(paths, null, 2));
console.log(`Listed ${paths.length} pages for GitHub Pages.`);
