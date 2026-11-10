import type { CSSProperties } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";
import heroDesktopVideo from "../assets/hero-desktop.mp4.asset.json";
import heroMobileVideo from "../assets/hero-mobile.mp4.asset.json";
import { SiteFooter, SiteHeader, SiteOverlays } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beta Corporation - Custom Web Design \u0026 Digital Solutions in Nairobi" },
      { name: "description", content: "Beta Corporation builds bespoke websites, e-commerce stores and IT solutions in Nairobi that elevate your brand and drive measurable growth." },
      { property: "og:title", content: "Beta Corporation - Custom Web Design \u0026 Digital Solutions" },
      { property: "og:description", content: "Award-winning Nairobi web design agency: bespoke websites, digital marketing, domains and custom software." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: { importedDocument: { html: { "className": "__variable_b021ee __variable_f166df", "lang": "en" }, body: { "className": "\x66ont-body \x61ntialiased \x66lex \x66lex-col \x6din-h-screen \x62g-background \x74ext-foreground" } } },
  component: Index,
});


const TESTIMONIAL_COUNT = 6;

const HERO_WORDS = ["Web Design", "Digital Marketing", "Brand Identity", "SEO Strategy", "E-Commerce"];

function Index() {
  const portfolioScroller = useRef<HTMLDivElement | null>(null);
  const [portfolioCanLeft, setPortfolioCanLeft] = useState(false);
  const [portfolioCanRight, setPortfolioCanRight] = useState(true);
  const updatePortfolioArrows = () => {
    const el = portfolioScroller.current;
    if (!el) return;
    setPortfolioCanLeft(el.scrollLeft > 4);
    setPortfolioCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };
  const scrollPortfolio = (direction: 1 | -1) => {
    const el = portfolioScroller.current;
    if (el) el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };
  const [scrollProgress, setScrollProgress] = useState(0);
  const [testimonial, setTestimonial] = useState(0);
  useEffect(() => {
    // Top progress bar and floating quote pill follow page scroll, as on the source.
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);
  useEffect(() => {
    // Testimonials auto-advance every 5 seconds; manual navigation restarts the timer.
    const timer = window.setTimeout(() => setTestimonial(index => (index + 1) % TESTIMONIAL_COUNT), 5000);
    return () => window.clearTimeout(timer);
  }, [testimonial]);
  const testimonialSlideClass = (index: number) => index === testimonial ? "opacity-100 \x74ranslate-x-0" : index < testimonial ? "opacity-0 \x2dtranslate-x-full" : "opacity-0 \x74ranslate-x-full";
  const showQuotePill = scrollProgress > 30;
  return (
    <>
      <style>{capturedCSS}</style>
      <div hidden />
      <SiteHeader />
      <main className={"\x66lex-grow"}>
        <div className={"top-0 left-0 h-[3px] bg-transparent [&]:pointer-events-none [&]:fixed [right:0px] [z-index:60]"}>
          <div className={"h-full \x62g-gradient-to-r \x66rom-primary \x74o-accent \x74ransition-[\x77idth] \x64uration-150 \x65ase-out [animation-duration:0.15s] [transition-property:width]"} style={{ width: `${scrollProgress}%` }} />
        </div>
        <div className={`\x2dtranslate-x-1/\x32 transition-all \x64uration-500 ${showQuotePill ? "opacity-100 \x74ranslate-y-0" : "opacity-0 \x74ranslate-y-4 [&]:pointer-events-none"} [&]:fixed [animation-duration:0.5s] [bottom:5rem] [left:50%] [z-index:50]`}>
          <a className={"inline-flex items-center gap-2 \x70x-5 \x70y-2.\x35 rounded-full \x62g-primary text-white \x73hadow-lg \x73hadow-primary/\x330 \x68over:\x73hadow-xl \x68over:\x73hadow-primary/\x340 \x68over:\x73cale-105 transition-all \x74ext-sm \x66ont-medium"} href="/contact"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>Get a Free Quote<svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
        </div>
        <div className={"h-full w-full \x62g-background \x62g-[\x72adial-gradient(#\x655e7eb_1px,\x74ransparent_1px)] [background-size:16px_16px] \x64ark:\x62g-[\x72adial-gradient(#\x66fffff20_1px,\x74ransparent_1px)] [&]:fixed [inset:0px] [z-index:-10]"} />
        <div className="[overflow-x:hidden]">
          <ImportedSectionCraftingDigitalECommerce />
          <div className={"-mt-12 [&]:relative [z-index:30]"}>
            <div className={"\x63ontainer \x6dx-auto \x70x-4 [width:100%]"}>
              <div className={"\x62g-white \x64ark:\x62g-gray-900 rounded-2xl \x73hadow-xl \x62order \x62order-gray-100 \x64ark:\x62order-gray-800 p-6 \x6dd:\x70-8"}>
                <div className={"grid grid-cols-2 \x6dd:\x67rid-cols-4 gap-6 \x6dd:\x67ap-8"}>
                  <div className="text-center group">
                    <div className={"\x74ext-3xl \x6dd:\x74ext-4xl \x66ont-headline \x66ont-bold text-primary \x74ransition-transform \x67roup-hover:\x73cale-110 \x64uration-300 [animation-duration:0.3s]"}>300+</div>
                    <p className={"\x74ext-sm text-muted-foreground mt-1"}>Projects Delivered</p>
                  </div>
                  <div className="text-center group">
                    <div className={"\x74ext-3xl \x6dd:\x74ext-4xl \x66ont-headline \x66ont-bold text-primary \x74ransition-transform \x67roup-hover:\x73cale-110 \x64uration-300 [animation-duration:0.3s]"}>18+</div>
                    <p className={"\x74ext-sm text-muted-foreground mt-1"}>Industries Served</p>
                  </div>
                  <div className="text-center group">
                    <div className={"\x74ext-3xl \x6dd:\x74ext-4xl \x66ont-headline \x66ont-bold text-primary \x74ransition-transform \x67roup-hover:\x73cale-110 \x64uration-300 [animation-duration:0.3s]"}>4.9★</div>
                    <p className={"\x74ext-sm text-muted-foreground mt-1"}>Client Rating</p>
                  </div>
                  <div className="text-center group">
                    <div className={"\x74ext-3xl \x6dd:\x74ext-4xl \x66ont-headline \x66ont-bold text-primary \x74ransition-transform \x67roup-hover:\x73cale-110 \x64uration-300 [animation-duration:0.3s]"}>100%</div>
                    <p className={"\x74ext-sm text-muted-foreground mt-1"}>Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"transition-all \x64uration-700 \x65ase-out opacity-100 \x74ranslate-y-0 \x70y-12 mt-4"} style={{ transitionDelay: "0ms" }}>
            <div className={"\x63ontainer \x6dx-auto \x70x-4 [width:100%]"}>
              <h3 className={"text-center \x74ext-sm \x66ont-semibold text-muted-foreground mb-8 [&]:uppercase [letter-spacing:0.1em]"}>Trusted By Visionary Partners</h3>
              <div className={"flex [&]:relative [mask-image:linear-gradient(90deg,transparent_0px,black_128px,black_calc(100%_-_128px),transparent)] [overflow:hidden]"}>
                <div className={"flex \x61nimate-scroll-logos \x68over:[\x61nimation-play-state:\x70aused]"}>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://luswetinabutola.com/" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt={"Logo of Lusweti & Nabutola Advocates"} loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/e79b33353ffd1fa7.png" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://sherranehomes.co.ke" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt="Logo of Sherrane Homes" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/be6aa6485fde1bbd.png" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://malukibespoke.com" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt="Logo of Maluki Bespoke" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/d2cb676613083aa0.png" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://regalscopelogistics.com" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt="Logo of Regal Scope Logistics" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://smaadvocates.com" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt={"Logo of Siema Majani & Associates Advocates"} loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/ea3fa304b42af66a.png" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://difrontealmare.com" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt="Logo of Di Fronte Al Mare" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/35b47f1fe29908ee.png" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://sagebeans.co.ke" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt="Logo of Sage Beans Export" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/4861a6b3936f8591.png" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://electronengineers.com" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt="Logo of Electron Engineers" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://opsok.org" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt="Logo of OPSOK" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/1091ba3bfdb3d6d4.png" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://batteriq.com" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} alt="Logo of Batteriq" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://irenemuendoisuzu.co.ke" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} alt="Logo of Irene Muendo Isuzu" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://dealforge.org" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt="Logo of Dealforge" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/fc7698f38cd096d6.png" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://goldenprintfx.com" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} alt="Logo of GoldenPrintFX" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://gamerssafaris.com" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} alt="Logo of Gamers Safaris" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://kakytravel.com" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt="Logo of Kaky Travel" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/82dc3bf2bdcdaaea.png" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="http://pomperadventures.com" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} alt="Logo of Pomper Adventures" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://onzetrends.co.ke" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt="Logo of Onzetrends" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/5e7f233f507940ad.png" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://israeluniversalchurch.org" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt="Logo of Israel Universal Church" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/02d913ba5404bd73.png" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://luswetinabutola.com/" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt={"Logo of Lusweti & Nabutola Advocates"} loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/e79b33353ffd1fa7.png" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://sherranehomes.co.ke" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt="Logo of Sherrane Homes" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/be6aa6485fde1bbd.png" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://malukibespoke.com" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt="Logo of Maluki Bespoke" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/d2cb676613083aa0.png" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://regalscopelogistics.com" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} alt="Logo of Regal Scope Logistics" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://smaadvocates.com" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt={"Logo of Siema Majani & Associates Advocates"} loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/ea3fa304b42af66a.png" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://difrontealmare.com" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt="Logo of Di Fronte Al Mare" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/35b47f1fe29908ee.png" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://sagebeans.co.ke" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt="Logo of Sage Beans Export" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/4861a6b3936f8591.png" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://electronengineers.com" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt="Logo of Electron Engineers" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://opsok.org" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt="Logo of OPSOK" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/1091ba3bfdb3d6d4.png" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://batteriq.com" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} alt="Logo of Batteriq" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://irenemuendoisuzu.co.ke" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} alt="Logo of Irene Muendo Isuzu" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://dealforge.org" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt="Logo of Dealforge" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/fc7698f38cd096d6.png" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://goldenprintfx.com" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} alt="Logo of GoldenPrintFX" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://gamerssafaris.com" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} alt="Logo of Gamers Safaris" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://kakytravel.com" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt="Logo of Kaky Travel" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/82dc3bf2bdcdaaea.png" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="http://pomperadventures.com" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} alt="Logo of Pomper Adventures" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://onzetrends.co.ke" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt="Logo of Onzetrends" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/5e7f233f507940ad.png" />
                    </a>
                  </div>
                  <div className={"flex-shrink-0 \x6dx-8 flex items-center justify-center [width:12rem]"}>
                    <a className={"transition-all \x64uration-300 \x68over:\x73cale-105 \x67rayscale \x68over:\x67rayscale-0 opacity-60 \x68over:\x6fpacity-100 [animation-duration:0.3s] [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href="https://israeluniversalchurch.org" rel="noopener noreferrer" target="_blank">
                      <img className={"h-16 [&]:object-contain"} style={{ color: "transparent" }} alt="Logo of Israel Universal Church" loading="lazy" width="150" height="60" decoding="async" data-nimg="1" src="/site-assets/02d913ba5404bd73.png" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"transition-all \x64uration-700 \x65ase-out opacity-100 \x74ranslate-y-0 \x63ontainer \x6dx-auto \x70x-4 [padding-bottom:2rem] [padding-top:2rem] [width:100%]"} style={{ transitionDelay: "0ms" }}>
            <div className="text-center mb-12">
              <h2 className={"\x74ext-3xl \x6dd:\x74ext-4xl \x66ont-headline \x66ont-bold"}>Empowering Your Digital Journey</h2>
              <p className={"mt-4 \x74ext-lg text-muted-foreground \x6dx-auto [max-width:48rem]"}>We focus on clear, smart digital strategies and beautiful design to create online experiences that truly connect with your audience.</p>
            </div>
            <div className="grid text-center [gap:2rem] [@media(min-width:768px)]:[grid-template-columns:repeat(3,minmax(0px,1fr))]">
              <div className={"transition-all \x64uration-700 \x65ase-out opacity-100 \x74ranslate-y-0"} style={{ transitionDelay: "0ms" }}>
                <div className={"rounded-lg \x62order \x62g-card \x73hadow-sm p-6 glassmorphism transition-all \x64uration-300 \x68over:\x2dtranslate-y-2 \x68over:\x73hadow-primary/\x320 h-full [animation-duration:0.3s] [color:hsl(var(--card-foreground))]"}>
                  <div className={"flex flex-col \x73pace-y-1.\x35 p-6 items-center"}>
                    <div className={"p-4 \x62g-primary/\x310 rounded-full mb-4"}>
                      <svg className="h-8 text-primary [width:2rem]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </div>
                    <h3 className={"\x74ext-2xl \x66ont-semibold \x6ceading-none [letter-spacing:-0.025em]"}>Fresh &amp; Smart Solutions</h3>
                  </div>
                  <div className="p-6 pt-0">
                    <p>We build digital platforms that are not just strong and adaptable for today, but also ready for wherever your business heads next.</p>
                  </div>
                </div>
              </div>
              <div className={"transition-all \x64uration-700 \x65ase-out opacity-100 \x74ranslate-y-0"} style={{ transitionDelay: "150ms" }}>
                <div className={"rounded-lg \x62order \x62g-card \x73hadow-sm p-6 glassmorphism transition-all \x64uration-300 \x68over:\x2dtranslate-y-2 \x68over:\x73hadow-primary/\x320 h-full [animation-duration:0.3s] [color:hsl(var(--card-foreground))]"}>
                  <div className={"flex flex-col \x73pace-y-1.\x35 p-6 items-center"}>
                    <div className={"p-4 \x62g-primary/\x310 rounded-full mb-4"}>
                      <svg className="h-8 text-primary [width:2rem]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <h3 className={"\x74ext-2xl \x66ont-semibold \x6ceading-none [letter-spacing:-0.025em]"}>We're In It Together</h3>
                  </div>
                  <div className="p-6 pt-0">
                    <p>Think of us as part of your team. We listen to your ideas and work closely with you to create digital tools that make a real difference.</p>
                  </div>
                </div>
              </div>
              <div className={"transition-all \x64uration-700 \x65ase-out opacity-100 \x74ranslate-y-0"} style={{ transitionDelay: "300ms" }}>
                <div className={"rounded-lg \x62order \x62g-card \x73hadow-sm p-6 glassmorphism transition-all \x64uration-300 \x68over:\x2dtranslate-y-2 \x68over:\x73hadow-primary/\x320 h-full [animation-duration:0.3s] [color:hsl(var(--card-foreground))]"}>
                  <div className={"flex flex-col \x73pace-y-1.\x35 p-6 items-center"}>
                    <div className={"p-4 \x62g-primary/\x310 rounded-full mb-4"}>
                      <svg className="h-8 text-primary [width:2rem]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <h3 className={"\x74ext-2xl \x66ont-semibold \x6ceading-none [letter-spacing:-0.025em]"}>Quality You Can Count On</h3>
                  </div>
                  <div className="p-6 pt-0">
                    <p>We're all about the details. From start to finish, we make sure everything we build is top-notch and works smoothly for everyone.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"transition-all \x64uration-700 \x65ase-out opacity-100 \x74ranslate-y-0 \x70y-16 \x6dd:\x70y-20"} style={{ transitionDelay: "0ms" }}>
            <div className={"\x63ontainer \x6dx-auto \x70x-4 [width:100%]"}>
              <div className={"rounded-3xl \x62g-gradient-to-br \x66rom-primary \x76ia-[#\x32596be] \x74o-[#\x32b01ef] text-white \x73hadow-2xl [&]:relative [overflow:hidden]"}>
                <div className={"h-96 \x62g-white/\x310 rounded-full \x62lur-3xl [&]:absolute [right:-6rem] [top:-6rem] [width:24rem]"} />
                <div className={"h-96 \x62g-white/\x310 rounded-full \x62lur-3xl [&]:absolute [bottom:-6rem] [left:-6rem] [width:24rem]"} />
                <div className={"\x62g-[\x72adial-gradient(\x63ircle_at_top_left,\x72gba(\x3255,\x3255,\x3255,\x30.\x315),\x74ransparent_50%)] [&]:absolute [inset:0px]"} />
                <div className={"\x70x-6 \x70y-12 \x6dd:\x70x-12 \x6dd:\x70y-16 grid gap-10 items-center [&]:relative [@media(min-width:1024px)]:[grid-template-columns:repeat(2,minmax(0px,1fr))]"}>
                  <div>
                    <div className={"inline-flex items-center gap-2 \x70x-3 rounded-full \x62g-white/\x315 \x62ackdrop-blur-sm \x62order \x62order-white/\x320 mb-5 [padding-bottom:0.25rem] [padding-top:0.25rem]"}>
                      <svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                      <span className={"\x74ext-xs \x66ont-semibold [&]:uppercase [letter-spacing:0.025em]"}>Get Your Domain</span>
                    </div>
                    <h2 className={"\x74ext-3xl \x6dd:\x74ext-4xl \x6cg:\x74ext-5xl \x66ont-headline \x66ont-bold \x6ceading-tight mb-4"}>Claim Your <span className={"\x74ext-yellow-300 [color:rgb(253_224_71/var(--tw-text-opacity,1))]"}>.co.ke</span> Domain<br />from <span className={"[&]:underline [text-decoration-color:rgba(253,224,71,0.6)] [text-decoration-thickness:4px] [text-underline-offset:4px]"}>KES 1,500</span>/year</h2>
                    <p className={"\x74ext-base \x6dd:\x74ext-lg mb-6 [color:rgba(255,255,255,0.85)] [max-width:36rem]"}>Register, transfer or renew your domain in seconds. Pay with M-Pesa, manage DNS yourself, and own your online identity today.</p>
                    <form className={"mb-5 [&]:relative"}>
                      <div className={"flex flex-col \x73m:\x66lex-row gap-2 \x62g-white rounded-2xl \x73hadow-xl [padding:0.5rem]"}>
                        <div className={"[&]:flex-1 [&]:relative"}>
                          <svg className={"\x2dtranslate-y-1/\x32 h-5 w-5 text-muted-foreground [&]:absolute [left:1rem] [top:50%]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                          </svg>
                          <input className={"w-full pl-12 pr-4 \x70y-3 text-foreground \x70laceholder:\x74ext-muted-foreground bg-transparent \x62order-0 \x66ocus:\x6futline-none \x66ocus:\x72ing-0 \x74ext-base"} type="text" placeholder="yourbusiness.co.ke" aria-label="Search for a domain" defaultValue="" />
                        </div>
                        <button className={"inline-flex items-center justify-center gap-2 \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 h-11 rounded-md \x62g-primary \x68over:\x62g-primary/\x390 text-white shrink-0 \x70x-6 group [&]:whitespace-nowrap [&:disabled]:pointer-events-none"} type="submit">Check Availability<svg className={"ml-2 h-4 w-4 \x74ransition-transform \x67roup-hover:\x74ranslate-x-1 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></button>
                      </div>
                    </form>
                    <ul className={"grid grid-cols-2 \x74ext-sm [column-gap:1rem] [row-gap:0.5rem]"}>
                      <li className={"flex items-center gap-2 \x74ext-white/\x390"}>
                        <svg className={"h-4 w-4 \x74ext-yellow-300 shrink-0 [color:rgb(253_224_71/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                        <span>M-Pesa STK push</span>
                      </li>
                      <li className={"flex items-center gap-2 \x74ext-white/\x390"}>
                        <svg className={"h-4 w-4 \x74ext-yellow-300 shrink-0 [color:rgb(253_224_71/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                        <span>Free WHOIS privacy</span>
                      </li>
                      <li className={"flex items-center gap-2 \x74ext-white/\x390"}>
                        <svg className={"h-4 w-4 \x74ext-yellow-300 shrink-0 [color:rgb(253_224_71/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                        <span>Self-service DNS</span>
                      </li>
                      <li className={"flex items-center gap-2 \x74ext-white/\x390"}>
                        <svg className={"h-4 w-4 \x74ext-yellow-300 shrink-0 [color:rgb(253_224_71/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                        <span>Auto-renewal reminders</span>
                      </li>
                    </ul>
                  </div>
                  <div className={"hidden \x6cg:\x62lock"}>
                    <div className="grid grid-cols-2 gap-3">
                      <div className={"\x62g-white/\x310 \x62ackdrop-blur-sm \x62order \x62order-white/\x320 rounded-xl p-4 \x68over:\x62g-white/\x315 transition-colors [&]:relative"}>
                        <span className={"\x70x-2 \x62g-yellow-300 \x74ext-black text-[10px] \x66ont-bold rounded-full [&]:absolute [&]:uppercase [color:rgb(0_0_0/var(--tw-text-opacity,1))] [letter-spacing:0.025em] [padding-bottom:0.125rem] [padding-top:0.125rem] [right:0.75rem] [top:-0.5rem]"}>Most Popular</span>
                        <div className={"\x74ext-2xl \x66ont-bold \x66ont-headline"}>.co.ke</div>
                        <div className={"\x74ext-xs mt-1 [color:rgba(255,255,255,0.75)]"}>from KES 1,500/yr</div>
                      </div>
                      <div className={"\x62g-white/\x310 \x62ackdrop-blur-sm \x62order \x62order-white/\x320 rounded-xl p-4 \x68over:\x62g-white/\x315 transition-colors [&]:relative"}>
                        <div className={"\x74ext-2xl \x66ont-bold \x66ont-headline"}>.ke</div>
                        <div className={"\x74ext-xs mt-1 [color:rgba(255,255,255,0.75)]"}>from KES 2,500/yr</div>
                      </div>
                      <div className={"\x62g-white/\x310 \x62ackdrop-blur-sm \x62order \x62order-white/\x320 rounded-xl p-4 \x68over:\x62g-white/\x315 transition-colors [&]:relative"}>
                        <div className={"\x74ext-2xl \x66ont-bold \x66ont-headline"}>.com</div>
                        <div className={"\x74ext-xs mt-1 [color:rgba(255,255,255,0.75)]"}>from KES 1,800/yr</div>
                      </div>
                      <div className={"\x62g-white/\x310 \x62ackdrop-blur-sm \x62order \x62order-white/\x320 rounded-xl p-4 \x68over:\x62g-white/\x315 transition-colors [&]:relative"}>
                        <div className={"\x74ext-2xl \x66ont-bold \x66ont-headline"}>.africa</div>
                        <div className={"\x74ext-xs mt-1 [color:rgba(255,255,255,0.75)]"}>from KES 2,500/yr</div>
                      </div>
                      <div className={"\x62g-white/\x310 \x62ackdrop-blur-sm \x62order \x62order-white/\x320 rounded-xl p-4 \x68over:\x62g-white/\x315 transition-colors [&]:relative"}>
                        <div className={"\x74ext-2xl \x66ont-bold \x66ont-headline"}>.org</div>
                        <div className={"\x74ext-xs mt-1 [color:rgba(255,255,255,0.75)]"}>from KES 2,000/yr</div>
                      </div>
                      <div className={"\x62g-white/\x310 \x62ackdrop-blur-sm \x62order \x62order-white/\x320 rounded-xl p-4 \x68over:\x62g-white/\x315 transition-colors [&]:relative"}>
                        <span className={"\x70x-2 \x62g-yellow-300 \x74ext-black text-[10px] \x66ont-bold rounded-full [&]:absolute [&]:uppercase [color:rgb(0_0_0/var(--tw-text-opacity,1))] [letter-spacing:0.025em] [padding-bottom:0.125rem] [padding-top:0.125rem] [right:0.75rem] [top:-0.5rem]"}>Tech</span>
                        <div className={"\x74ext-2xl \x66ont-bold \x66ont-headline"}>.io</div>
                        <div className={"\x74ext-xs mt-1 [color:rgba(255,255,255,0.75)]"}>from KES 6,500/yr</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-3 mt-5">
                      <a className={"inline-flex items-center justify-center gap-2 \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 h-9 rounded-md \x70x-3 text-white \x68over:\x62g-white/\x315 \x68over:\x74ext-white [&]:whitespace-nowrap [&:disabled]:pointer-events-none"} href="/contact">All TLD pricing →</a>
                      <span className="[color:rgba(255,255,255,0.4)]">|</span>
                      <a className={"inline-flex items-center justify-center gap-2 \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 h-9 rounded-md \x70x-3 text-white \x68over:\x62g-white/\x315 \x68over:\x74ext-white [&]:whitespace-nowrap [&:disabled]:pointer-events-none"} href="/contact">Transfer in →</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"transition-all \x64uration-700 \x65ase-out opacity-100 \x74ranslate-y-0 \x70y-16"} style={{ transitionDelay: "0ms" }}>
            <div className={"\x63ontainer \x6dx-auto \x70x-4 [width:100%]"}>
              <div className="text-center mb-12">
                <h2 className={"\x74ext-3xl \x6dd:\x74ext-4xl \x66ont-headline \x66ont-bold"}>From Vision to Reality: Our Work</h2>
                <p className={"mt-4 \x74ext-lg text-muted-foreground \x6dx-auto [max-width:48rem]"}>We don't just build websites — we craft digital experiences that solve real-world problems and drive business growth.</p>
              </div>
              <div className={"group/carousel [&]:relative"}>
{portfolioCanLeft && (
                <button type="button" className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-white" aria-label="Scroll left" onClick={() => scrollPortfolio(-1)}>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                )}
                {portfolioCanRight && (
                <button className={"\x2dtranslate-y-1/\x32 h-10 rounded-full \x62g-white/\x390 \x64ark:\x62g-gray-800/\x390 \x73hadow-lg flex items-center justify-center opacity-0 \x67roup-hover/\x63arousel:\x6fpacity-100 \x74ransition-opacity \x68over:\x62g-white \x64ark:\x68over:\x62g-gray-700 [&]:absolute [right:0.5rem] [top:50%] [transition-property:opacity] [width:2.5rem] [z-index:10]"} type="button" aria-label="Scroll right" onClick={() => scrollPortfolio(1)}>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
                )}
                <div className={"flex \x73nap-mandatory scrollbar-hide [&]:scroll-smooth [gap:1.25rem] [overflow-x:auto] [padding-bottom:1rem] [scroll-snap-type:x_var(--tw-scroll-snap-strictness)]"} style={{ scrollbarWidth: "none" } as CSSProperties} ref={portfolioScroller} onScroll={updatePortfolioArrows}>
                  <a className={"shrink-0 w-[280px] \x73m:\x77-[\x3320px] \x6dd:\x77-[\x3350px] [scroll-snap-align:start]"} href="/portfolio/cwpc-kenya-safaris">
                    <div className={"rounded-lg \x62order \x62g-card \x73hadow-sm group glassmorphism transition-all \x64uration-500 \x68over:\x2dtranslate-y-2 \x68over:\x73hadow-xl h-full [animation-duration:0.5s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
                      <div className={"flex-col \x73pace-y-1.\x35 \x62g-secondary/\x340 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                        <img className={"\x62lur-xl opacity-30 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/d08a1e02ddd7ae4c.jpg" />
                        <img className={"p-3 \x74ransition-transform \x64uration-700 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="CWPC Kenya Safaris" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/d08a1e02ddd7ae4c.jpg" />
                        <div className={"\x62g-gradient-to-t \x66rom-black/\x360 \x76ia-transparent \x74o-transparent opacity-0 \x67roup-hover:\x6fpacity-100 \x74ransition-opacity \x64uration-300 [&]:pointer-events-none [&]:absolute [animation-duration:0.3s] [inset:0px] [transition-property:opacity]"} />
                        <div className={"opacity-0 \x67roup-hover:\x6fpacity-100 \x74ranslate-y-2 \x67roup-hover:\x74ranslate-y-0 transition-all \x64uration-300 [&]:pointer-events-none [&]:absolute [animation-duration:0.3s] [bottom:0.75rem] [left:0.75rem] [right:0.75rem]"}>
                          <span className={"inline-block \x62g-primary/\x390 text-white \x74ext-xs rounded-full \x66ont-medium [padding-bottom:0.25rem] [padding-left:0.625rem] [padding-right:0.625rem] [padding-top:0.25rem]"}>Safari &amp; Experiential Travel</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className={"\x66ont-semibold text-primary \x74ext-base mb-1 \x67roup-hover:\x75nderline text-ellipsis [&]:whitespace-nowrap [letter-spacing:-0.025em] [overflow:hidden]"}>CWPC Kenya Safaris</h3>
                        <p className={"\x74ext-xs text-muted-foreground flex items-center [gap:0.25rem]"}>View Case Study <svg className={"h-3 \x74ransition-transform \x67roup-hover:\x74ranslate-x-1 [width:0.75rem]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></p>
                      </div>
                    </div>
                  </a>
                  <a className={"shrink-0 w-[280px] \x73m:\x77-[\x3320px] \x6dd:\x77-[\x3350px] [scroll-snap-align:start]"} href="/portfolio/nutrawell-africa">
                    <div className={"rounded-lg \x62order \x62g-card \x73hadow-sm group glassmorphism transition-all \x64uration-500 \x68over:\x2dtranslate-y-2 \x68over:\x73hadow-xl h-full [animation-duration:0.5s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
                      <div className={"flex-col \x73pace-y-1.\x35 \x62g-secondary/\x340 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                        <img className={"\x62lur-xl opacity-30 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/79e70658913589f7.jpg" />
                        <img className={"p-3 \x74ransition-transform \x64uration-700 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Nutrawell Africa Ltd" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/79e70658913589f7.jpg" />
                        <div className={"\x62g-gradient-to-t \x66rom-black/\x360 \x76ia-transparent \x74o-transparent opacity-0 \x67roup-hover:\x6fpacity-100 \x74ransition-opacity \x64uration-300 [&]:pointer-events-none [&]:absolute [animation-duration:0.3s] [inset:0px] [transition-property:opacity]"} />
                        <div className={"opacity-0 \x67roup-hover:\x6fpacity-100 \x74ranslate-y-2 \x67roup-hover:\x74ranslate-y-0 transition-all \x64uration-300 [&]:pointer-events-none [&]:absolute [animation-duration:0.3s] [bottom:0.75rem] [left:0.75rem] [right:0.75rem]"}>
                          <span className={"inline-block \x62g-primary/\x390 text-white \x74ext-xs rounded-full \x66ont-medium [padding-bottom:0.25rem] [padding-left:0.625rem] [padding-right:0.625rem] [padding-top:0.25rem]"}>Health &amp; Wellness E-Commerce</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className={"\x66ont-semibold text-primary \x74ext-base mb-1 \x67roup-hover:\x75nderline text-ellipsis [&]:whitespace-nowrap [letter-spacing:-0.025em] [overflow:hidden]"}>Nutrawell Africa Ltd</h3>
                        <p className={"\x74ext-xs text-muted-foreground flex items-center [gap:0.25rem]"}>View Case Study <svg className={"h-3 \x74ransition-transform \x67roup-hover:\x74ranslate-x-1 [width:0.75rem]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></p>
                      </div>
                    </div>
                  </a>
                  <a className={"shrink-0 w-[280px] \x73m:\x77-[\x3320px] \x6dd:\x77-[\x3350px] [scroll-snap-align:start]"} href="/portfolio/lion-cubs-contest">
                    <div className={"rounded-lg \x62order \x62g-card \x73hadow-sm group glassmorphism transition-all \x64uration-500 \x68over:\x2dtranslate-y-2 \x68over:\x73hadow-xl h-full [animation-duration:0.5s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
                      <div className={"flex-col \x73pace-y-1.\x35 \x62g-secondary/\x340 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                        <img className={"\x62lur-xl opacity-30 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/15bb8cddd1a5366c.jpg" />
                        <img className={"p-3 \x74ransition-transform \x64uration-700 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Lion Cubs Contest" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/15bb8cddd1a5366c.jpg" />
                        <div className={"\x62g-gradient-to-t \x66rom-black/\x360 \x76ia-transparent \x74o-transparent opacity-0 \x67roup-hover:\x6fpacity-100 \x74ransition-opacity \x64uration-300 [&]:pointer-events-none [&]:absolute [animation-duration:0.3s] [inset:0px] [transition-property:opacity]"} />
                        <div className={"opacity-0 \x67roup-hover:\x6fpacity-100 \x74ranslate-y-2 \x67roup-hover:\x74ranslate-y-0 transition-all \x64uration-300 [&]:pointer-events-none [&]:absolute [animation-duration:0.3s] [bottom:0.75rem] [left:0.75rem] [right:0.75rem]"}>
                          <span className={"inline-block \x62g-primary/\x390 text-white \x74ext-xs rounded-full \x66ont-medium [padding-bottom:0.25rem] [padding-left:0.625rem] [padding-right:0.625rem] [padding-top:0.25rem]"}>Education &amp; Competition Platform</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className={"\x66ont-semibold text-primary \x74ext-base mb-1 \x67roup-hover:\x75nderline text-ellipsis [&]:whitespace-nowrap [letter-spacing:-0.025em] [overflow:hidden]"}>Lion Cubs Contest</h3>
                        <p className={"\x74ext-xs text-muted-foreground flex items-center [gap:0.25rem]"}>View Case Study <svg className={"h-3 \x74ransition-transform \x67roup-hover:\x74ranslate-x-1 [width:0.75rem]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></p>
                      </div>
                    </div>
                  </a>
                  <a className={"shrink-0 w-[280px] \x73m:\x77-[\x3320px] \x6dd:\x77-[\x3350px] [scroll-snap-align:start]"} href="/portfolio/golden-star-adventures">
                    <div className={"rounded-lg \x62order \x62g-card \x73hadow-sm group glassmorphism transition-all \x64uration-500 \x68over:\x2dtranslate-y-2 \x68over:\x73hadow-xl h-full [animation-duration:0.5s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
                      <div className={"flex-col \x73pace-y-1.\x35 \x62g-secondary/\x340 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                        <img className={"\x62lur-xl opacity-30 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/6eb5d6df280ebde5.jpg" />
                        <img className={"p-3 \x74ransition-transform \x64uration-700 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Golden Star Adventures" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/6eb5d6df280ebde5.jpg" />
                        <div className={"\x62g-gradient-to-t \x66rom-black/\x360 \x76ia-transparent \x74o-transparent opacity-0 \x67roup-hover:\x6fpacity-100 \x74ransition-opacity \x64uration-300 [&]:pointer-events-none [&]:absolute [animation-duration:0.3s] [inset:0px] [transition-property:opacity]"} />
                        <div className={"opacity-0 \x67roup-hover:\x6fpacity-100 \x74ranslate-y-2 \x67roup-hover:\x74ranslate-y-0 transition-all \x64uration-300 [&]:pointer-events-none [&]:absolute [animation-duration:0.3s] [bottom:0.75rem] [left:0.75rem] [right:0.75rem]"}>
                          <span className={"inline-block \x62g-primary/\x390 text-white \x74ext-xs rounded-full \x66ont-medium [padding-bottom:0.25rem] [padding-left:0.625rem] [padding-right:0.625rem] [padding-top:0.25rem]"}>Luxury African Safaris</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className={"\x66ont-semibold text-primary \x74ext-base mb-1 \x67roup-hover:\x75nderline text-ellipsis [&]:whitespace-nowrap [letter-spacing:-0.025em] [overflow:hidden]"}>Golden Star Adventures</h3>
                        <p className={"\x74ext-xs text-muted-foreground flex items-center [gap:0.25rem]"}>View Case Study <svg className={"h-3 \x74ransition-transform \x67roup-hover:\x74ranslate-x-1 [width:0.75rem]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></p>
                      </div>
                    </div>
                  </a>
                  <a className={"shrink-0 w-[280px] \x73m:\x77-[\x3320px] \x6dd:\x77-[\x3350px] [scroll-snap-align:start]"} href="/portfolio/patamaps-directory">
                    <div className={"rounded-lg \x62order \x62g-card \x73hadow-sm group glassmorphism transition-all \x64uration-500 \x68over:\x2dtranslate-y-2 \x68over:\x73hadow-xl h-full [animation-duration:0.5s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
                      <div className={"flex-col \x73pace-y-1.\x35 \x62g-secondary/\x340 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                        <img className={"\x62lur-xl opacity-30 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/112ccb0cd5e9b0ef.jpg" />
                        <img className={"p-3 \x74ransition-transform \x64uration-700 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="PataMaps" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/112ccb0cd5e9b0ef.jpg" />
                        <div className={"\x62g-gradient-to-t \x66rom-black/\x360 \x76ia-transparent \x74o-transparent opacity-0 \x67roup-hover:\x6fpacity-100 \x74ransition-opacity \x64uration-300 [&]:pointer-events-none [&]:absolute [animation-duration:0.3s] [inset:0px] [transition-property:opacity]"} />
                        <div className={"opacity-0 \x67roup-hover:\x6fpacity-100 \x74ranslate-y-2 \x67roup-hover:\x74ranslate-y-0 transition-all \x64uration-300 [&]:pointer-events-none [&]:absolute [animation-duration:0.3s] [bottom:0.75rem] [left:0.75rem] [right:0.75rem]"}>
                          <span className={"inline-block \x62g-primary/\x390 text-white \x74ext-xs rounded-full \x66ont-medium [padding-bottom:0.25rem] [padding-left:0.625rem] [padding-right:0.625rem] [padding-top:0.25rem]"}>Directory &amp; Hyperlocal Platform</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className={"\x66ont-semibold text-primary \x74ext-base mb-1 \x67roup-hover:\x75nderline text-ellipsis [&]:whitespace-nowrap [letter-spacing:-0.025em] [overflow:hidden]"}>PataMaps</h3>
                        <p className={"\x74ext-xs text-muted-foreground flex items-center [gap:0.25rem]"}>View Case Study <svg className={"h-3 \x74ransition-transform \x67roup-hover:\x74ranslate-x-1 [width:0.75rem]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></p>
                      </div>
                    </div>
                  </a>
                  <a className={"shrink-0 w-[280px] \x73m:\x77-[\x3320px] \x6dd:\x77-[\x3350px] [scroll-snap-align:start]"} href="/portfolio/estty-hair-spa">
                    <div className={"rounded-lg \x62order \x62g-card \x73hadow-sm group glassmorphism transition-all \x64uration-500 \x68over:\x2dtranslate-y-2 \x68over:\x73hadow-xl h-full [animation-duration:0.5s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
                      <div className={"flex-col \x73pace-y-1.\x35 \x62g-secondary/\x340 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                        <img className={"\x62lur-xl opacity-30 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/7378654580bbe1a7.jpg" />
                        <img className={"p-3 \x74ransition-transform \x64uration-700 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt={"Estty Hair & Spa"} loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/7378654580bbe1a7.jpg" />
                        <div className={"\x62g-gradient-to-t \x66rom-black/\x360 \x76ia-transparent \x74o-transparent opacity-0 \x67roup-hover:\x6fpacity-100 \x74ransition-opacity \x64uration-300 [&]:pointer-events-none [&]:absolute [animation-duration:0.3s] [inset:0px] [transition-property:opacity]"} />
                        <div className={"opacity-0 \x67roup-hover:\x6fpacity-100 \x74ranslate-y-2 \x67roup-hover:\x74ranslate-y-0 transition-all \x64uration-300 [&]:pointer-events-none [&]:absolute [animation-duration:0.3s] [bottom:0.75rem] [left:0.75rem] [right:0.75rem]"}>
                          <span className={"inline-block \x62g-primary/\x390 text-white \x74ext-xs rounded-full \x66ont-medium [padding-bottom:0.25rem] [padding-left:0.625rem] [padding-right:0.625rem] [padding-top:0.25rem]"}>Beauty &amp; Salon E-Commerce</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className={"\x66ont-semibold text-primary \x74ext-base mb-1 \x67roup-hover:\x75nderline text-ellipsis [&]:whitespace-nowrap [letter-spacing:-0.025em] [overflow:hidden]"}>Estty Hair &amp; Spa</h3>
                        <p className={"\x74ext-xs text-muted-foreground flex items-center [gap:0.25rem]"}>View Case Study <svg className={"h-3 \x74ransition-transform \x67roup-hover:\x74ranslate-x-1 [width:0.75rem]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></p>
                      </div>
                    </div>
                  </a>
                  <a className={"shrink-0 w-[280px] \x73m:\x77-[\x3320px] \x6dd:\x77-[\x3350px] [scroll-snap-align:start]"} href="/portfolio/zymera-medical-solutions">
                    <div className={"rounded-lg \x62order \x62g-card \x73hadow-sm group glassmorphism transition-all \x64uration-500 \x68over:\x2dtranslate-y-2 \x68over:\x73hadow-xl h-full [animation-duration:0.5s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
                      <div className={"flex-col \x73pace-y-1.\x35 \x62g-secondary/\x340 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                        <img className={"\x62lur-xl opacity-30 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/5c14214cde1ef916.jpg" />
                        <img className={"p-3 \x74ransition-transform \x64uration-700 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Zymera Medical Solutions" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/5c14214cde1ef916.jpg" />
                        <div className={"\x62g-gradient-to-t \x66rom-black/\x360 \x76ia-transparent \x74o-transparent opacity-0 \x67roup-hover:\x6fpacity-100 \x74ransition-opacity \x64uration-300 [&]:pointer-events-none [&]:absolute [animation-duration:0.3s] [inset:0px] [transition-property:opacity]"} />
                        <div className={"opacity-0 \x67roup-hover:\x6fpacity-100 \x74ranslate-y-2 \x67roup-hover:\x74ranslate-y-0 transition-all \x64uration-300 [&]:pointer-events-none [&]:absolute [animation-duration:0.3s] [bottom:0.75rem] [left:0.75rem] [right:0.75rem]"}>
                          <span className={"inline-block \x62g-primary/\x390 text-white \x74ext-xs rounded-full \x66ont-medium [padding-bottom:0.25rem] [padding-left:0.625rem] [padding-right:0.625rem] [padding-top:0.25rem]"}>Healthcare &amp; Medical Equipment</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className={"\x66ont-semibold text-primary \x74ext-base mb-1 \x67roup-hover:\x75nderline text-ellipsis [&]:whitespace-nowrap [letter-spacing:-0.025em] [overflow:hidden]"}>Zymera Medical Solutions</h3>
                        <p className={"\x74ext-xs text-muted-foreground flex items-center [gap:0.25rem]"}>View Case Study <svg className={"h-3 \x74ransition-transform \x67roup-hover:\x74ranslate-x-1 [width:0.75rem]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></p>
                      </div>
                    </div>
                  </a>
                  <a className={"shrink-0 w-[280px] \x73m:\x77-[\x3320px] \x6dd:\x77-[\x3350px] [scroll-snap-align:start]"} href="/portfolio/safety-stitch-ppe">
                    <div className={"rounded-lg \x62order \x62g-card \x73hadow-sm group glassmorphism transition-all \x64uration-500 \x68over:\x2dtranslate-y-2 \x68over:\x73hadow-xl h-full [animation-duration:0.5s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
                      <div className={"flex-col \x73pace-y-1.\x35 \x62g-secondary/\x340 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden] [padding:0px]"}>
                        <img className={"\x62lur-xl opacity-30 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/8399cb342e548a07.jpg" />
                        <img className={"p-3 \x74ransition-transform \x64uration-700 \x67roup-hover:\x73cale-105 [&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Safety Stitch" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/8399cb342e548a07.jpg" />
                        <div className={"\x62g-gradient-to-t \x66rom-black/\x360 \x76ia-transparent \x74o-transparent opacity-0 \x67roup-hover:\x6fpacity-100 \x74ransition-opacity \x64uration-300 [&]:pointer-events-none [&]:absolute [animation-duration:0.3s] [inset:0px] [transition-property:opacity]"} />
                        <div className={"opacity-0 \x67roup-hover:\x6fpacity-100 \x74ranslate-y-2 \x67roup-hover:\x74ranslate-y-0 transition-all \x64uration-300 [&]:pointer-events-none [&]:absolute [animation-duration:0.3s] [bottom:0.75rem] [left:0.75rem] [right:0.75rem]"}>
                          <span className={"inline-block \x62g-primary/\x390 text-white \x74ext-xs rounded-full \x66ont-medium [padding-bottom:0.25rem] [padding-left:0.625rem] [padding-right:0.625rem] [padding-top:0.25rem]"}>PPE &amp; Workwear Manufacturing</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className={"\x66ont-semibold text-primary \x74ext-base mb-1 \x67roup-hover:\x75nderline text-ellipsis [&]:whitespace-nowrap [letter-spacing:-0.025em] [overflow:hidden]"}>Safety Stitch</h3>
                        <p className={"\x74ext-xs text-muted-foreground flex items-center [gap:0.25rem]"}>View Case Study <svg className={"h-3 \x74ransition-transform \x67roup-hover:\x74ranslate-x-1 [width:0.75rem]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={"top-0 left-0 \x62g-gradient-to-r \x66rom-background \x74o-transparent [&]:pointer-events-none [&]:absolute [bottom:1rem] [width:2rem] [z-index:5]"} />
                <div className={"top-0 \x62g-gradient-to-l \x66rom-background \x74o-transparent [&]:pointer-events-none [&]:absolute [bottom:1rem] [right:0px] [width:2rem] [z-index:5]"} />
              </div>
              <div className="text-center mt-10">
                <a className={"inline-flex items-center justify-center gap-2 \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62order \x62order-input \x62g-background \x68over:\x62g-accent \x68over:\x74ext-accent-foreground h-11 rounded-md \x70x-8 [&]:whitespace-nowrap [&:disabled]:pointer-events-none"} href="/portfolio">Explore Full Portfolio <svg className={"ml-2 h-5 w-5 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
              </div>
            </div>
          </div>
          <div className={"transition-all \x64uration-700 \x65ase-out opacity-100 \x74ranslate-y-0 \x70y-16 \x62g-primary/\x35 \x64ark:\x62g-primary/\x310"} style={{ transitionDelay: "0ms" }}>
            <div className={"\x63ontainer \x6dx-auto \x70x-4 [width:100%]"}>
              <div className="text-center mb-12">
                <h2 className={"\x74ext-3xl \x6dd:\x74ext-4xl \x66ont-bold \x66ont-headline"}>Our Key Services to Elevate Your Brand</h2>
                <p className={"mt-4 \x74ext-lg text-muted-foreground \x6dx-auto [max-width:48rem]"}>A glimpse of how we can support your journey with creative and technical prowess.</p>
              </div>
              <div className={"grid grid-cols-1 \x6dd:\x67rid-cols-2 \x6cg:\x67rid-cols-3 gap-4 \x6dd:\x67ap-5 \x61uto-rows-[\x3280px]"}>
                <div className={"transition-all \x64uration-700 \x65ase-out opacity-100 \x74ranslate-y-0 [@media(min-width:768px)]:[grid-column:span_1/span_1] [@media(min-width:768px)]:[grid-row:span_2/span_2]"} style={{ transitionDelay: "0ms" }}>
                  <a className="block h-full" href="/services/btl-media-creative">
                    <div className={"rounded-lg \x62order \x62g-card \x73hadow-sm glassmorphism transition-all \x64uration-500 flex flex-col group \x68over:\x2dtranslate-y-1 \x68over:\x73hadow-xl h-full [&]:relative [animation-duration:0.5s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
                      <div className={"[&]:absolute [inset:0px]"}>
                        <img className={"\x74ransition-transform \x64uration-700 \x67roup-hover:\x73cale-110 [&]:object-cover"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Creative Graphic Design" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/00c08fac8dfc4bd3.jpg" />
                        <div className={"\x62g-gradient-to-t \x66rom-black/\x380 \x76ia-black/\x340 \x74o-transparent [&]:absolute [inset:0px]"} />
                      </div>
                      <div className={"mt-auto p-5 \x6dd:\x70-6 text-white [&]:relative [z-index:10]"}>
                        <h3 className={"\x74ext-xl \x66ont-bold mb-2"}>Creative Graphic Design</h3>
                        <p className={"\x74ext-sm \x6ceading-relaxed \x6cine-clamp-2 \x6dd:\x6cine-clamp-3 [color:rgba(255,255,255,0.75)]"}>Need a stunning logo or eye-catching brand materials? We'll help your brand look its best and capture attention.</p>
                        <span className={"inline-flex items-center mt-3 \x74ext-sm \x66ont-medium \x74ext-white/\x390 \x67roup-hover:\x74ext-white transition-colors [gap:0.25rem]"}>Learn more <svg className={"h-3.5 w-3.5 \x74ransition-transform \x67roup-hover:\x74ranslate-x-1"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={"transition-all \x64uration-700 \x65ase-out opacity-100 \x74ranslate-y-0"} style={{ transitionDelay: "80ms" }}>
                  <a className="block h-full" href="/services/web-development">
                    <div className={"rounded-lg \x62order \x62g-card \x73hadow-sm glassmorphism transition-all \x64uration-500 flex flex-col group \x68over:\x2dtranslate-y-1 \x68over:\x73hadow-xl h-full [&]:relative [animation-duration:0.5s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
                      <div className={"[&]:absolute [inset:0px]"}>
                        <img className={"\x74ransition-transform \x64uration-700 \x67roup-hover:\x73cale-110 [&]:object-cover"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Modern Web Development" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/62f1a435cddb78ac.jpg" />
                        <div className={"\x62g-gradient-to-t \x66rom-black/\x380 \x76ia-black/\x340 \x74o-transparent [&]:absolute [inset:0px]"} />
                      </div>
                      <div className={"mt-auto p-5 \x6dd:\x70-6 text-white [&]:relative [z-index:10]"}>
                        <h3 className={"\x74ext-xl \x66ont-bold mb-2"}>Modern Web Development</h3>
                        <p className={"\x74ext-sm \x6ceading-relaxed \x6cine-clamp-2 \x6dd:\x6cine-clamp-3 [color:rgba(255,255,255,0.75)]"}>Let's build you a beautiful, responsive website that works smoothly on all devices and truly represents your business.</p>
                        <span className={"inline-flex items-center mt-3 \x74ext-sm \x66ont-medium \x74ext-white/\x390 \x67roup-hover:\x74ext-white transition-colors [gap:0.25rem]"}>Learn more <svg className={"h-3.5 w-3.5 \x74ransition-transform \x67roup-hover:\x74ranslate-x-1"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={"transition-all \x64uration-700 \x65ase-out opacity-100 \x74ranslate-y-0"} style={{ transitionDelay: "160ms" }}>
                  <a className="block h-full" href="/services/digital-marketing">
                    <div className={"rounded-lg \x62order \x62g-card \x73hadow-sm glassmorphism transition-all \x64uration-500 flex flex-col group \x68over:\x2dtranslate-y-1 \x68over:\x73hadow-xl h-full [&]:relative [animation-duration:0.5s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
                      <div className={"[&]:absolute [inset:0px]"}>
                        <img className={"\x74ransition-transform \x64uration-700 \x67roup-hover:\x73cale-110 [&]:object-cover"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Expert SEO Services" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/6323ed989c607752.jpg" />
                        <div className={"\x62g-gradient-to-t \x66rom-black/\x380 \x76ia-black/\x340 \x74o-transparent [&]:absolute [inset:0px]"} />
                      </div>
                      <div className={"mt-auto p-5 \x6dd:\x70-6 text-white [&]:relative [z-index:10]"}>
                        <h3 className={"\x74ext-xl \x66ont-bold mb-2"}>Expert SEO Services</h3>
                        <p className={"\x74ext-sm \x6ceading-relaxed \x6cine-clamp-2 \x6dd:\x6cine-clamp-3 [color:rgba(255,255,255,0.75)]"}>Want more customers to find you on Google? We'll help improve your search ranking so you can get seen.</p>
                        <span className={"inline-flex items-center mt-3 \x74ext-sm \x66ont-medium \x74ext-white/\x390 \x67roup-hover:\x74ext-white transition-colors [gap:0.25rem]"}>Learn more <svg className={"h-3.5 w-3.5 \x74ransition-transform \x67roup-hover:\x74ranslate-x-1"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={"transition-all \x64uration-700 \x65ase-out opacity-100 \x74ranslate-y-0 [@media(min-width:768px)]:[grid-column:span_1/span_1] [@media(min-width:768px)]:[grid-row:span_2/span_2]"} style={{ transitionDelay: "240ms" }}>
                  <a className="block h-full" href="/services/digital-marketing">
                    <div className={"rounded-lg \x62order \x62g-card \x73hadow-sm glassmorphism transition-all \x64uration-500 flex flex-col group \x68over:\x2dtranslate-y-1 \x68over:\x73hadow-xl h-full [&]:relative [animation-duration:0.5s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
                      <div className={"[&]:absolute [inset:0px]"}>
                        <img className={"\x74ransition-transform \x64uration-700 \x67roup-hover:\x73cale-110 [&]:object-cover"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Effective Digital Marketing" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/a2b11f5a81a45405.jpg" />
                        <div className={"\x62g-gradient-to-t \x66rom-black/\x380 \x76ia-black/\x340 \x74o-transparent [&]:absolute [inset:0px]"} />
                      </div>
                      <div className={"mt-auto p-5 \x6dd:\x70-6 text-white [&]:relative [z-index:10]"}>
                        <h3 className={"\x74ext-xl \x66ont-bold mb-2"}>Effective Digital Marketing</h3>
                        <p className={"\x74ext-sm \x6ceading-relaxed \x6cine-clamp-2 \x6dd:\x6cine-clamp-3 [color:rgba(255,255,255,0.75)]"}>Ready to grow your brand online? We create smart digital marketing strategies to help you reach more people.</p>
                        <span className={"inline-flex items-center mt-3 \x74ext-sm \x66ont-medium \x74ext-white/\x390 \x67roup-hover:\x74ext-white transition-colors [gap:0.25rem]"}>Learn more <svg className={"h-3.5 w-3.5 \x74ransition-transform \x67roup-hover:\x74ranslate-x-1"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={"transition-all \x64uration-700 \x65ase-out opacity-100 \x74ranslate-y-0"} style={{ transitionDelay: "320ms" }}>
                  <a className="block h-full" href="/services/digital-marketing/ppc">
                    <div className={"rounded-lg \x62order \x62g-card \x73hadow-sm glassmorphism transition-all \x64uration-500 flex flex-col group \x68over:\x2dtranslate-y-1 \x68over:\x73hadow-xl h-full [&]:relative [animation-duration:0.5s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
                      <div className={"[&]:absolute [inset:0px]"}>
                        <img className={"\x74ransition-transform \x64uration-700 \x67roup-hover:\x73cale-110 [&]:object-cover"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Targeted Google Ads Setup" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/1f99512c50b0f77a.jpg" />
                        <div className={"\x62g-gradient-to-t \x66rom-black/\x380 \x76ia-black/\x340 \x74o-transparent [&]:absolute [inset:0px]"} />
                      </div>
                      <div className={"mt-auto p-5 \x6dd:\x70-6 text-white [&]:relative [z-index:10]"}>
                        <h3 className={"\x74ext-xl \x66ont-bold mb-2"}>Targeted Google Ads Setup</h3>
                        <p className={"\x74ext-sm \x6ceading-relaxed \x6cine-clamp-2 \x6dd:\x6cine-clamp-3 [color:rgba(255,255,255,0.75)]"}>Looking for quick results? We set up targeted Google Ads campaigns to drive traffic and generate leads for you.</p>
                        <span className={"inline-flex items-center mt-3 \x74ext-sm \x66ont-medium \x74ext-white/\x390 \x67roup-hover:\x74ext-white transition-colors [gap:0.25rem]"}>Learn more <svg className={"h-3.5 w-3.5 \x74ransition-transform \x67roup-hover:\x74ranslate-x-1"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={"transition-all \x64uration-700 \x65ase-out opacity-100 \x74ranslate-y-0"} style={{ transitionDelay: "400ms" }}>
                  <a className="block h-full" href="/services/web-development/website-redesign">
                    <div className={"rounded-lg \x62order \x62g-card \x73hadow-sm glassmorphism transition-all \x64uration-500 flex flex-col group \x68over:\x2dtranslate-y-1 \x68over:\x73hadow-xl h-full [&]:relative [animation-duration:0.5s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
                      <div className={"[&]:absolute [inset:0px]"}>
                        <img className={"\x74ransition-transform \x64uration-700 \x67roup-hover:\x73cale-110 [&]:object-cover"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Refreshing Website Redesign" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/0a2b5b2c75f359d5.jpg" />
                        <div className={"\x62g-gradient-to-t \x66rom-black/\x380 \x76ia-black/\x340 \x74o-transparent [&]:absolute [inset:0px]"} />
                      </div>
                      <div className={"mt-auto p-5 \x6dd:\x70-6 text-white [&]:relative [z-index:10]"}>
                        <h3 className={"\x74ext-xl \x66ont-bold mb-2"}>Refreshing Website Redesign</h3>
                        <p className={"\x74ext-sm \x6ceading-relaxed \x6cine-clamp-2 \x6dd:\x6cine-clamp-3 [color:rgba(255,255,255,0.75)]"}>Is your current website feeling a bit outdated? We can give it a fresh, modern look and improve its performance.</p>
                        <span className={"inline-flex items-center mt-3 \x74ext-sm \x66ont-medium \x74ext-white/\x390 \x67roup-hover:\x74ext-white transition-colors [gap:0.25rem]"}>Learn more <svg className={"h-3.5 w-3.5 \x74ransition-transform \x67roup-hover:\x74ranslate-x-1"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="text-center mt-10">
                <a className={"inline-flex items-center justify-center gap-2 \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62order \x62order-input \x62g-background \x68over:\x62g-accent \x68over:\x74ext-accent-foreground h-11 rounded-md \x70x-8 [&]:whitespace-nowrap [&:disabled]:pointer-events-none"} href="/services">Explore All Our Services <svg className={"ml-2 h-5 w-5 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
              </div>
            </div>
          </div>
          <div className={"transition-all \x64uration-700 \x65ase-out opacity-100 \x74ranslate-y-0 \x70y-16"} style={{ transitionDelay: "0ms" }}>
            <div className={"\x63ontainer \x6dx-auto \x70x-4 [width:100%]"}>
              <div className="text-center mb-12">
                <h2 className={"\x74ext-3xl \x6dd:\x74ext-4xl \x66ont-bold \x66ont-headline"}>What Our Clients Say</h2>
                <p className={"mt-4 \x74ext-lg text-muted-foreground \x6dx-auto [max-width:48rem]"}>We're passionate about helping businesses succeed. Here's what our clients share about their experience.</p>
              </div>
              <div className={"\x6dx-auto [&]:relative [max-width:56rem]"}>
                <svg className={"-left-2 \x6dd:\x6ceft-4 h-16 [&]:absolute [color:hsl(var(--primary)/.1)] [top:-1rem] [width:4rem]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                </svg>
                <div className={"flex items-center justify-center [&]:min-h-[220px] [&]:relative [overflow:hidden]"}>
                  <div className={`flex flex-col items-center justify-center text-center \x70x-8 \x6dd:\x70x-16 transition-all \x64uration-500 ${testimonialSlideClass(0)} [&]:absolute [animation-duration:0.5s] [inset:0px]`}>
                    <div className="flex mb-4 [gap:0.25rem]">
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                    </div>
                    <p className={"\x74ext-lg \x6dd:\x74ext-xl italic \x6ceading-relaxed mb-6 [color:hsl(var(--foreground)/.9)]"}>“Beta Corporation transformed our online presence completely. Our leads increased by 300% within the first three months. The team truly understands the Kenyan market.”</p>
                    <div>
                      <p className={"\x66ont-semibold text-foreground"}>James Mwangi</p>
                      <p className={"\x74ext-sm text-muted-foreground"}>CEO, Sherrane Homes</p>
                    </div>
                  </div>
                  <div className={`flex flex-col items-center justify-center text-center \x70x-8 \x6dd:\x70x-16 transition-all \x64uration-500 ${testimonialSlideClass(1)} [&]:absolute [animation-duration:0.5s] [inset:0px]`}>
                    <div className="flex mb-4 [gap:0.25rem]">
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                    </div>
                    <p className={"\x74ext-lg \x6dd:\x74ext-xl italic \x6ceading-relaxed mb-6 [color:hsl(var(--foreground)/.9)]"}>“Professional, responsive, and incredibly talented. They delivered a website that perfectly conveys our firm's authority and expertise. Highly recommend!”</p>
                    <div>
                      <p className={"\x66ont-semibold text-foreground"}>Sarah Ochieng</p>
                      <p className={"\x74ext-sm text-muted-foreground"}>Partner, Lusweti &amp; Nabutola</p>
                    </div>
                  </div>
                  <div className={`flex flex-col items-center justify-center text-center \x70x-8 \x6dd:\x70x-16 transition-all \x64uration-500 ${testimonialSlideClass(2)} [&]:absolute [animation-duration:0.5s] [inset:0px]`}>
                    <div className="flex mb-4 [gap:0.25rem]">
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                    </div>
                    <p className={"\x74ext-lg \x6dd:\x74ext-xl italic \x6ceading-relaxed mb-6 [color:hsl(var(--foreground)/.9)]"}>“From concept to launch, the experience was seamless. Our e-commerce platform is beautiful, fast, and our international orders have doubled.”</p>
                    <div>
                      <p className={"\x66ont-semibold text-foreground"}>Peter Kamau</p>
                      <p className={"\x74ext-sm text-muted-foreground"}>Founder, Sage Beans Export</p>
                    </div>
                  </div>
                  <div className={`flex flex-col items-center justify-center text-center \x70x-8 \x6dd:\x70x-16 transition-all \x64uration-500 ${testimonialSlideClass(3)} [&]:absolute [animation-duration:0.5s] [inset:0px]`}>
                    <div className="flex mb-4 [gap:0.25rem]">
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                    </div>
                    <p className={"\x74ext-lg \x6dd:\x74ext-xl italic \x6ceading-relaxed mb-6 [color:hsl(var(--foreground)/.9)]"}>“The digital marketing strategy they built for us was a game-changer. Our Google visibility went from page 5 to page 1 in just two months.”</p>
                    <div>
                      <p className={"\x66ont-semibold text-foreground"}>Amina Hassan</p>
                      <p className={"\x74ext-sm text-muted-foreground"}>Director, Regal Scope Logistics</p>
                    </div>
                  </div>
                  <div className={`flex flex-col items-center justify-center text-center \x70x-8 \x6dd:\x70x-16 transition-all \x64uration-500 ${testimonialSlideClass(4)} [&]:absolute [animation-duration:0.5s] [inset:0px]`}>
                    <div className="flex mb-4 [gap:0.25rem]">
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                    </div>
                    <p className={"\x74ext-lg \x6dd:\x74ext-xl italic \x6ceading-relaxed mb-6 [color:hsl(var(--foreground)/.9)]"}>“Outstanding work! The website is modern, fast, and exactly what we needed. Their attention to detail and communication throughout was exceptional.”</p>
                    <div>
                      <p className={"\x66ont-semibold text-foreground"}>Michael Otieno</p>
                      <p className={"\x74ext-sm text-muted-foreground"}>MD, Electron Engineers</p>
                    </div>
                  </div>
                  <div className={`flex flex-col items-center justify-center text-center \x70x-8 \x6dd:\x70x-16 transition-all \x64uration-500 ${testimonialSlideClass(5)} [&]:absolute [animation-duration:0.5s] [inset:0px]`}>
                    <div className="flex mb-4 [gap:0.25rem]">
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      <svg className={"h-4 w-4 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))] [fill:rgb(250,204,21)]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                    </div>
                    <p className={"\x74ext-lg \x6dd:\x74ext-xl italic \x6ceading-relaxed mb-6 [color:hsl(var(--foreground)/.9)]"}>“Beta Corporation didn't just build us a website — they built us a brand identity. The creative design work elevated everything about our business.”</p>
                    <div>
                      <p className={"\x66ont-semibold text-foreground"}>Grace Wanjiku</p>
                      <p className={"\x74ext-sm text-muted-foreground"}>Founder, GoldenPrintFX</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-2 mt-6">
                  <button type="button" className={`h-2 rounded-full transition-all \x64uration-300 ${testimonial === 0 ? "\x62g-primary [width:2rem]" : "\x62g-gray-300 \x64ark:\x62g-gray-600 \x68over:\x62g-gray-400 [width:0.5rem]"} [animation-duration:0.3s]`} aria-label="View testimonial 1" aria-current={testimonial === 0 ? "true" : undefined} onClick={() => setTestimonial(0)} />
                  <button type="button" className={`h-2 rounded-full transition-all \x64uration-300 ${testimonial === 1 ? "\x62g-primary [width:2rem]" : "\x62g-gray-300 \x64ark:\x62g-gray-600 \x68over:\x62g-gray-400 [width:0.5rem]"} [animation-duration:0.3s]`} aria-label="View testimonial 2" aria-current={testimonial === 1 ? "true" : undefined} onClick={() => setTestimonial(1)} />
                  <button type="button" className={`h-2 rounded-full transition-all \x64uration-300 ${testimonial === 2 ? "\x62g-primary [width:2rem]" : "\x62g-gray-300 \x64ark:\x62g-gray-600 \x68over:\x62g-gray-400 [width:0.5rem]"} [animation-duration:0.3s]`} aria-label="View testimonial 3" aria-current={testimonial === 2 ? "true" : undefined} onClick={() => setTestimonial(2)} />
                  <button type="button" className={`h-2 rounded-full transition-all \x64uration-300 ${testimonial === 3 ? "\x62g-primary [width:2rem]" : "\x62g-gray-300 \x64ark:\x62g-gray-600 \x68over:\x62g-gray-400 [width:0.5rem]"} [animation-duration:0.3s]`} aria-label="View testimonial 4" aria-current={testimonial === 3 ? "true" : undefined} onClick={() => setTestimonial(3)} />
                  <button type="button" className={`h-2 rounded-full transition-all \x64uration-300 ${testimonial === 4 ? "\x62g-primary [width:2rem]" : "\x62g-gray-300 \x64ark:\x62g-gray-600 \x68over:\x62g-gray-400 [width:0.5rem]"} [animation-duration:0.3s]`} aria-label="View testimonial 5" aria-current={testimonial === 4 ? "true" : undefined} onClick={() => setTestimonial(4)} />
                  <button type="button" className={`h-2 rounded-full transition-all \x64uration-300 ${testimonial === 5 ? "\x62g-primary [width:2rem]" : "\x62g-gray-300 \x64ark:\x62g-gray-600 \x68over:\x62g-gray-400 [width:0.5rem]"} [animation-duration:0.3s]`} aria-label="View testimonial 6" aria-current={testimonial === 5 ? "true" : undefined} onClick={() => setTestimonial(5)} />
                </div>
                <button className={"left-0 \x2dtranslate-y-1/\x32 w-9 h-9 rounded-full \x62g-white/\x380 \x64ark:\x62g-gray-800/\x380 \x73hadow-md flex items-center justify-center \x68over:\x62g-white \x64ark:\x68over:\x62g-gray-700 transition-colors [&]:absolute [top:50%]"} type="button" aria-label="Previous testimonial" onClick={() => setTestimonial(index => (index + TESTIMONIAL_COUNT - 1) % TESTIMONIAL_COUNT)}>
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button className={"\x2dtranslate-y-1/\x32 w-9 h-9 rounded-full \x62g-white/\x380 \x64ark:\x62g-gray-800/\x380 \x73hadow-md flex items-center justify-center \x68over:\x62g-white \x64ark:\x68over:\x62g-gray-700 transition-colors [&]:absolute [right:0px] [top:50%]"} type="button" aria-label="Next testimonial" onClick={() => setTestimonial(index => (index + 1) % TESTIMONIAL_COUNT)}>
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
              <div className="mt-10">
                <div />
              </div>
              <div className="text-center mt-12">
                <a className={"inline-flex items-center justify-center gap-2 \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-11 rounded-md \x70x-8 [&]:whitespace-nowrap [&:disabled]:pointer-events-none"} href="/contact">Ready to Share Your Success Story?</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <SiteOverlays />
    </>
  );
}

function ImportedSectionCraftingDigitalECommerce() {
  const [videoPhase, setVideoPhase] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  useEffect(() => {
    // Typing headline: type a word, hold, delete, move to the next word.
    if (reducedMotion) return;
    const word = HERO_WORDS[wordIndex] ?? "";
    let delay = deleting ? 45 : 90;
    if (!deleting && typedLength === word.length) delay = 1500;
    const timer = window.setTimeout(() => {
      if (!deleting && typedLength === word.length) setDeleting(true);
      else if (deleting && typedLength === 0) { setDeleting(false); setWordIndex(index => (index + 1) % HERO_WORDS.length); }
      else setTypedLength(length => length + (deleting ? -1 : 1));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [typedLength, deleting, wordIndex, reducedMotion]);
  useEffect(() => {
    // Source shows the image slide for ~10s, then plays the showreel video until it ends.
    if (reducedMotion) return;
    const timer = window.setTimeout(() => setVideoPhase(phase => !phase), videoPhase ? 40000 : 10000);
    return () => window.clearTimeout(timer);
  }, [videoPhase, reducedMotion]);
  const headlineWord = reducedMotion ? (HERO_WORDS[0] ?? "") : (HERO_WORDS[wordIndex] ?? "").slice(0, typedLength);
  const endVideo = () => setVideoPhase(false);
  return (
    <section className={"w-full h-[600px] \x6dd:\x68-[\x3700px] \x62g-gray-900 text-white [&]:relative [overflow:hidden]"}>
      <div className={`\x74ransition-opacity \x64uration-700 \x65ase-in-out ${videoPhase ? "opacity-0" : "opacity-100"} [&]:absolute [inset:0px] [transition-property:opacity]`}>
        <img className={"[&]:object-cover"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Innovative web design solutions" decoding="async" data-nimg="fill" src="/site-assets/ce629a38b12da765.jpg" />
      </div>
      <div className={`\x74ransition-opacity \x64uration-700 \x65ase-in-out ${videoPhase ? "opacity-100" : "opacity-0"} [&]:absolute [inset:0px] [transition-property:opacity]`}>
        {videoPhase && (
          <>
            <video className="absolute inset-0 w-full h-full object-cover max-md:hidden" autoPlay muted playsInline onEnded={endVideo} onError={endVideo}><source src={heroDesktopVideo.url} type="video/mp4" /></video>
            <video className="absolute inset-0 w-full h-full object-cover md:hidden!" autoPlay muted playsInline onEnded={endVideo} onError={endVideo}><source src={heroMobileVideo.url} type="video/mp4" /></video>
          </>
        )}
      </div>
      <div className={`\x62g-gradient-to-br \x66rom-black/\x370 \x76ia-[#\x32b01ef]/\x330 \x74o-black/\x360 \x74ransition-opacity \x64uration-700 ${videoPhase ? "opacity-50" : "opacity-100"} [&]:absolute [inset:0px] [transition-property:opacity] [z-index:10]`} />
      <div className={"\x62g-[\x72adial-gradient(\x65llipse_at_top_right,\x72gba(\x337,\x3150,\x3190,\x30.\x32),\x74ransparent_60%)] [&]:absolute [inset:0px] [z-index:10]"} />
      <div className={`\x63ontainer \x6dx-auto \x70x-4 flex flex-col items-center justify-center text-center transition-all \x64uration-700 \x65ase-in-out ${videoPhase ? "opacity-0 pointer-events-none scale-[0.98]" : "opacity-100 \x73cale-100"} [&]:absolute [inset:0px] [width:100%] [z-index:20]`} aria-hidden={videoPhase ? "true" : "false"}>
        <div className={"flex items-center justify-center gap-2 mb-6 \x61nimate-fade-in-up [&]:flex-wrap"} style={{ transform: "translateY(0px)", opacity: "1" }}>
          <div className={"inline-flex items-center gap-2 \x70x-4 rounded-full \x62order \x62order-white/\x320 \x62g-white/\x310 \x62ackdrop-blur-sm [padding-bottom:0.375rem] [padding-top:0.375rem]"}>
            <svg className={"h-3.5 w-3.5 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
            <span className={"\x74ext-xs \x66ont-medium \x74ext-white/\x390 [&]:uppercase [letter-spacing:0.025em]"}>Kenya's Premium Digital Agency</span>
          </div>
          <a className={"inline-flex items-center gap-2 \x70x-4 rounded-full \x62order \x62order-yellow-400/\x340 \x62g-yellow-400/\x310 \x62ackdrop-blur-sm \x68over:\x62g-yellow-400/\x320 transition-colors [padding-bottom:0.375rem] [padding-top:0.375rem]"} href="#awards">
            <svg className={"h-3.5 w-3.5 \x74ext-yellow-400 [color:rgb(250_204_21/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
            <span className={"\x74ext-xs \x66ont-medium \x74ext-white/\x390 [&]:uppercase [letter-spacing:0.025em]"}>Digitally Fit Awards 2026 Winner</span>
          </a>
        </div>
        <h1 className={"\x74ext-4xl \x73m:\x74ext-5xl \x6dd:\x74ext-7xl \x66ont-headline \x66ont-bold mb-4 \x61nimate-fade-in-up"} style={{ animationDelay: "0.15s", transform: "translateY(0px)", opacity: "1" } as CSSProperties}>Crafting Digital<br /><span className={"\x62g-gradient-to-r \x66rom-white \x76ia-blue-200 \x74o-[#\x32596be] bg-clip-text [color:transparent]"}>{headlineWord}</span><span className={"\x61nimate-pulse [color:rgba(255,255,255,0.8)]"}>|</span></h1>
        <p className={"\x74ext-base \x73m:\x74ext-lg mb-8 \x61nimate-fade-in-up [color:rgba(255,255,255,0.75)] [max-width:42rem]"} style={{ animationDelay: "0.3s", transform: "translateY(0px)", opacity: "1" } as CSSProperties}>We build bespoke websites and innovative IT solutions that elevate your brand and drive measurable growth.</p>
        <div className={"flex flex-col \x73m:\x66lex-row gap-4 \x61nimate-fade-in-up"} style={{ animationDelay: "0.45s", transform: "translateY(0px)", opacity: "1" } as CSSProperties}>
          <a className={"inline-flex items-center justify-center gap-2 \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-11 rounded-md \x70x-8 group [&]:whitespace-nowrap [&:disabled]:pointer-events-none"} href="/contact">Get a Free Quote<svg className={"ml-2 h-5 w-5 \x74ransition-transform \x67roup-hover:\x74ranslate-x-1 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
          <a className={"inline-flex items-center justify-center gap-2 \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62order h-11 rounded-md \x70x-8 \x62order-white/\x340 text-white \x62g-white/\x35 \x68over:\x62g-white \x68over:\x74ext-black \x68over:\x62order-white [&]:whitespace-nowrap [&:disabled]:pointer-events-none"} href="/portfolio">View Our Work</a>
        </div>
      </div>
      <div className={"left-0 h-24 \x62g-gradient-to-t \x66rom-background \x74o-transparent [&]:absolute [bottom:0px] [right:0px] [z-index:20]"} />
    </section>
  );
}

