// Single source of truth for the business's public contact details.
export const BRAND = "Beta Corporation";
// The GitHub Pages address is the site's main address (see src/lib/canonical.ts), so anything
// that tells a person or an AI where to find us points there, never at the Lovable copy.
export const SITE_URL = SITE_ORIGIN;
export const CONTACT_PERSON = "Jøsh Lêê";
export const PHONE_DISPLAY = "+254 729 683 696";
export const PHONE_TEL = "tel:+254729683696";
export const WHATSAPP_URL = "https://wa.me/254729683696";
export const EMAIL = "beta.corporation11@gmail.com";
export const LOCATION = "Kenya";

export type SocialNetwork = "Instagram" | "TikTok" | "X" | "Facebook" | "LinkedIn";
export type SocialLink = { network: SocialNetwork; handle: string; href: string | null };

export const SOCIALS: SocialLink[] = [
  { network: "Instagram", handle: "@_ombaye_jr", href: "https://www.instagram.com/_ombaye_jr" },
  { network: "TikTok", handle: "@joshua_lee_2541", href: "https://www.tiktok.com/@joshua_lee_2541" },
  { network: "X", handle: "@Josh_Lee_2541", href: "https://x.com/Josh_Lee_2541" },
  { network: "Facebook", handle: "Jøsh Lêê", href: "https://www.facebook.com/search/top?q=J%C3%B8sh%20L%C3%AA%C3%AA" },
  { network: "LinkedIn", handle: "Coming soon", href: null },
];

/** WhatsApp chat link with a ready-written opening message. */
export function whatsappLink(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
