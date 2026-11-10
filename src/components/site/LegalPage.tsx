import { CONTAINER, SitePage, TEXT_MUTED, TEXT_PRIMARY, TEXT_SOFT } from "@/components/site/PageBlocks";

export type LegalSection = { heading: string; paragraphs: string[] };

export function LegalPage({ title, updated, intro, sections }: { title: string; updated: string; intro: string; sections: LegalSection[] }) {
  return (
    <SitePage>
      <section className="bg-[hsl(var(--primary)/0.05)] py-14">
        <div className={`${CONTAINER} max-w-3xl`}>
          <h1 className={`text-4xl font-bold ${TEXT_PRIMARY}`}>{title}</h1>
          <p className={`mt-3 text-sm ${TEXT_MUTED}`}>Last updated: {updated}</p>
          <p className={`mt-4 text-lg leading-relaxed ${TEXT_SOFT}`}>{intro}</p>
        </div>
      </section>
      <section className="py-12">
        <div className={`${CONTAINER} max-w-3xl space-y-8`}>
          {sections.map((section, index) => (
            <div key={section.heading}>
              <h2 className={`mb-3 text-xl font-bold ${TEXT_PRIMARY}`}>{index + 1}. {section.heading}</h2>
              <div className="space-y-3">{section.paragraphs.map(paragraph => <p key={paragraph} className={`leading-relaxed ${TEXT_SOFT}`}>{paragraph}</p>)}</div>
            </div>
          ))}
        </div>
      </section>
    </SitePage>
  );
}
