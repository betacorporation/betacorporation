import { createFileRoute, notFound, type ErrorComponentProps } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CONTAINER, CtaBand, IMPORTED_DOCUMENT, SitePage, TEXT_MUTED, TEXT_PRIMARY, TEXT_SOFT, pageHead } from "@/components/site/PageBlocks";
import { MissingPage, PageError } from "@/components/site/RouteFallbacks";
import { findPost, formatPostDate } from "@/lib/content/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    if (!findPost(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    const post = loaderData ? findPost(loaderData.slug) : undefined;
    return post ? pageHead(`${post.title} | Beta Corporation Blog`, post.excerpt) : { meta: [{ title: "Article unavailable | Beta Corporation" }, { name: "robots", content: "noindex" }] };
  },
  staticData: { importedDocument: IMPORTED_DOCUMENT },
  component: PostPage,
  notFoundComponent: () => <MissingPage title="Article not found" text="We couldn't find that article." backHref="/blog" backLabel="Back to the blog" />,
  errorComponent: (props: ErrorComponentProps) => <PageError {...props} />,
});

function PostPage() {
  const { slug } = Route.useLoaderData();
  const post = findPost(slug)!;
  return (
    <SitePage>
      <article className="py-12 md:py-16">
        <div className={`${CONTAINER} max-w-3xl`}>
          <a className={`mb-6 inline-flex items-center gap-2 text-sm font-semibold ${TEXT_PRIMARY} hover:underline`} href="/blog"><ArrowLeft className="h-4 w-4" aria-hidden="true" />All articles</a>
          <span className="block text-xs font-semibold uppercase tracking-wider !text-[hsl(var(--accent))]">{post.category}</span>
          <h1 className={`mt-2 text-3xl md:text-4xl font-bold leading-tight ${TEXT_PRIMARY}`}>{post.title}</h1>
          <p className={`mt-3 text-sm ${TEXT_MUTED}`}>{formatPostDate(post.date)} · {post.readMinutes} min read</p>
          <div className="mt-8 space-y-8">
            {post.body.map((block, index) => (
              <section key={index}>
                {block.heading && <h2 className={`mb-3 text-2xl font-bold ${TEXT_PRIMARY}`}>{block.heading}</h2>}
                <div className="space-y-4">{block.paragraphs.map(paragraph => <p key={paragraph} className={`text-lg leading-relaxed ${TEXT_SOFT}`}>{paragraph}</p>)}</div>
              </section>
            ))}
          </div>
        </div>
      </article>
      <CtaBand title="Need a Hand?" text="Our team can put these ideas to work for your business." message={`Hello Beta Corporation, I read "${post.title}" and I'd like some help.`} />
    </SitePage>
  );
}
