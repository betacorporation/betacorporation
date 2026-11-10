import { useRouter, type ErrorComponentProps } from "@tanstack/react-router";
import { BTN_OUTLINE, BTN_PRIMARY, SitePage, TEXT_PRIMARY, TEXT_SOFT } from "@/components/site/PageBlocks";

export function MissingPage({ title, text, backHref, backLabel }: { title: string; text: string; backHref: string; backLabel: string }) {
  return (
    <SitePage>
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className={`text-4xl font-bold ${TEXT_PRIMARY}`}>{title}</h1>
          <p className={`mt-4 text-lg ${TEXT_SOFT}`}>{text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a className={BTN_PRIMARY} href={backHref}>{backLabel}</a>
            <a className={BTN_OUTLINE} href="/">Go home</a>
          </div>
        </div>
      </section>
    </SitePage>
  );
}

export function PageError({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  return (
    <SitePage>
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className={`text-3xl font-bold ${TEXT_PRIMARY}`}>Something went wrong</h1>
          <p className={`mt-4 ${TEXT_SOFT}`}>{error instanceof Error ? error.message : "This page couldn't load."}</p>
          <button className={`${BTN_PRIMARY} mt-8`} type="button" onClick={() => { router.invalidate(); reset(); }}>Try again</button>
        </div>
      </section>
    </SitePage>
  );
}
