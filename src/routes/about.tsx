import type { CSSProperties } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader, SiteOverlays } from "@/components/site/SiteChrome";
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
              <img className={"rounded-2xl \x73hadow-xl w-full h-auto"} style={{ color: "transparent" }} alt="Beta Corporation co-founders Gregory Shikutwa and David Esabwa with their Digitally Fit Awards 2026 trophies" width="960" height="1280" decoding="async" data-nimg="1" src="/site-assets/eaf48a7db0e02d0d.jpg" />
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
                <img className={"\x62lur-xl opacity-30 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/4d3cbf894ac15979.jpg" />
                <img className={"[&]:object-contain [padding:0.5rem]"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Beta Corporation team at the Digitally Fit Awards Kenya Edition 2026" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/4d3cbf894ac15979.jpg" />
              </div>
            </div>
          </section>
          <ImportedSectionWeReOfficiallyAward />
          <ImportedSectionWhatDrivesUsOur />
          <ImportedSectionMeetTheMindsBehind />
          <ImportedSectionOurAssociates />
          <ImportedSectionStrategicPartners />
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

function ImportedSectionWeReOfficiallyAward() {
  return (
    <section className={"\x63ontainer \x6dx-auto \x70x-4 [width:100%]"} style={{ animationDelay: "0.3s" } as CSSProperties}>
      <div className={"rounded-3xl \x62g-gradient-to-br \x66rom-primary \x76ia-[#\x32596be] \x74o-[#\x32b01ef] text-white \x73hadow-2xl [&]:relative [overflow:hidden]"}>
        <div className={"h-96 \x62g-white/\x310 rounded-full \x62lur-3xl [&]:absolute [right:-6rem] [top:-6rem] [width:24rem]"} />
        <div className={"h-96 \x62g-white/\x310 rounded-full \x62lur-3xl [&]:absolute [bottom:-6rem] [left:-6rem] [width:24rem]"} />
        <div className={"\x70x-6 \x70y-12 \x6dd:\x70x-12 \x6dd:\x70y-16 [&]:relative"}>
          <div className={"text-center \x6dx-auto mb-10 [max-width:48rem]"}>
            <div className={"inline-flex items-center gap-2 \x70x-4 rounded-full \x62order \x62order-white/\x320 \x62g-white/\x310 \x62ackdrop-blur-sm mb-5 [padding-bottom:0.375rem] [padding-top:0.375rem]"}>
              <svg className={"h-4 w-4 \x74ext-yellow-300 [color:rgb(253_224_71/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
              <span className={"\x74ext-xs \x66ont-semibold [&]:uppercase [color:rgba(255,255,255,0.9)] [letter-spacing:0.025em]"}>Digitally Fit Awards 2026 – Kenya Edition</span>
            </div>
            <h2 className={"\x74ext-3xl \x6dd:\x74ext-4xl \x66ont-headline \x66ont-bold mb-4"}>We're Officially Award-Winning</h2>
            <p className={"\x74ext-base \x6dd:\x74ext-lg [color:rgba(255,255,255,0.85)]"}>At a gala held at the Grand Argyle Hotel, Beta Corporation was named <strong>Top Digitally Fit Web Design Firm of the Year</strong>, and our co-founder David Esabwa was recognised as a winner in <strong>Top CEOs Leading Upcoming Digitally Fit IT Firms</strong> — presented by KEOnline &amp; Oracom Group.</p>
          </div>
          <div className={"grid grid-cols-1 \x73m:\x67rid-cols-2 mb-10 [gap:1rem]"}>
            <div className={"rounded-xl \x73hadow-lg \x62g-black/\x330 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden]"}>
              <img className={"\x62lur-xl opacity-30 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/e9316be748d64cc6.jpg" />
              <img className={"[&]:object-contain [padding:0.5rem]"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="David Esabwa and the Beta Corporation team holding their Digitally Fit Awards trophies" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/e9316be748d64cc6.jpg" />
            </div>
            <div className={"rounded-xl \x73hadow-lg \x62g-black/\x330 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden]"}>
              <img className={"\x62lur-xl opacity-30 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/e3815f963da13b88.jpg" />
              <img className={"[&]:object-contain [padding:0.5rem]"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Beta Corporation and David Esabwa's Digitally Fit Awards trophies and certificates" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/e3815f963da13b88.jpg" />
            </div>
          </div>
          <div className={"flex flex-col \x73m:\x66lex-row justify-center [gap:1rem]"}>
            <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-secondary text-secondary-foreground \x68over:\x62g-secondary/\x380 h-11 rounded-md \x70x-8 group [&:disabled]:pointer-events-none"} href={"https://digitallyfitawards.com/nominee?slug=elite-designs-kenya&event=digitally-fit-awards-kenya-edition"} rel="noopener noreferrer" target="_blank">View Our Award Profile <svg className={"ml-2 h-4 w-4 \x74ransition-transform \x67roup-hover:\x74ranslate-x-1 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg></a>
            <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62order h-11 rounded-md \x70x-8 \x62order-white/\x340 text-white \x62g-white/\x35 \x68over:\x62g-white \x68over:\x74ext-black \x68over:\x62order-white group [&:disabled]:pointer-events-none"} href={"https://digitallyfitawards.com/category?slug=top-ceos-leading-upcoming-digitally-fit-it-firms&event=digitally-fit-awards-kenya-edition"} rel="noopener noreferrer" target="_blank">David's CEO Award Category <svg className={"ml-2 h-4 w-4 \x74ransition-transform \x67roup-hover:\x74ranslate-x-1 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg></a>
          </div>
        </div>
      </div>
    </section>
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
        <h2 className={"\x74ext-3xl \x66ont-bold text-primary"}>Meet the Minds Behind the Magic</h2>
      </div>
      <div className={"grid grid-cols-1 \x6dd:\x67rid-cols-2 \x6cg:\x67rid-cols-4 [gap:2rem]"}>
        <div className={"rounded-lg text-center \x73hadow-lg \x62order-0 \x62g-card flex flex-col \x68over:\x73hadow-xl transition-all \x64uration-300 \x68over:\x2dtranslate-y-2 [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
          <div className={"w-full \x62g-secondary/\x340 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden]"}>
            <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/64eb20be25d76f98.jpg" />
            <img className={"[&]:object-contain [padding:0.5rem]"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt={"Professional headshot of David Esabwa, Lead Software Architect & Co-Founder"} loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/64eb20be25d76f98.jpg" />
          </div>
          <div className={"p-6 flex flex-col \x66lex-grow"}>
            <h3 className={"\x66ont-semibold \x74ext-xl text-primary [letter-spacing:-0.025em]"}>David Esabwa</h3>
            <p className={"\x66ont-semibold mb-2 [color:hsl(var(--accent))]"}>Lead Software Architect &amp; Co-Founder</p>
            <p className={"\x74ext-sm mb-4 \x66lex-grow [color:hsl(var(--foreground)/.7)]"}>As a pharmacist with a passion for technology, David bridges healthcare and digital innovation. He applies his analytical skills to develop platforms that solve real-world challenges — recognised individually as a winner in Top CEOs Leading Upcoming Digitally Fit IT Firms at the Digitally Fit Awards 2026.</p>
            <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 text-primary \x68over:\x75nderline h-10 \x70x-4 \x70y-2 mt-auto [text-underline-offset:4px] [&:disabled]:pointer-events-none"} href="/team/david-esabwa">Learn More About David{" "}<svg className={"ml-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
          </div>
        </div>
        <div className={"rounded-lg text-center \x73hadow-lg \x62order-0 \x62g-card flex flex-col \x68over:\x73hadow-xl transition-all \x64uration-300 \x68over:\x2dtranslate-y-2 [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
          <div className={"w-full \x62g-secondary/\x340 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden]"}>
            <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/d099fd8f1931c1a3.jpg" />
            <img className={"[&]:object-contain [padding:0.5rem]"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt={"Professional headshot of Gregory Shikutwa, Lead Developer, Creative Director & Co-Founder"} loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/d099fd8f1931c1a3.jpg" />
          </div>
          <div className={"p-6 flex flex-col \x66lex-grow"}>
            <h3 className={"\x66ont-semibold \x74ext-xl text-primary [letter-spacing:-0.025em]"}>Gregory Shikutwa</h3>
            <p className={"\x66ont-semibold mb-2 [color:hsl(var(--accent))]"}>Lead Developer, Creative Director &amp; Co-Founder</p>
            <p className={"\x74ext-sm mb-4 \x66lex-grow [color:hsl(var(--foreground)/.7)]"}>Gregory spearheads our technical and creative direction. With a foundation in ICT and a passion for design, he transforms ideas into functional, user-centered digital products.</p>
            <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 text-primary \x68over:\x75nderline h-10 \x70x-4 \x70y-2 mt-auto [text-underline-offset:4px] [&:disabled]:pointer-events-none"} href="/team/gregory-shikutwa">Learn More About Gregory{" "}<svg className={"ml-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
          </div>
        </div>
        <div className={"rounded-lg text-center \x73hadow-lg \x62order-0 \x62g-card flex flex-col \x68over:\x73hadow-xl transition-all \x64uration-300 \x68over:\x2dtranslate-y-2 [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
          <div className={"w-full \x62g-secondary/\x340 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden]"}>
            <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/eaedfb617fcbecd2.jpg" />
            <img className={"[&]:object-contain [padding:0.5rem]"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt={"Professional headshot of Samuel Kidemi, Frontend Developer, UI Engineer & Co-Founder"} loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/eaedfb617fcbecd2.jpg" />
          </div>
          <div className={"p-6 flex flex-col \x66lex-grow"}>
            <h3 className={"\x66ont-semibold \x74ext-xl text-primary [letter-spacing:-0.025em]"}>Samuel Kidemi</h3>
            <p className={"\x66ont-semibold mb-2 [color:hsl(var(--accent))]"}>Frontend Developer, UI Engineer &amp; Co-Founder</p>
            <p className={"\x74ext-sm mb-4 \x66lex-grow [color:hsl(var(--foreground)/.7)]"}>Computer Science graduate from Kenyatta University and KIMC Graphic Design diplomate. Co-founder of Beta Corporation and founder of Xclusive Tech. Specializes in responsive React/Next.js interfaces, UI/UX prototyping, and cross-device interface QA.</p>
            <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 text-primary \x68over:\x75nderline h-10 \x70x-4 \x70y-2 mt-auto [text-underline-offset:4px] [&:disabled]:pointer-events-none"} href="/team/samuel-kidemi">Learn More About Samuel{" "}<svg className={"ml-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
          </div>
        </div>
        <div className={"rounded-lg text-center \x73hadow-lg \x62order-0 \x62g-card flex flex-col \x68over:\x73hadow-xl transition-all \x64uration-300 \x68over:\x2dtranslate-y-2 [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
          <div className={"w-full \x62g-secondary/\x340 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden]"}>
            <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/454d5fc909ccf138.jpg" />
            <img className={"[&]:object-contain [padding:0.5rem]"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt={"Professional headshot of Joan Cherono Kurgat, Software Engineer - Data, AI & QA Testing"} loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/454d5fc909ccf138.jpg" />
          </div>
          <div className={"p-6 flex flex-col \x66lex-grow"}>
            <h3 className={"\x66ont-semibold \x74ext-xl text-primary [letter-spacing:-0.025em]"}>Joan Cherono Kurgat</h3>
            <p className={"\x66ont-semibold mb-2 [color:hsl(var(--accent))]"}>Software Engineer - Data, AI &amp; QA Testing</p>
            <p className={"\x74ext-sm mb-4 \x66lex-grow [color:hsl(var(--foreground)/.7)]"}>B.Sc Software Engineering from Multimedia University of Kenya. Software Engineer at Qhala specializing in modern Next.js/React applications, Selenium automated testing, Clerk secure authentication, and Power BI business intelligence dashboards.</p>
            <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 text-primary \x68over:\x75nderline h-10 \x70x-4 \x70y-2 mt-auto [text-underline-offset:4px] [&:disabled]:pointer-events-none"} href="/team/joan-kurgat">Learn More About Joan{" "}<svg className={"ml-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
          </div>
        </div>
        <div className={"rounded-lg text-center \x73hadow-lg \x62order-0 \x62g-card flex flex-col \x68over:\x73hadow-xl transition-all \x64uration-300 \x68over:\x2dtranslate-y-2 [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
          <div className={"w-full \x62g-secondary/\x340 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden]"}>
            <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/363d5940773a586c.jpg" />
            <img className={"[&]:object-contain [padding:0.5rem]"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt={"Professional headshot of Allen Ojuka, Senior Service Designer & Frontend Architecture Lead"} loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/363d5940773a586c.jpg" />
          </div>
          <div className={"p-6 flex flex-col \x66lex-grow"}>
            <h3 className={"\x66ont-semibold \x74ext-xl text-primary [letter-spacing:-0.025em]"}>Allen Ojuka</h3>
            <p className={"\x66ont-semibold mb-2 [color:hsl(var(--accent))]"}>Senior Service Designer &amp; Frontend Architecture Lead</p>
            <p className={"\x74ext-sm mb-4 \x66lex-grow [color:hsl(var(--foreground)/.7)]"}>Full-stack engineer and product designer with 7+ years building enterprise web products, Figma design systems, React/Vue frontend architectures, and accessible user journeys.</p>
            <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 text-primary \x68over:\x75nderline h-10 \x70x-4 \x70y-2 mt-auto [text-underline-offset:4px] [&:disabled]:pointer-events-none"} href="/team/allen-ojuka">Learn More About Allen{" "}<svg className={"ml-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
          </div>
        </div>
        <div className={"rounded-lg text-center \x73hadow-lg \x62order-0 \x62g-card flex flex-col \x68over:\x73hadow-xl transition-all \x64uration-300 \x68over:\x2dtranslate-y-2 [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
          <div className={"w-full \x62g-secondary/\x340 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden]"}>
            <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/60e8865a3481cfce.jpg" />
            <img className={"[&]:object-contain [padding:0.5rem]"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt={"Professional headshot of Winston Werimo, Backend Developer & Systems Integration Specialist"} loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/60e8865a3481cfce.jpg" />
          </div>
          <div className={"p-6 flex flex-col \x66lex-grow"}>
            <h3 className={"\x66ont-semibold \x74ext-xl text-primary [letter-spacing:-0.025em]"}>Winston Werimo</h3>
            <p className={"\x66ont-semibold mb-2 [color:hsl(var(--accent))]"}>Backend Developer &amp; Systems Integration Specialist</p>
            <p className={"\x74ext-sm mb-4 \x66lex-grow [color:hsl(var(--foreground)/.7)]"}>Full-stack developer specializing in Python/Flask backend architectures, REST APIs, RapidPro integrations, visual workflow builders, and interactive real-time data dashboards.</p>
            <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 text-primary \x68over:\x75nderline h-10 \x70x-4 \x70y-2 mt-auto [text-underline-offset:4px] [&:disabled]:pointer-events-none"} href="/team/winston-werimo">Learn More About Winston{" "}<svg className={"ml-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionOurAssociates() {
  return (
    <section className={"\x63ontainer \x6dx-auto \x70x-4 [width:100%]"} style={{ animationDelay: "0.7s" } as CSSProperties}>
      <div className="text-center mb-12">
        <h2 className={"\x74ext-3xl \x66ont-bold text-primary"}>Our Associates</h2>
        <p className={"\x6dx-auto mt-3 [color:hsl(var(--foreground)/.7)] [max-width:42rem]"}>Independent specialists we partner with to extend what we can offer clients.</p>
      </div>
      <div className={"grid grid-cols-1 \x6dd:\x67rid-cols-2 \x6cg:\x67rid-cols-4 \x6dx-auto [gap:2rem] [max-width:72rem]"}>
        <div className={"rounded-lg text-center \x73hadow-lg \x62order-0 \x62g-card flex flex-col \x68over:\x73hadow-xl transition-all \x64uration-300 \x68over:\x2dtranslate-y-2 [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
          <div className={"w-full \x62g-secondary/\x340 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden]"}>
            <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/24eaeef3d4525b5e.jpg" />
            <img className={"[&]:object-contain [padding:0.5rem]"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt={"Professional headshot of Dr. Genuine Agakhan Desireh, Public Health Director & SRH Consultant / Associate Partner"} loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/24eaeef3d4525b5e.jpg" />
          </div>
          <div className={"p-6 flex flex-col \x66lex-grow"}>
            <h3 className={"\x66ont-semibold \x74ext-xl text-primary [letter-spacing:-0.025em]"}>Dr. Genuine Agakhan Desireh</h3>
            <p className={"\x66ont-semibold mb-2 [color:hsl(var(--accent))]"}>Public Health Director &amp; SRH Consultant / Associate Partner</p>
            <p className={"\x74ext-sm mb-4 \x66lex-grow [color:hsl(var(--foreground)/.7)]"}>Pharmacist and global health specialist with over 5 years leading sexual and reproductive health (SRH) programs, digital learning platforms, and health systems across Kenya. Digital Consultant at EngenderHealth (MoH Virtual Academy); NextGen RH Advisory Committee; Acumen Academy HCD certified.</p>
            <div className="flex items-center justify-center gap-2 mt-auto">
              <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62order \x62order-input \x62g-background \x68over:\x62g-accent \x68over:\x74ext-accent-foreground h-9 rounded-md \x70x-3 [&:disabled]:pointer-events-none"} href="/team/genuine-desireh" rel="noopener noreferrer" target="_blank"><svg className={"mr-1.5 h-3.5 w-3.5 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg> Website</a>
              <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62order \x62order-input \x62g-background \x68over:\x62g-accent \x68over:\x74ext-accent-foreground h-9 rounded-md \x70x-3 [&:disabled]:pointer-events-none"} href="https://linkedin.com/in/dr-genuine-a-desireh-5002908a" rel="noopener noreferrer" target="_blank"><svg className={"mr-1.5 h-3.5 w-3.5 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg> LinkedIn</a>
            </div>
          </div>
        </div>
        <div className={"rounded-lg text-center \x73hadow-lg \x62order-0 \x62g-card flex flex-col \x68over:\x73hadow-xl transition-all \x64uration-300 \x68over:\x2dtranslate-y-2 [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
          <div className={"w-full \x62g-secondary/\x340 flex items-center justify-center [&]:aspect-square [&]:relative [overflow:hidden]"}>
            <img className={"\x62lur-lg opacity-25 \x73cale-110 [&]:object-cover [&]:pointer-events-none"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="" aria-hidden="true" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/fd8bdbf3ad13d657.jpg" />
            <img className={"[&]:object-contain [padding:0.5rem]"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Professional headshot of Catherine Thairu, AI Agents Expert, Thairu Digital" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/fd8bdbf3ad13d657.jpg" />
          </div>
          <div className={"p-6 flex flex-col \x66lex-grow"}>
            <h3 className={"\x66ont-semibold \x74ext-xl text-primary [letter-spacing:-0.025em]"}>Catherine Thairu</h3>
            <p className={"\x66ont-semibold mb-2 [color:hsl(var(--accent))]"}>AI Agents Expert, Thairu Digital</p>
            <p className={"\x74ext-sm mb-4 \x66lex-grow [color:hsl(var(--foreground)/.7)]"}>Catherine helps businesses turn website visitors into customers with 24/7 AI sales agents and chatbots. A former aviation professional turned AI-driven marketer, she blends automation, paid advertising and content strategy to help brands convert more of the traffic they already have.</p>
            <div className="flex items-center justify-center gap-2 mt-auto">
              <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62order \x62order-input \x62g-background \x68over:\x62g-accent \x68over:\x74ext-accent-foreground h-9 rounded-md \x70x-3 [&:disabled]:pointer-events-none"} href="https://thairudigital.com/" rel="noopener noreferrer" target="_blank"><svg className={"mr-1.5 h-3.5 w-3.5 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg> Website</a>
              <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62order \x62order-input \x62g-background \x68over:\x62g-accent \x68over:\x74ext-accent-foreground h-9 rounded-md \x70x-3 [&:disabled]:pointer-events-none"} href="https://www.linkedin.com/in/catherine-ann-wambui-thairu-00a95115b/" rel="noopener noreferrer" target="_blank"><svg className={"mr-1.5 h-3.5 w-3.5 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg> LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionStrategicPartners() {
  return (
    <section className={"\x63ontainer \x6dx-auto \x70x-4 [width:100%]"} style={{ animationDelay: "0.75s" } as CSSProperties}>
      <div className="text-center mb-10">
        <div className={"inline-flex items-center gap-2 \x70x-3 rounded-full \x62g-primary/\x310 text-primary \x74ext-xs \x66ont-semibold mb-3 [padding-bottom:0.25rem] [padding-top:0.25rem]"}><svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></svg> Service Alliance</div>
        <h2 className={"\x74ext-3xl \x66ont-bold text-primary"}>Strategic Partners</h2>
        <p className={"\x6dx-auto mt-3 [color:hsl(var(--foreground)/.7)] [max-width:42rem]"}>Independent firms we collaborate with to deliver end-to-end transformation across design, operations, and AI.</p>
      </div>
      <div className={"\x6dx-auto [max-width:56rem]"}>
        <div className={"rounded-lg \x62order \x62order-border \x73hadow-lg \x62g-card \x68over:\x73hadow-xl transition-all \x64uration-300 [animation-duration:0.3s] [color:hsl(var(--card-foreground))] [overflow:hidden]"}>
          <div className={"grid grid-cols-1 \x6dd:\x67rid-cols-12 [gap:0px]"}>
            <div className={"\x62g-muted/\x340 p-6 \x73m:\x70-8 flex flex-col items-center text-center \x62order-b \x6dd:\x62order-b-0 \x6dd:\x62order-r \x62order-border [&]:justify-between [@media(min-width:768px)]:[grid-column:span_4/span_4]"}>
              <div className="w-full flex flex-col items-center">
                <div className={"h-16 mb-4 [&]:relative [width:11rem]"}>
                  <img className={"[&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Corelytics Logo" loading="lazy" decoding="async" data-nimg="fill" src="/site-assets/376590902e5309d4-0b6dd0e7f867bd1f2b5e6a5290e98d1f.png" />
                </div>
                <span className={"\x74ext-xs \x66ont-medium text-muted-foreground [&]:uppercase [letter-spacing:0.05em]"}>Strategic Partner</span>
                <span className={"\x74ext-sm \x66ont-semibold text-foreground mt-1"}>Lead: Tony Werimo</span>
              </div>
              <div className={"mt-6 \x62order-t \x62order-border/\x360 w-full \x74ext-xs text-muted-foreground [padding-top:1rem]"}>Independent consulting &amp; AI systems firm</div>
            </div>
            <div className={"p-6 \x73m:\x70-8 flex flex-col \x73pace-y-5 [&]:justify-between [@media(min-width:768px)]:[grid-column:span_8/span_8]"}>
              <div>
                <div className={"flex items-center gap-2 mb-2 [&]:flex-wrap"}>
                  <div className={"inline-flex items-center rounded-full \x62order transition-colors \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-ring \x66ocus:\x72ing-offset-2 \x74ext-xs \x66ont-semibold text-primary \x62order-primary/\x330 [padding-bottom:0.125rem] [padding-left:0.625rem] [padding-right:0.625rem] [padding-top:0.125rem]"}>Partner, Business Systems &amp; AI Practice Lead</div>
                </div>
                <h3 className={"\x74ext-2xl \x66ont-bold text-foreground mb-3"}>Corelytics</h3>
                <p className={"\x74ext-sm \x6ceading-relaxed mb-4 [color:hsl(var(--foreground)/.8)]"}>Business consulting, systems, data and AI for growing businesses that have outgrown spreadsheets.</p>
                <div className={"rounded-lg \x62g-primary/\x35 \x62order \x62order-primary/\x320 mb-4 [padding:0.875rem]"}>
                  <p className={"\x74ext-xs \x66ont-medium italic [color:hsl(var(--foreground)/.9)]"}>“Elite handles brand, design, websites and digital marketing; Corelytics handles operations, systems, data and AI.”</p>
                </div>
                <div className={"flex mb-2 [&]:flex-wrap [gap:0.375rem]"}>
                  <span className={"text-[11px] \x62g-secondary/\x360 rounded-md \x66ont-medium [color:hsl(var(--foreground)/.8)] [padding-bottom:0.25rem] [padding-left:0.625rem] [padding-right:0.625rem] [padding-top:0.25rem]"}>Business Consulting</span>
                  <span className={"text-[11px] \x62g-secondary/\x360 rounded-md \x66ont-medium [color:hsl(var(--foreground)/.8)] [padding-bottom:0.25rem] [padding-left:0.625rem] [padding-right:0.625rem] [padding-top:0.25rem]"}>Process Design</span>
                  <span className={"text-[11px] \x62g-secondary/\x360 rounded-md \x66ont-medium [color:hsl(var(--foreground)/.8)] [padding-bottom:0.25rem] [padding-left:0.625rem] [padding-right:0.625rem] [padding-top:0.25rem]"}>Systems &amp; Mobile Tools</span>
                  <span className={"text-[11px] \x62g-secondary/\x360 rounded-md \x66ont-medium [color:hsl(var(--foreground)/.8)] [padding-bottom:0.25rem] [padding-left:0.625rem] [padding-right:0.625rem] [padding-top:0.25rem]"}>Data &amp; Finance</span>
                  <span className={"text-[11px] \x62g-secondary/\x360 rounded-md \x66ont-medium [color:hsl(var(--foreground)/.8)] [padding-bottom:0.25rem] [padding-left:0.625rem] [padding-right:0.625rem] [padding-top:0.25rem]"}>Practical AI Assistants</span>
                </div>
              </div>
              <div className={"flex items-center gap-3 pt-3 \x62order-t \x62order-border/\x360 [&]:flex-wrap"}>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-9 rounded-md \x70x-3 [&:disabled]:pointer-events-none"} href="/partners">View Full Partner Profile &amp; Case Studies<svg className={"ml-1.5 h-3.5 w-3.5 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
                <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62order \x62order-input \x62g-background \x68over:\x62g-accent \x68over:\x74ext-accent-foreground h-9 rounded-md \x70x-3 [&:disabled]:pointer-events-none"} href="/contact?service=Corelytics%20Consulting%20%26%20AI%20Systems">Discuss a Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

