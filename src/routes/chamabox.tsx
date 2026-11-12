import { createFileRoute } from "@tanstack/react-router";
import { IMPORTED_DOCUMENT, pageHead } from "@/components/site/PageBlocks";
import { ProductPage } from "@/components/site/ProductPage";
import { findProduct } from "@/lib/content/products";

export const Route = createFileRoute("/chamabox")({
  head: () => pageHead("Beta Chama — Chama Management System | Beta Corporation", "Manage chama contributions, loans, meetings, votes and reports in one place with Beta Chama."),
  staticData: { sitemap: true, importedDocument: IMPORTED_DOCUMENT },
  component: ChamaboxRoute,
});

function ChamaboxRoute() {
  return <ProductPage product={findProduct("/chamabox")} />;
}
