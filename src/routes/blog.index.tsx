import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CARD, CtaBand, IMPORTED_DOCUMENT, PageHero, Section, SitePage, TEXT_MUTED, TEXT_PRIMARY, TEXT_SOFT, pageHead } from "@/components/site/PageBlocks";
import { BLOG_POSTS, formatPostDate } from "@/lib/content/blog";

export const Route = createFileRoute("/blog/")({
  head: () => pageHead("Blog | Beta Corporation", "Practical tips on websites, SEO, social media and digital marketing for businesses in Kenya."),
  staticData: { importedDocument: IMPORTED_DOCUMENT },
  component: BlogPage,
});

function BlogPage() {
  return (
    <SitePage>
      <PageHero eyebrow="Blog" title="Insights & Guides" intro="Practical advice on websites, marketing and branding to help your business grow online." />
      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map(post => (
            <a key={post.slug} href={`/blog/${post.slug}`} className={`${CARD} group flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lg`}>
              <span className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--accent))]">{post.category}</span>
              <h2 className={`mt-2 text-xl font-semibold ${TEXT_PRIMARY} group-hover:underline`}>{post.title}</h2>
              <p className={`mt-3 flex-grow text-sm leading-relaxed ${TEXT_SOFT}`}>{post.excerpt}</p>
              <div className={`mt-5 flex items-center justify-between text-xs ${TEXT_MUTED}`}>
                <span>{formatPostDate(post.date)} · {post.readMinutes} min read</span>
                <ArrowRight className={`h-4 w-4 ${TEXT_PRIMARY}`} aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </Section>
      <CtaBand title="Want Help Putting This Into Practice?" text="We'll take care of it for you — from websites to marketing." message="Hello Beta Corporation, I read your blog and I'd like some help." />
    </SitePage>
  );
}
