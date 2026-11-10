// Articles shown on /blog and /blog/<slug>.
export type BlogPost = { slug: string; title: string; excerpt: string; category: string; date: string; readMinutes: number; body: { heading?: string; paragraphs: string[] }[] };

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-much-does-a-website-cost-in-kenya", title: "How Much Does a Website Cost in Kenya?", category: "Web Design", date: "2026-10-28", readMinutes: 5,
    excerpt: "What drives website pricing, what you should expect at each budget level, and how to avoid paying for things you don't need.",
    body: [
      { paragraphs: ["One of the first questions every business owner asks is how much a website will cost. The honest answer is: it depends on what the website needs to do. A simple company profile and a full online store are very different projects."] },
      { heading: "What affects the price", paragraphs: ["The biggest factors are the number of pages, custom features (bookings, payments, member areas), who writes the content and whether you need ongoing support. Domain, hosting and business email are usually separate yearly costs.", "A clear brief saves money. List the pages you need, the actions you want visitors to take and any examples of sites you like."] },
      { heading: "Getting value for money", paragraphs: ["Ask for a written scope before you pay a deposit, check that the site will be mobile-friendly and fast, and make sure you will own your domain and content. A cheaper site that brings no enquiries is the most expensive option of all."] },
    ],
  },
  {
    slug: "why-your-business-needs-a-google-business-profile", title: "Why Your Business Needs a Google Business Profile", category: "SEO", date: "2026-10-14", readMinutes: 4,
    excerpt: "A free Google Business Profile can put you on the map — literally. Here's how to set one up and get more calls from local customers.",
    body: [
      { paragraphs: ["When someone searches for a service near them, Google shows a map with nearby businesses. Those listings come from Google Business Profiles — and they're free."] },
      { heading: "Set it up properly", paragraphs: ["Use your real business name, choose the most accurate category, add opening hours, your phone number and WhatsApp, and upload real photos of your work, team and premises."] },
      { heading: "Keep it active", paragraphs: ["Ask happy customers for reviews and reply to every one. Post updates and offers regularly. Active profiles tend to appear more often and earn more trust."] },
    ],
  },
  {
    slug: "social-media-tips-for-small-businesses", title: "7 Social Media Tips for Small Businesses", category: "Digital Marketing", date: "2026-09-30", readMinutes: 6,
    excerpt: "Simple, practical ways to grow your audience on Instagram, TikTok and Facebook without spending all day on your phone.",
    body: [
      { paragraphs: ["Social media is one of the most affordable ways for small businesses in Kenya to reach customers. These tips will help you get better results with less effort."] },
      { heading: "Plan and stay consistent", paragraphs: ["Pick two platforms where your customers spend time and post on a regular schedule. A simple weekly plan beats random bursts of activity.", "Batch-create content once a week so you're not scrambling every day."] },
      { heading: "Show real people and real results", paragraphs: ["Behind-the-scenes clips, customer stories and before-and-after posts build more trust than polished adverts. Short videos usually reach the most people."] },
      { heading: "Make it easy to buy", paragraphs: ["Add your WhatsApp link to your bio, reply to messages quickly and always tell people what to do next — call, order, book or visit."] },
    ],
  },
];

export function findPost(slug: string) {
  return BLOG_POSTS.find(post => post.slug === slug);
}

export function formatPostDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
