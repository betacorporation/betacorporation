import type { CSSProperties } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader, SiteOverlays } from "@/components/site/SiteChrome";
import capturedCSS from "../styles/pages/portfolio.css?raw";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio - Our Work | Beta Corporation" },
      { name: "description", content: "Browse website, e-commerce and branding projects designed and built by Beta Corporation." },
      { property: "og:title", content: "Portfolio - Our Work | Beta Corporation" },
      { property: "og:description", content: "Browse website, e-commerce and branding projects designed and built by Beta Corporation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: { sitemap: true, importedDocument: { html: { "className": "__variable_b021ee __variable_f166df", "lang": "en" }, body: { "className": "\x66ont-body \x61ntialiased \x66lex \x66lex-col \x6din-h-screen \x62g-background \x74ext-foreground", "data-site-import-responsive-incomplete": "scroll" } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div hidden />
      <SiteHeader />
      <main className={"\x66lex-grow"}>
        <div className={"\x63ontainer \x6dx-auto \x70x-4 \x61nimate-fade-in-up [padding-bottom:4rem] [padding-top:4rem] [width:100%]"} style={{ transform: "translateY(0px)", opacity: "1" }}>
          <div className="text-center mb-12">
            <h1 className={"\x74ext-4xl \x6dd:\x74ext-5xl \x66ont-bold text-primary mb-4"}>Our Digital Craftsmanship</h1>
            <p className={"\x74ext-lg \x6dd:\x74ext-xl \x6dx-auto [color:hsl(var(--foreground)/.8)] [max-width:48rem]"}>Below are some of our most recent projects, showcasing a variety of websites and digital solutions we have developed across different industries. Each project reflects our commitment to quality and client success.</p>
          </div>
          <div className="flex justify-center mb-8">
            <button className={"flex h-10 items-center rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-sm \x72ing-offset-background \x70laceholder:\x74ext-muted-foreground \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-ring \x66ocus:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 [&>\x73pan]:\x6cine-clamp-1 w-full [&]:justify-between [max-width:24rem]"} type="button" role="combobox" aria-controls="radix-«re»" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed">
              <span style={{ pointerEvents: "none" }}>All</span>
              <svg className="h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
          <div className={"grid grid-cols-1 \x6dd:\x67rid-cols-2 \x6cg:\x67rid-cols-3 [gap:2rem]"}>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/cwpc-kenya-safaris">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/d08a1e02ddd7ae4c.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the CWPC Kenya Safaris project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/d08a1e02ddd7ae4c.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Safari &amp; Experiential Travel</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/cwpc-kenya-safaris">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>CWPC Kenya Safaris</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/cwpc-kenya-safaris"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/nutrawell-africa">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/79e70658913589f7.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Nutrawell Africa Ltd project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/79e70658913589f7.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Health &amp; Wellness E-Commerce</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/nutrawell-africa">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Nutrawell Africa Ltd</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/nutrawell-africa"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/lion-cubs-contest">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/15bb8cddd1a5366c.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Lion Cubs Contest project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/15bb8cddd1a5366c.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Education &amp; Competition Platform</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/lion-cubs-contest">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Lion Cubs Contest</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/lion-cubs-contest"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/golden-star-adventures">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/6eb5d6df280ebde5.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Golden Star Adventures project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/6eb5d6df280ebde5.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Luxury African Safaris</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/golden-star-adventures">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Golden Star Adventures</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/golden-star-adventures"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/patamaps-directory">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/112ccb0cd5e9b0ef.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the PataMaps project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/112ccb0cd5e9b0ef.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Directory &amp; Hyperlocal Platform</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/patamaps-directory">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>PataMaps</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/patamaps-directory"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/estty-hair-spa">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/7378654580bbe1a7.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt={"Screenshot of the Estty Hair & Spa project"} loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/7378654580bbe1a7.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Beauty &amp; Salon E-Commerce</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/estty-hair-spa">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Estty Hair &amp; Spa</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/estty-hair-spa"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/zymera-medical-solutions">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/5c14214cde1ef916.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Zymera Medical Solutions project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/5c14214cde1ef916.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Healthcare &amp; Medical Equipment</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/zymera-medical-solutions">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Zymera Medical Solutions</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/zymera-medical-solutions"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/safety-stitch-ppe">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/8399cb342e548a07.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Safety Stitch project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/8399cb342e548a07.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>PPE &amp; Workwear Manufacturing</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/safety-stitch-ppe">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Safety Stitch</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/safety-stitch-ppe"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/pharma-thrive-africa">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/13a4d20e63ce1811.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Pharma Thrive Africa project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/13a4d20e63ce1811.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Pharmaceutical &amp; CRO Services</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/pharma-thrive-africa">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Pharma Thrive Africa</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/pharma-thrive-africa"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/secularm-sacco">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/6b0f35535fced04e.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Secularm SACCO project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/6b0f35535fced04e.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Fintech &amp; Cooperative Banking</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/secularm-sacco">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Secularm SACCO</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/secularm-sacco"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/sparkling-mobile-detailing">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/069543ee9700b545.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Sparkling Mobile Detailing project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/069543ee9700b545.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Automotive &amp; On-Demand Services</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/sparkling-mobile-detailing">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Sparkling Mobile Detailing</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/sparkling-mobile-detailing"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/chichi-the-dj">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/5c1ea2bbc9e3143e.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Chichi The DJ project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/5c1ea2bbc9e3143e.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Entertainment &amp; VIP Events</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/chichi-the-dj">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Chichi The DJ</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/chichi-the-dj"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/run-it-marketing">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/c7b3ecfce573b7f0.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Run It Marketing project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/c7b3ecfce573b7f0.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Digital Marketing &amp; Growth Agency</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/run-it-marketing">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Run It Marketing</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/run-it-marketing"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/santorini-queen">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/608404ef4f941ef8.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Santorini Queen project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/608404ef4f941ef8.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Luxury Travel &amp; Yacht Charters</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/santorini-queen">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Santorini Queen</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/santorini-queen"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/global-health-sustainable-development">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/dd5406b43868594f.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Global Health and Sustainable Development (GHSD) project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/dd5406b43868594f.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Global Health &amp; Development NGO</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/global-health-sustainable-development">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Global Health and Sustainable Development (GHSD)</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/global-health-sustainable-development"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/suhad-somalia">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/146657ce936981e6.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the SUHAD — Scaling Up Humanitarian Assistance and Development project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/146657ce936981e6.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Humanitarian NGO &amp; Community Development</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/suhad-somalia">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>SUHAD — Scaling Up Humanitarian Assistance and Development</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/suhad-somalia"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/gluk-dentistry-biomedical-sciences">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/590ec57967da1d7c.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt={"Screenshot of the GLUK School of Dentistry & Biomedical Sciences project"} loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/590ec57967da1d7c.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Higher Education &amp; Medical Training</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/gluk-dentistry-biomedical-sciences">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>GLUK School of Dentistry &amp; Biomedical Sciences</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/gluk-dentistry-biomedical-sciences"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/vape-collective-kenya">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/387f778cc7a09d5a.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Vape Collective Kenya project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/387f778cc7a09d5a.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Vape &amp; Lifestyle Retail E-Commerce</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/vape-collective-kenya">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Vape Collective Kenya</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/vape-collective-kenya"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/kishkids-baby-shop">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/5e20213c2b587d0f.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the KishKids Baby Shop project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/5e20213c2b587d0f.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Baby &amp; Kids E-Commerce</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/kishkids-baby-shop">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>KishKids Baby Shop</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/kishkids-baby-shop"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/beauty-bites">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/961796ba8c01eb9e.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Beauty Bites project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/961796ba8c01eb9e.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Beauty &amp; Skincare E-Commerce</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/beauty-bites">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Beauty Bites</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/beauty-bites"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/mboga-express">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/238806676133b3f1.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Mboga Express project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/238806676133b3f1.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Fresh Produce &amp; Grocery E-Commerce</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/mboga-express">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Mboga Express</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/mboga-express"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/diani-elite-taxi">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/f182656d8c41fc5f.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Diani Elite Taxi project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/f182656d8c41fc5f.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Transport &amp; Airport Transfer Services</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/diani-elite-taxi">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Diani Elite Taxi</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/diani-elite-taxi"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/the-jumphouse">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/e1edc1429c3d77c2.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the The JumpHouse project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/e1edc1429c3d77c2.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Kids Party &amp; Event Rentals</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/the-jumphouse">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>The JumpHouse</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/the-jumphouse"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/omni-agent-marketplace">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/a9d767f4244083bc.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Omni Agent Marketplace project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/a9d767f4244083bc.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>AI SaaS &amp; Business Automation</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/omni-agent-marketplace">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Omni Agent Marketplace</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/omni-agent-marketplace"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/tenders-access-hub">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/a9a47e82b9603721.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Tenders Access Hub project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/a9a47e82b9603721.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Procurement &amp; Tender Intelligence Platform</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/tenders-access-hub">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Tenders Access Hub</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/tenders-access-hub"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/pharmapos">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/f4fab71c26f4f400.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the PharmaPOS project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/f4fab71c26f4f400.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Pharmacy Point-of-Sale SaaS</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/pharmapos">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>PharmaPOS</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/pharmapos"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/shades-kenya">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/4acc3d00e5300893.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt={"Screenshot of the Shades & Fabrication Kenya project"} loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/4acc3d00e5300893.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Shading, Fabrication &amp; Outdoor Structures</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/shades-kenya">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Shades &amp; Fabrication Kenya</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/shades-kenya"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/transformation-ark-hub">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/a86a7a571c29588f.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Transformation Ark Hub project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/a86a7a571c29588f.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Leadership Coaching &amp; Training</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/transformation-ark-hub">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Transformation Ark Hub</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/transformation-ark-hub"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/astros-mining">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/f69ca18d5a530eae.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Astros Mining (AsMiCo) project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/f69ca18d5a530eae.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Mining &amp; Mineral Trade</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/astros-mining">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Astros Mining (AsMiCo)</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/astros-mining"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/elite-capital-fx">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/9a4825d37057f6cb.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Elite Capital FX project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/9a4825d37057f6cb.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Cryptocurrency Investment Platform</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/elite-capital-fx">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Elite Capital FX</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/elite-capital-fx"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/train-in-kenya">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/1351fcfb161f0330.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Train in Kenya Ventures project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/1351fcfb161f0330.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Sports Tourism &amp; Elite Training</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/train-in-kenya">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Train in Kenya Ventures</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/train-in-kenya"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/visionary-pharmacists">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/10947be46f3d0055.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Visionary Pharmacists project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/10947be46f3d0055.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Financial Cooperative (Chama/SACCO)</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/visionary-pharmacists">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Visionary Pharmacists</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/visionary-pharmacists"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/stalwarts-khs">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/860607bd53c87625.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Stalwarts KHS 2017 project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/860607bd53c87625.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Alumni Network &amp; Community Portal</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/stalwarts-khs">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Stalwarts KHS 2017</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/stalwarts-khs"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/lifeline-consulting">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/5a37f999959d6373.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Lifeline Consulting Firm project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/5a37f999959d6373.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>International Development Consulting</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/lifeline-consulting">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Lifeline Consulting Firm</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/lifeline-consulting"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/sourcewall">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/f0bf6fe8a62e96b7.png" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Sourcewall NL project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/f0bf6fe8a62e96b7.png" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Sustainable Trade &amp; Supply Chain</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/sourcewall">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Sourcewall NL</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/sourcewall"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/bb-bread-bakemark">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/4c65ac22351d4e5e.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the BB Bread (BakeMark) project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/4c65ac22351d4e5e.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>FMCG &amp; Food Manufacturing</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/bb-bread-bakemark">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>BB Bread (BakeMark)</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/bb-bread-bakemark"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/uk-roadrunner">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/6b4513191c9e6d64.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the UK Roadrunner Limited project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/6b4513191c9e6d64.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Automotive &amp; International Logistics</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/uk-roadrunner">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>UK Roadrunner Limited</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/uk-roadrunner"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/belioras">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/d29e4f8e24dded21.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Belioras Luxe project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/d29e4f8e24dded21.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Luxury Fashion &amp; E-Commerce</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/belioras">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Belioras Luxe</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/belioras"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/gridx-africa">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/0183470068a89865.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the GridX Africa project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/0183470068a89865.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Renewable Energy &amp; Cleantech</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/gridx-africa">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>GridX Africa</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/gridx-africa"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/lusweti-nabutola-advocates">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/c077bb35777d66a4.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt={"Screenshot of the Lusweti & Nabutola Advocates project"} loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/c077bb35777d66a4.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Legal &amp; Corporate Law</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/lusweti-nabutola-advocates">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Lusweti &amp; Nabutola Advocates</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/lusweti-nabutola-advocates"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/sherrane-homes">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/358cfcae0865d7f8.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Sherrane Homes project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/358cfcae0865d7f8.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Real Estate Development</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/sherrane-homes">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Sherrane Homes</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/sherrane-homes"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/maluki-bespoke">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/61eb78baa817e7c9.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Maluki Bespoke project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/61eb78baa817e7c9.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Luxury Bespoke Tailoring</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/maluki-bespoke">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Maluki Bespoke</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/maluki-bespoke"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/regal-scope-logistics">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/80e6e41c3d53554f.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Regal Scope Logistics project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/80e6e41c3d53554f.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Freight &amp; Supply Chain</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/regal-scope-logistics">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Regal Scope Logistics</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/regal-scope-logistics"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/siema-majani-advocates">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/82cdc77399941ea6.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt={"Screenshot of the Siema Majani & Associates Advocates project"} loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/82cdc77399941ea6.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Law Firm &amp; Legal Services</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/siema-majani-advocates">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Siema Majani &amp; Associates Advocates</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/siema-majani-advocates"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/di-fronte-al-mare">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/d982e8a8b3f4bbae.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Di Fronte Al Mare project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/d982e8a8b3f4bbae.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Luxury Property Sales</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/di-fronte-al-mare">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Di Fronte Al Mare</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/di-fronte-al-mare"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/sage-beans-export">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/967f158da0c4a02d.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Sage Beans Export project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/967f158da0c4a02d.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Agribusiness &amp; Export</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/sage-beans-export">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Sage Beans Export</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/sage-beans-export"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/electron-engineers">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/d8f94af796eb1c45.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Electron Engineers project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/d8f94af796eb1c45.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Electro-Mechanical Consultancy</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/electron-engineers">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Electron Engineers</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/electron-engineers"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/opsok">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/87420d43ce4485aa.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the OPSOK project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/87420d43ce4485aa.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Non-Profit / Healthcare Society</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/opsok">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>OPSOK</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/opsok"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/batteriq">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/91702c4790f89edf.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Batteriq project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/91702c4790f89edf.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Portable Power E-commerce</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/batteriq">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Batteriq</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/batteriq"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/forthright-kenya-real-estate">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/eefdc416cc555604.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Forthright Kenya Real Estate project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/eefdc416cc555604.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Real Estate Agency &amp; Management</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/forthright-kenya-real-estate">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Forthright Kenya Real Estate</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/forthright-kenya-real-estate"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/smart-solutions-realtors">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/c00217d9e01558f0.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Smart Solutions Realtors project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/c00217d9e01558f0.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Real Estate Brokerage</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/smart-solutions-realtors">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Smart Solutions Realtors</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/smart-solutions-realtors"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/irene-muendo-isuzu">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/0539b6f020019f6c.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Irene Muendo Isuzu project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/0539b6f020019f6c.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Commercial Vehicle Sales</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/irene-muendo-isuzu">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Irene Muendo Isuzu</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/irene-muendo-isuzu"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/dealforge">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/bbef06fd0de6a69a.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Dealforge project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/bbef06fd0de6a69a.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Manpower &amp; General Supplies</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/dealforge">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Dealforge</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/dealforge"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/goldenprintfx">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/a3f67b369e6ac638.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the GoldenPrintFX project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/a3f67b369e6ac638.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Forex Trading Mentorship</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/goldenprintfx">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>GoldenPrintFX</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/goldenprintfx"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/the-city-internet-solutions">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/b98cf8d8374bf92e.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the The City Internet Solutions project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/b98cf8d8374bf92e.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Internet Service Provider (ISP)</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/the-city-internet-solutions">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>The City Internet Solutions</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/the-city-internet-solutions"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/gamers-safaris">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/79d4a7090f833de8.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Gamers Safaris project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/79d4a7090f833de8.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Luxury &amp; Family Safaris</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/gamers-safaris">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Gamers Safaris</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/gamers-safaris"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/madenitawe">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/de802af22294c624.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Madenitawe project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/de802af22294c624.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Personal Debt Management</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/madenitawe">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Madenitawe</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/madenitawe"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/oncolink">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/e9c54349cd839dfe.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Oncolink project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/e9c54349cd839dfe.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Oncology Resource Hub</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/oncolink">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Oncolink</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/oncolink"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/medixlearners">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/2cc0572cb9885da4.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Medixlearners project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/2cc0572cb9885da4.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Pharmacy Education</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/medixlearners">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Medixlearners</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/medixlearners"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/visionaries">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/10947be46f3d0055.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Visionaries project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/10947be46f3d0055.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Pharmacist SACCO/Financial Hub</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/visionaries">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Visionaries</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/visionaries"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/kaky-travel">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/65b018df9faaf97c.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Kaky Travel project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/65b018df9faaf97c.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>East Africa Travel Agency</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/kaky-travel">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Kaky Travel</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/kaky-travel"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/pomper-adventures">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/02e4722f34b94207.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Pomper Adventures project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/02e4722f34b94207.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Adventure Tour Operator</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/pomper-adventures">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Pomper Adventures</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/pomper-adventures"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/billan-beauty">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/e2e53d7b8181dc6e.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Billan Beauty project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/e2e53d7b8181dc6e.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>International E-commerce (Beauty)</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/billan-beauty">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Billan Beauty</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/billan-beauty"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/onzetrends">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/6ea884d7b1c25e98.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Onzetrends project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/6ea884d7b1c25e98.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Fashion &amp; Accessories E-commerce</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/onzetrends">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Onzetrends</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/onzetrends"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/high-yields">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/60a7ddc796a213ef.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the High Yields project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/60a7ddc796a213ef.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Investment &amp; Wealth Management</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/high-yields">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>High Yields</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/high-yields"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/miles-electro-mech">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/70b943ade5a0e4af.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Miles Electro-Mech project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/70b943ade5a0e4af.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Engineering &amp; Construction Solutions</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/miles-electro-mech">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Miles Electro-Mech</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/miles-electro-mech"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/born2fro">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/48bd1ce55ee8146e.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Born2fro project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/48bd1ce55ee8146e.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Natural Hair Care Retail</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/born2fro">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Born2fro</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/born2fro"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/charities-association-kenya">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/02bd68c1c45d5c06.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Charities Association of Kenya (CAK) project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/02bd68c1c45d5c06.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>NGO/PBO Support &amp; Advocacy</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/charities-association-kenya">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Charities Association of Kenya (CAK)</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/charities-association-kenya"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/purymax-exercise-therapy">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/2149757d70cc1135.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Purymax Exercise Therapy project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/2149757d70cc1135.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Physical Therapy &amp; Sports Rehab</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/purymax-exercise-therapy">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Purymax Exercise Therapy</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/purymax-exercise-therapy"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/greenhunt-energy">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/4d65bbeedbfac5c2.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Greenhunt Energy project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/4d65bbeedbfac5c2.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Solar &amp; Renewable Energy Sales</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/greenhunt-energy">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Greenhunt Energy</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/greenhunt-energy"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/hometime-investments">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/c0a4bf321d4f53be.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Hometime Investments project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/c0a4bf321d4f53be.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Coastal Real Estate &amp; AirBnB</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/hometime-investments">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Hometime Investments</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/hometime-investments"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/israel-universal-church">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/e29758248957b6d2.png" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Israel Universal Church project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/e29758248957b6d2.png" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Faith-Based Organization</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/israel-universal-church">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Israel Universal Church</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/israel-universal-church"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/sedhuro">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/b231034f3d40e9aa.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the SEDHURO project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/b231034f3d40e9aa.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Community Health &amp; Advocacy</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/sedhuro">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>SEDHURO</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/sedhuro"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/nairobi-tote-bags">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/1741cb6c037e7b94.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Nairobi Tote Bags project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/1741cb6c037e7b94.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Custom Tote Bags &amp; Corporate Branding E-Commerce</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/nairobi-tote-bags">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Nairobi Tote Bags</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/nairobi-tote-bags"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/pals-flowers">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/94cd48876982960b.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Pals Flowers project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/94cd48876982960b.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Florist &amp; Gifting E-Commerce</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/pals-flowers">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Pals Flowers</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/pals-flowers"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/furniture-center">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/73dd1500bafdf4d2.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Furniture Center project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/73dd1500bafdf4d2.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Home Furniture E-Commerce</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/furniture-center">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Furniture Center</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/furniture-center"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/billy-furniture">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/418fa24d036e1961.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Billy Furniture project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/418fa24d036e1961.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Office &amp; Home Furniture E-Commerce</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/billy-furniture">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Billy Furniture</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/billy-furniture"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/mikotech-signage-branding">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/b22b1c183d7fda94.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt={"Screenshot of the Mikotech Signage & Branding project"} loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/b22b1c183d7fda94.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Signage, Branding &amp; Vehicle Wraps</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/mikotech-signage-branding">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Mikotech Signage &amp; Branding</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/mikotech-signage-branding"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
            <div className={"rounded-lg \x62g-card group \x73hadow-lg \x68over:\x73hadow-xl transition-all \x64uration-300 \x65ase-in-out \x74ransform \x68over:\x73cale-[\x31.\x302] \x62order flex flex-col [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
              <a href="/portfolio/numeru-health-care-training-institute">
                <div className={"flex-col \x73pace-y-1.\x35 w-full cursor-pointer \x62g-secondary/\x350 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                  <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/0ef910e115b11939.jpg" />
                  <img className={"p-3 \x74ransition-transform \x64uration-500 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Screenshot of the Numeru Health Care Training Institute project" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/0ef910e115b11939.jpg" />
                  <div className={"\x62g-gradient-to-t \x66rom-black/\x340 \x76ia-transparent \x74o-transparent [&]:pointer-events-none [&]:absolute [inset:0px]"} />
                  <div className={"[&]:absolute [bottom:0.5rem] [left:0.5rem] [z-index:10]"}>
                    <span className={"\x62g-accent \x70x-3 \x74ext-xs \x66ont-semibold rounded-full \x73hadow-md [color:hsl(var(--accent-foreground))] [padding-bottom:0.375rem] [padding-top:0.375rem]"}>Healthcare Vocational Training Institute</span>
                  </div>
                </div>
              </a>
              <div className={"p-6 flex flex-col \x66lex-grow"}>
                <a href="/portfolio/numeru-health-care-training-institute">
                  <h3 className={"\x66ont-semibold \x74ext-xl text-primary mb-4 cursor-pointer \x68over:\x75nderline [letter-spacing:-0.025em]"}>Numeru Health Care Training Institute</h3>
                </a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 mt-auto [&:disabled]:pointer-events-none"} href="/portfolio/numeru-health-care-training-institute"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg> View Case Study</a>
              </div>
            </div>
          </div>
          <section className={"text-center mt-16 \x62g-primary/\x310 rounded-lg [padding-bottom:4rem] [padding-top:4rem]"} style={{ animationDelay: "0.4s" } as CSSProperties}>
            <h2 className={"\x74ext-3xl \x66ont-bold text-primary mb-4"}>Have a Project in Mind?</h2>
            <p className={"\x74ext-lg \x6dx-auto mb-6 [color:hsl(var(--foreground)/.8)] [max-width:42rem]"}>Let's turn your ideas into a reality. We're excited to learn about your project and how we can help you succeed.</p>
            <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-11 rounded-md \x70x-8 [&:disabled]:pointer-events-none"} href="/contact">Get a Free Quote</a>
          </section>
        </div>
      </main>
      <SiteFooter />
      <SiteOverlays />
    </>
  );
}

