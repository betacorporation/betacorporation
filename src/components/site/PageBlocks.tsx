import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { SiteFooter, SiteHeader, SiteOverlays } from "@/components/site/SiteChrome";
import { whatsappLink } from "@/lib/site-contact";
import capturedCSS from "../../styles/pages/about.css?raw";

// Building blocks for pages built natively in the imported site's look.
// Colours use hsl(var(--token)) because the captured stylesheet stores tokens as raw HSL triplets.

export const IMPORTED_DOCUMENT = {
  html: { className: "__variable_b021ee __variable_f166df", lang: "en" },
  body: { className: "font-body antialiased flex flex-col min-h-screen bg-background text-foreground" },
};

export const CONTAINER = "container mx-auto px-4 w-full max-w-7xl";
const BTN = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-6";
export const BTN_PRIMARY = `${BTN} bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)]`;
export const BTN_OUTLINE = `${BTN} border border-[hsl(var(--primary)/0.3)] bg-[hsl(var(--background))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.05)]`;
export const BTN_WHATSAPP = `${BTN} bg-[#25D366] text-[hsl(0_0%_100%)] hover:bg-[#1ebe5a]`;
export const TEXT_PRIMARY = "text-[hsl(var(--primary))]";
export const TEXT_SOFT = "text-[hsl(var(--foreground)/0.75)]";
export const TEXT_MUTED = "text-[hsl(var(--muted-foreground))]";
export const CARD = "rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] shadow-sm";

export function SitePage({ children }: { children: ReactNode }) {
  return (
    <>
      <style>{capturedCSS}</style>
      <SiteHeader />
      <main className="flex-grow">{children}</main>
      <SiteFooter />
      <SiteOverlays />
    </>
  );
}

export type Cta = { label: string; href: string; external?: boolean };

function CtaLink({ cta, className }: { cta: Cta; className: string }) {
  const external = cta.external ?? /^https?:/.test(cta.href);
  return (
    <a className={className} href={cta.href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {cta.href.includes("wa.me") && <MessageCircle className="h-4 w-4" aria-hidden="true" />}
      {cta.label}
    </a>
  );
}

export function PageHero({ eyebrow, title, intro, primary, secondary, image, imageAlt, children }: {
  eyebrow?: string; title: string; intro: string; primary?: Cta; secondary?: Cta; image?: string; imageAlt?: string; children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--primary)/0.08)] via-[hsl(var(--background))] to-[hsl(var(--accent)/0.08)] py-16 md:py-24">
      <div className={`${CONTAINER} ${image ? "grid items-center gap-10 md:grid-cols-2" : "text-center"}`}>
        <div className={image ? "" : "mx-auto max-w-3xl"}>
          {eyebrow && <span className={`mb-4 inline-block rounded-full bg-[hsl(var(--primary)/0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-wider ${TEXT_PRIMARY}`}>{eyebrow}</span>}
          <h1 className={`text-4xl md:text-5xl font-bold leading-tight ${TEXT_PRIMARY}`}>{title}</h1>
          <p className={`mt-5 text-lg md:text-xl ${TEXT_SOFT}`}>{intro}</p>
          {(primary || secondary) && (
            <div className={`mt-8 flex flex-wrap gap-3 ${image ? "" : "justify-center"}`}>
              {primary && <CtaLink cta={primary} className={primary.href.includes("wa.me") ? BTN_WHATSAPP : BTN_PRIMARY} />}
              {secondary && <CtaLink cta={secondary} className={BTN_OUTLINE} />}
            </div>
          )}
          {children}
        </div>
        {image && (
          <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl shadow-xl">
            <img className="h-auto w-full object-cover" src={image} alt={imageAlt ?? ""} width="1024" height="768" />
          </div>
        )}
      </div>
    </section>
  );
}

