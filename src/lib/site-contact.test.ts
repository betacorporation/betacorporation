import { describe, expect, it } from "vitest";
import { BRAND, EMAIL, PHONE_TEL, SOCIALS, WHATSAPP_URL } from "./site-contact";

describe("business contact details", () => {
  it("uses the Beta Corporation name", () => expect(BRAND).toBe("Beta Corporation"));
  it("calls and WhatsApps +254729683696", () => {
    expect(PHONE_TEL).toBe("tel:+254729683696");
    expect(WHATSAPP_URL).toBe("https://wa.me/254729683696");
  });
  it("emails beta.corporation11@gmail.com", () => expect(EMAIL).toBe("beta.corporation11@gmail.com"));
  it("lists the right social handles", () => {
    const byNetwork = Object.fromEntries(SOCIALS.map(s => [s.network, s.handle]));
    expect(byNetwork).toEqual({ Instagram: "@_ombaye_jr", TikTok: "@joshua_lee_2541", X: "@Josh_Lee_2541", Facebook: "Jøsh Lêê", LinkedIn: "Coming soon" });
  });
});
