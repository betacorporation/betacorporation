import { createFileRoute, notFound, type ErrorComponentProps } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Lightbulb, MessageCircle, Target } from "lucide-react";
import { BTN_OUTLINE, BTN_WHATSAPP, CARD, CtaBand, IMPORTED_DOCUMENT, Section, SitePage, TEXT_PRIMARY, TEXT_SOFT, pageHead, CONTAINER } from "@/components/site/PageBlocks";
import { MissingPage, PageError } from "@/components/site/RouteFallbacks";
import { PORTFOLIO_PROJECTS, findProject } from "@/lib/content/portfolio";
import { whatsappLink } from "@/lib/site-contact";

export const Route = createFileRoute("/portfolio_/$slug")({
  loader: ({ params }) => {
    if (!findProject(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    const project = loaderData ? findProject(loaderData.slug) : undefined;
    return project ? pageHead(`${project.title} — Case Study | Beta Corporation`, project.problem.slice(0, 155)) : { meta: [{ title: "Project unavailable | Beta Corporation" }, { name: "robots", content: "noindex" }] };
  },
  staticData: { importedDocument: IMPORTED_DOCUMENT },
  component: ProjectPage,
  notFoundComponent: () => <MissingPage title="Project not found" text="We couldn't find that portfolio project." backHref="/portfolio" backLabel="Back to all projects" />,
  errorComponent: (props: ErrorComponentProps) => <PageError {...props} />,
});

function ProjectPage() {
  const { slug } = Route.useLoaderData();
  const project = findProject(slug)!;
  const index = PORTFOLIO_PROJECTS.findIndex(item => item.slug === slug);
  const more = [1, 2, 3].map(offset => PORTFOLIO_PROJECTS[(index + offset) % PORTFOLIO_PROJECTS.length]).filter((item): item is (typeof PORTFOLIO_PROJECTS)[number] => Boolean(item));
  return (
    <SitePage>
      <section className="bg-gradient-to-br from-[hsl(var(--primary)/0.08)] via-[hsl(var(--background))] to-[hsl(var(--accent)/0.08)] py-12 md:py-16">
        <div className={CONTAINER}>
          <a className={`mb-6 inline-flex items-center gap-2 text-sm font-semibold ${TEXT_PRIMARY} hover:underline`} href="/portfolio"><ArrowLeft className="h-4 w-4" aria-hidden="true" />Back to all projects</a>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-[hsl(var(--accent))] px-3 py-1.5 text-xs font-semibold !text-[hsl(var(--accent-foreground))] shadow-md">{project.category}</span>
              <h1 className={`mt-4 text-4xl md:text-5xl font-bold ${TEXT_PRIMARY}`}>{project.title}</h1>
              <p className={`mt-4 text-lg ${TEXT_SOFT}`}>{project.problem}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className={BTN_WHATSAPP} href={whatsappLink(`Hello Beta Corporation, I saw the "${project.title}" project and I'd like to discuss a similar project.`)} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" aria-hidden="true" />Discuss a similar project</a>
                {project.liveUrl && <a className={BTN_OUTLINE} href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4" aria-hidden="true" />Visit live site</a>}
              </div>
            </div>
            {project.image && (
              <div className="relative overflow-hidden rounded-2xl bg-[hsl(var(--secondary)/0.6)] shadow-xl" style={{ aspectRatio: "4 / 3" }}>
                <img className="absolute inset-0 h-full w-full scale-110 object-cover opacity-25 blur-lg" src={project.image} alt="" aria-hidden="true" />
                <img className="absolute inset-0 h-full w-full object-contain p-4" src={project.image} alt={`Screenshot of the ${project.title} project`} width="1024" height="768" />
              </div>
            )}
          </div>
        </div>
      </section>
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className={`${CARD} p-8`}>
            <span className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--primary)/0.1)] ${TEXT_PRIMARY}`}><Target className="h-6 w-6" aria-hidden="true" /></span>
            <h2 className={`text-2xl font-bold ${TEXT_PRIMARY}`}>The Problem</h2>
            <p className={`mt-3 leading-relaxed ${TEXT_SOFT}`}>{project.problem}</p>
          </div>
          <div className={`${CARD} p-8`}>
            <span className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--primary)/0.1)] ${TEXT_PRIMARY}`}><Lightbulb className="h-6 w-6" aria-hidden="true" /></span>
            <h2 className={`text-2xl font-bold ${TEXT_PRIMARY}`}>Our Solution</h2>
            <p className={`mt-3 leading-relaxed ${TEXT_SOFT}`}>{project.solution}</p>
          </div>
        </div>
      </Section>
      <Section tinted title="More Projects">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {more.map(item => (
            <a key={item.slug} href={`/portfolio/${item.slug}`} className={`${CARD} group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg`}>
              <div className="relative bg-[hsl(var(--secondary)/0.6)]" style={{ aspectRatio: "4 / 3" }}>
                {item.image && <img className="absolute inset-0 h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105" src={item.image} alt={`Screenshot of the ${item.title} project`} loading="lazy" />}
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider !text-[hsl(var(--accent))]">{item.category}</span>
                <h3 className={`mt-1 text-lg font-semibold ${TEXT_PRIMARY}`}>{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </Section>
      <CtaBand title="Want Results Like These?" text="Tell us about your business and we'll show you what we can build for you." message="Hello Beta Corporation, I'd like to discuss a new project." secondary={{ label: "View all projects", href: "/portfolio" }} />
    </SitePage>
  );
}
