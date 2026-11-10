import { useEffect, useRef, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { BRAND, CONTACT_PERSON, EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_URL, SOCIALS, WHATSAPP_URL, type SocialNetwork } from "@/lib/site-contact";

// Shared header, footer and floating widgets for every imported page.
// Base styling comes from each page's captured stylesheet; widget extras live in CHROME_CSS.

const MOBILE_NAV_GROUPS = [
  { title: "Main", links: [{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Partners", href: "/partners" }, { label: "Portfolio", href: "/portfolio" }, { label: "Blog", href: "/blog" }, { label: "Pricing", href: "/pricing" }, { label: "Contact", href: "/contact" }] },
  { title: "Services", links: [{ label: "All Services", href: "/services" }, { label: "Web Development", href: "/services/web-development" }, { label: "Digital Marketing", href: "/services/digital-marketing" }, { label: "Creative Services", href: "/services/btl-media-creative" }, { label: "Print & Publications", href: "/printing" }, { label: "Website Packages", href: "/websites" }, { label: "Domain Registration", href: "https://elitehost.co.ke/" }] },
  { title: "Products", links: [{ label: "ChamaBox", href: "/chamabox" }, { label: "Beta Hosting", href: "/elitehost" }, { label: "Beta HRIS", href: "/hr-system" }, { label: "Frostwood CRM", href: "/frostwoodcrm" }, { label: "Industries", href: "/industries" }, { label: "Solutions", href: "/solutions" }, { label: "Products", href: "/products" }] },
];

const CHROME_CSS = `
@keyframes float-up { from { opacity: 0; transform: translateY(16px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
@keyframes shimmer { 0% { background-position: 200% center; } 100% { background-position: -200% center; } }
@keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
@keyframes ring-pulse { 0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.6); } 70% { box-shadow: 0 0 0 8px rgba(34,197,94,0); } 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); } }
.chat-panel { animation: 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal forwards running float-up; }
.shimmer-text { background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 40%, rgba(255, 255, 255, 0.6) 50%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 100%) 0% 0% / 200% auto; -webkit-background-clip: text; background-clip: text; animation: 3s ease-in-out 0s infinite normal none running shimmer; }
.gradient-border { background: linear-gradient(135deg, rgb(43, 1, 239), rgb(37, 211, 102), rgb(37, 150, 190), rgb(43, 1, 239)) 0% 0% / 300% 300%; animation: 6s ease 0s infinite normal none running gradient-shift; }
`;

const SOCIAL_ICON_PATHS: Record<SocialNetwork, string> = {
  Facebook: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  X: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  Instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  LinkedIn: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  TikTok: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
};

export function SocialIcon({ network, className = "h-4 w-4" }: { network: SocialNetwork; className?: string }) {
  return <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d={SOCIAL_ICON_PATHS[network]} /></svg>;
}

const CHATGPT_ABOUT_HREF = `https://chatgpt.com/?q=${encodeURIComponent(`Tell me about ${BRAND} (${SITE_URL}). What web design and digital services do they offer, and why should a business hire them?`)}`;

export function SiteHeader() {
  const pathname = useLocation({ select: location => location.pathname });
  const [openMenu0, setOpenMenu0] = useState(null as string | null);
  const menuRoot0 = useRef<Element | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuTrigger = useRef<HTMLButtonElement | null>(null);
  const mobileMenuClose = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (!mobileMenuOpen) return;
    mobileMenuClose.current?.focus();
    const trigger = mobileMenuTrigger.current;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setMobileMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prevOverflow; trigger?.focus(); };
  }, [mobileMenuOpen]);
  useEffect(() => {
    if (!openMenu0) return;
    const closeOutside = (event: MouseEvent) => {
      if (event.target instanceof Node && ![menuRoot0.current].some(root => root?.contains(event.target as Node))) setOpenMenu0(null);
    };
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpenMenu0(null); };
    document.addEventListener("click", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => { document.removeEventListener("click", closeOutside); document.removeEventListener("keydown", closeOnEscape); };
  }, [openMenu0]);
  return (
    <>
      <header className={"\x62g-background/\x380 \x62ackdrop-blur-md \x73ticky top-0 \x62order-b \x62order-border/\x350 [&]:sticky [z-index:50]"} ref={node => { menuRoot0.current = node; }}>
        <div className={"\x63ontainer \x6dx-auto \x70x-4 [width:100%]"}>
          <div className={"flex items-center h-16 \x6dd:\x68-[\x368px] [&]:justify-between"}>
            <a className="flex items-center shrink-0" href="/">
              <img className="rounded-md" style={{ color: "transparent" }} alt="Beta Corporation Logo" width="160" height="28" decoding="async" data-nimg="1" src="/site-assets/beta-corporation-logo.png" />
            </a>
            <div className={"hidden \x6cg:\x66lex items-center [gap:0.25rem]"}>
              <nav className={"flex items-center justify-center [&]:flex-1 [&]:relative [max-width:max-content] [z-index:10]"} aria-label="Main" dir="ltr" onMouseLeave={() => setOpenMenu0(null)}>
                <div style={{ position: "relative" }}>
                  <ul className={"group flex list-none items-center justify-center \x73pace-x-1 [&]:flex-1"} dir="ltr">
                    <li>
                      <button className={"group inline-flex h-10 w-max items-center justify-center rounded-md aria-[current=page]:text-[hsl(var(--primary))]! aria-[current=page]:font-semibold! \x62g-background \x70x-4 \x70y-2 \x66ont-medium transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground \x66ocus:\x6futline-none disabled:opacity-50 \x64ata-[\x61ctive]:\x62g-accent/\x350 \x64ata-[\x73tate=\x6fpen]:\x62g-accent/\x350 group \x74ext-sm [&:disabled]:pointer-events-none"} aria-expanded={openMenu0 === "observed-0"} onMouseEnter={() => setOpenMenu0("observed-0")} onClick={event => { event.preventDefault(); event.stopPropagation(); setOpenMenu0(open => open === "observed-0" ? null : "observed-0"); }} data-state={openMenu0 === "observed-0" ? "open" : "closed"} id="radix-«R12db»-trigger-radix-«Rn2db»" aria-controls="radix-«R12db»-content-radix-«Rn2db»">Services{" "}<svg className={"ml-1 h-3 \x74ransition \x64uration-200 \x67roup-data-[\x73tate=\x6fpen]:\x72otate-180 [&]:relative [animation-duration:0.2s] [top:1px] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] [width:0.75rem]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></button>
                    </li>
                    <li>
                      <button className={"group inline-flex h-10 w-max items-center justify-center rounded-md aria-[current=page]:text-[hsl(var(--primary))]! aria-[current=page]:font-semibold! \x62g-background \x70x-4 \x70y-2 \x66ont-medium transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground \x66ocus:\x6futline-none disabled:opacity-50 \x64ata-[\x61ctive]:\x62g-accent/\x350 \x64ata-[\x73tate=\x6fpen]:\x62g-accent/\x350 group \x74ext-sm [&:disabled]:pointer-events-none"} aria-expanded={openMenu0 === "observed-1"} onMouseEnter={() => setOpenMenu0("observed-1")} onClick={event => { event.preventDefault(); event.stopPropagation(); setOpenMenu0(open => open === "observed-1" ? null : "observed-1"); }} data-state={openMenu0 === "observed-1" ? "open" : "closed"} id="radix-«R12db»-trigger-radix-«R172db»" aria-controls="radix-«R12db»-content-radix-«R172db»">Products{" "}<svg className={"ml-1 h-3 \x74ransition \x64uration-200 \x67roup-data-[\x73tate=\x6fpen]:\x72otate-180 [&]:relative [animation-duration:0.2s] [top:1px] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] [width:0.75rem]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></button>
                    </li>
                    <li>
                      <a className={"group inline-flex h-10 w-max items-center justify-center rounded-md aria-[current=page]:text-[hsl(var(--primary))]! aria-[current=page]:font-semibold! \x62g-background \x70x-4 \x70y-2 \x66ont-medium transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground \x66ocus:\x6futline-none disabled:opacity-50 \x64ata-[\x61ctive]:\x62g-accent/\x350 \x64ata-[\x73tate=\x6fpen]:\x62g-accent/\x350 \x74ext-sm [&:disabled]:pointer-events-none"} href="/websites" aria-current={pathname === "/websites" ? "page" : undefined}>Websites</a>
                    </li>
                    <li>
                      <a className={"group inline-flex h-10 w-max items-center justify-center rounded-md aria-[current=page]:text-[hsl(var(--primary))]! aria-[current=page]:font-semibold! \x62g-background \x70x-4 \x70y-2 \x66ont-medium transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground \x66ocus:\x6futline-none disabled:opacity-50 \x64ata-[\x61ctive]:\x62g-accent/\x350 \x64ata-[\x73tate=\x6fpen]:\x62g-accent/\x350 \x74ext-sm [&:disabled]:pointer-events-none"} href="/contact">Domains</a>
                    </li>
                    <li>
                      <a className={"group inline-flex h-10 w-max items-center justify-center rounded-md aria-[current=page]:text-[hsl(var(--primary))]! aria-[current=page]:font-semibold! \x62g-background \x70x-4 \x70y-2 \x66ont-medium transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground \x66ocus:\x6futline-none disabled:opacity-50 \x64ata-[\x61ctive]:\x62g-accent/\x350 \x64ata-[\x73tate=\x6fpen]:\x62g-accent/\x350 \x74ext-sm [&:disabled]:pointer-events-none"} href="/portfolio" aria-current={pathname === "/portfolio" ? "page" : undefined}>Portfolio</a>
                    </li>
                    <li>
                      <a className={"group inline-flex h-10 w-max items-center justify-center rounded-md aria-[current=page]:text-[hsl(var(--primary))]! aria-[current=page]:font-semibold! \x62g-background \x70x-4 \x70y-2 \x66ont-medium transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground \x66ocus:\x6futline-none disabled:opacity-50 \x64ata-[\x61ctive]:\x62g-accent/\x350 \x64ata-[\x73tate=\x6fpen]:\x62g-accent/\x350 \x74ext-sm [&:disabled]:pointer-events-none"} href="/about" aria-current={pathname === "/about" ? "page" : undefined}>About</a>
                    </li>
                    <li>
                      <a className={"group inline-flex h-10 w-max items-center justify-center rounded-md aria-[current=page]:text-[hsl(var(--primary))]! aria-[current=page]:font-semibold! \x62g-background \x70x-4 \x70y-2 \x66ont-medium transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground \x66ocus:\x6futline-none disabled:opacity-50 \x64ata-[\x61ctive]:\x62g-accent/\x350 \x64ata-[\x73tate=\x6fpen]:\x62g-accent/\x350 \x74ext-sm [&:disabled]:pointer-events-none"} href="/partners" aria-current={pathname === "/partners" ? "page" : undefined}>Partners</a>
                    </li>
                    <li>
                      <a className={"group inline-flex h-10 w-max items-center justify-center rounded-md aria-[current=page]:text-[hsl(var(--primary))]! aria-[current=page]:font-semibold! \x62g-background \x70x-4 \x70y-2 \x66ont-medium transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground \x66ocus:\x6futline-none disabled:opacity-50 \x64ata-[\x61ctive]:\x62g-accent/\x350 \x64ata-[\x73tate=\x6fpen]:\x62g-accent/\x350 \x74ext-sm [&:disabled]:pointer-events-none"} href="/blog" aria-current={pathname === "/blog" ? "page" : undefined}>Blog</a>
                    </li>
                    <li>
                      <a className={"group inline-flex h-10 w-max items-center justify-center rounded-md aria-[current=page]:text-[hsl(var(--primary))]! aria-[current=page]:font-semibold! \x62g-background \x70x-4 \x70y-2 \x66ont-medium transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground \x66ocus:\x6futline-none disabled:opacity-50 \x64ata-[\x61ctive]:\x62g-accent/\x350 \x64ata-[\x73tate=\x6fpen]:\x62g-accent/\x350 \x74ext-sm [&:disabled]:pointer-events-none"} href="/pricing" aria-current={pathname === "/pricing" ? "page" : undefined}>Pricing</a>
                    </li>
                    <li>
                      <a className={"group inline-flex h-10 w-max items-center justify-center rounded-md aria-[current=page]:text-[hsl(var(--primary))]! aria-[current=page]:font-semibold! \x62g-background \x70x-4 \x70y-2 \x66ont-medium transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground \x66ocus:\x6futline-none disabled:opacity-50 \x64ata-[\x61ctive]:\x62g-accent/\x350 \x64ata-[\x73tate=\x6fpen]:\x62g-accent/\x350 \x74ext-sm [&:disabled]:pointer-events-none"} href="/account" aria-current={pathname === "/account" ? "page" : undefined}>My Account</a>
                    </li>
                  </ul>
                </div>
                <div className={"left-0 flex justify-center [&]:absolute [top:100%]"}>
                  {openMenu0 && (
                    <div data-state="open" data-orientation="horizontal" className="origin-top-center relative mt-1.5 overflow-hidden rounded-md border bg-[hsl(var(--popover))] text-[hsl(var(--popover-foreground))] shadow-lg animate-in zoom-in-90" style={{ width: "520px", height: openMenu0 === "observed-0" ? "478px" : "566px" }}>
      <div className={"left-0 top-0 w-full \x64ata-[\x6dotion^=\x66rom-]:\x61nimate-in \x64ata-[\x6dotion^=\x74o-]:\x61nimate-out \x64ata-[\x6dotion^=\x66rom-]:\x66ade-in \x64ata-[\x6dotion^=\x74o-]:\x66ade-out \x64ata-[\x6dotion=\x66rom-end]:\x73lide-in-from-right-52 \x64ata-[\x6dotion=\x66rom-start]:\x73lide-in-from-left-52 \x64ata-[\x6dotion=\x74o-end]:\x73lide-out-to-right-52 \x64ata-[\x6dotion=\x74o-start]:\x73lide-out-to-left-52 \x6dd:\x61bsolute \x6dd:\x77-auto"} aria-hidden={openMenu0 === "observed-0" ? undefined : (undefined)} data-state={openMenu0 === "observed-0" ? undefined : (undefined)} hidden={openMenu0 === "observed-0" ? undefined : (true)} inert={openMenu0 === "observed-0" ? undefined : (false)} {...{ open: (openMenu0 === "observed-0" ? undefined : (false)) ? "" : undefined }} style={openMenu0 === "observed-0" ? {} : ({ display: "none" })} id="radix-«R12db»-content-radix-«Rn2db»" aria-labelledby="radix-«R12db»-trigger-radix-«Rn2db»" dir="ltr" data-site-import-observed-popup="">
        <div className="w-[520px] p-4">
          <ul className="grid grid-cols-1 gap-2">
            <li>
              <a className={"flex items-start gap-3 select-none rounded-lg p-3 \x6ceading-none no-underline \x6futline-none transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground"} href="/printing">
                <span className={"flex items-center justify-center w-9 h-9 rounded-lg \x62g-primary/\x310 text-primary shrink-0 mt-0.5"}>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
                    <rect x="6" y="14" width="12" height="8" rx="1" />
                  </svg>
                </span>
                <div className={"\x73pace-y-1"}>
                  <div className={"\x74ext-sm \x66ont-medium \x6ceading-none"}>Print &amp; Publications</div>
                  <p className={"\x74ext-xs \x6ceading-snug text-muted-foreground \x6cine-clamp-2"}>Books, manuals, booklets, annual reports &amp; policy documents with live price estimator.</p>
                </div>
              </a>
            </li>
            <li>
              <a className={"flex items-start gap-3 select-none rounded-lg p-3 \x6ceading-none no-underline \x6futline-none transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground"} href="/services/web-development">
                <span className={"flex items-center justify-center w-9 h-9 rounded-lg \x62g-primary/\x310 text-primary shrink-0 mt-0.5"}>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </span>
                <div className={"\x73pace-y-1"}>
                  <div className={"\x74ext-sm \x66ont-medium \x6ceading-none"}>Web Development</div>
                  <p className={"\x74ext-xs \x6ceading-snug text-muted-foreground \x6cine-clamp-2"}>Custom websites, eCommerce stores, and platforms built for performance.</p>
                </div>
              </a>
            </li>
            <li>
              <a className={"flex items-start gap-3 select-none rounded-lg p-3 \x6ceading-none no-underline \x6futline-none transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground"} href="/services/digital-marketing">
                <span className={"flex items-center justify-center w-9 h-9 rounded-lg \x62g-primary/\x310 text-primary shrink-0 mt-0.5"}>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" x2="12" y1="20" y2="10" />
                    <line x1="18" x2="18" y1="20" y2="4" />
                    <line x1="6" x2="6" y1="20" y2="16" />
                  </svg>
                </span>
                <div className={"\x73pace-y-1"}>
                  <div className={"\x74ext-sm \x66ont-medium \x6ceading-none"}>Digital Marketing</div>
                  <p className={"\x74ext-xs \x6ceading-snug text-muted-foreground \x6cine-clamp-2"}>SEO, PPC, and social media strategies to boost your visibility.</p>
                </div>
              </a>
            </li>
            <li>
              <a className={"flex items-start gap-3 select-none rounded-lg p-3 \x6ceading-none no-underline \x6futline-none transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground"} href="/services/btl-media-creative">
                <span className={"flex items-center justify-center w-9 h-9 rounded-lg \x62g-primary/\x310 text-primary shrink-0 mt-0.5"}>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m14.622 17.897-10.68-2.913" />
                    <path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z" />
                    <path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15" />
                  </svg>
                </span>
                <div className={"\x73pace-y-1"}>
                  <div className={"\x74ext-sm \x66ont-medium \x6ceading-none"}>Creative Services</div>
                  <p className={"\x74ext-xs \x6ceading-snug text-muted-foreground \x6cine-clamp-2"}>Graphic design, UI/UX, and branding that tells your story.</p>
                </div>
              </a>
            </li>
            <li>
              <a className={"flex items-start gap-3 select-none rounded-lg p-3 \x6ceading-none no-underline \x6futline-none transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground"} href="/contact">
                <span className={"flex items-center justify-center w-9 h-9 rounded-lg \x62g-primary/\x310 text-primary shrink-0 mt-0.5"}>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                    <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
                    <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </span>
                <div className={"\x73pace-y-1"}>
                  <div className={"\x74ext-sm \x66ont-medium \x6ceading-none"}>Domain Registration</div>
                  <p className={"\x74ext-xs \x6ceading-snug text-muted-foreground \x6cine-clamp-2"}>Register .co.ke, .ke, .com and 25+ extensions with hosting and email — — handled for you by our team.</p>
                </div>
              </a>
            </li>
          </ul>
          <div className={"mt-3 pt-3 \x62order-t"}>
            <a className={"group flex items-center gap-2 rounded-md \x70x-3 \x70y-2.\x35 \x74ext-sm \x66ont-medium text-primary \x68over:\x62g-primary/\x35 transition-colors"} href="/services">Explore All Services<svg className={"h-3.5 w-3.5 \x74ransition-transform \x67roup-hover:\x74ranslate-x-0.\x35"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
          </div>
        </div>
      </div>
      <div className={"left-0 top-0 w-full \x64ata-[\x6dotion^=\x66rom-]:\x61nimate-in \x64ata-[\x6dotion^=\x74o-]:\x61nimate-out \x64ata-[\x6dotion^=\x66rom-]:\x66ade-in \x64ata-[\x6dotion^=\x74o-]:\x66ade-out \x64ata-[\x6dotion=\x66rom-end]:\x73lide-in-from-right-52 \x64ata-[\x6dotion=\x66rom-start]:\x73lide-in-from-left-52 \x64ata-[\x6dotion=\x74o-end]:\x73lide-out-to-right-52 \x64ata-[\x6dotion=\x74o-start]:\x73lide-out-to-left-52 \x6dd:\x61bsolute \x6dd:\x77-auto"} aria-hidden={openMenu0 === "observed-1" ? undefined : (undefined)} data-state={openMenu0 === "observed-1" ? undefined : (undefined)} hidden={openMenu0 === "observed-1" ? undefined : (true)} inert={openMenu0 === "observed-1" ? undefined : (false)} {...{ open: (openMenu0 === "observed-1" ? undefined : (false)) ? "" : undefined }} style={openMenu0 === "observed-1" ? {} : ({ display: "none" })} id="radix-«R12db»-content-radix-«R172db»" aria-labelledby="radix-«R12db»-trigger-radix-«R172db»" dir="ltr" data-site-import-observed-popup="">
        <div className="w-[520px] p-4">
          <ul className="grid grid-cols-1 gap-2">
            <li>
              <a className={"flex items-start gap-3 select-none rounded-lg p-3 \x6ceading-none no-underline \x6futline-none transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground"} href="/chamabox">
                <span className={"flex items-center justify-center w-9 h-9 rounded-lg \x62g-primary/\x310 text-primary shrink-0 mt-0.5"}>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    <path d="m3.3 7 8.7 5 8.7-5" />
                    <path d="M12 22V12" />
                  </svg>
                </span>
                <div className={"\x73pace-y-1"}>
                  <div className={"\x74ext-sm \x66ont-medium \x6ceading-none"}>ChamaBox</div>
                  <p className={"\x74ext-xs \x6ceading-snug text-muted-foreground \x6cine-clamp-2"}>Our flagship SaaS for chama and investment group management in Kenya.</p>
                </div>
              </a>
            </li>
            <li>
              <a className={"flex items-start gap-3 select-none rounded-lg p-3 \x6ceading-none no-underline \x6futline-none transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground"} href="/elitehost">
                <span className={"flex items-center justify-center w-9 h-9 rounded-lg \x62g-primary/\x310 text-primary shrink-0 mt-0.5"}>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                    <line x1="6" x2="6.01" y1="6" y2="6" />
                    <line x1="6" x2="6.01" y1="18" y2="18" />
                  </svg>
                </span>
                <div className={"\x73pace-y-1"}>
                  <div className={"\x74ext-sm \x66ont-medium \x6ceading-none"}>Beta Hosting</div>
                  <p className={"\x74ext-xs \x6ceading-snug text-muted-foreground \x6cine-clamp-2"}>Our sister hosting company — client login, domain search and web hosting.</p>
                </div>
              </a>
            </li>
            <li>
              <a className={"flex items-start gap-3 select-none rounded-lg p-3 \x6ceading-none no-underline \x6futline-none transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground"} href="/hr-system">
                <span className={"flex items-center justify-center w-9 h-9 rounded-lg \x62g-primary/\x310 text-primary shrink-0 mt-0.5"}>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                <div className={"\x73pace-y-1"}>
                  <div className={"\x74ext-sm \x66ont-medium \x6ceading-none"}>Beta HRIS</div>
                  <p className={"\x74ext-xs \x6ceading-snug text-muted-foreground \x6cine-clamp-2"}>White-label HR system — 14 modules from recruitment to exit. Try the live demo.</p>
                </div>
              </a>
            </li>
            <li>
              <a className={"flex items-start gap-3 select-none rounded-lg p-3 \x6ceading-none no-underline \x6futline-none transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground"} href="/frostwoodcrm">
                <span className={"flex items-center justify-center w-9 h-9 rounded-lg \x62g-primary/\x310 text-primary shrink-0 mt-0.5"}>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m10 20-1.25-2.5L6 18" />
                    <path d="M10 4 8.75 6.5 6 6" />
                    <path d="m14 20 1.25-2.5L18 18" />
                    <path d="m14 4 1.25 2.5L18 6" />
                    <path d="m17 21-3-6h-4" />
                    <path d="m17 3-3 6 1.5 3" />
                    <path d="M2 12h6.5L10 9" />
                    <path d="m20 10-1.5 2 1.5 2" />
                    <path d="M22 12h-6.5L14 15" />
                    <path d="m4 10 1.5 2L4 14" />
                    <path d="m7 21 3-6-1.5-3" />
                    <path d="m7 3 3 6h4" />
                  </svg>
                </span>
                <div className={"\x73pace-y-1"}>
                  <div className={"\x74ext-sm \x66ont-medium \x6ceading-none"}>Frostwood CRM</div>
                  <p className={"\x74ext-xs \x6ceading-snug text-muted-foreground \x6cine-clamp-2"}>Our CRM, invoicing and M-Pesa payments platform for growing businesses.</p>
                </div>
              </a>
            </li>
            <li>
              <a className={"flex items-start gap-3 select-none rounded-lg p-3 \x6ceading-none no-underline \x6futline-none transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground"} href="/industries">
                <span className={"flex items-center justify-center w-9 h-9 rounded-lg \x62g-primary/\x310 text-primary shrink-0 mt-0.5"}>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                    <path d="M10 6h4" />
                    <path d="M10 10h4" />
                    <path d="M10 14h4" />
                    <path d="M10 18h4" />
                  </svg>
                </span>
                <div className={"\x73pace-y-1"}>
                  <div className={"\x74ext-sm \x66ont-medium \x6ceading-none"}>Industries</div>
                  <p className={"\x74ext-xs \x6ceading-snug text-muted-foreground \x6cine-clamp-2"}>Tailored digital solutions for 18+ industries across Kenya.</p>
                </div>
              </a>
            </li>
            <li>
              <a className={"flex items-start gap-3 select-none rounded-lg p-3 \x6ceading-none no-underline \x6futline-none transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground"} href="/solutions">
                <span className={"flex items-center justify-center w-9 h-9 rounded-lg \x62g-primary/\x310 text-primary shrink-0 mt-0.5"}>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                </span>
                <div className={"\x73pace-y-1"}>
                  <div className={"\x74ext-sm \x66ont-medium \x6ceading-none"}>Solutions</div>
                  <p className={"\x74ext-xs \x6ceading-snug text-muted-foreground \x6cine-clamp-2"}>Service + business type packages designed for your niche.</p>
                </div>
              </a>
            </li>
            <li>
              <a className={"flex items-start gap-3 select-none rounded-lg p-3 \x6ceading-none no-underline \x6futline-none transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground"} href="/products">
                <span className={"flex items-center justify-center w-9 h-9 rounded-lg \x62g-primary/\x310 text-primary shrink-0 mt-0.5"}>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                </span>
                <div className={"\x73pace-y-1"}>
                  <div className={"\x74ext-sm \x66ont-medium \x6ceading-none"}>Products</div>
                  <p className={"\x74ext-xs \x6ceading-snug text-muted-foreground \x6cine-clamp-2"}>Ready-made digital products and growth packages.</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
                    </div>
                  )}
                </div>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <a className={"items-center justify-center gap-2 \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-9 rounded-md \x70x-3 hidden \x73m:\x69nline-flex \x74ext-xs [&]:whitespace-nowrap [&:disabled]:pointer-events-none"} href="/contact">Get a Quote</a>
              <div className={"\x6cg:\x68idden"}>
                <button ref={mobileMenuTrigger} aria-expanded={mobileMenuOpen} aria-haspopup="dialog" onClick={() => setMobileMenuOpen(true)} className={"inline-flex items-center justify-center gap-2 rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x68over:\x62g-accent \x68over:\x74ext-accent-foreground h-9 w-9 [&]:whitespace-nowrap [&:disabled]:pointer-events-none"} type="button" data-state={mobileMenuOpen ? "open" : "closed"}>
                  <svg className={"h-5 w-5 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                  <span className={"\x73r-only [&]:absolute [&]:whitespace-nowrap [clip:rect(0px,0px,0px,0px)] [overflow:hidden] [padding:0px] [width:1px]"}>Open menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/80 animate-in fade-in-0" data-state="open" aria-hidden="true" onClick={() => setMobileMenuOpen(false)} />
          <div role="dialog" aria-modal="true" aria-labelledby="mobile-nav-title" data-state="open" className="fixed z-50 gap-4 bg-background shadow-lg transition ease-in-out animate-in slide-in-from-right duration-500 inset-y-0 right-0 h-full border-l sm:max-w-sm w-[300px] sm:w-[340px] p-0" tabIndex={-1}>
            <h2 id="mobile-nav-title" className="text-lg font-semibold text-foreground sr-only">Navigation Menu</h2>
            <div className="relative overflow-hidden h-full">
              <div className="h-full w-full rounded-[inherit] overflow-y-auto [scrollbar-width:none]">
                <div className="flex flex-col min-h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <a href="/"><img alt="Beta Corporation Logo" width="120" height="21" decoding="async" src="/site-assets/beta-corporation-logo.png" style={{ color: "transparent" }} /></a>
                  </div>
                  <div className="p-4 space-y-6">
                    {MOBILE_NAV_GROUPS.map(group => (
                      <div key={group.title}>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3!">{group.title}</p>
                        <div className="space-y-1">
                          {group.links.map(link => (
                            <a key={link.href + link.label} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${link.href === pathname ? "bg-primary/10 text-primary" : "text-foreground/70 hover:bg-muted hover:text-foreground"}`} href={link.href} {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} onClick={() => setMobileMenuOpen(false)}>{link.label}</a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto p-4 border-t">
                    <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full" href="/contact">Get a Free Quote<svg className="size-4 shrink-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
                  </div>
                </div>
              </div>
            </div>
            <button ref={mobileMenuClose} type="button" className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" onClick={() => setMobileMenuOpen(false)}>
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              <span className="sr-only">Close</span>
            </button>
          </div>
        </>
      )}
    </>
  );
}

export function SiteOverlays() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatGptOpen, setChatGptOpen] = useState(false);
  const [chatGptProject, setChatGptProject] = useState("");
  const chatTrigger = useRef<HTMLButtonElement | null>(null);
  const chatClose = useRef<HTMLButtonElement | null>(null);
  const chatGptTrigger = useRef<HTMLButtonElement | null>(null);
  const chatGptClose = useRef<HTMLButtonElement | null>(null);
  const chatGptHref = `https://chatgpt.com/?q=${encodeURIComponent(chatGptProject.trim()
    ? `I want to build a website/system for: ${chatGptProject.trim()}. Would ${BRAND} (${SITE_URL}) be the right web design agency for this? What essential features should our platform include, and why should we choose them?`
    : `Tell me about ${BRAND} (${SITE_URL}). What web design and digital services do they offer, and why should a business hire them?`)}`;
  useEffect(() => {
    if (!chatOpen) return;
    chatClose.current?.focus();
    const trigger = chatTrigger;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setChatOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); window.setTimeout(() => trigger.current?.focus(), 0); };
  }, [chatOpen]);
  useEffect(() => {
    if (!chatGptOpen) return;
    chatGptClose.current?.focus();
    const trigger = chatGptTrigger.current;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setChatGptOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); trigger?.focus(); };
  }, [chatGptOpen]);
  const quoteClose = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    // Source opens the quote popup about 25 seconds after the page loads.
    const timer = window.setTimeout(() => setQuoteOpen(true), 25000);
    return () => window.clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (!quoteOpen) return;
    quoteClose.current?.focus();
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setQuoteOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [quoteOpen]);
  return (
    <>
      <style>{CHROME_CSS}</style>
      <div className={"[&]:fixed [bottom:1rem] [left:1rem] [z-index:50]"}>
        {chatOpen ? (
          <div className="chat-panel w-[340px]! sm:w-[380px]! overflow-hidden! rounded-3xl! shadow-[0_25px_60px_rgba(0,0,0,0.2)]! border! border-white/20!"><div className="gradient-border h-1!"></div><div className="relative! bg-gradient-to-r! from-[#2b01ef]! via-[#4318FF]! to-[#2596be]! px-5! py-4!"><div className="absolute! inset-0! bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%221%22%20cy%3D%221%22%20r%3D%221%22%20fill%3D%22rgba(255%2C255%2C255%2C0.07)%22%2F%3E%3C%2Fsvg%3E')]! opacity-60!"></div><div className="relative! flex! items-center! justify-between!"><div className="flex! items-center! gap-3!"><div className="flex! items-center! justify-center! w-10! h-10! rounded-xl! bg-white/15! backdrop-blur-sm!"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide! lucide-sparkles! h-5! w-5! text-white!"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /><path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" /></svg></div><div className=""><h3 className="shimmer-text text-white! font-bold! text-base! tracking-tight!">Let's Talk!</h3><p className="text-white/70! text-xs! mt-0.5!">We reply in minutes</p></div></div><button type="button" aria-label="Close chat" ref={chatClose} onClick={() => setChatOpen(false)} className="w-8! h-8! rounded-lg! bg-white/10! hover:bg-white/20! flex! items-center! justify-center! transition-all! hover:rotate-90! duration-300!"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide! lucide-x! h-4! w-4! text-white!"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg></button></div></div><div className="bg-gradient-to-b! from-gray-50! to-white! dark:from-gray-900! dark:to-gray-950! p-5! space-y-3!"><div className="bg-white! dark:bg-gray-800! rounded-2xl! rounded-tl-sm! px-4! py-3! shadow-sm! border! border-gray-100! dark:border-gray-700/50!"><p className="text-sm! text-foreground/80! leading-relaxed!">Hey there! 👋 Reach out to us directly on WhatsApp or start a live chat.</p></div><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group flex! items-center! gap-4! p-3.5! rounded-2xl! bg-white! dark:bg-gray-800! border! border-gray-100! dark:border-gray-700/50! shadow-sm! hover:shadow-md! hover:border-green-200! dark:hover:border-green-800! transition-all! duration-300! hover:-translate-y-0.5!"><div className="relative! shrink-0!"><div className="w-11! h-11! rounded-full! bg-gradient-to-br! from-green-400! to-green-600! flex! items-center! justify-center! shadow-md! group-hover:shadow-green-300/40! transition-shadow!"><svg className="h-5! w-5! text-white!" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg></div><span className="absolute! -bottom-0.5! -right-0.5! w-3.5! h-3.5! bg-green-500! rounded-full! border-2! border-white! dark:border-gray-800!" style={{ "animation": "2s ease 0s infinite normal none running ring-pulse" }}></span></div><div className="flex-1! min-w-0!"><span className="text-sm! font-semibold! text-foreground! block!">{CONTACT_PERSON}</span><span className="text-xs! text-muted-foreground!">Founder • Online</span></div><div className="shrink-0! w-8! h-8! rounded-lg! bg-green-50! dark:bg-green-950/30! flex! items-center! justify-center! group-hover:bg-green-100! dark:group-hover:bg-green-900/40! transition-colors!"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-4! h-4! text-green-600! transition-transform! group-hover:translate-x-0.5!"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" className="" /></svg></div></a><button type="button" className="w-full! flex! items-center! justify-center! gap-2! py-3! px-4! rounded-2xl! bg-gradient-to-r! from-[#2b01ef]! to-[#2596be]! text-white! font-semibold! text-sm! shadow-lg! hover:shadow-xl! hover:shadow-purple-500/20! transition-all! duration-300! hover:-translate-y-0.5! active:scale-[0.98]!"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide! lucide-message-circle! h-4! w-4!"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>Start Live Chat</button><p className="text-center! text-[10px]! text-muted-foreground/60! pt-1! tracking-wide! uppercase!">Typically replies within 5 minutes</p></div></div>
        ) : (
        <button ref={chatTrigger} type="button" aria-expanded={chatOpen} onClick={() => setChatOpen(true)} className={"group h-[62px] rounded-2xl \x62g-gradient-to-br \x66rom-[#\x32b01ef] \x74o-[#\x32596be] text-white \x73hadow-2xl transition-all \x64uration-300 \x68over:\x73cale-110 \x68over:\x73hadow-[\x30_8px_40px_rgba(\x343,\x31,\x3239,\x30.\x34)] \x61ctive:\x73cale-95 [&]:relative [&]:w-[62px] [animation-duration:0.3s]"} aria-label="Open chat">
          <div className={"rounded-2xl \x62g-white/\x310 opacity-0 \x67roup-hover:\x6fpacity-100 \x74ransition-opacity [&]:absolute [inset:0px] [transition-property:opacity]"} />
          <div className="flex items-center justify-center h-full">
            <svg className={"h-7 \x64rop-shadow-lg [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [width:1.75rem]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
          </div>
          <span className={"flex h-4 w-4 [&]:absolute [right:-0.25rem] [top:-0.25rem]"}>
            <span className={"\x61nimate-ping inline-flex h-full w-full rounded-full \x62g-green-400 opacity-75 [&]:absolute"} />
            <span className={"inline-flex rounded-full h-4 w-4 \x62g-green-500 \x62order-2 \x62order-white [&]:relative"} />
          </span>
        </button>
        )}
      </div>
      {quoteOpen && (
      <div className={"\x62g-black/\x360 flex items-center justify-center p-4 \x61nimate-fade-in-up [&]:fixed [inset:0px] [overflow-y:auto] [z-index:100]"} style={{ transform: "translateY(0px)", opacity: "1" }} role="dialog" aria-modal="true" aria-label="Request a quote" onClick={event => { if (event.target === event.currentTarget) setQuoteOpen(false); }}>
        <div className={"w-full \x6dy-8 \x62g-card rounded-2xl \x73hadow-2xl grid \x6dd:\x67rid-cols-2 [&]:relative [max-width:56rem] [overflow:hidden]"}>
          <button className={"h-9 w-9 rounded-full \x62g-background/\x380 \x68over:\x62g-background flex items-center justify-center transition-colors [&]:absolute [right:0.75rem] [top:0.75rem] [z-index:10]"} aria-label="Close" type="button" ref={quoteClose} onClick={() => setQuoteOpen(false)}>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          <div className={"hidden \x6dd:\x66lex flex-col \x62g-[#\x314121F] text-white [&]:justify-between [padding:2rem]"}>
            <div>
              <h2 className={"\x74ext-2xl \x6cg:\x74ext-3xl \x66ont-bold \x66ont-headline \x6ceading-tight"}>Tell us what you're building.<span className="block mt-1 [color:hsl(var(--accent))]">We'll make it smarter.</span></h2>
              <ul className={"mt-6 \x73pace-y-3"}>
                <li className={"flex items-start \x74ext-sm [color:rgba(255,255,255,0.8)] [gap:0.625rem]"}>
                  <svg className="h-4 w-4 shrink-0 mt-0.5 [color:hsl(var(--accent))]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>Shape your idea into a website that actually converts.</span>
                </li>
                <li className={"flex items-start \x74ext-sm [color:rgba(255,255,255,0.8)] [gap:0.625rem]"}>
                  <svg className="h-4 w-4 shrink-0 mt-0.5 [color:hsl(var(--accent))]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>Talk directly with our lead developer about your goals.</span>
                </li>
                <li className={"flex items-start \x74ext-sm [color:rgba(255,255,255,0.8)] [gap:0.625rem]"}>
                  <svg className="h-4 w-4 shrink-0 mt-0.5 [color:hsl(var(--accent))]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>Get a clear scope, timeline and price — no surprises.</span>
                </li>
                <li className={"flex items-start \x74ext-sm [color:rgba(255,255,255,0.8)] [gap:0.625rem]"}>
                  <svg className="h-4 w-4 shrink-0 mt-0.5 [color:hsl(var(--accent))]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>We help you pick the right package or a fully custom build.</span>
                </li>
                <li className={"flex items-start \x74ext-sm [color:rgba(255,255,255,0.8)] [gap:0.625rem]"}>
                  <svg className="h-4 w-4 shrink-0 mt-0.5 [color:hsl(var(--accent))]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>Receive a tailored quote within 24 hours — completely free.</span>
                </li>
              </ul>
            </div>
            <div className={"mt-8 \x62order-t \x62order-white/\x310 grid grid-cols-2 gap-4 [padding-top:1.5rem]"}>
              <div>
                <div className={"\x74ext-lg \x66ont-bold \x66ont-headline [color:hsl(var(--accent))]"}>4.9★</div>
                <div className={"text-[11px] [&]:uppercase [color:rgba(255,255,255,0.6)] [letter-spacing:0.025em]"}>Client Rating</div>
              </div>
              <div>
                <div className={"\x74ext-lg \x66ont-bold \x66ont-headline [color:hsl(var(--accent))]"}>300+</div>
                <div className={"text-[11px] [&]:uppercase [color:rgba(255,255,255,0.6)] [letter-spacing:0.025em]"}>Projects Delivered</div>
              </div>
              <div>
                <div className={"\x74ext-lg \x66ont-bold \x66ont-headline [color:hsl(var(--accent))]"}>100%</div>
                <div className={"text-[11px] [&]:uppercase [color:rgba(255,255,255,0.6)] [letter-spacing:0.025em]"}>Client Satisfaction</div>
              </div>
              <div>
                <div className={"\x74ext-lg \x66ont-bold \x66ont-headline [color:hsl(var(--accent))]"}>18+</div>
                <div className={"text-[11px] [&]:uppercase [color:rgba(255,255,255,0.6)] [letter-spacing:0.025em]"}>Industries Served</div>
              </div>
            </div>
          </div>
          <div className={"p-6 \x6dd:\x70-8 [&]:max-h-[85vh] [overflow-y:auto]"}>
            <form className={"\x73pace-y-4"}>
              <div className="grid grid-cols-2 gap-3">
                <div className={"\x73pace-y-2"}>
                  <input className={"flex h-10 w-full rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-base \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ile:\x74ext-foreground \x70laceholder:\x74ext-muted-foreground \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x6dd:\x74ext-sm"} placeholder="Full name*" id="«r0»-form-item" aria-describedby="«r0»-form-item-description" aria-invalid="false" defaultValue="" name="name" />
                </div>
                <div className={"\x73pace-y-2"}>
                  <input className={"flex h-10 w-full rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-base \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ile:\x74ext-foreground \x70laceholder:\x74ext-muted-foreground \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x6dd:\x74ext-sm"} placeholder="Email*" id="«r1»-form-item" aria-describedby="«r1»-form-item-description" aria-invalid="false" type="email" defaultValue="" name="email" />
                </div>
              </div>
              <div className="flex gap-2">
                <button className={"flex h-10 items-center rounded-md \x62order \x62order-input \x62g-background \x70y-2 \x74ext-sm \x72ing-offset-background \x70laceholder:\x74ext-muted-foreground \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-ring \x66ocus:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 [&>\x73pan]:\x6cine-clamp-1 shrink-0 \x70x-2 [&]:justify-between [&]:w-[92px]"} type="button" role="combobox" aria-controls="radix-«r2»" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed">
                  <span style={{ pointerEvents: "none" }}>🇰🇪 +254</span>
                  <svg className="h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <select style={{ position: "absolute", border: "0px", width: "1px", height: "1px", padding: "0px", margin: "-1px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", whiteSpace: "nowrap", overflowWrap: "normal" } as CSSProperties} aria-hidden="true" tabIndex={-1} defaultValue="+254">
                    <option value="+254" selected>🇰🇪 +254</option>
                    <option value="+256">🇺🇬 +256</option>
                    <option value="+255">🇹🇿 +255</option>
                    <option value="+250">🇷🇼 +250</option>
                    <option value="+234">🇳🇬 +234</option>
                    <option value="+27">🇿🇦 +27</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+1">🇺🇸 +1</option>
                  </select>
                <div className={"\x73pace-y-2 [&]:flex-1"}>
                  <input className={"flex h-10 w-full rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-base \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ile:\x74ext-foreground \x70laceholder:\x74ext-muted-foreground \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x6dd:\x74ext-sm"} placeholder="Phone number*" id="«r3»-form-item" aria-describedby="«r3»-form-item-description" aria-invalid="false" defaultValue="" name="phone" />
                </div>
              </div>
              <div className={"\x73pace-y-2"}>
                <input className={"flex h-10 w-full rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-base \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ile:\x74ext-foreground \x70laceholder:\x74ext-muted-foreground \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x6dd:\x74ext-sm"} placeholder="Company" id="«r4»-form-item" aria-describedby="«r4»-form-item-description" aria-invalid="false" defaultValue="" name="company" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className={"flex h-10 w-full items-center rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-sm \x72ing-offset-background \x70laceholder:\x74ext-muted-foreground \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-ring \x66ocus:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 [&>\x73pan]:\x6cine-clamp-1 [&]:justify-between"} type="button" role="combobox" aria-controls="radix-«r5»" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed">
                  <span style={{ pointerEvents: "none" }}>Service interested in (optional)</span>
                  <svg className="h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <select style={{ position: "absolute", border: "0px", width: "1px", height: "1px", padding: "0px", margin: "-1px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", whiteSpace: "nowrap", overflowWrap: "normal" } as CSSProperties} aria-hidden="true" tabIndex={-1} defaultValue={"Website Design & Development"}>
                    <option value={"Website Design & Development"}>Website Design &amp; Development</option>
                    <option value="Custom Web Application">Custom Web Application</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Creative / BTL Media">Creative / BTL Media</option>
                    <option value="E-commerce Store">E-commerce Store</option>
                    <option value={"Web Hosting & Domains"}>Web Hosting &amp; Domains</option>
                    <option value="Other">Other</option>
                  </select>
                <button className={"flex h-10 w-full items-center rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-sm \x72ing-offset-background \x70laceholder:\x74ext-muted-foreground \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-ring \x66ocus:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 [&>\x73pan]:\x6cine-clamp-1 [&]:justify-between"} type="button" role="combobox" aria-controls="radix-«r6»" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed">
                  <span style={{ pointerEvents: "none" }}>Budget range (optional)</span>
                  <svg className="h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <select style={{ position: "absolute", border: "0px", width: "1px", height: "1px", padding: "0px", margin: "-1px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", whiteSpace: "nowrap", overflowWrap: "normal" } as CSSProperties} aria-hidden="true" tabIndex={-1} defaultValue="Under KES 60,000">
                    <option value="Under KES 60,000">Under KES 60,000</option>
                    <option value="KES 60,000 – 130,000">KES 60,000 – 130,000</option>
                    <option value="KES 130,000 – 350,000">KES 130,000 – 350,000</option>
                    <option value="KES 350,000+">KES 350,000+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
              </div>
              <div className={"\x73pace-y-2"}>
                <textarea className={"flex w-full rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-base \x72ing-offset-background \x70laceholder:\x74ext-muted-foreground \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x6dd:\x74ext-sm [&]:min-h-[100px] [&]:resize-none"} placeholder="Tell us about your project*" name="message" id="«r7»-form-item" aria-describedby="«r7»-form-item-description" aria-invalid="false" />
              </div>
              <div className={"\x73pace-y-2"}>
                <div className="flex items-start gap-2">
                  <button className={"peer h-4 w-4 shrink-0 rounded-sm \x62order \x62order-primary \x72ing-offset-background \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x64ata-[\x73tate=\x63hecked]:\x62g-primary \x64ata-[\x73tate=\x63hecked]:\x74ext-primary-foreground mt-0.5"} type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id="«r8»-form-item" aria-describedby="«r8»-form-item-description" aria-invalid="false" />
                  <input style={{ transform: "translateX(-100%)", position: "absolute", pointerEvents: "none", opacity: "0", margin: "0px", width: "16px", height: "16px" }} aria-hidden="true" tabIndex={-1} type="checkbox" defaultValue="on" />
                  <label className={"\x74ext-xs text-muted-foreground \x6ceading-snug"}>I accept the <a className={"text-primary \x68over:\x75nderline"} href="/terms" target="_blank">Terms &amp; Conditions</a> and <a className={"text-primary \x68over:\x75nderline"} href="/privacy" target="_blank">Privacy Policy</a>.</label>
                </div>
              </div>
              <button className={"inline-flex items-center justify-center gap-2 \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-11 rounded-md \x70x-8 w-full group [&]:whitespace-nowrap [&:disabled]:pointer-events-none"} type="submit">Submit<svg className={"ml-2 h-4 w-4 \x74ransition-transform \x67roup-hover:\x74ranslate-x-0.\x35 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></button>
              <button className={"w-full flex items-center justify-center \x74ext-xs text-muted-foreground \x68over:\x74ext-primary transition-colors [gap:0.375rem]"} type="button"><svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg> Prefer email? Send it to us directly</button>
              <p className="text-[11px] text-center text-muted-foreground">Your details are 100% secure. Zero spam.</p>
            </form>
          </div>
        </div>
      </div>
      )}
      <button className={"inline-flex items-center rounded-full \x70x-5 \x70y-3 text-[14.5px] \x66ont-bold text-white \x73hadow-xl transition-all \x64uration-300 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x73hadow-2xl \x61ctive:\x74ranslate-y-0 cursor-pointer [&]:fixed [animation-duration:0.3s] [bottom:1.5rem] [gap:0.625rem] [right:1.5rem] [z-index:50]"} style={{ background: "linear-gradient(135deg, rgb(241, 90, 36) 0%, rgb(234, 88, 12) 100%)", boxShadow: "rgba(241, 90, 36, 0.45) 0px 10px 25px -4px, rgba(0, 0, 0, 0.1) 0px 4px 10px -2px" }} type="button" aria-label="Ask ChatGPT about Beta Corporation" ref={chatGptTrigger} aria-haspopup="dialog" aria-expanded={chatGptOpen} onClick={() => setChatGptOpen(true)}>
        <svg className="w-5 h-5 [fill:currentcolor]" viewBox="0 0 24 24">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.66-5.5873a4.4708 4.4708 0 0 1-.5346-3.0037l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1402-3.1083zM2.3528 8.5298a4.466 4.466 0 0 1 2.3465-1.9634v5.7197a.7854.7854 0 0 0 .3927.6813l5.8333 3.3685-2.02 1.1683a.0757.0757 0 0 1-.0615.0048L3.999 14.636a4.504 4.504 0 0 1-1.6462-6.1062zm16.0375 4.0954l-5.8428-3.3732 2.02-1.1683a.0757.0757 0 0 1 .0615-.0048l4.8447 2.7961a4.504 4.504 0 0 1-1.0834 8.2818v-5.8503a.7854.7854 0 0 0-.3927-.6813zm2.0105-3.0227l-.142-.0852-4.7783-2.7818a.7759.7759 0 0 0-.7854 0L8.8523 10.104V7.7716a.0757.0757 0 0 1 .0331-.0615l4.8447-2.7961a4.504 4.504 0 0 1 6.6496 4.7932zM12.0001 7.2132l3.326 1.9174v3.8348l-3.326 1.9174-3.326-1.9174V9.1306l3.326-1.9174z" />
        </svg>
        <span>Ask ChatGPT about us</span>
      </button>
      {chatGptOpen && (
        <div role="dialog" aria-modal="true" aria-label="Ask ChatGPT about Beta Corporation" onClick={event => { if (event.target === event.currentTarget) setChatGptOpen(false); }} className="fixed! inset-0! z-50! flex! items-center! justify-center! p-4!" style={{ "background": "rgba(15, 23, 42, 0.65)", "backdropFilter": "blur(6px)" }}><div className="relative! w-full! max-w-[460px]! rounded-3xl! bg-white! p-7! sm:p-9! text-left! shadow-2xl! text-slate-900! border! border-slate-100! font-sans!"><button type="button" aria-label="Close dialog" ref={chatGptClose} onClick={() => setChatGptOpen(false)} className="absolute! top-5! right-5! flex! h-8! w-8! items-center! justify-center! rounded-full! bg-slate-100! text-slate-500! hover:bg-slate-200! hover:text-slate-900! transition-colors! cursor-pointer! text-xl!">×</button><span className="inline-block! text-[11px]! font-extrabold! uppercase! tracking-widest! text-[#ea580c]! mb-2.5!">INDEPENDENT AI ADVISOR</span><h2 className="text-[25px]! sm:text-[27px]! font-extrabold! leading-tight! text-slate-900! tracking-tight! mb-2.5!">Let ChatGPT Be <span className="rounded-lg! bg-[#fee7dd]! px-2.5! py-0.5! text-slate-900! font-extrabold! inline-block!">the Judge.</span></h2><p className="text-[14px]! leading-relaxed! text-slate-600! mb-5!">Tell ChatGPT what you are building. It will look at <strong>Beta Corporation</strong> and tell you honestly if we are the right team for your project.</p><form onSubmit={event => { event.preventDefault(); window.open(chatGptHref, "_blank", "noopener,noreferrer"); }} className="space-y-4!"><div><label htmlFor="acg-input-project" className="block! text-[11px]! font-extrabold! uppercase! tracking-wider! text-slate-900! mb-2!">YOUR BUSINESS, PROJECT OR INDUSTRY</label><input id="acg-input-project" value={chatGptProject} onChange={event => setChatGptProject(event.target.value)} placeholder="e.g. Safari tour company, Nairobi salon, Law firm..." autoComplete="off" spellCheck="false" className="w-full! rounded-xl! border-2! border-orange-200! bg-white! px-4! py-3! text-[14.5px]! text-slate-900! placeholder:text-slate-400! outline-none! focus:border-[#ea580c]! focus:ring-4! focus:ring-orange-500/15! transition-all!" type="text" /></div><div className="flex! flex-wrap! gap-1.5! pt-0.5!"><button type="button" className={chatGptProject === "Safari & Tours" ? "text-[12px]! font-semibold! px-2.5! py-1! rounded-full! border! transition-all! cursor-pointer! bg-orange-50! border-[#ea580c]! text-[#ea580c]! font-bold! ring-2! ring-orange-500/20!" : "text-[12px]! font-semibold! px-2.5! py-1! rounded-full! border! transition-all! cursor-pointer! bg-slate-50! border-slate-200! text-slate-600! hover:border-orange-300! hover:text-slate-900!"} onClick={() => setChatGptProject("Safari & Tours")}>Safari &amp; Tours</button><button type="button" className={chatGptProject === "E-Commerce Store" ? "text-[12px]! font-semibold! px-2.5! py-1! rounded-full! border! transition-all! cursor-pointer! bg-orange-50! border-[#ea580c]! text-[#ea580c]! font-bold! ring-2! ring-orange-500/20!" : "text-[12px]! font-semibold! px-2.5! py-1! rounded-full! border! transition-all! cursor-pointer! bg-slate-50! border-slate-200! text-slate-600! hover:border-orange-300! hover:text-slate-900!"} onClick={() => setChatGptProject("E-Commerce Store")}>E-Commerce Store</button><button type="button" className={chatGptProject === "Corporate / Law" ? "text-[12px]! font-semibold! px-2.5! py-1! rounded-full! border! transition-all! cursor-pointer! bg-orange-50! border-[#ea580c]! text-[#ea580c]! font-bold! ring-2! ring-orange-500/20!" : "text-[12px]! font-semibold! px-2.5! py-1! rounded-full! border! transition-all! cursor-pointer! bg-slate-50! border-slate-200! text-slate-600! hover:border-orange-300! hover:text-slate-900!"} onClick={() => setChatGptProject("Corporate / Law")}>Corporate / Law</button><button type="button" className={chatGptProject === "Hospital / Clinic" ? "text-[12px]! font-semibold! px-2.5! py-1! rounded-full! border! transition-all! cursor-pointer! bg-orange-50! border-[#ea580c]! text-[#ea580c]! font-bold! ring-2! ring-orange-500/20!" : "text-[12px]! font-semibold! px-2.5! py-1! rounded-full! border! transition-all! cursor-pointer! bg-slate-50! border-slate-200! text-slate-600! hover:border-orange-300! hover:text-slate-900!"} onClick={() => setChatGptProject("Hospital / Clinic")}>Hospital / Clinic</button><button type="button" className={chatGptProject === "Custom Software" ? "text-[12px]! font-semibold! px-2.5! py-1! rounded-full! border! transition-all! cursor-pointer! bg-orange-50! border-[#ea580c]! text-[#ea580c]! font-bold! ring-2! ring-orange-500/20!" : "text-[12px]! font-semibold! px-2.5! py-1! rounded-full! border! transition-all! cursor-pointer! bg-slate-50! border-slate-200! text-slate-600! hover:border-orange-300! hover:text-slate-900!"} onClick={() => setChatGptProject("Custom Software")}>Custom Software</button></div><a href={chatGptHref} target="_blank" rel="noopener noreferrer" className="w-full! rounded-xl! py-3.5! px-5! font-bold! text-white! shadow-lg! shadow-orange-500/30! hover:shadow-orange-500/50! hover:-translate-y-0.5! active:translate-y-0! transition-all! cursor-pointer! flex! items-center! justify-center! gap-2! text-[15px]!" style={{ "background": "linear-gradient(135deg, rgb(241, 90, 36) 0%, rgb(234, 88, 12) 100%)" }}><span>Ask ChatGPT</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></a></form><a href={CHATGPT_ABOUT_HREF} target="_blank" rel="noopener noreferrer" className="mt-4! block! w-full! text-center! text-[13px]! font-semibold! text-slate-700! hover:text-[#ea580c]! hover:underline! transition-colors! cursor-pointer!">Just ask about Beta Corporation</a></div></div>
      )}
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className={"\x62g-gray-950 \x74ext-gray-300 [&]:relative [color:rgb(209_213_219/var(--tw-text-opacity,1))] [overflow:hidden]"}>
      <div className={"\x62order-b \x62order-gray-800 [&]:relative [z-index:10]"}>
        <div className={"\x63ontainer \x6dx-auto \x70x-4 [padding-bottom:2.5rem] [padding-top:2.5rem] [width:100%]"}>
          <div className={"flex flex-col \x6dd:\x66lex-row items-center gap-6 \x6dd:\x67ap-8 [&]:justify-between"}>
            <div className={"text-center \x6dd:\x74ext-left [max-width:28rem]"}>
              <h3 className={"\x74ext-xl \x6dd:\x74ext-2xl \x66ont-headline \x66ont-bold text-white mb-1"}>Stay in the loop</h3>
              <p className={"\x74ext-sm text-gray-400"}>Get digital tips, project showcases, and exclusive offers delivered to your inbox.</p>
            </div>
            <form className="flex w-full gap-2 [max-width:28rem]">
              <div className={"[&]:flex-1 [&]:relative"}>
                <svg className={"\x2dtranslate-y-1/\x32 h-4 w-4 \x74ext-gray-500 [&]:absolute [color:rgb(107_114_128/var(--tw-text-opacity,1))] [left:0.75rem] [top:50%]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <input className={"flex h-10 w-full rounded-md \x62order \x70x-3 \x70y-2 \x74ext-base \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ile:\x74ext-foreground \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x6dd:\x74ext-sm pl-10 \x62g-gray-900 \x62order-gray-700 text-white \x70laceholder:\x74ext-gray-500 \x66ocus:\x62order-primary \x66ocus:\x72ing-primary/\x330"} type="email" placeholder="Enter your email" />
              </div>
              <button className={"inline-flex items-center justify-center gap-2 rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 shrink-0 group [&]:whitespace-nowrap [&:disabled]:pointer-events-none"} type="submit">Subscribe<svg className={"ml-1 h-4 w-4 \x74ransition-transform \x67roup-hover:\x74ranslate-x-0.\x35 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></button>
            </form>
          </div>
        </div>
      </div>
      <div className={"\x63ontainer \x6dx-auto \x70x-4 \x70y-12 [&]:relative [width:100%] [z-index:10]"}>
        <div className={"grid grid-cols-1 \x6dd:\x67rid-cols-2 \x6cg:\x67rid-cols-12 gap-10 \x6cg:\x67ap-8"}>
          <div className="[@media(min-width:1024px)]:[grid-column:span_4/span_4]">
            <a className="mb-5 inline-block" href="/">
              <img style={{ color: "transparent" }} alt="Beta Corporation Logo" loading="lazy" width="180" height="32" decoding="async" data-nimg="1" src="/site-assets/beta-corporation-logo-light.png" />
            </a>
            <p className={"\x74ext-sm \x6ceading-relaxed mb-5 text-gray-400 [max-width:20rem]"}>Empowering businesses in Kenya with stunning websites and effective digital strategies since day one.</p>
            <div className={"\x73pace-y-3 \x74ext-sm"}>
              <div className="flex items-start gap-3">
                <svg className="h-4 w-4 text-primary mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p>Kenya</p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-4 w-4 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a className={"\x68over:\x74ext-primary transition-colors"} href={PHONE_TEL}>{PHONE_DISPLAY}</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-4 w-4 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a className={"\x68over:\x74ext-primary transition-colors"} href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              {SOCIALS.map(social => social.href ? (
                <a key={social.network} className={"w-9 h-9 rounded-lg \x62g-gray-800 \x68over:\x62g-primary flex items-center justify-center transition-all \x64uration-300 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x73hadow-lg \x68over:\x73hadow-primary/\x320 [animation-duration:0.3s]"} aria-label={`${social.network}: ${social.handle}`} title={`${social.network}: ${social.handle}`} href={social.href} rel="noopener noreferrer" target="_blank">
                  <SocialIcon network={social.network} />
                </a>
              ) : (
                <span key={social.network} className={"w-9 h-9 rounded-lg \x62g-gray-800 flex items-center justify-center opacity-50 cursor-default"} aria-label={`${social.network}: coming soon`} title={`${social.network}: coming soon`}>
                  <SocialIcon network={social.network} />
                </span>
              ))}
            </div>
          </div>
          <div className="[@media(min-width:1024px)]:[grid-column:span_5/span_5]">
            <div className="grid gap-6 [grid-template-columns:repeat(3,minmax(0px,1fr))]">
              <div>
                <h4 className={"\x66ont-semibold text-white mb-4 \x74ext-sm [&]:uppercase [letter-spacing:0.05em]"}>Company</h4>
                <ul className={"\x73pace-y-2.\x35"}>
                  <li>
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="/about">About Us</a>
                  </li>
                  <li>
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="/partners">Strategic Partners</a>
                  </li>
                  <li>
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="/blog">Our Blog</a>
                  </li>
                  <li>
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="/portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="/pricing">Pricing</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className={"\x66ont-semibold text-white mb-4 \x74ext-sm [&]:uppercase [letter-spacing:0.05em]"}>Services</h4>
                <ul className={"\x73pace-y-2.\x35"}>
                  <li>
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="/websites">Website Packages</a>
                  </li>
                  <li>
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="/services/web-development">Web Development</a>
                  </li>
                  <li>
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="/services/digital-marketing">Digital Marketing</a>
                  </li>
                  <li>
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="/services/btl-media-creative">Creative Services</a>
                  </li>
                  <li>
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="/printing">Print &amp; Publications</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className={"\x66ont-semibold text-white mb-4 \x74ext-sm [&]:uppercase [letter-spacing:0.05em]"}>Resources</h4>
                <ul className={"\x73pace-y-2.\x35"}>
                  <li>
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="/chamabox">ChamaBox</a>
                  </li>
                  <li>
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="/elitehost">Beta Hosting</a>
                  </li>
                  <li>
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="/hr-system">Beta HRIS</a>
                  </li>
                  <li>
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="/frostwoodcrm">Frostwood CRM</a>
                  </li>
                  <li>
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="/industries">Industries</a>
                  </li>
                  <li>
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="/solutions">Solutions</a>
                  </li>
                  <li>
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="/terms">Terms of Service</a>
                  </li>
                  <li>
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="/privacy">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="[@media(min-width:1024px)]:[grid-column:span_3/span_3]">
            <h4 className={"\x66ont-semibold text-white mb-4 \x74ext-sm [&]:uppercase [letter-spacing:0.05em]"}>Follow Us</h4>
            <ul className={"\x73pace-y-3"}>
              {SOCIALS.map(social => (
                <li key={social.network} className="flex items-center gap-3 text-sm">
                  <span className={"w-8 h-8 rounded-lg \x62g-gray-800 flex items-center justify-center shrink-0 text-gray-300"}><SocialIcon network={social.network} /></span>
                  <span className="min-w-0">
                    <span className="block text-xs text-gray-500">{social.network}</span>
                    {social.href ? <a className={"text-gray-300 \x68over:\x74ext-white transition-colors"} href={social.href} rel="noopener noreferrer" target="_blank">{social.handle}</a> : <span className="text-gray-400 italic">{social.handle}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={"\x62order-t \x62order-gray-800 [&]:relative [z-index:10]"}>
        <div className={"\x63ontainer \x6dx-auto \x70x-4 flex flex-col \x6dd:\x66lex-row items-center gap-3 \x74ext-sm \x74ext-gray-500 [&]:flex-wrap [&]:justify-between [color:rgb(107_114_128/var(--tw-text-opacity,1))] [padding-bottom:1.25rem] [padding-top:1.25rem] [width:100%]"}>
          <p>© {new Date().getFullYear()} {BRAND}. All Rights Reserved.</p>
          <p className="flex items-center [gap:0.375rem]">Proudly made with <span className={"\x74ext-red-500 \x61nimate-pulse [color:rgb(239_68_68/var(--tw-text-opacity,1))]"}>❤</span> in Nairobi, Kenya</p>
          <p className="flex items-center [gap:0.375rem]">Founder: <span className="text-primary">{CONTACT_PERSON}</span></p>
        </div>
      </div>
      <div className={"left-0 h-40 \x62g-gradient-to-t \x66rom-primary/\x35 \x74o-transparent [&]:pointer-events-none [&]:absolute [bottom:0px] [right:0px]"} />
    </footer>
  );
}
