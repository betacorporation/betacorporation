import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, ClipboardList, FileBarChart, FileText, MessageCircle, Newspaper, Palette, Ruler, Truck } from "lucide-react";
import { BTN_WHATSAPP, CARD, CardGrid, CtaBand, FaqList, IMPORTED_DOCUMENT, PageHero, Section, SitePage, TEXT_MUTED, TEXT_PRIMARY, TEXT_SOFT, pageHead } from "@/components/site/PageBlocks";
import printingImage from "@/assets/service-printing.jpg";
import { whatsappLink } from "@/lib/site-contact";

export const Route = createFileRoute("/printing")({
  head: () => pageHead("Print & Publications | Beta Corporation", "Books, training manuals, booklets, annual reports and policy documents printed and bound in Kenya. Build your specification and get a quote."),
  staticData: { importedDocument: IMPORTED_DOCUMENT },
  component: PrintingPage,
});

const OPTIONS = {
  type: ["Book / literary edition", "Training manual / workbook", "Company booklet / catalogue", "Annual report", "Policy document / charter", "Other"],
  size: ["A4 (210 × 297 mm)", "A5 (148 × 210 mm)", "B5 (176 × 250 mm)", "Square (210 × 210 mm)", "Custom size"],
  paper: ["Bond 80gsm (uncoated)", "Art paper 115gsm (coated)", "Art paper 130gsm (premium coated)", "Art paper 150gsm (heavy coated)"],
  colour: ["Black & white", "Full colour (CMYK)"],
  binding: ["Saddle stitch (stapled)", "Perfect binding (glued spine)", "Wire-O (lay-flat)", "Hardcover case binding"],
  lamination: ["Matt lamination", "Gloss lamination", "Soft-touch lamination", "No lamination"],
  turnaround: ["Standard (5–7 business days)", "Express (2–3 business days)"],
  delivery: ["Pick up", "Nairobi delivery", "Upcountry courier", "East Africa shipping"],
} as const;
type Spec = { [K in keyof typeof OPTIONS]: string } & { pages: number; copies: number };
const QUANTITIES = [25, 50, 100, 250, 500, 1000];
const LABELS: Record<keyof typeof OPTIONS, string> = { type: "Publication type", size: "Document size", paper: "Inner paper", colour: "Interior colour", binding: "Binding", lamination: "Cover finish", turnaround: "Turnaround", delivery: "Delivery" };

export function printQuoteMessage(spec: Spec) {
  return [
    "Hello Beta Corporation, I'd like a print quote:",
    `• ${LABELS.type}: ${spec.type}`,
    `• ${LABELS.size}: ${spec.size}`,
    `• Pages: ${spec.pages}`,
    `• ${LABELS.paper}: ${spec.paper}`,
    `• ${LABELS.colour}: ${spec.colour}`,
    `• ${LABELS.binding}: ${spec.binding}`,
    `• ${LABELS.lamination}: ${spec.lamination}`,
    `• Copies: ${spec.copies}`,
    `• ${LABELS.turnaround}: ${spec.turnaround}`,
    `• ${LABELS.delivery}: ${spec.delivery}`,
  ].join("\n");
}

const FIELD = "h-10 w-full rounded-md border border-[hsl(var(--input))] bg-[hsl(var(--background))] px-3 text-sm";

