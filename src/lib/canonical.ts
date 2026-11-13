// The site's main public address. Canonical links and the sitemap both point here,
// so Google treats this address as the one to rank (not the Lovable copy).
export const SITE_ORIGIN = "https://betacorporation.github.io";

// GitHub Pages serves every page as /path/, so the canonical address always ends with "/".
export function canonicalUrl(pathname: string): string {
  const clean = (pathname.split(/[?#]/)[0] || "/").replace(/\/{2,}/g, "/");
  const withSlash = clean.endsWith("/") ? clean : `${clean}/`;
  return `${SITE_ORIGIN}${withSlash.startsWith("/") ? withSlash : `/${withSlash}`}`;
}
