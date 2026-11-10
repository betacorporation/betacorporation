import { createFileRoute } from "@tanstack/react-router";
import { IMPORTED_DOCUMENT, pageHead } from "@/components/site/PageBlocks";
import { LegalPage } from "@/components/site/LegalPage";
import { BRAND, EMAIL, PHONE_DISPLAY } from "@/lib/site-contact";

export const Route = createFileRoute("/terms")({
  head: () => pageHead("Terms & Conditions | Beta Corporation", "The terms that apply when you use the Beta Corporation website or engage us for design, development, marketing and printing services."),
  staticData: { importedDocument: IMPORTED_DOCUMENT },
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" updated="November 2026" intro={`These terms apply when you use our website or engage ${BRAND} for website design, development, digital marketing, branding, printing or related services. By working with us, you agree to them.`} sections={[
      { heading: "Quotes and scope", paragraphs: ["Every project starts with a written quote or proposal describing the scope, deliverables, timeline and price. Work outside the agreed scope is quoted separately before we begin it."] },
      { heading: "Payments", paragraphs: ["Unless agreed otherwise, projects require a deposit before work starts, with the balance due on completion or as set out in the quote. Payments can be made by M-Pesa or bank transfer. Recurring services such as hosting and marketing are billed in advance."] },
      { heading: "Client responsibilities", paragraphs: ["You agree to provide content, feedback and approvals on time and to confirm you have the rights to any material you give us. Delays in feedback may move the delivery date."] },
      { heading: "Revisions and approval", paragraphs: ["Each quote includes a set number of revision rounds. Once you approve a design, print proof or launch, further changes may be charged."] },
      { heading: "Ownership", paragraphs: ["When the project is paid in full, you own the final deliverables created for you. We may show completed work in our portfolio unless you ask us not to. Third-party software, fonts and stock images remain subject to their own licences."] },
      { heading: "Hosting, domains and third parties", paragraphs: ["Domains, hosting and other third-party services are renewed yearly and must be paid before expiry to avoid interruption. We are not responsible for outages caused by third-party providers."] },
      { heading: "Cancellations and refunds", paragraphs: ["If a project is cancelled after work has started, the deposit covers work completed and is generally not refundable. Any refund for unused prepaid work is assessed case by case."] },
      { heading: "Limitation of liability", paragraphs: ["We work hard to deliver quality services but cannot guarantee specific business results such as rankings, sales or follower numbers. Our liability is limited to the amount paid for the service concerned."] },
      { heading: "Changes and contact", paragraphs: [`We may update these terms from time to time. Questions? Email ${EMAIL} or call ${PHONE_DISPLAY}.`] },
    ]} />
  );
}
