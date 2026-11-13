import { describe, expect, it } from "vitest";
import { canonicalUrl } from "./canonical";

describe("canonicalUrl", () => {
  it("points the homepage at the GitHub address", () => {
    expect(canonicalUrl("/")).toBe("https://betacorporation.github.io/");
  });
  it("adds the trailing slash GitHub Pages uses", () => {
    expect(canonicalUrl("/about")).toBe("https://betacorporation.github.io/about/");
  });
  it("keeps an existing trailing slash and drops query strings", () => {
    expect(canonicalUrl("/portfolio/astros-mining/?ref=x")).toBe("https://betacorporation.github.io/portfolio/astros-mining/");
  });
});
