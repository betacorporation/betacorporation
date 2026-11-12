import type { CSSProperties } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader, SiteOverlays } from "@/components/site/SiteChrome";
import { SocialIcon } from "@/components/site/SiteChrome";
import { CONTACT_PERSON, EMAIL, LOCATION, PHONE_DISPLAY, PHONE_TEL, SOCIALS, WHATSAPP_URL } from "@/lib/site-contact";
import capturedCSS from "../styles/pages/contact.css?raw";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us - Get a Free Quote | Beta Corporation" },
      { name: "description", content: "Call or WhatsApp Beta Corporation on +254 729 683 696, email beta.corporation11@gmail.com, or send us a message for a free quote." },
      { property: "og:title", content: "Contact Us - Get a Free Quote | Beta Corporation" },
      { property: "og:description", content: "Call or WhatsApp Beta Corporation on +254 729 683 696, email beta.corporation11@gmail.com, or send us a message for a free quote." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: { sitemap: true, importedDocument: { html: { "className": "__variable_b021ee __variable_f166df", "lang": "en" }, body: { "className": "\x66ont-body \x61ntialiased \x66lex \x66lex-col \x6din-h-screen \x62g-background \x74ext-foreground" } } },
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
            <h1 className={"\x74ext-4xl \x6dd:\x74ext-5xl \x66ont-bold text-primary mb-4"}>Let's Build Something Amazing Together</h1>
            <p className={"\x74ext-lg \x6dd:\x74ext-xl \x6dx-auto \x74ext-foreground/\x380 [max-width:48rem]"}>Have a project in mind, a question, or just want to brainstorm? We're here to listen and explore how we can transform your digital ideas into reality.</p>
          </div>
          <div className={"grid \x6dd:\x67rid-cols-2 items-start [gap:3rem]"}>
            <div className={"rounded-lg \x62g-card p-6 \x6dd:\x70-8 \x73hadow-xl \x62order-0 [color:hsl(var(--card-foreground))]"} style={{ animationDelay: "0.2s" } as CSSProperties}>
              <div className={"flex flex-col \x73pace-y-1.\x35 p-6"}>
                <h3 className={"\x66ont-semibold \x74ext-2xl [letter-spacing:-0.025em]"}>Send Us a Message</h3>
              </div>
              <div className="p-6 pt-0">
                <form className={"\x73pace-y-6"} onSubmit={event => {
                  event.preventDefault();
                  const [name = "", email = "", subject = "", message = ""] = Array.from(event.currentTarget.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea")).map(field => field.value.trim());
                  const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
                  window.open(`mailto:${EMAIL}?subject=${encodeURIComponent(subject || `Website enquiry from ${name || "a visitor"}`)}&body=${encodeURIComponent(body)}`, "_self");
                }}>
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
                    <svg className="h-5 w-5 text-primary mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    <div>
                      <p className={"\x66ont-semibold"}>Email Us Directly</p>
                      <a className={"\x74ext-foreground/\x380 \x68over:\x74ext-primary [overflow-wrap:anywhere]"} href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    </div>
                  </div>
                  <div className="flex items-start [gap:1rem]">
                    <svg className="h-5 w-5 text-primary mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    <div>
                      <p className={"\x66ont-semibold"}>Give Us a Call</p>
                      <p className={"\x74ext-foreground/\x380"}>{CONTACT_PERSON}: <a className={"\x68over:\x74ext-primary"} href={PHONE_TEL}>{PHONE_DISPLAY}</a></p>
                    </div>
                  </div>
                  <div className="flex items-start [gap:1rem]">
                    <svg className="h-5 w-5 text-primary mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                    <div>
                      <p className={"\x66ont-semibold"}>Chat on WhatsApp</p>
                      <a className={"\x74ext-foreground/\x380 \x68over:\x74ext-primary"} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{PHONE_DISPLAY}</a>
                    </div>
                  </div>
                  <div className="flex items-start [gap:1rem]">
                    <svg className="h-5 w-5 text-primary mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                    <div>
                      <p className={"\x66ont-semibold"}>Where We Work</p>
                      <p className={"\x74ext-foreground/\x380"}>{LOCATION} — meetings by appointment or online</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"rounded-lg \x62order-0 \x73hadow-lg \x62g-card p-6 [color:hsl(var(--card-foreground))]"}>
                <h3 className={"\x66ont-bold \x74ext-lg text-primary mb-2"}>Follow Us</h3>
                <p className={"\x74ext-sm \x74ext-foreground/\x380 mb-4"}>See our latest work and get in touch on social media.</p>
                <ul className={"\x73pace-y-3"}>
                  {SOCIALS.map(social => (
                    <li key={social.network} className="flex items-center [gap:0.75rem]">
                      <span className={"flex items-center justify-center w-9 h-9 rounded-lg \x62g-primary/\x310 text-primary shrink-0"}><SocialIcon network={social.network} /></span>
                      <span className={"\x74ext-sm"}>
                        <span className={"block \x74ext-xs text-muted-foreground"}>{social.network}</span>
                        {social.href ? <a className={"\x66ont-medium \x68over:\x74ext-primary"} href={social.href} target="_blank" rel="noopener noreferrer">{social.handle}</a> : <span className="italic text-muted-foreground">{social.handle}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
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

