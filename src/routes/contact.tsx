import type { CSSProperties } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/contact.css?raw";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact Us - Get a Free Quote | Elite Designs Kenya" }] }),
  staticData: { importedDocument: { html: { "className": "__variable_b021ee __variable_f166df", "lang": "en" }, body: { "className": "\x66ont-body \x61ntialiased \x66lex \x66lex-col \x6din-h-screen \x62g-background \x74ext-foreground" } } },
  component: Index,
});

function Index() {
  const [openMenu0, setOpenMenu0] = useState(null as string | null);
  const menuRoot0 = useRef<Element | null>(null);
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
      <style>{capturedCSS}</style>
      <div hidden />
      <header className={"\x62g-background/\x380 \x62ackdrop-blur-md \x73ticky top-0 \x62order-b \x62order-border/\x350 [&]:sticky [z-index:50]"} ref={node => { menuRoot0.current = node; }}>
        <div className={"\x63ontainer \x6dx-auto \x70x-4 [width:100%]"}>
          <div className={"flex items-center h-16 \x6dd:\x68-[\x368px] [&]:justify-between"}>
            <a className="flex items-center shrink-0" href="/">
              <img className="rounded-md" style={{ color: "transparent" }} alt="Elite Designs Kenya Logo" width="130" height="32" decoding="async" data-nimg="1" src="/site-assets/0f4ca2301c5d3ecb.png" />
            </a>
            <div className={"hidden \x6cg:\x66lex items-center [gap:0.25rem]"}>
              <nav className={"flex items-center justify-center [&]:flex-1 [&]:relative [max-width:max-content] [z-index:10]"} aria-label="Main" dir="ltr">
                <div style={{ position: "relative" }}>
                  <ul className={"group flex list-none items-center justify-center \x73pace-x-1 [&]:flex-1"} dir="ltr">
                    <li>
                      <button className={"group inline-flex h-10 w-max items-center justify-center rounded-md \x62g-background \x70x-4 \x70y-2 \x66ont-medium transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground \x66ocus:\x6futline-none disabled:opacity-50 \x64ata-[\x61ctive]:\x62g-accent/\x350 \x64ata-[\x73tate=\x6fpen]:\x62g-accent/\x350 group \x74ext-sm [&:disabled]:pointer-events-none"} aria-expanded={openMenu0 === "observed-0"} onClick={event => { event.preventDefault(); event.stopPropagation(); setOpenMenu0(open => open === "observed-0" ? null : "observed-0"); }} id="radix-«R12db»-trigger-radix-«Rn2db»" data-state="closed" aria-controls="radix-«R12db»-content-radix-«Rn2db»">Services{" "}<svg className={"ml-1 h-3 \x74ransition \x64uration-200 \x67roup-data-[\x73tate=\x6fpen]:\x72otate-180 [&]:relative [animation-duration:0.2s] [top:1px] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] [width:0.75rem]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></button>
                    </li>
                    <li>
                      <button className={"group inline-flex h-10 w-max items-center justify-center rounded-md \x62g-background \x70x-4 \x70y-2 \x66ont-medium transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground \x66ocus:\x6futline-none disabled:opacity-50 \x64ata-[\x61ctive]:\x62g-accent/\x350 \x64ata-[\x73tate=\x6fpen]:\x62g-accent/\x350 group \x74ext-sm [&:disabled]:pointer-events-none"} aria-expanded={openMenu0 === "observed-1"} onClick={event => { event.preventDefault(); event.stopPropagation(); setOpenMenu0(open => open === "observed-1" ? null : "observed-1"); }} id="radix-«R12db»-trigger-radix-«R172db»" data-state="closed" aria-controls="radix-«R12db»-content-radix-«R172db»">Products{" "}<svg className={"ml-1 h-3 \x74ransition \x64uration-200 \x67roup-data-[\x73tate=\x6fpen]:\x72otate-180 [&]:relative [animation-duration:0.2s] [top:1px] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] [width:0.75rem]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></button>
                    </li>
                    <li>
                      <a className={"group inline-flex h-10 w-max items-center justify-center rounded-md \x62g-background \x70x-4 \x70y-2 \x66ont-medium transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground \x66ocus:\x6futline-none disabled:opacity-50 \x64ata-[\x61ctive]:\x62g-accent/\x350 \x64ata-[\x73tate=\x6fpen]:\x62g-accent/\x350 \x74ext-sm [&:disabled]:pointer-events-none"} href="/websites">Websites</a>
                    </li>
                    <li>
                      <a className={"group inline-flex h-10 w-max items-center justify-center rounded-md \x62g-background \x70x-4 \x70y-2 \x66ont-medium transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground \x66ocus:\x6futline-none disabled:opacity-50 \x64ata-[\x61ctive]:\x62g-accent/\x350 \x64ata-[\x73tate=\x6fpen]:\x62g-accent/\x350 \x74ext-sm [&:disabled]:pointer-events-none"} href="https://elitehost.co.ke/">Domains</a>
                    </li>
                    <li>
                      <a className={"group inline-flex h-10 w-max items-center justify-center rounded-md \x62g-background \x70x-4 \x70y-2 \x66ont-medium transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground \x66ocus:\x6futline-none disabled:opacity-50 \x64ata-[\x61ctive]:\x62g-accent/\x350 \x64ata-[\x73tate=\x6fpen]:\x62g-accent/\x350 \x74ext-sm [&:disabled]:pointer-events-none"} href="/portfolio">Portfolio</a>
                    </li>
                    <li>
                      <a className={"group inline-flex h-10 w-max items-center justify-center rounded-md \x62g-background \x70x-4 \x70y-2 \x66ont-medium transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground \x66ocus:\x6futline-none disabled:opacity-50 \x64ata-[\x61ctive]:\x62g-accent/\x350 \x64ata-[\x73tate=\x6fpen]:\x62g-accent/\x350 \x74ext-sm [&:disabled]:pointer-events-none"} href="/about">About</a>
                    </li>
                    <li>
                      <a className={"group inline-flex h-10 w-max items-center justify-center rounded-md \x62g-background \x70x-4 \x70y-2 \x66ont-medium transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground \x66ocus:\x6futline-none disabled:opacity-50 \x64ata-[\x61ctive]:\x62g-accent/\x350 \x64ata-[\x73tate=\x6fpen]:\x62g-accent/\x350 \x74ext-sm [&:disabled]:pointer-events-none"} href="/partners">Partners</a>
                    </li>
                    <li>
                      <a className={"group inline-flex h-10 w-max items-center justify-center rounded-md \x62g-background \x70x-4 \x70y-2 \x66ont-medium transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground \x66ocus:\x6futline-none disabled:opacity-50 \x64ata-[\x61ctive]:\x62g-accent/\x350 \x64ata-[\x73tate=\x6fpen]:\x62g-accent/\x350 \x74ext-sm [&:disabled]:pointer-events-none"} href="/blog">Blog</a>
                    </li>
                    <li>
                      <a className={"group inline-flex h-10 w-max items-center justify-center rounded-md \x62g-background \x70x-4 \x70y-2 \x66ont-medium transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground \x66ocus:\x6futline-none disabled:opacity-50 \x64ata-[\x61ctive]:\x62g-accent/\x350 \x64ata-[\x73tate=\x6fpen]:\x62g-accent/\x350 \x74ext-sm [&:disabled]:pointer-events-none"} href="/pricing">Pricing</a>
                    </li>
                    <li>
                      <a className={"group inline-flex h-10 w-max items-center justify-center rounded-md \x62g-background \x70x-4 \x70y-2 \x66ont-medium transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground \x66ocus:\x6futline-none disabled:opacity-50 \x64ata-[\x61ctive]:\x62g-accent/\x350 \x64ata-[\x73tate=\x6fpen]:\x62g-accent/\x350 \x74ext-sm [&:disabled]:pointer-events-none"} href="/account">My Account</a>
                    </li>
                  </ul>
                </div>
                <div className={"left-0 flex justify-center [&]:absolute [top:100%]"} />
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <a className={"items-center justify-center gap-2 whitespace-nowrap \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-9 rounded-md \x70x-3 hidden \x73m:\x69nline-flex \x74ext-xs [&:disabled]:pointer-events-none"} href="#">Get a Quote</a>
              <div className={"\x6cg:\x68idden"}>
                <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x68over:\x62g-accent \x68over:\x74ext-accent-foreground h-9 w-9 [&:disabled]:pointer-events-none"} type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-«R5idb»" data-state="closed">
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
      <main className={"\x66lex-grow"}>
        <div className={"\x63ontainer \x6dx-auto \x70x-4 \x61nimate-fade-in-up [padding-bottom:4rem] [padding-top:4rem] [width:100%]"} style={{ transform: "translateY(0px)", opacity: "1" }}>
          <div className="text-center mb-12">
            <h1 className={"\x74ext-4xl \x6dd:\x74ext-5xl \x66ont-bold text-primary mb-4"}>Let's Build Something Amazing Together</h1>
            <p className={"\x74ext-lg \x6dd:\x74ext-xl \x6dx-auto \x74ext-foreground/\x380 [max-width:48rem]"}>Have a project in mind, a question, or just want to brainstorm? We're here to listen and explore how we can transform your digital ideas into reality.</p>
          </div>
          <div className={"grid \x6dd:\x67rid-cols-2 items-start [gap:3rem]"}>
            <div className={"rounded-lg \x62g-card p-6 \x6dd:\x70-8 \x73hadow-xl \x62order-0 [color:hsl(var(--card-foreground))]"} style={{ animationDelay: "0.2s" } as CSSProperties}>
              <div className={"flex flex-col \x73pace-y-1.\x35 p-6"}>
                <h3 className={"\x66ont-semibold \x74ext-2xl [letter-spacing:-0.025em]"}>Send Us a Message</h3>
              </div>
              <div className="p-6 pt-0">
                <form className={"\x73pace-y-6"}>
                  <div className={"\x73pace-y-2"}>
                    <label className={"\x74ext-sm \x66ont-medium \x6ceading-none \x70eer-disabled:\x63ursor-not-allowed \x70eer-disabled:\x6fpacity-70"} htmlFor="«r0»-form-item">Full Name</label>
                    <input className={"flex h-10 w-full rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-base \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ile:\x74ext-foreground \x70laceholder:\x74ext-muted-foreground \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x6dd:\x74ext-sm"} placeholder="John Doe" id="«r0»-form-item" aria-describedby="«r0»-form-item-description" aria-invalid="false" defaultValue="" name="name" />
                  </div>
                  <div className={"\x73pace-y-2"}>
                    <label className={"\x74ext-sm \x66ont-medium \x6ceading-none \x70eer-disabled:\x63ursor-not-allowed \x70eer-disabled:\x6fpacity-70"} htmlFor="«r1»-form-item">Email Address</label>
                    <input className={"flex h-10 w-full rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-base \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ile:\x74ext-foreground \x70laceholder:\x74ext-muted-foreground \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x6dd:\x74ext-sm"} placeholder="you@example.com" id="«r1»-form-item" aria-describedby="«r1»-form-item-description" aria-invalid="false" defaultValue="" name="email" />
                  </div>
                  <div className={"\x73pace-y-2"}>
                    <label className={"\x74ext-sm \x66ont-medium \x6ceading-none \x70eer-disabled:\x63ursor-not-allowed \x70eer-disabled:\x6fpacity-70"} htmlFor="«r2»-form-item">Subject</label>
                    <input className={"flex h-10 w-full rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-base \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ile:\x74ext-foreground \x70laceholder:\x74ext-muted-foreground \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x6dd:\x74ext-sm"} placeholder="Website Redesign Inquiry" id="«r2»-form-item" aria-describedby="«r2»-form-item-description" aria-invalid="false" defaultValue="" name="subject" />
                  </div>
                  <div className={"\x73pace-y-2"}>
                    <label className={"\x74ext-sm \x66ont-medium \x6ceading-none \x70eer-disabled:\x63ursor-not-allowed \x70eer-disabled:\x6fpacity-70"} htmlFor="«r3»-form-item">Your Message</label>
                    <textarea className={"flex w-full rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-base \x72ing-offset-background \x70laceholder:\x74ext-muted-foreground \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x6dd:\x74ext-sm [&]:min-h-[80px] [&]:resize-none"} placeholder="Tell us a little bit about your project..." name="message" id="«r3»-form-item" aria-describedby="«r3»-form-item-description" aria-invalid="false" />
                  </div>
                  <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-11 rounded-md \x70x-8 w-full [&:disabled]:pointer-events-none"} type="submit"><svg className={"mr-2 h-4 w-4 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /><path d="m21.854 2.147-10.94 10.939" /></svg> Send Message</button>
                </form>
              </div>
            </div>
            <div className={"\x73pace-y-8"} style={{ animationDelay: "0.4s" } as CSSProperties}>
              <div className={"rounded-lg \x62order-0 \x73hadow-lg \x62g-secondary/\x350 [color:hsl(var(--card-foreground))]"}>
                <div className={"flex flex-col \x73pace-y-1.\x35 p-6"}>
                  <h3 className={"\x74ext-2xl \x66ont-semibold \x6ceading-none [letter-spacing:-0.025em]"}>Contact Information</h3>
                </div>
                <div className={"p-6 pt-0 \x73pace-y-4 \x74ext-sm"}>
                  <div className="flex items-start [gap:1rem]">
                    <svg className="h-5 w-5 text-primary mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div>
                      <p className={"\x66ont-semibold"}>Our Office Location</p>
                      <p className={"\x74ext-foreground/\x380"}>Wood Avenue Park Apartments</p>
                      <p className={"\x74ext-foreground/\x380"}>Kilimani, First Floor, Suite F8</p>
                      <p className={"\x74ext-foreground/\x380"}>Nairobi, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-start [gap:1rem]">
                    <svg className="h-5 w-5 text-primary mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <div>
                      <p className={"\x66ont-semibold"}>Email Us Directly</p>
                      <a className={"\x74ext-foreground/\x380 \x68over:\x74ext-primary"} href="mailto:info@elitedesigns.co.ke">info@elitedesigns.co.ke</a>
                    </div>
                  </div>
                  <div className="flex items-start [gap:1rem]">
                    <svg className="h-5 w-5 text-primary mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <div>
                      <p className={"\x66ont-semibold"}>Give Us a Call</p>
                      <p className={"\x74ext-foreground/\x380"}>Gregory: <a className={"\x68over:\x74ext-primary"} href="tel:+254796429489">+254 796 429 489</a></p>
                      <p className={"\x74ext-foreground/\x380"}>David: <a className={"\x68over:\x74ext-primary"} href="tel:+254708927425">+254 708 927 425</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"rounded-lg \x62order-0 \x73hadow-lg \x62g-card p-6 [color:hsl(var(--card-foreground))]"}>
                <h3 className={"\x66ont-bold \x74ext-lg text-primary mb-2"}>Find Our Studio</h3>
                <p className={"\x74ext-sm \x74ext-foreground/\x380 mb-4"}>Our creative hub is located in Kilimani, Nairobi. We'd love to discuss your project in person. Appointments are recommended for consultations to ensure we can give you our undivided attention.</p>
                <div className="h-64 w-full">
                  <img className={"rounded-lg \x73hadow-md"} style={{ border: "0px", width: "672.5px", maxWidth: "100%", height: "auto" }} alt="" src="/site-assets/4e12b37aa76b537b.png" data-site-import-static-fallback="video" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ImportedFooter />
      <div className={"[&]:fixed [bottom:1rem] [left:1rem] [z-index:50]"}>
        <button className={"group h-[62px] rounded-2xl \x62g-gradient-to-br \x66rom-[#\x32b01ef] \x74o-[#\x32596be] text-white \x73hadow-2xl transition-all \x64uration-300 \x68over:\x73cale-110 \x68over:\x73hadow-[\x30_8px_40px_rgba(\x343,\x31,\x3239,\x30.\x34)] \x61ctive:\x73cale-95 [&]:relative [&]:w-[62px] [animation-duration:0.3s]"} aria-label="Open chat">
          <div className={"rounded-2xl \x62g-white/\x310 opacity-0 \x67roup-hover:\x6fpacity-100 [&]:absolute [inset:0px] [transition-duration:0.15s] [transition-property:opacity] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]"} />
          <div className="flex items-center justify-center h-full">
            <svg className={"h-7 \x64rop-shadow-lg [width:1.75rem]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
          </div>
          <span className={"flex h-4 w-4 [&]:absolute [right:-0.25rem] [top:-0.25rem]"}>
            <span className={"\x61nimate-ping inline-flex h-full w-full rounded-full \x62g-green-400 opacity-75 [&]:absolute"} />
            <span className={"inline-flex rounded-full h-4 w-4 \x62g-green-500 \x62order-2 \x62order-white [&]:relative"} />
          </span>
        </button>
      </div>
      <div className={"\x62g-black/\x360 flex items-center justify-center p-4 \x61nimate-fade-in-up [&]:fixed [inset:0px] [overflow-y:auto] [z-index:100]"} style={{ transform: "translateY(0px)", opacity: "1" }}>
        <div className={"w-full \x6dy-8 \x62g-card rounded-2xl \x73hadow-2xl grid \x6dd:\x67rid-cols-2 [&]:relative [max-width:56rem] [overflow:hidden]"}>
          <button className={"h-9 w-9 rounded-full \x62g-background/\x380 \x68over:\x62g-background flex items-center justify-center transition-colors [&]:absolute [right:0.75rem] [top:0.75rem] [z-index:10]"} aria-label="Close">
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
            <div className={"mt-8 \x62order-t \x62order-white/\x310 grid [gap:1rem] [grid-template-columns:repeat(2,minmax(0px,1fr))] [padding-top:1.5rem]"}>
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
              <div className="grid gap-3 [grid-template-columns:repeat(2,minmax(0px,1fr))]">
                <div className={"\x73pace-y-2"}>
                  <input className={"flex h-10 w-full rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-base \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ile:\x74ext-foreground \x70laceholder:\x74ext-muted-foreground \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x6dd:\x74ext-sm"} placeholder="Full name*" id="«r4»-form-item" aria-describedby="«r4»-form-item-description" aria-invalid="false" defaultValue="" name="name" />
                </div>
                <div className={"\x73pace-y-2"}>
                  <input className={"flex h-10 w-full rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-base \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ile:\x74ext-foreground \x70laceholder:\x74ext-muted-foreground \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x6dd:\x74ext-sm"} placeholder="Email*" id="«r5»-form-item" aria-describedby="«r5»-form-item-description" aria-invalid="false" type="email" defaultValue="" name="email" />
                </div>
              </div>
              <div className="flex gap-2">
                <button className={"flex h-10 items-center rounded-md \x62order \x62order-input \x62g-background \x70y-2 \x74ext-sm \x72ing-offset-background \x70laceholder:\x74ext-muted-foreground \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-ring \x66ocus:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 [&>\x73pan]:\x6cine-clamp-1 shrink-0 \x70x-2 [&]:justify-between [&]:w-[92px]"} type="button" role="combobox" aria-controls="radix-«r6»" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed">
                  <span style={{ pointerEvents: "none" }}>🇰🇪 +254</span>
                  <svg className="h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div>
                  <span role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-BexiJ-panel" aria-activedescendant="bb-customSelect-BexiJ-selectedOption" tabIndex={0}>
                    <span>🇰🇪 +254</span>
                  </span>
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
                  <div id="bb-customSelect-BexiJ-panel" role="listbox">
                    <div role="option" id="bb-customSelect-BexiJ-selectedOption">🇰🇪 +254</div>
                    <div role="option">🇺🇬 +256</div>
                    <div role="option">🇹🇿 +255</div>
                    <div role="option">🇷🇼 +250</div>
                    <div role="option">🇳🇬 +234</div>
                    <div role="option">🇿🇦 +27</div>
                    <div role="option">🇬🇧 +44</div>
                    <div role="option">🇺🇸 +1</div>
                  </div>
                </div>
                <div className={"\x73pace-y-2 [&]:flex-1"}>
                  <input className={"flex h-10 w-full rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-base \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ile:\x74ext-foreground \x70laceholder:\x74ext-muted-foreground \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x6dd:\x74ext-sm"} placeholder="Phone number*" id="«r7»-form-item" aria-describedby="«r7»-form-item-description" aria-invalid="false" defaultValue="" name="phone" />
                </div>
              </div>
              <div className={"\x73pace-y-2"}>
                <input className={"flex h-10 w-full rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-base \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ile:\x74ext-foreground \x70laceholder:\x74ext-muted-foreground \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x6dd:\x74ext-sm"} placeholder="Company" id="«r8»-form-item" aria-describedby="«r8»-form-item-description" aria-invalid="false" defaultValue="" name="company" />
              </div>
              <div className="grid gap-3 [grid-template-columns:repeat(2,minmax(0px,1fr))]">
                <button className={"flex h-10 w-full items-center rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-sm \x72ing-offset-background \x70laceholder:\x74ext-muted-foreground \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-ring \x66ocus:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 [&>\x73pan]:\x6cine-clamp-1 [&]:justify-between"} type="button" role="combobox" aria-controls="radix-«r9»" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed">
                  <span style={{ pointerEvents: "none" }}>Service interested in (optional)</span>
                  <svg className="h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div>
                  <span role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-1guup-panel" aria-activedescendant="bb-customSelect-1guup-selectedOption" tabIndex={0}>
                    <span>Website Design &amp; Development</span>
                  </span>
                  <select style={{ position: "absolute", border: "0px", width: "1px", height: "1px", padding: "0px", margin: "-1px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", whiteSpace: "nowrap", overflowWrap: "normal" } as CSSProperties} aria-hidden="true" tabIndex={-1} defaultValue={"Website Design & Development"}>
                    <option value={"Website Design & Development"}>Website Design &amp; Development</option>
                    <option value="Custom Web Application">Custom Web Application</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Creative / BTL Media">Creative / BTL Media</option>
                    <option value="E-commerce Store">E-commerce Store</option>
                    <option value={"Web Hosting & Domains"}>Web Hosting &amp; Domains</option>
                    <option value="Other">Other</option>
                  </select>
                  <div id="bb-customSelect-1guup-panel" role="listbox">
                    <div role="option" id="bb-customSelect-1guup-selectedOption">Website Design &amp; Development</div>
                    <div role="option">Custom Web Application</div>
                    <div role="option">Digital Marketing</div>
                    <div role="option">Creative / BTL Media</div>
                    <div role="option">E-commerce Store</div>
                    <div role="option">Web Hosting &amp; Domains</div>
                    <div role="option">Other</div>
                  </div>
                </div>
                <button className={"flex h-10 w-full items-center rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-sm \x72ing-offset-background \x70laceholder:\x74ext-muted-foreground \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-ring \x66ocus:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 [&>\x73pan]:\x6cine-clamp-1 [&]:justify-between"} type="button" role="combobox" aria-controls="radix-«ra»" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed">
                  <span style={{ pointerEvents: "none" }}>Budget range (optional)</span>
                  <svg className="h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div>
                  <span role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-imHub-panel" aria-activedescendant="bb-customSelect-imHub-selectedOption" tabIndex={0}>
                    <span>Under KES 60,000</span>
                  </span>
                  <select style={{ position: "absolute", border: "0px", width: "1px", height: "1px", padding: "0px", margin: "-1px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", whiteSpace: "nowrap", overflowWrap: "normal" } as CSSProperties} aria-hidden="true" tabIndex={-1} defaultValue="Under KES 60,000">
                    <option value="Under KES 60,000">Under KES 60,000</option>
                    <option value="KES 60,000 – 130,000">KES 60,000 – 130,000</option>
                    <option value="KES 130,000 – 350,000">KES 130,000 – 350,000</option>
                    <option value="KES 350,000+">KES 350,000+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                  <div id="bb-customSelect-imHub-panel" role="listbox">
                    <div role="option" id="bb-customSelect-imHub-selectedOption">Under KES 60,000</div>
                    <div role="option">KES 60,000 – 130,000</div>
                    <div role="option">KES 130,000 – 350,000</div>
                    <div role="option">KES 350,000+</div>
                    <div role="option">Not sure yet</div>
                  </div>
                </div>
              </div>
              <div className={"\x73pace-y-2"}>
                <textarea className={"flex w-full rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-base \x72ing-offset-background \x70laceholder:\x74ext-muted-foreground \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x6dd:\x74ext-sm [&]:min-h-[100px] [&]:resize-none"} placeholder="Tell us about your project*" name="message" id="«rb»-form-item" aria-describedby="«rb»-form-item-description" aria-invalid="false" />
              </div>
              <div className={"\x73pace-y-2"}>
                <div className="flex items-start gap-2">
                  <button className={"peer h-4 w-4 shrink-0 rounded-sm \x62order \x62order-primary \x72ing-offset-background \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x64ata-[\x73tate=\x63hecked]:\x62g-primary \x64ata-[\x73tate=\x63hecked]:\x74ext-primary-foreground mt-0.5"} type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" id="«rc»-form-item" aria-describedby="«rc»-form-item-description" aria-invalid="false" />
                  <input style={{ transform: "translateX(-100%)", position: "absolute", pointerEvents: "none", opacity: "0", margin: "0px", width: "16px", height: "16px" }} aria-hidden="true" tabIndex={-1} type="checkbox" defaultValue="on" />
                  <label className={"\x74ext-xs text-muted-foreground \x6ceading-snug"}>I accept the <a className={"text-primary \x68over:\x75nderline"} href="/terms" target="_blank">Terms &amp; Conditions</a> and <a className={"text-primary \x68over:\x75nderline"} href="/privacy" target="_blank">Privacy Policy</a>.</label>
                </div>
              </div>
              <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-11 rounded-md \x70x-8 w-full group [&:disabled]:pointer-events-none"} type="submit">Submit<svg className={"ml-2 h-4 w-4 \x74ransition-transform \x67roup-hover:\x74ranslate-x-0.\x35 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></button>
              <button className={"w-full flex items-center justify-center \x74ext-xs text-muted-foreground \x68over:\x74ext-primary transition-colors [gap:0.375rem]"} type="button"><svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg> Prefer email? Send it to us directly</button>
              <p className="text-[11px] text-center text-muted-foreground">Your details are 100% secure. Zero spam.</p>
            </form>
          </div>
        </div>
      </div>
      <button className={"inline-flex items-center rounded-full \x70x-5 \x70y-3 text-[14.5px] \x66ont-bold text-white \x73hadow-xl transition-all \x64uration-300 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x73hadow-2xl \x61ctive:\x74ranslate-y-0 cursor-pointer [&]:fixed [animation-duration:0.3s] [bottom:1.5rem] [gap:0.625rem] [right:1.5rem] [z-index:50]"} style={{ background: "linear-gradient(135deg, rgb(241, 90, 36) 0%, rgb(234, 88, 12) 100%)", boxShadow: "rgba(241, 90, 36, 0.45) 0px 10px 25px -4px, rgba(0, 0, 0, 0.1) 0px 4px 10px -2px" }} type="button" aria-label="Ask ChatGPT about Elite Designs Kenya">
        <svg className="w-5 h-5 [fill:currentcolor]" viewBox="0 0 24 24">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.66-5.5873a4.4708 4.4708 0 0 1-.5346-3.0037l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1402-3.1083zM2.3528 8.5298a4.466 4.466 0 0 1 2.3465-1.9634v5.7197a.7854.7854 0 0 0 .3927.6813l5.8333 3.3685-2.02 1.1683a.0757.0757 0 0 1-.0615.0048L3.999 14.636a4.504 4.504 0 0 1-1.6462-6.1062zm16.0375 4.0954l-5.8428-3.3732 2.02-1.1683a.0757.0757 0 0 1 .0615-.0048l4.8447 2.7961a4.504 4.504 0 0 1-1.0834 8.2818v-5.8503a.7854.7854 0 0 0-.3927-.6813zm2.0105-3.0227l-.142-.0852-4.7783-2.7818a.7759.7759 0 0 0-.7854 0L8.8523 10.104V7.7716a.0757.0757 0 0 1 .0331-.0615l4.8447-2.7961a4.504 4.504 0 0 1 6.6496 4.7932zM12.0001 7.2132l3.326 1.9174v3.8348l-3.326 1.9174-3.326-1.9174V9.1306l3.326-1.9174z" />
        </svg>
        <span>Ask ChatGPT about us</span>
      </button>
      <div style={{ pointerEvents: "none" }} role="region" aria-label="Notifications (F8)" tabIndex={-1}>
        <ol className={"top-0 flex w-full flex-col-reverse p-4 \x73m:\x74op-auto \x73m:\x66lex-col [&]:fixed [max-height:100vh] [z-index:100] [@media(min-width:640px)]:[bottom:0px] [@media(min-width:640px)]:[right:0px] [@media(min-width:768px)]:max-w-[420px]"} tabIndex={-1} />
      </div>
      <div className="ti-widget ti-widget-appeared [color:black]" data-layout-id="74" data-set-id="default">
        <div className={"ti-sticky-button ti-position-right [&]:fixed [bottom:0] [right:var(--ti-cert-badge-position)] [transition:box-shadow_0.2s_ease-in-out,bottom_1.3s_ease-in-out,margin_1.3s_ease-in-out] [z-index:2147483647]"}>
          <div className={"ti-clickable-expand left-[-15px] [&]:absolute right-[-15px] top-[-15px] [bottom:0px] [z-index:1]"} />
          <div className={"ti-sticky-button-header [&]:items-center [&]:justify-center p-[6px] [padding-bottom:4px]!"}>
            <div className={"ti-trust-icon [&]:items-center"}>
              <img src="/site-assets/eddce221941efba5-9507e17a424fcbde8e5985196d7db5cb.png" alt="Trustindex" width="14" height="14" />
            </div>
            <div className="ti-verified-title">Trusted Site</div>
          </div>
          <div className="ti-sticky-button-footer [color:white] [overflow:hidden]">
            <div className="ti-sticky-button-footer-inner [padding:6px_8px]">Verified by <strong>Trustindex</strong></div>
          </div>
        </div>
        <div className={"ti-modal-container [&]:fixed invisible [bottom:0px] [left:0px] [right:0px] [top:0px] [transition:all_0.4s] [z-index:2147483647] [@media(max-width:430px)]:pt-[50px]"}>
          <div className={"ti-modal [&]:flex-col [&]:justify-center [&]:relative scroll-smooth [color:#000000] [max-height:100vh] [transition:transform_0.4s_ease-in-out]"}>
            <div className="ti-close-button" aria-label="Close" role="button" />
            <div className="ti-modal-inner [color:inherit] [overflow:hidden] [overflow-y:auto]!">
              <div className={"ti-modal-header [&]:items-center [&]:flex-wrap [&]:justify-between [&]:sticky [color:#ffffff] [left:0px] [padding:15px_20px_15px_30px] [right:0px] [top:0px] [z-index:1]"}>
                <div className="ti-domain ti-field-domain wrap-break-word [min-width:0]">elitedesigns.co.ke</div>
                <div className="ti-header-link">
                  <a href="https://www.trustindex.io/reviews/elitedesigns.co.ke/lang/en" target="_blank">Latest reviews</a>
                </div>
              </div>
              <div className={"ti-modal-body [&]:grow [color:inherit] [flex-basis:0] [max-width:100%]"}>
                <div className="ti-site-info pb-[15px] pl-[30px] pr-[30px] pt-[15px]">This site has obtained the following certificates:</div>
                <div className={"ti-modal-badge [&]:items-center [&]:justify-between pb-[15px] pl-[30px] pr-[30px] pt-[15px] [&]:relative [color:#000000]"}>
                  <a className="ti-badge-left" href="https://www.trustindex.io/reviews/elitedesigns.co.ke/lang/en" target="_blank">
                    <div className="ti-rating-title">Excellent rating</div>
                    <div className={"ti-rating-stars [&]:items-center flex-row-reverse [justify-content:left]"}>
                      <div className="ti-rating-counter">5.0</div>
                      <span className={"ti-stars [&]:whitespace-nowrap"}>
                        <img className="ti-star f [width:18px]!" src="/site-assets/60d0a76a46ec7c32-5c2a9609c057962b819f12910ac04de1.png" alt="Google" width="17" height="17" loading="lazy" />
                        <img className="ti-star f [width:18px]!" src="/site-assets/60d0a76a46ec7c32-5c2a9609c057962b819f12910ac04de1.png" alt="Google" width="17" height="17" loading="lazy" />
                        <img className="ti-star f [width:18px]!" src="/site-assets/60d0a76a46ec7c32-5c2a9609c057962b819f12910ac04de1.png" alt="Google" width="17" height="17" loading="lazy" />
                        <img className="ti-star f [width:18px]!" src="/site-assets/60d0a76a46ec7c32-5c2a9609c057962b819f12910ac04de1.png" alt="Google" width="17" height="17" loading="lazy" />
                        <img className="ti-star f [width:18px]!" src="/site-assets/60d0a76a46ec7c32-5c2a9609c057962b819f12910ac04de1.png" alt="Google" width="17" height="17" loading="lazy" />
                      </span>
                    </div>
                    <div className="ti-rating-subtitle">200 Google reviews</div>
                  </a>
                  <div className="ti-badge-right">
                    <div className={"ti-sticky-button-header [&]:items-center [&]:justify-center p-[6px] [padding-bottom:4px]!"}>
                      <div className={"ti-trust-icon [&]:items-center"}>
                        <img src="/site-assets/eddce221941efba5-9507e17a424fcbde8e5985196d7db5cb.png" alt="Trustindex" width="14" height="14" />
                      </div>
                      <div className="ti-verified-title">Trusted Site</div>
                    </div>
                    <div className="ti-sticky-button-footer [color:white] [overflow:hidden]">
                      <div className="ti-sticky-button-footer-inner [padding:6px_8px]">Verified by <strong>Trustindex</strong></div>
                    </div>
                  </div>
                </div>
                <div className="ti-accordion [color:#000000] [padding:15px_30px_10px_30px]">
                  <div className="ti-accordion-item" data-type="reviews-credibility">
                    <div className={"ti-accordion-header [&]:items-center [&]:relative [padding:13px_15px]"}>
                      <div className={"ti-accordion-title [&]:pointer-events-none"}>Reviews credibility</div>
                      <div className={"ti-accordion-title-verified pr-[20px] [&]:pointer-events-none [color:#1a976a]"}>Certified</div>
                      <i className={"ti-accordion-arrow [&]:pointer-events-none right-[15px]"} />
                    </div>
                    <div className="ti-accordion-body [color:#000000] [max-height:0] [overflow:hidden] [padding:0px_15px_0px_15px]">
                      <div className="ti-accordion-inner pb-[13px]">
                        <p>Customer reviews showcase the level and quality of service a website provides.</p>
                        <p>Trustindex collaborates with 137 review platforms to provide website visitors easy access to all real and verified reviews in one place.</p>
                        <p>Reviews from other platforms are displayed and added to the ratings only if they are proven spam-free and meet Trustindex's guidelines.</p>
                      </div>
                    </div>
                  </div>
                  <div className="ti-accordion-item" data-type="issue-free">
                    <div className={"ti-accordion-header [&]:items-center [&]:relative [padding:13px_15px]"}>
                      <div className={"ti-accordion-title [&]:pointer-events-none"}>100% issue-free services</div>
                      <div className={"ti-accordion-title-verified pr-[20px] [&]:pointer-events-none [color:#1a976a]"}>Certified</div>
                      <i className={"ti-accordion-arrow [&]:pointer-events-none right-[15px]"} />
                    </div>
                    <div className="ti-accordion-body [color:#000000] [max-height:0] [overflow:hidden] [padding:0px_15px_0px_15px]">
                      <div className="ti-accordion-inner pb-[13px]">
                        <p>Trustindex continuously measures the satisfaction of your customers based on evaluations. Less than 1% of the customers surveyed indicated a problem.</p>
                      </div>
                    </div>
                  </div>
                  <div className="ti-accordion-item" data-type="verified-business">
                    <div className={"ti-accordion-header [&]:items-center [&]:relative [padding:13px_15px]"}>
                      <div className={"ti-accordion-title [&]:pointer-events-none"}>Verified business</div>
                      <div className={"ti-accordion-title-verified pr-[20px] [&]:pointer-events-none [color:#1a976a]"}>Certified</div>
                      <i className={"ti-accordion-arrow [&]:pointer-events-none right-[15px]"} />
                    </div>
                    <div className="ti-accordion-body [color:#000000] [max-height:0] [overflow:hidden] [padding:0px_15px_0px_15px]">
                      <div className="ti-accordion-inner pb-[13px]">
                        <p>The website's contact information and business information has been independently verified by Trustindex.</p>
                        <div className={"ti-acc-title pb-[10px] [&]:uppercase"}>Contact details</div>
                        <div className="ti-table">
                          <div className="ti-table-row pb-[10px]">
                            <div className="ti-td-left flex-[0_0_75px]">Phone:</div>
                            <div className={"ti-td-right ti-field-phone [&]:grow [-ms-flex-positive:1] [flex-basis:0] [max-width:100%]"}>+254 708 927425</div>
                            <div className="ti-td-verify [color:#1a976a]">Verified</div>
                          </div>
                          <div className="ti-table-row pb-[10px]">
                            <div className="ti-td-left flex-[0_0_75px]">E-mail:</div>
                            <div className={"ti-td-right ti-field-email [&]:grow [-ms-flex-positive:1] [flex-basis:0] [max-width:100%]"}>info@elitedesigns.co.ke</div>
                            <div className="ti-td-verify [color:#1a976a]">Verified</div>
                          </div>
                        </div>
                        <div className={"ti-acc-title pb-[10px] [&]:uppercase"}>Business data</div>
                        <div className="ti-table">
                          <div className="ti-table-row pb-[10px]">
                            <div className="ti-td-left flex-[0_0_150px]">Company name:</div>
                            <div className={"ti-td-right ti-field-company-name [&]:grow [-ms-flex-positive:1] [flex-basis:0] [max-width:100%]"}>David Esabwa™ - Best Web Design Company in Nairobi | SEO company Nairobi | Web Designer in Nairobi |</div>
                          </div>
                          <div className="ti-table-row pb-[10px]">
                            <div className="ti-td-left flex-[0_0_150px]">Domain:</div>
                            <div className={"ti-td-right ti-field-domain [&]:grow [-ms-flex-positive:1] [flex-basis:0] [max-width:100%]"}>elitedesigns.co.ke</div>
                          </div>
                          <div className="ti-table-row pb-[10px]">
                            <div className="ti-td-left flex-[0_0_150px]">Company founded:</div>
                            <div className={"ti-td-right ti-field-founded-at [&]:grow [-ms-flex-positive:1] [flex-basis:0] [max-width:100%]"}>2025</div>
                          </div>
                          <div className="ti-table-row pb-[10px]">
                            <div className="ti-td-left flex-[0_0_150px]">Number of employees:</div>
                            <div className={"ti-td-right ti-field-employee-number [&]:grow [-ms-flex-positive:1] [flex-basis:0] [max-width:100%]"}>1-10</div>
                          </div>
                          <div className="ti-table-row pb-[10px]">
                            <div className="ti-td-left flex-[0_0_150px]">Start of Trustindex verification:</div>
                            <div className={"ti-td-right [&]:grow [-ms-flex-positive:1] [flex-basis:0] [max-width:100%]"}>2025-12-11</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ti-accordion-item ti-validation-rows" data-type="data-protection">
                    <div className={"ti-accordion-header [&]:items-center [&]:relative [padding:13px_15px]"}>
                      <div className={"ti-accordion-title [&]:pointer-events-none"}>Data protection</div>
                      <div className={"ti-accordion-title-verified pr-[20px] [&]:pointer-events-none [color:#1a976a]"}>Certified</div>
                      <i className={"ti-accordion-arrow [&]:pointer-events-none right-[15px]"} />
                    </div>
                    <div className="ti-accordion-body [color:#000000] [max-height:0] [overflow:hidden] [padding:0px_15px_0px_15px]">
                      <div className="ti-accordion-inner pb-[13px]">
                        <p>The website is constantly checked for security issues by Trustindex.</p>
                        <div className="ti-table">
                          <div className="ti-table-row ti-google-validation-row pb-[10px]">
                            <div className="ti-td-left flex-[0_0_75px]">
                              <img className="cert-small-logo [width:auto]!" src="/site-assets/4e84797512a7ee02-7113ea1025a37b2f9954d410e3f139b6.png" width="47" height="15" alt="Google" />
                            </div>
                            <div className={"ti-td-right [&]:grow [-ms-flex-positive:1] [flex-basis:0] [max-width:100%]"}>Safe Browsing: no problems detected</div>
                            <div className="ti-td-check-icon flex-[0_0_20px]" />
                          </div>
                          <div className="ti-table-row ti-blacklist-validation-row pb-[10px]">
                            <div className="ti-td-left flex-[0_0_75px]">
                              <strong>Blacklist</strong>
                            </div>
                            <div className={"ti-td-right [&]:grow [-ms-flex-positive:1] [flex-basis:0] [max-width:100%]"}>Not a Blacklisted Site</div>
                            <div className="ti-td-check-icon flex-[0_0_20px]" />
                          </div>
                          <div className="ti-table-row ti-ssl-validation-row pb-[10px]">
                            <div className="ti-td-left flex-[0_0_75px]">
                              <img className="cert-small-logo [width:auto]!" src="/site-assets/bfe6ed5813bd336e-02932f5928462baff3c59ba079f4752e.png" alt="SSL" width="40" height="15" />
                            </div>
                            <div className={"ti-td-right [&]:grow [-ms-flex-positive:1] [flex-basis:0] [max-width:100%]"}>Valid SSL certificate</div>
                            <div className="ti-td-check-icon flex-[0_0_20px]" />
                          </div>
                          <div className="ti-table-row ti-email-validation-row pb-[10px]">
                            <div className="ti-td-left flex-[0_0_75px]">
                              <strong>Spam</strong>
                            </div>
                            <div className={"ti-td-right [&]:grow [-ms-flex-positive:1] [flex-basis:0] [max-width:100%]"}>E-mail is spam-free</div>
                            <div className="ti-td-check-icon flex-[0_0_20px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ti-accordion-item" data-type="about">
                    <div className={"ti-accordion-header [&]:items-center [&]:relative [padding:13px_15px]"}>
                      <div className={"ti-accordion-title [&]:pointer-events-none"}>About Trustindex certificate</div>
                      <i className={"ti-accordion-arrow [&]:pointer-events-none right-[15px]"} />
                    </div>
                    <div className="ti-accordion-body [color:#000000] [max-height:0] [overflow:hidden] [padding:0px_15px_0px_15px]">
                      <div className="ti-accordion-inner pb-[13px]">
                        <p> Websites that continuously maintain a high level of customer satisfaction and comply with a high level of security protocol can obtain a Trustindex certificate. When shopping, look for Trustindex certificates and buy with confidence. <br /> <a href="https://www.trustindex.io/features-list/review-certificate/for-visitors/" rel="nofollow" target="_blank">More details »</a> </p>
                        <div className="ti-text-bg p-[15px]">
                          <p> <strong>For businesses</strong><br /> Build trust and increase sales with Trustindex certification.<br /> <a href="https://www.trustindex.io/features-list/review-certificate/for-businesses/" rel="nofollow" target="_blank">More details »</a> </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ti-modal-footer [color:#000000] [padding:10px_20px_15px_20px]">© Copyright 2026 trustindex.io</div>
            </div>
          </div>
        </div>
      </div>
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
              <a className={"flex items-start gap-3 select-none rounded-lg p-3 \x6ceading-none no-underline \x6futline-none transition-colors \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x66ocus:\x62g-accent focus:text-accent-foreground"} href="https://elitehost.co.ke/" rel="noopener noreferrer" target="_blank">
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
                  <p className={"\x74ext-xs \x6ceading-snug text-muted-foreground \x6cine-clamp-2"}>Register .co.ke, .ke, .com and 25+ extensions with hosting and email — via our sister company EliteHost.</p>
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
                  <div className={"\x74ext-sm \x66ont-medium \x6ceading-none"}>EliteHost</div>
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
                  <div className={"\x74ext-sm \x66ont-medium \x6ceading-none"}>Elite HRIS</div>
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
    </>
  );
}

function ImportedFooter() {
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
              <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-10 \x70x-4 \x70y-2 shrink-0 group [&:disabled]:pointer-events-none"} type="submit">Subscribe<svg className={"ml-1 h-4 w-4 \x74ransition-transform \x67roup-hover:\x74ranslate-x-0.\x35 [&]:pointer-events-none [flex-shrink:0]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></button>
            </form>
          </div>
        </div>
      </div>
      <div className={"\x63ontainer \x6dx-auto \x70x-4 [&]:relative [padding-bottom:3rem] [padding-top:3rem] [width:100%] [z-index:10]"}>
        <div className={"grid grid-cols-1 \x6dd:\x67rid-cols-2 \x6cg:\x67rid-cols-12 gap-10 \x6cg:\x67ap-8"}>
          <div className="[@media(min-width:1024px)]:[grid-column:span_4/span_4]">
            <a className="mb-5 inline-block" href="/">
              <img style={{ color: "transparent" }} alt="Elite Designs Kenya Logo" loading="lazy" width="130" height="40" decoding="async" data-nimg="1" src="/site-assets/0f4ca2301c5d3ecb.png" />
            </a>
            <p className={"\x74ext-sm \x6ceading-relaxed mb-5 text-gray-400 [max-width:20rem]"}>Empowering businesses in Kenya with stunning websites and effective digital strategies since day one.</p>
            <div className={"\x73pace-y-3 \x74ext-sm"}>
              <div className="flex items-start gap-3">
                <svg className="h-4 w-4 text-primary mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p>Wood Avenue Park Apartments, Kilimani<br />First Floor, Suite F8, Nairobi</p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-4 w-4 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a className={"\x68over:\x74ext-primary transition-colors"} href="tel:+254708927425">+254 708 927 425</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-4 w-4 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a className={"\x68over:\x74ext-primary transition-colors"} href="mailto:info@elitedesigns.co.ke">info@elitedesigns.co.ke</a>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <a className={"w-9 h-9 rounded-lg \x62g-gray-800 \x68over:\x62g-primary flex items-center justify-center transition-all \x64uration-300 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x73hadow-lg \x68over:\x73hadow-primary/\x320 [animation-duration:0.3s]"} aria-label="Facebook" href="#" rel="noopener noreferrer" target="_blank">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a className={"w-9 h-9 rounded-lg \x62g-gray-800 \x68over:\x62g-primary flex items-center justify-center transition-all \x64uration-300 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x73hadow-lg \x68over:\x73hadow-primary/\x320 [animation-duration:0.3s]"} aria-label="Twitter" href="#" rel="noopener noreferrer" target="_blank">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a className={"w-9 h-9 rounded-lg \x62g-gray-800 \x68over:\x62g-primary flex items-center justify-center transition-all \x64uration-300 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x73hadow-lg \x68over:\x73hadow-primary/\x320 [animation-duration:0.3s]"} aria-label="Instagram" href="#" rel="noopener noreferrer" target="_blank">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a className={"w-9 h-9 rounded-lg \x62g-gray-800 \x68over:\x62g-primary flex items-center justify-center transition-all \x64uration-300 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x73hadow-lg \x68over:\x73hadow-primary/\x320 [animation-duration:0.3s]"} aria-label="LinkedIn" href="#" rel="noopener noreferrer" target="_blank">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
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
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="/elitehost">EliteHost</a>
                  </li>
                  <li>
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="/hr-system">Elite HRIS</a>
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
                    <a className={"\x74ext-sm text-gray-400 \x68over:\x74ext-white transition-colors \x64uration-200 \x68over:\x74ranslate-x-0.\x35 inline-block [animation-duration:0.2s]"} href="#">Contact Us</a>
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
            <h4 className={"\x66ont-semibold text-white mb-4 \x74ext-sm [&]:uppercase [letter-spacing:0.05em]"}>Our Location</h4>
            <div className={"h-48 w-full rounded-xl \x62order \x62order-gray-800 [overflow:hidden]"}>
              <img style={{ border: "0px", width: "346.25px", maxWidth: "100%", height: "auto" }} alt="" src="/site-assets/5d91ce9fe70c71cf.png" data-site-import-static-fallback="video" />
            </div>
          </div>
        </div>
      </div>
      <div className={"\x62order-t \x62order-gray-800 [&]:relative [z-index:10]"}>
        <div className={"\x63ontainer \x6dx-auto \x70x-4 flex flex-col \x6dd:\x66lex-row items-center gap-3 \x74ext-sm \x74ext-gray-500 [&]:flex-wrap [&]:justify-between [color:rgb(107_114_128/var(--tw-text-opacity,1))] [padding-bottom:1.25rem] [padding-top:1.25rem] [width:100%]"}>
          <p>© 2026 Elite Designs Kenya. All Rights Reserved.</p>
          <p className="flex items-center [gap:0.375rem]">Built with <span className={"\x74ext-red-500 \x61nimate-pulse [color:rgb(239_68_68/var(--tw-text-opacity,1))]"}>❤</span> in Nairobi, Kenya</p>
          <p className="flex items-center [gap:0.375rem]">Founder: <a className={"text-primary \x68over:\x75nderline transition-colors [text-underline-offset:4px]"} href="https://davidesabwa.com" rel="noopener noreferrer" target="_blank">davidesabwa.com</a></p>
          <div className="lov-shadow-0" aria-live="polite" {...({ "google-add-preferred-source-btn": "" } as any)}>
            <div data-ce="publisher-md-outlined-button" className="lov-shadow-1" title="Add to Preferred Sources" data-ce-shadow-root="lov-shadow-0" {...({ value: "", "has-icon": "" } as any)}>
              <div className={"\x6futline"} data-ce-shadow-root="lov-shadow-1" />
              <div className="background" data-ce-shadow-root="lov-shadow-1" />
              <div data-ce="md-focus-ring" className="lov-shadow-2" aria-hidden="true" data-ce-shadow-root="lov-shadow-1" {...({ htmlFor: "button" } as any)} />
              <div data-ce="md-ripple" className="lov-shadow-3" aria-hidden="true" data-ce-shadow-root="lov-shadow-1" {...({ htmlFor: "button" } as any)}>
                <div className="surface" data-ce-shadow-root="lov-shadow-3" />
              </div>
              <button className="button" id="button" aria-label="Add to Preferred Sources" data-ce-shadow-root="lov-shadow-1">{"\n      "}{"\n      "}<span className="touch" data-ce-shadow-root="lov-shadow-1" />{"\n      "}<img className="publisher-logo" slot="icon" src="/site-assets/8000b8943c5df880-dab5367d7f41cfe288081976baa6c38a.png" alt="" aria-hidden="true" width="22" height="22" loading="eager" decoding="async" data-ce-shadow-root="lov-shadow-0" data-ce-shadow-slot="lov-shadow-1" />{"\n      "}<span className="label" data-ce-shadow-root="lov-shadow-1"><span className="publisher-btn-text" data-ce-shadow-root="lov-shadow-0" data-ce-shadow-slot="lov-shadow-1">Add to Preferred Sources</span></span>{"\n      "}{"\n    \n    "}</button>
            </div>
          </div>
        </div>
      </div>
      <div className={"left-0 h-40 \x62g-gradient-to-t \x66rom-primary/\x35 \x74o-transparent [&]:pointer-events-none [&]:absolute [bottom:0px] [right:0px]"} />
    </footer>
  );
}
