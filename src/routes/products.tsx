import { createFileRoute } from "@tanstack/react-router";
import { Globe, Megaphone, Palette, Search } from "lucide-react";
import { CardGrid, CtaBand, IMPORTED_DOCUMENT, PageHero, Section, SitePage, pageHead } from "@/components/site/PageBlocks";
import { PRODUCTS } from "@/lib/content/products";
import { whatsappLink } from "@/lib/site-contact";

export const Route = createFileRoute("/products")({
  head: () => pageHead("Products & Growth Packages | Beta Corporation", "Business software, hosting and ready-made growth packages from Beta Corporation — chama, HR and CRM systems, websites, branding and marketing."),
  staticData: { importedDocument: IMPORTED_DOCUMENT },
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <SitePage>
      <PageHero eyebrow="Products" title="Products & Growth Packages" intro="Ready-to-use business systems and packaged services that help you get organised, get online and get found." primary={{ label: "Talk to us", href: "/contact" }} />
      <Section title="Business Software">
        <CardGrid columns={4} items={PRODUCTS.map(product => ({ title: product.name, text: product.tagline, icon: product.icon, href: product.path, linkLabel: "Explore" }))} />
      </Section>
      <Section tinted title="Growth Packages" intro="Packaged services with a clear scope, so you know exactly what you get.">
        <CardGrid columns={4} items={[
          { icon: Globe, title: "Website packages", text: "Ready-made websites for every type of business.", href: "/websites", linkLabel: "See packages" },
          { icon: Palette, title: "Brand starter kit", text: "Logo, colours, business card and social media kit.", href: "/services/btl-media-creative/brand-identity", linkLabel: "View details" },
          { icon: Megaphone, title: "Social media management", text: "Monthly content, posting and community management.", href: "/services/digital-marketing/social-media-marketing", linkLabel: "View details" },
          { icon: Search, title: "SEO starter", text: "Get found on Google with local SEO and a Google Business Profile.", href: "/services/digital-marketing/seo-services", linkLabel: "View details" },
        ]} />
      </Section>
      <CtaBand title="Not Sure What You Need?" text="Tell us your goals and we'll recommend the right product or package." message="Hello Beta Corporation, I'd like help choosing a product or package." />
    </SitePage>
  );
}
