import { createFileRoute } from "@tanstack/react-router";
import { IMPORTED_DOCUMENT, pageHead } from "@/components/site/PageBlocks";
import { ProductPage } from "@/components/site/ProductPage";
import { findProduct } from "@/lib/content/products";

export const Route = createFileRoute("/elitehost")({
  head: () => pageHead("Beta Hosting — Domains, Hosting & Email | Beta Corporation", "Register .co.ke and .com domains, get fast SSD hosting, free SSL and business email, set up by Beta Corporation."),
  staticData: { importedDocument: IMPORTED_DOCUMENT },
  component: ElitehostRoute,
});

function ElitehostRoute() {
  return <ProductPage product={findProduct("/elitehost")} />;
}
