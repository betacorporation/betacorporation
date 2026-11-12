import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { staticPagePaths } from "@/lib/static-pages";

describe("GitHub Pages export", () => {
  it("includes every fixed page of the site", () => {
    const routeTree = readFileSync("src/routeTree.gen.ts", "utf8");
    const fixed = [...routeTree.matchAll(/fullPath: '([^']+)'/g)]
      .map(match => (match[1] ?? "").replace(/\/$/, "") || "/")
      .filter(path => !path.includes("$"));
    const exported = new Set(staticPagePaths());
    expect(fixed.length).toBeGreaterThan(15);
    expect(fixed.filter(path => !exported.has(path))).toEqual([]);
  });

  it("includes each portfolio project, blog post and service page", () => {
    const paths = staticPagePaths();
    expect(paths).toContain("/portfolio/astros-mining");
    expect(paths).toContain("/blog/social-media-tips-for-small-businesses");
    expect(paths).toContain("/services/web-development/website-redesign");
    expect(new Set(paths).size).toBe(paths.length);
  });
});
