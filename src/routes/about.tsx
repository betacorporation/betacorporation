import type { CSSProperties } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader, SiteOverlays } from "@/components/site/SiteChrome";
import { BRAND, CONTACT_PERSON, EMAIL, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/site-contact";
import capturedCSS from "../styles/pages/about.css?raw";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Beta Corporation" },
      { name: "description", content: "Meet Beta Corporation — a digital studio crafting websites, e-commerce stores and brand experiences that help businesses grow." },
      { property: "og:title", content: "About Us | Beta Corporation" },
      { property: "og:description", content: "Meet Beta Corporation — a digital studio crafting websites, e-commerce stores and brand experiences that help businesses grow." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: { importedDocument: { html: { "className": "__variable_b021ee __variable_f166df", "lang": "en" }, body: { "className": "\x66ont-body \x61ntialiased \x66lex \x66lex-col \x6din-h-screen \x62g-background \x74ext-foreground" } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div hidden />
      <SiteHeader />
      <main className={"\x66lex-grow"}>
        <div className={"\x73pace-y-16 \x70y-12 \x61nimate-fade-in-up"} style={{ transform: "translateY(0px)", opacity: "1" }}>
          <section className={"text-center \x63ontainer \x6dx-auto \x70x-4 [width:100%]"}>
            <h1 className={"\x74ext-4xl \x6dd:\x74ext-5xl \x66ont-bold text-primary mb-4"}>About Beta Corporation</h1>
            <p className={"\x74ext-lg \x6dd:\x74ext-xl \x6dx-auto mb-8 [color:hsl(var(--foreground)/.8)] [max-width:48rem]"}>We are a dynamic digital solutions agency based in Nairobi, specializing in crafting impactful websites, e-commerce platforms, and online experiences that drive business growth in the digital landscape.</p>
            <div className={"\x6dx-auto [max-width:28rem]"}>
              <img className={"rounded-2xl \x73hadow-xl w-full h-auto"} style={{ color: "transparent" }} alt="Designer sketching website wireframes beside a tablet" width="1024" height="1024" decoding="async" src="/site-assets/beta-mission.jpg" />
            </div>
          </section>
          <section className={"\x63ontainer \x6dx-auto \x70x-4 [width:100%]"} style={{ animationDelay: "0.2s" } as CSSProperties}>
            <div className={"grid \x6dd:\x67rid-cols-2 items-center [gap:3rem]"}>
              <div className={"\x73pace-y-6"}>
                <div>
                  <h2 className={"\x74ext-3xl \x66ont-bold text-primary"}>Our Mission</h2>
                  <p className="mt-2 [color:hsl(var(--foreground)/.8)]">Our mission is to empower businesses across East Africa with innovative and effective digital solutions. We are committed to delivering top-quality websites and applications that are not only visually stunning but also drive tangible results and authentically reflect your unique brand.</p>
                </div>
                <div>
                  <h2 className={"\x74ext-3xl \x66ont-bold text-primary"}>Our Vision</h2>
                  <p className="mt-2 [color:hsl(var(--foreground)/.8)]">Our vision is to be a leading catalyst for digital transformation, helping businesses leverage technology to connect with their audiences, foster sustainable growth, and make a lasting positive impact in their respective industries.</p>
                </div>
              </div>
              <div className={"w-full \x6dx-auto rounded-lg \x73hadow-xl \x62g-secondary/\x340 flex items-center justify-center [&]:aspect-square [&]:max-w-[450px] [&]:relative [overflow:hidden]"}>
                <img className={"\x62lur-xl opacity-30 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/beta-studio.jpg" />
                <img className={"[&]:object-contain [padding:0.5rem]"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Beta Corporation creative studio workspace" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/beta-studio.jpg" />
              </div>
            </div>
          </section>
          <ImportedSectionWhatDrivesUsOur />
          <ImportedSectionMeetTheMindsBehind />
          <section className={"text-center \x70y-12 \x62g-primary/\x310 rounded-lg \x63ontainer \x6dx-auto \x70x-4 [width:100%]"} style={{ animationDelay: "0.8s" } as CSSProperties}>
            <h2 className={"\x74ext-3xl \x66ont-bold text-primary mb-4"}>Ready to Start Your Project?</h2>
            <p className={"\x74ext-lg \x6dx-auto mb-6 [color:hsl(var(--foreground)/.8)] [max-width:42rem]"}>Let's collaborate to build something amazing. Get in touch with us today to discuss your vision.</p>
            <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-11 rounded-md \x70x-8 [&:disabled]:pointer-events-none"} href="/contact">Contact Us</a>
          </section>
        </div>
      </main>
      <SiteFooter />
      <SiteOverlays />
    </>
  );
}

function ImportedSectionWhatDrivesUsOur() {
  return (
    <section className={"\x62g-secondary/\x350 [padding-bottom:4rem] [padding-top:4rem]"} style={{ animationDelay: "0.4s" } as CSSProperties}>
      <div className={"\x63ontainer \x6dx-auto \x70x-4 [width:100%]"}>
        <div className="text-center mb-12">
          <h2 className={"\x74ext-3xl \x66ont-bold text-primary"}>What Drives Us: Our Core Values</h2>
        </div>
        <div className={"grid grid-cols-1 \x73m:\x67rid-cols-2 \x6cg:\x67rid-cols-4 [gap:2rem]"}>
          <div className={"rounded-lg text-center p-6 \x62order-0 \x73hadow-lg \x68over:\x73hadow-primary/\x320 transition-all \x64uration-300 \x68over:\x2dtranslate-y-2 \x62g-card [animation-duration:0.3s] [color:hsl(var(--card-foreground))]"}>
            <div className={"flex flex-col \x73pace-y-1.\x35 p-6 items-center"}>
              <div className={"p-4 \x62g-primary/\x310 rounded-full mb-4"}>
                <svg className="h-8 text-primary [width:2rem]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
              <h3 className={"\x74ext-2xl \x66ont-semibold \x6ceading-none [letter-spacing:-0.025em]"}>Innovative Thinking</h3>
            </div>
            <div className="p-6 pt-0">
              <p className="[color:hsl(var(--foreground)/.7)]">We constantly explore new technologies and creative approaches to deliver fresh and effective digital solutions.</p>
            </div>
          </div>
          <div className={"rounded-lg text-center p-6 \x62order-0 \x73hadow-lg \x68over:\x73hadow-primary/\x320 transition-all \x64uration-300 \x68over:\x2dtranslate-y-2 \x62g-card [animation-duration:0.3s] [color:hsl(var(--card-foreground))]"}>
            <div className={"flex flex-col \x73pace-y-1.\x35 p-6 items-center"}>
              <div className={"p-4 \x62g-primary/\x310 rounded-full mb-4"}>
                <svg className="h-8 text-primary [width:2rem]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                  <circle cx="12" cy="8" r="6" />
                </svg>
              </div>
              <h3 className={"\x74ext-2xl \x66ont-semibold \x6ceading-none [letter-spacing:-0.025em]"}>Commitment to Quality</h3>
            </div>
            <div className="p-6 pt-0">
              <p className="[color:hsl(var(--foreground)/.7)]">Excellence is at the heart of everything we do, ensuring high-performance, reliable, and polished digital products.</p>
            </div>
          </div>
          <div className={"rounded-lg text-center p-6 \x62order-0 \x73hadow-lg \x68over:\x73hadow-primary/\x320 transition-all \x64uration-300 \x68over:\x2dtranslate-y-2 \x62g-card [animation-duration:0.3s] [color:hsl(var(--card-foreground))]"}>
            <div className={"flex flex-col \x73pace-y-1.\x35 p-6 items-center"}>
              <div className={"p-4 \x62g-primary/\x310 rounded-full mb-4"}>
                <svg className="h-8 text-primary [width:2rem]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                  <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                  <path d="m21 3 1 11h-2" />
                  <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                  <path d="M3 4h8" />
                </svg>
              </div>
              <h3 className={"\x74ext-2xl \x66ont-semibold \x6ceading-none [letter-spacing:-0.025em]"}>Client Partnership</h3>
            </div>
            <div className="p-6 pt-0">
              <p className="[color:hsl(var(--foreground)/.7)]">We believe in building strong, collaborative relationships, working closely with you to turn your digital aspirations into reality.</p>
            </div>
          </div>
          <div className={"rounded-lg text-center p-6 \x62order-0 \x73hadow-lg \x68over:\x73hadow-primary/\x320 transition-all \x64uration-300 \x68over:\x2dtranslate-y-2 \x62g-card [animation-duration:0.3s] [color:hsl(var(--card-foreground))]"}>
            <div className={"flex flex-col \x73pace-y-1.\x35 p-6 items-center"}>
              <div className={"p-4 \x62g-primary/\x310 rounded-full mb-4"}>
                <svg className="h-8 text-primary [width:2rem]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
              </div>
              <h3 className={"\x74ext-2xl \x66ont-semibold \x6ceading-none [letter-spacing:-0.025em]"}>Transparent Communication</h3>
            </div>
            <div className="p-6 pt-0">
              <p className="[color:hsl(var(--foreground)/.7)]">Honesty and clarity are key. We value open dialogue to build trust and ensure everyone is aligned throughout the project lifecycle.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionMeetTheMindsBehind() {
  return (
    <section className={"\x63ontainer \x6dx-auto \x70x-4 [width:100%]"} style={{ animationDelay: "0.6s" } as CSSProperties}>
      <div className="text-center mb-12">
        <h2 className={"\x74ext-3xl \x66ont-bold text-primary"}>Meet the Founder</h2>
      </div>
      <div className={"\x6dx-auto [max-width:24rem]"}>
        <div className={"rounded-lg text-center \x73hadow-lg \x62order-0 \x62g-card flex flex-col [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
          <div className={"w-full \x62g-secondary/\x340 flex items-center justify-center [&]:relative"} style={{ aspectRatio: "4 / 3" }}>
            <span className={"rounded-full \x62g-primary text-primary-foreground \x66ont-bold flex items-center justify-center"} style={{ width: "8rem", height: "8rem", fontSize: "2.5rem" }} aria-hidden="true">JL</span>
          </div>
          <div className={"p-6 flex flex-col \x66lex-grow"}>
            <h3 className={"\x66ont-semibold \x74ext-xl text-primary [letter-spacing:-0.025em]"}>{CONTACT_PERSON}</h3>
            <p className={"\x66ont-semibold mb-2 [color:hsl(var(--accent))]"}>Founder</p>
            <p className={"\x74ext-sm mb-4 \x66lex-grow [color:hsl(var(--foreground)/.7)]"}>{CONTACT_PERSON} leads {BRAND}, working with every client from first idea to launch. Reach out directly on WhatsApp or by email.</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <a className={"inline-flex items-center justify-center gap-2 rounded-md \x74ext-sm \x66ont-medium \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4"} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp {PHONE_DISPLAY}</a>
              <a className={"inline-flex items-center justify-center gap-2 rounded-md \x74ext-sm \x66ont-medium \x62order \x62order-input h-10 \x70x-4 \x68over:\x62g-accent"} href={`mailto:${EMAIL}`}>Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