function PrintingPage() {
  const [spec, setSpec] = useState<Spec>({ type: OPTIONS.type[1], size: OPTIONS.size[0], paper: OPTIONS.paper[0], colour: OPTIONS.colour[1], binding: OPTIONS.binding[1], lamination: OPTIONS.lamination[0], turnaround: OPTIONS.turnaround[0], delivery: OPTIONS.delivery[1], pages: 48, copies: 100 });
  const update = <K extends keyof Spec>(key: K, value: Spec[K]) => setSpec(current => ({ ...current, [key]: value }));
  return (
    <SitePage>
      <PageHero eyebrow="Commercial printing" title="Print & Publication Production in Kenya" intro="From training manuals and annual reports to books and policy handbooks — we print, bind and deliver publications you'll be proud to hand out." primary={{ label: "Build your quote", href: "#quote" }} secondary={{ label: "Talk to us", href: "/contact" }} image={printingImage} imageAlt="Printed annual reports, spiral manuals and booklets" />
      <Section title="What We Print" intro="We match paper, page weight and binding to how your publication will be used.">
        <CardGrid items={[
          { icon: BookOpen, title: "Books & literary editions", text: "Novels, memoirs, textbooks and academic titles with sharp typography and durable spines.", meta: "Perfect binding or hardcover" },
          { icon: ClipboardList, title: "Training manuals & workbooks", text: "Induction handbooks, seminar workbooks and SOPs made for everyday desk use.", meta: "Wire-O or saddle stitch" },
          { icon: Newspaper, title: "Booklets & catalogues", text: "Product showcases, company profiles and lookbooks with vibrant colour.", meta: "Saddle stitch or perfect binding" },
          { icon: FileBarChart, title: "Annual reports", text: "AGM reports and donor financials with crisp charts and premium covers.", meta: "Perfect binding or hardcover" },
          { icon: FileText, title: "Policy documents & charters", text: "HR policies, constitutions, strategic plans and compliance manuals.", meta: "Saddle stitch or perfect binding" },
          { icon: Palette, title: "Layout & typesetting", text: "Need design too? Our creative team lays out your manuscript ready for print.", href: "/services/btl-media-creative", linkLabel: "Creative services" },
        ]} />
      </Section>
      <Section tinted id="quote" title="Build Your Print Specification" intro="Choose your options and send them to us on WhatsApp. We reply with a written quote.">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <form className={`${CARD} grid gap-5 p-6 sm:grid-cols-2`} onSubmit={event => event.preventDefault()}>
            {(Object.keys(OPTIONS) as (keyof typeof OPTIONS)[]).slice(0, 3).map(key => (
              <label key={key} className="block text-sm font-medium">{LABELS[key]}
                <select className={`${FIELD} mt-1.5`} value={spec[key]} onChange={event => update(key, event.target.value)}>{OPTIONS[key].map(option => <option key={option}>{option}</option>)}</select>
              </label>
            ))}
            <label className="block text-sm font-medium">Page count
              <input className={`${FIELD} mt-1.5`} type="number" min={4} max={1000} step={4} value={spec.pages} onChange={event => update("pages", Math.max(4, Number(event.target.value) || 4))} />
            </label>
            {(Object.keys(OPTIONS) as (keyof typeof OPTIONS)[]).slice(3).map(key => (
              <label key={key} className="block text-sm font-medium">{LABELS[key]}
                <select className={`${FIELD} mt-1.5`} value={spec[key]} onChange={event => update(key, event.target.value)}>{OPTIONS[key].map(option => <option key={option}>{option}</option>)}</select>
              </label>
            ))}
            <fieldset className="sm:col-span-2">
              <legend className="text-sm font-medium">Copies</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {QUANTITIES.map(quantity => (
                  <button key={quantity} type="button" aria-pressed={spec.copies === quantity} onClick={() => update("copies", quantity)}
                    className={`rounded-md border px-4 py-2 text-sm font-medium ${spec.copies === quantity ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]" : "border-[hsl(var(--border))] hover:bg-[hsl(var(--primary)/0.05)]"}`}>{quantity}</button>
                ))}
                <input aria-label="Custom number of copies" className={`${FIELD} w-28`} type="number" min={25} value={spec.copies} onChange={event => update("copies", Math.max(25, Number(event.target.value) || 25))} />
              </div>
              <p className={`mt-2 text-xs ${TEXT_MUTED}`}>Minimum order: 25 copies.</p>
            </fieldset>
          </form>
          <aside className={`${CARD} h-fit p-6 lg:sticky lg:top-24`}>
            <h3 className={`text-xl font-bold ${TEXT_PRIMARY}`}>Your specification</h3>
            <dl className="mt-4 space-y-2 text-sm">
              {[["Type", spec.type], ["Size", spec.size], ["Pages", String(spec.pages)], ["Paper", spec.paper], ["Colour", spec.colour], ["Binding", spec.binding], ["Cover", spec.lamination], ["Copies", String(spec.copies)], ["Turnaround", spec.turnaround], ["Delivery", spec.delivery]].map(([term, value]) => (
                <div key={term} className="flex justify-between gap-4 border-b border-[hsl(var(--border))] pb-2"><dt className={TEXT_MUTED}>{term}</dt><dd className="text-right font-medium">{value}</dd></div>
              ))}
            </dl>
            <p className={`mt-4 text-xs ${TEXT_SOFT}`}>Pricing depends on paper costs at the time of printing, so we confirm every job with a written quote valid for 14 days.</p>
            <a className={`${BTN_WHATSAPP} mt-5 w-full`} href={whatsappLink(printQuoteMessage(spec))} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" aria-hidden="true" />Request quote on WhatsApp</a>
          </aside>
        </div>
      </Section>
      <Section title="Built to Last">
        <CardGrid columns={4} items={[
          { icon: FileText, title: "Quality papers", text: "High-opacity stocks from 70gsm to 150gsm for minimal show-through." },
          { icon: Palette, title: "Accurate colour", text: "Calibrated printing keeps your brand colours consistent on every page." },
          { icon: Ruler, title: "Clean finishing", text: "Precise trimming and binding for sharp, professional edges." },
          { icon: Truck, title: "Delivery across Kenya", text: "Nairobi doorstep delivery and courier to all counties." },
        ]} />
      </Section>
      <Section tinted title="Printing Questions">
        <FaqList faqs={[
          { q: "What file format should I send?", a: "A print-ready PDF with 3 mm bleed and embedded fonts is best. If you only have Word or design files, we can prepare them for you." },
          { q: "Can I see a sample before the full run?", a: "Yes — ask for a bound proof copy and approve it before we print the full quantity." },
          { q: "Which binding should I choose?", a: "Saddle stitch suits thin booklets (up to about 64 pages), perfect binding suits thicker books and reports, Wire-O lies flat for manuals, and hardcover is for premium editions." },
        ]} />
      </Section>
      <CtaBand title="Have a Special Print Job?" text="Foil stamping, spot UV, custom sizes or die-cut tabs — tell us what you have in mind." message="Hello Beta Corporation, I have a custom print job I'd like to discuss." />
    </SitePage>
  );
}
