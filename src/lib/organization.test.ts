import { describe, expect, it } from "vitest";
import { BRAND, SITE_URL } from "./site-contact";
import { SITE_ORIGIN } from "./canonical";
import { organizationJsonLd } from "./organization";

describe("business details search engines read", () => {
  it("names the organization Beta Corporation, not the host", () => {
    const graph = organizationJsonLd()["@graph"];
    const organization = graph.find(node => node["@type"] === "Organization");
    const website = graph.find(node => node["@type"] === "WebSite");
    expect(organization?.name).toBe("Beta Corporation");
    expect(website?.name).toBe("Beta Corporation");
  });

  it("uses the GitHub Pages address everywhere the site is named", () => {
    expect(SITE_URL).toBe(SITE_ORIGIN);
    expect(SITE_URL).toBe("https://betacorporation.github.io");
    expect(organizationJsonLd()["@graph"][0]?.url).toBe("https://betacorporation.github.io/");
  });

  it("keeps the brand name consistent", () => {
    expect(BRAND).toBe("Beta Corporation");
  });
});