export function Section({ title, intro, children, tinted, id }: { title?: string; intro?: string; children: ReactNode; tinted?: boolean; id?: string }) {
  return (
    <section id={id} className={`py-16 ${tinted ? "bg-[hsl(var(--secondary)/0.6)]" : ""}`}>
      <div className={CONTAINER}>
        {title && (
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className={`text-3xl font-bold ${TEXT_PRIMARY}`}>{title}</h2>
            {intro && <p className={`mt-3 text-lg ${TEXT_SOFT}`}>{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export type CardItem = { title: string; text: string; icon?: LucideIcon; href?: string; linkLabel?: string; meta?: string };

export function CardGrid({ items, columns = 3 }: { items: CardItem[]; columns?: 2 | 3 | 4 }) {
  const cols = columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : columns === 2 ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 gap-6 ${cols}`}>
      {items.map(item => {
        const Icon = item.icon;
        const external = item.href ? /^https?:/.test(item.href) : false;
        return (
          <div key={item.title} className={`${CARD} flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}>
            {Icon && (
              <span className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--primary)/0.1)] ${TEXT_PRIMARY}`}>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
            )}
            {item.meta && <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--accent))]">{item.meta}</span>}
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className={`mt-2 flex-grow text-sm leading-relaxed ${TEXT_SOFT}`}>{item.text}</p>
            {item.href && (
              <a className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${TEXT_PRIMARY} hover:underline`} href={item.href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                {item.linkLabel ?? "Learn more"} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function CheckList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map(item => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[hsl(var(--primary)/0.12)]">
            <Check className={`h-3.5 w-3.5 ${TEXT_PRIMARY}`} aria-hidden="true" />
          </span>
          <span className={TEXT_SOFT}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Steps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${steps.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
      {steps.map((step, index) => (
        <li key={step.title} className={`${CARD} relative p-6`}>
          <span className="text-4xl font-bold text-[hsl(var(--primary)/0.2)]">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
          <p className={`mt-2 text-sm leading-relaxed ${TEXT_SOFT}`}>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map(faq => (
        <details key={faq.q} className={`${CARD} group p-5`}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
            {faq.q}
            <span className={`text-xl transition-transform group-open:rotate-45 ${TEXT_PRIMARY}`} aria-hidden="true">+</span>
          </summary>
          <p className={`mt-3 text-sm leading-relaxed ${TEXT_SOFT}`}>{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({ title, text, message, secondary }: { title: string; text: string; message: string; secondary?: Cta }) {
  return (
    <section className="py-16">
      <div className={CONTAINER}>
        <div className="rounded-2xl bg-gradient-to-br from-[#2b01ef] to-[#2596be] px-6 py-12 text-center text-[hsl(0_0%_100%)] shadow-xl md:px-12">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-[hsl(0_0%_100%/0.85)]">{text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a className={BTN_WHATSAPP} href={whatsappLink(message)} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" aria-hidden="true" />Chat on WhatsApp</a>
            <a className={`${BTN} border border-[hsl(0_0%_100%/0.5)] text-[hsl(0_0%_100%)] hover:bg-[hsl(0_0%_100%/0.1)]`} href={secondary?.href ?? "/contact"}>{secondary?.label ?? "Contact Us"}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SplitFeature({ title, text, points, image, imageAlt, reverse }: { title: string; text: string; points: string[]; image: string; imageAlt: string; reverse?: boolean }) {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2">
      <div className={reverse ? "md:order-2" : ""}>
        <h2 className={`text-3xl font-bold ${TEXT_PRIMARY}`}>{title}</h2>
        <p className={`mt-3 mb-6 text-lg ${TEXT_SOFT}`}>{text}</p>
        <CheckList items={points} />
      </div>
      <div className="overflow-hidden rounded-2xl shadow-xl">
        <img className="h-auto w-full object-cover" src={image} alt={imageAlt} loading="lazy" width="1024" height="768" />
      </div>
    </div>
  );
}

export function pageHead(title: string, description: string, image?: string) {
  const meta = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
  if (image && /^https:/.test(image)) meta.push({ property: "og:image", content: image }, { name: "twitter:image", content: image });
  return { meta };
}
