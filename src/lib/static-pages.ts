// Every concrete URL of the site, used to export it as plain files for GitHub Pages.
import { BLOG_POSTS } from "@/lib/content/blog";
import { PORTFOLIO_PROJECTS } from "@/lib/content/portfolio";
import { SERVICE_CATEGORIES } from "@/lib/content/services";

export const FIXED_PAGES = [
  "/", "/about", "/contact", "/portfolio", "/pricing", "/websites", "/printing", "/solutions", "/industries",
  "/products", "/chamabox", "/elitehost", "/hr-system", "/frostwoodcrm", "/partners", "/blog", "/privacy",
  "/terms", "/account", "/services",
];

export function staticPagePaths(): string[] {
  return [
    ...FIXED_PAGES,
    ...PORTFOLIO_PROJECTS.map(project => `/portfolio/${project.slug}`),
    ...BLOG_POSTS.map(post => `/blog/${post.slug}`),
    ...SERVICE_CATEGORIES.flatMap(category => [
      `/services/${category.slug}`,
      ...category.services.map(service => `/services/${category.slug}/${service.slug}`),
    ]),
  ];
}
