// Single source of truth for the business's public contact details.
export const BRAND = "Beta Corporation";
export const SITE_URL = "https://betacorporation.lovable.app";
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
