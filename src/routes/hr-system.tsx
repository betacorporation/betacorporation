import { createFileRoute } from "@tanstack/react-router";
import { IMPORTED_DOCUMENT, pageHead } from "@/components/site/PageBlocks";
import { ProductPage } from "@/components/site/ProductPage";
import { findProduct } from "@/lib/content/products";

export const Route = createFileRoute("/hr-system")({
  head: () => pageHead("Beta HRIS — HR Management System | Beta Corporation", "A complete HR system for records, recruitment, leave, attendance, payroll handover, performance and training."),
  staticData: { sitemap: true, importedDocument: IMPORTED_DOCUMENT },
  component: HrSystemRoute,
});

function HrSystemRoute() {
  return <ProductPage product={findProduct("/hr-system")} />;
}
