import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { BLOG_POSTS } from "@/lib/content/blog";
import { PORTFOLIO_PROJECTS } from "@/lib/content/portfolio";
import { SERVICE_CATEGORIES } from "@/lib/content/services";
import { isSitemapRouteIncluded, sitemapPathForLocation, sitemapStaticPaths, sitemapXML, type SitemapEntry } from "@/lib/sitemap";

// Public site origin. The GitHub Pages export sets SITE_URL to its own address (see .github/workflows/github-pages.yml).
const DEFAULT_BASE_URL = "https://betacorporation.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const siteUrl = typeof process !== "undefined" ? process.env["SITE_URL"] : undefined;
        const baseUrl = siteUrl || DEFAULT_BASE_URL;
        // GitHub Pages serves every page as /path/, so list that final address there.
        const trailingSlash = import.meta.env["VITE_GITHUB_PAGES"] === "true";

        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map(path => ({ path }));

        const addDynamic = (routeId: string, to: string, items: { params: Record<string, string>; lastmod?: string }[]) => {
          if (!isSitemapRouteIncluded(router.routesById[routeId])) return;
          for (const item of items) {
            const location = router.buildLocation({ to, params: item.params, search: () => ({}), hash: "" } as never);
            const path = sitemapPathForLocation(router, location, routeId);
            if (path) entries.push({ path, lastmod: item.lastmod });
          }
        };
        addDynamic("/portfolio_/$slug", "/portfolio/$slug", PORTFOLIO_PROJECTS.map(project => ({ params: { slug: project.slug } })));
        addDynamic("/blog/$slug", "/blog/$slug", BLOG_POSTS.map(post => ({ params: { slug: post.slug }, lastmod: post.date })));
        addDynamic("/services/$category/", "/services/$category", SERVICE_CATEGORIES.map(category => ({ params: { category: category.slug } })));
        addDynamic(
          "/services/$category/$service",
          "/services/$category/$service",
          SERVICE_CATEGORIES.flatMap(category => category.services.map(service => ({ params: { category: category.slug, service: service.slug } }))),
        );

        if (entries.length === 0) {
          return new Response(
            'No pages are included in this sitemap. Check route decisions and ancestor exclusions. Setting "exclude-subtree" on the root excludes the entire site.',
            { status: 404, headers: { "Cache-Control": "no-store" } },
          );
        }
        const finalEntries = trailingSlash
          ? entries.map(entry => ({ ...entry, path: entry.path === "/" || entry.path.endsWith("/") ? entry.path : `${entry.path}/` }))
          : entries;
        return new Response(sitemapXML(baseUrl, finalEntries), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
