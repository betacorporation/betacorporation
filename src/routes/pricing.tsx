import type { CSSProperties } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader, SiteOverlays } from "@/components/site/SiteChrome";
import capturedCSS from "../styles/pages/pricing.css?raw";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Packages | Beta Corporation" },
      { name: "description", content: "Transparent website and digital marketing packages from Beta Corporation, with options for every budget." },
      { property: "og:title", content: "Pricing & Packages | Beta Corporation" },
      { property: "og:description", content: "Transparent website and digital marketing packages from Beta Corporation, with options for every budget." },
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
        <div className={"\x62g-background \x61nimate-fade-in-up"} style={{ transform: "translateY(0px)", opacity: "1" }}>
          <div className={"\x63ontainer \x6dx-auto \x70x-4 [padding-bottom:4rem] [padding-top:4rem] [width:100%]"}>
            <div className="text-center mb-12">
              <h1 className={"\x74ext-4xl \x6dd:\x74ext-5xl \x66ont-bold text-primary mb-4"}>Our Pricing</h1>
              <p className={"\x74ext-lg \x6dd:\x74ext-xl \x6dx-auto [color:hsl(var(--foreground)/.8)] [max-width:48rem]"}>Simple, transparent pricing for projects of all sizes. Choose the plan that's right for you.</p>
            </div>
            <div className={"grid grid-cols-1 \x6dd:\x67rid-cols-2 \x6cg:\x67rid-cols-4 [&]:items-stretch [gap:2rem]"}>
              <div className={"rounded-lg \x62order \x62g-card \x73hadow-sm flex flex-col glassmorphism transition-all \x64uration-300 \x68over:\x73hadow-xl \x68over:\x2dtranslate-y-2 [animation-duration:0.3s] [color:hsl(var(--card-foreground))]"} style={{ animationDelay: "0s" } as CSSProperties}>
                <div className={"flex flex-col \x73pace-y-1.\x35 p-6 text-center"}>
                  <h3 className={"\x66ont-semibold \x74ext-2xl text-primary [letter-spacing:-0.025em]"}>Starter Site</h3>
                  <p className={"\x74ext-3xl \x66ont-bold text-foreground"}>KES 45k - 65k</p>
                  <p className={"text-muted-foreground \x74ext-sm h-12"}>Ideal for startups and individuals needing a professional, polished online brochure.</p>
                </div>
                <div className={"p-6 pt-0 \x66lex-grow"}>
                  <ul className={"\x73pace-y-4"}>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">Up to 5 Pages</span>
                    </li>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">Custom UI/UX Design</span>
                    </li>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">Mobile-First Responsive</span>
                    </li>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">Basic SEO Setup</span>
                    </li>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">Contact Form Integration</span>
                    </li>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">1 Month Support</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center p-6 pt-0">
                  <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62order \x62order-input \x62g-background \x68over:\x62g-accent \x68over:\x74ext-accent-foreground h-11 rounded-md \x70x-8 w-full [&:disabled]:pointer-events-none"} href="/contact?package=starter">Get Started</a>
                </div>
              </div>
              <div className={"rounded-lg \x62g-card \x73hadow-sm flex flex-col glassmorphism transition-all \x64uration-300 \x62order-2 \x62order-primary \x73hadow-primary/\x320 \x73cale-105 [animation-duration:0.3s] [color:hsl(var(--card-foreground))]"} style={{ animationDelay: "0.2s" } as CSSProperties}>
                <div className={"\x62g-primary text-primary-foreground \x74ext-sm \x66ont-bold text-center \x72ounded-t-lg flex items-center justify-center [padding-bottom:0.25rem] [padding-top:0.25rem]"}><svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" /></svg> Most Popular</div>
                <div className={"flex flex-col \x73pace-y-1.\x35 p-6 text-center"}>
                  <h3 className={"\x66ont-semibold \x74ext-2xl text-primary [letter-spacing:-0.025em]"}>Business Growth</h3>
                  <p className={"\x74ext-3xl \x66ont-bold text-foreground"}>KES 70k - 120k</p>
                  <p className={"text-muted-foreground \x74ext-sm h-12"}>For growing businesses aiming to generate leads and publish content.</p>
                </div>
                <div className={"p-6 pt-0 \x66lex-grow"}>
                  <ul className={"\x73pace-y-4"}>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">Up to 15 Pages</span>
                    </li>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">Everything in Starter</span>
                    </li>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">CMS for Blog/News</span>
                    </li>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">Advanced SEO &amp; Analytics</span>
                    </li>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">Social Media Integration</span>
                    </li>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">3 Months Support</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center p-6 pt-0">
                  <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-11 rounded-md \x70x-8 w-full [&:disabled]:pointer-events-none"} href="/contact?package=business">Choose Business</a>
                </div>
              </div>
              <div className={"rounded-lg \x62order \x62g-card \x73hadow-sm flex flex-col glassmorphism transition-all \x64uration-300 \x68over:\x73hadow-xl \x68over:\x2dtranslate-y-2 [animation-duration:0.3s] [color:hsl(var(--card-foreground))]"} style={{ animationDelay: "0.4s" } as CSSProperties}>
                <div className={"flex flex-col \x73pace-y-1.\x35 p-6 text-center"}>
                  <h3 className={"\x66ont-semibold \x74ext-2xl text-primary [letter-spacing:-0.025em]"}>E-commerce Pro</h3>
                  <p className={"\x74ext-3xl \x66ont-bold text-foreground"}>KES 130k - 250k</p>
                  <p className={"text-muted-foreground \x74ext-sm h-12"}>A complete solution for businesses ready to sell online and scale effectively.</p>
                </div>
                <div className={"p-6 pt-0 \x66lex-grow"}>
                  <ul className={"\x73pace-y-4"}>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">Unlimited Products</span>
                    </li>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">Everything in Business</span>
                    </li>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">Secure Payment Gateway (M-Pesa)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">Inventory Management</span>
                    </li>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">Customer Accounts</span>
                    </li>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">6 Months Priority Support</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center p-6 pt-0">
                  <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62order \x62order-input \x62g-background \x68over:\x62g-accent \x68over:\x74ext-accent-foreground h-11 rounded-md \x70x-8 w-full [&:disabled]:pointer-events-none"} href="/contact?package=ecommerce">Start Selling</a>
                </div>
              </div>
              <div className={"rounded-lg \x62order \x62g-card \x73hadow-sm flex flex-col glassmorphism transition-all \x64uration-300 \x68over:\x73hadow-xl \x68over:\x2dtranslate-y-2 [animation-duration:0.3s] [color:hsl(var(--card-foreground))]"} style={{ animationDelay: "0.6s" } as CSSProperties}>
                <div className={"flex flex-col \x73pace-y-1.\x35 p-6 text-center"}>
                  <h3 className={"\x66ont-semibold \x74ext-2xl text-primary [letter-spacing:-0.025em]"}>Custom Solutions</h3>
                  <p className={"\x74ext-3xl \x66ont-bold text-foreground"}>Starting at KES 250k+</p>
                  <p className={"text-muted-foreground \x74ext-sm h-12"}>For unique web apps, platforms, or complex integrations requiring a bespoke approach.</p>
                </div>
                <div className={"p-6 pt-0 \x66lex-grow"}>
                  <ul className={"\x73pace-y-4"}>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">Custom Feature Development</span>
                    </li>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">Advanced API Integrations</span>
                    </li>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">Scalable Architecture</span>
                    </li>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">Dedicated Project Manager</span>
                    </li>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">Ongoing Maintenance &amp; SLA</span>
                    </li>
                    <li className="flex items-start">
                      <svg className={"h-5 w-5 \x74ext-green-500 mr-3 flex-shrink-0 mt-1 [color:rgb(34_197_94/var(--tw-text-opacity,1))]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="[color:hsl(var(--foreground)/.9)]">Full Ownership of Code</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center p-6 pt-0">
                  <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62order \x62order-input \x62g-background \x68over:\x62g-accent \x68over:\x74ext-accent-foreground h-11 rounded-md \x70x-8 w-full [&:disabled]:pointer-events-none"} href="/contact?package=custom">Request a Quote</a>
                </div>
              </div>
            </div>
            <div className="text-center mt-16" style={{ animationDelay: "0.8s" } as CSSProperties}>
              <svg className={"\x6dx-auto h-12 mb-4 [color:hsl(var(--primary)/.5)] [width:3rem]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              <h2 className={"\x74ext-2xl \x66ont-bold mb-4"}>Need a Custom Plan?</h2>
              <p className={"text-muted-foreground mb-6 \x6dx-auto [max-width:42rem]"}>Every project is unique. If our packages don't fit your needs, contact us for a custom quote tailored to your specific requirements.</p>
              <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 disabled:opacity-50 [&\x5fsvg]:\x73ize-4 \x62g-secondary text-secondary-foreground \x68over:\x62g-secondary/\x380 h-11 rounded-md \x70x-8 [&:disabled]:pointer-events-none"} href="/contact?package=custom">Request a Custom Quote</a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <SiteOverlays />
    </>
  );
}

