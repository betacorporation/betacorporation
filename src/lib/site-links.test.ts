import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { PORTFOLIO_PROJECTS } from "@/lib/content/portfolio";
import { SERVICE_CATEGORIES } from "@/lib/content/services";

const routeTree = readFileSync("src/routeTree.gen.ts", "utf8");
const staticPaths = new Set([...routeTree.matchAll(/fullPath: '([^']+)'/g)].map(match => match[1].replace(/\/$/, "") || "/"));

function resolves(path: string) {
  if (staticPaths.has(path)) return true;
  const portfolio = path.match(/^\/portfolio\/([^/]+)$/);
  if (portfolio) return PORTFOLIO_PROJECTS.some(project => project.slug === portfolio[1]);
  const service = path.match(/^\/services\/([^/]+)(?:\/([^/]+))?$/);
  if (service) {
    const category = SERVICE_CATEGORIES.find(item => item.slug === service[1]);
    return Boolean(category && (!service[2] || category.services.some(item => item.slug === service[2])));
  }
  return false;
}

describe("site links", () => {
  it("every menu and footer link opens a real page", () => {
    const chrome = readFileSync("src/components/site/SiteChrome.tsx", "utf8");
    const links = [...chrome.matchAll(/href[=:] ?\{?"(\/[^"#?]*)"/g)].map(match => match[1]).filter(path => path !== "/favicon.png" && !path.startsWith("/site-assets"));
    expect(links.length).toBeGreaterThan(10);
    expect(links.filter(path => !resolves(path))).toEqual([]);
  });

  it("every portfolio card links to an existing case study", () => {
    const portfolio = readFileSync("src/routes/portfolio.tsx", "utf8");
    const slugs = [...portfolio.matchAll(/href="\/portfolio\/([^"]+)"/g)].map(match => match[1]);
    expect(slugs.length).toBeGreaterThan(0);
    expect(slugs.filter(slug => !resolves(`/portfolio/${slug}`))).toEqual([]);
  });
});
