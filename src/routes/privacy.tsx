import { createFileRoute } from "@tanstack/react-router";
import { IMPORTED_DOCUMENT, pageHead } from "@/components/site/PageBlocks";
import { LegalPage } from "@/components/site/LegalPage";
import { BRAND, EMAIL, PHONE_DISPLAY } from "@/lib/site-contact";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead("Privacy Policy | Beta Corporation", "How Beta Corporation collects, uses and protects your personal information, in line with Kenya's Data Protection Act."),
  staticData: { importedDocument: IMPORTED_DOCUMENT },
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="November 2026" intro={`${BRAND} respects your privacy. This policy explains what information we collect when you use our website or services, how we use it and the choices you have, in line with the Kenya Data Protection Act, 2019.`} sections={[
      { heading: "Information we collect", paragraphs: ["Details you give us directly — such as your name, email address, phone number, business name and project details — when you contact us, request a quote or message us on WhatsApp.", "Basic technical information collected automatically when you visit our website, such as your browser type, device and the pages you view."] },
      { heading: "How we use your information", paragraphs: ["To respond to enquiries, prepare quotes, deliver and support the services you request, send invoices and receipts, and improve our website and services. We only send marketing messages if you have agreed to receive them."] },
      { heading: "Sharing your information", paragraphs: ["We do not sell your personal information. We share it only with trusted service providers who help us run our business (for example hosting, email and payment providers), or where the law requires it."] },
      { heading: "How we protect your information", paragraphs: ["We use reasonable technical and organisational measures to protect your information from loss, misuse or unauthorised access. No method of transmission over the internet is completely secure, but we work to keep your data safe."] },
      { heading: "How long we keep it", paragraphs: ["We keep your information only for as long as needed for the purposes above, or as required for legal, tax and accounting reasons."] },
      { heading: "Your rights", paragraphs: ["You can ask to access, correct or delete your personal information, or object to how we use it. To make a request, contact us using the details below."] },
      { heading: "Cookies", paragraphs: ["Our website may use cookies and similar technologies to remember preferences and understand how visitors use the site. You can control cookies through your browser settings."] },
      { heading: "Contact us", paragraphs: [`For privacy questions or requests, email ${EMAIL} or call ${PHONE_DISPLAY}.`] },
    ]} />
  );
}
