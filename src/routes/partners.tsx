import { createFileRoute } from "@tanstack/react-router";
import { Building2, Code2, Handshake, Megaphone, Printer, Users } from "lucide-react";
import { CardGrid, CtaBand, IMPORTED_DOCUMENT, PageHero, Section, SitePage, Steps, pageHead } from "@/components/site/PageBlocks";
import { whatsappLink } from "@/lib/site-contact";

export const Route = createFileRoute("/partners")({
  head: () => pageHead("Partners | Beta Corporation", "Partner with Beta Corporation — referral partners, agencies, freelancers and technology firms working together to grow businesses in Kenya."),
  staticData: { sitemap: true, importedDocument: IMPORTED_DOCUMENT },
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <SitePage>
      <PageHero eyebrow="Partner ecosystem" title="Grow Together with Beta Corporation" intro="We team up with specialists whose skills complement our design, branding and digital work — so clients get everything they need in one place." primary={{ label: "Become a partner", href: whatsappLink("Hello Beta Corporation, I'm interested in becoming a partner.") }} secondary={{ label: "Contact us", href: "/contact" }} />
      <Section title="Who We Partner With">
        <CardGrid items={[
          { icon: Users, title: "Referral partners", text: "Introduce businesses that need a website, branding or marketing and earn a reward for every successful project." },
          { icon: Megaphone, title: "Marketing & PR agencies", text: "We handle the web and design side so you can focus on campaigns and media." },
          { icon: Code2, title: "Freelancers & developers", text: "Join our network of designers, writers and developers for client projects." },
          { icon: Building2, title: "Consultants & advisors", text: "Business, finance and operations experts who need digital systems for their clients." },
          { icon: Printer, title: "Print & production houses", text: "Reliable production partners for large print and branding jobs." },
          { icon: Handshake, title: "Technology providers", text: "Payment, hosting and software firms that want a local implementation partner." },
        ]} />
      </Section>
      <Section tinted title="How Partnership Works">
        <Steps steps={[
          { title: "Say hello", text: "Message us with what you do and how you'd like to work together." },
          { title: "Agree the terms", text: "We agree roles, referral rewards or revenue share in writing." },
          { title: "Work together", text: "We collaborate on projects with clear communication and shared updates." },
        ]} />
      </Section>
      <CtaBand title="Interested in Partnering?" text="We're always open to working with talented, reliable people and companies." message="Hello Beta Corporation, I'd like to discuss a partnership." />
    </SitePage>
  );
}
