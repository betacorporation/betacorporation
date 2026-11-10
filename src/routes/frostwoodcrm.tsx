import { createFileRoute } from "@tanstack/react-router";
import { IMPORTED_DOCUMENT, pageHead } from "@/components/site/PageBlocks";
import { ProductPage } from "@/components/site/ProductPage";
import { findProduct } from "@/lib/content/products";

export const Route = createFileRoute("/frostwoodcrm")({
  head: () => pageHead("Beta CRM — CRM, Invoicing & M-Pesa | Beta Corporation", "Manage customers, sales pipeline, invoices, M-Pesa payments and projects in one simple platform."),
  staticData: { importedDocument: IMPORTED_DOCUMENT },
  component: FrostwoodcrmRoute,
});

function FrostwoodcrmRoute() {
  return <ProductPage product={findProduct("/frostwoodcrm")} />;
}
