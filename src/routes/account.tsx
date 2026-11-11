import { createFileRoute } from "@tanstack/react-router";
import { FileText, LifeBuoy, MessageCircle, Receipt } from "lucide-react";
import { BTN_OUTLINE, BTN_WHATSAPP, CARD, CardGrid, CONTAINER, IMPORTED_DOCUMENT, SitePage, TEXT_PRIMARY, TEXT_SOFT, pageHead } from "@/components/site/PageBlocks";
import { EMAIL, whatsappLink } from "@/lib/site-contact";

export const Route = createFileRoute("/account")({
  head: () => pageHead("Client Account | Beta Corporation", "Get help with your Beta Corporation projects, invoices and support requests."),
  staticData: { importedDocument: IMPORTED_DOCUMENT },
  component: AccountPage,
});

function AccountPage() {
  return (
    <SitePage>
      <section className="py-16 md:py-20">
        <div className={`${CONTAINER} max-w-3xl`}>
          <div className={`${CARD} p-8 text-center md:p-12`}>
            <span className="inline-block rounded-full bg-[hsl(var(--accent)/0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-wider !text-[hsl(var(--accent))]">Coming soon</span>
            <h1 className={`mt-4 text-3xl md:text-4xl font-bold ${TEXT_PRIMARY}`}>Client Account</h1>
            <p className={`mx-auto mt-4 max-w-xl text-lg ${TEXT_SOFT}`}>Online client accounts are on the way. Until then, our team handles project updates, invoices and support directly — just get in touch.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a className={BTN_WHATSAPP} href={whatsappLink("Hello Beta Corporation, I need help with my account / project.")} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" aria-hidden="true" />Message us on WhatsApp</a>
              <a className={BTN_OUTLINE} href={`mailto:${EMAIL}`}>Email {EMAIL}</a>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className={CONTAINER}>
          <CardGrid items={[
            { icon: FileText, title: "Project updates", text: "Ask for the latest status, files or preview links for your project.", href: whatsappLink("Hello Beta Corporation, I'd like an update on my project."), linkLabel: "Request an update" },
            { icon: Receipt, title: "Invoices & payments", text: "Get a copy of an invoice, receipt or M-Pesa payment details.", href: whatsappLink("Hello Beta Corporation, I need an invoice / payment details."), linkLabel: "Ask about billing" },
            { icon: LifeBuoy, title: "Support", text: "Report a website issue or request a change to your site or email.", href: whatsappLink("Hello Beta Corporation, I need support with my website."), linkLabel: "Get support" },
          ]} />
        </div>
      </section>
    </SitePage>
  );
}
