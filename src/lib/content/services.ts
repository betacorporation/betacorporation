import type { LucideIcon } from "lucide-react";
import { Brush, Code2, FileText, Globe, Layers, Mail, Megaphone, MonitorSmartphone, Palette, PenTool, Printer, Search, Server, ShoppingCart, Sparkles, TrendingUp, Users, Wrench, Youtube } from "lucide-react";
import webImage from "@/assets/service-web-development.jpg";
import marketingImage from "@/assets/service-digital-marketing.jpg";
import creativeImage from "@/assets/service-creative.jpg";

// Service categories and their individual services, shown on /services, /services/<category> and /services/<category>/<service>.

export type Service = { slug: string; title: string; summary: string; icon: LucideIcon; intro: string; includes: string[]; idealFor: string[] };
export type ServiceCategory = {
  slug: string; title: string; shortTitle: string; icon: LucideIcon; image: string; imageAlt: string;
  headline: string; intro: string; benefits: { title: string; text: string }[]; process: { title: string; text: string }[];
  faqs: { q: string; a: string }[]; services: Service[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "web-development", title: "Web Design & Development", shortTitle: "Web Development", icon: Code2, image: webImage,
    imageAlt: "Web developer building a responsive website at a studio desk",
    headline: "Websites & eCommerce Platforms That Work as Hard as You Do",
    intro: "From simple landing pages to full online stores and custom web apps, we build fast, secure websites that look great on every phone and turn visitors into customers.",
    benefits: [
      { title: "Custom & mobile-first", text: "Every site is designed around your brand and tested on phones, tablets and desktops." },
      { title: "Built to grow", text: "Clean, scalable builds that handle more pages, products and traffic as your business expands." },
      { title: "Secure & reliable", text: "SSL, backups and security best practice come standard, so your site stays online and trusted." },
    ],
    process: [
      { title: "Consultation & planning", text: "We agree your goals, audience, pages and features before any design starts." },
      { title: "Design & prototype", text: "You see the look and layout first and request changes before we build." },
      { title: "Build & test", text: "We develop the site and test it across browsers and devices for speed and quality." },
      { title: "Launch & support", text: "We go live, connect your domain and keep supporting you after launch." },
    ],
    faqs: [
      { q: "What kind of websites do you build?", a: "Company profiles, NGO and church sites, online shops with M-Pesa checkout, booking sites, portals and custom web applications." },
      { q: "How long does a website take?", a: "A standard business site usually takes 1–3 weeks. Online stores and custom systems take longer depending on features — we give you a timeline before we start." },
      { q: "Do you handle domains and hosting?", a: "Yes. We can register your domain, host the site and set up business email so everything is handled in one place." },
    ],
    services: [
      { slug: "website-redesign", title: "Website Design & Redesign", icon: MonitorSmartphone, summary: "Modern, high-converting websites — new builds or a full refresh of an old site.", intro: "Whether you need your first website or your current one feels outdated, we design a fast, modern site that represents your brand properly and makes it easy for visitors to contact or buy from you.", includes: ["Fresh custom design matched to your brand", "Mobile-first layouts for every screen size", "Speed and SEO basics built in", "WhatsApp, call and enquiry buttons", "Content migration from your old site", "Training so you can update content yourself"], idealFor: ["Businesses with an outdated or slow website", "New businesses launching online", "Brands that recently refreshed their identity"] },
      { slug: "ecommerce-development", title: "eCommerce Development", icon: ShoppingCart, summary: "Online stores with M-Pesa and card payments that drive sales.", intro: "We build online shops that are easy to browse, simple to manage and quick to check out — with M-Pesa, card payments and delivery options set up for Kenyan customers.", includes: ["Product catalogue with categories and search", "M-Pesa and card checkout", "Stock and order management", "Delivery zones and shipping fees", "Discount codes and promotions", "Order notifications by email or WhatsApp"], idealFor: ["Retail shops moving online", "Instagram and TikTok sellers ready for their own store", "Wholesalers taking bulk orders"] },
      { slug: "custom-web-applications", title: "Custom Web Applications", icon: Layers, summary: "Portals, dashboards and business systems built around how you work.", intro: "When off-the-shelf software doesn't fit, we build web applications tailored to your operations — booking systems, member portals, internal dashboards and more.", includes: ["Requirements workshop and system design", "User accounts and role-based access", "Dashboards and reports", "M-Pesa, SMS and email integrations", "Secure cloud hosting", "Ongoing support and improvements"], idealFor: ["Organisations replacing spreadsheets", "Schools, saccos and chamas", "Startups building a first product"] },
      { slug: "website-maintenance", title: "Website Maintenance", icon: Wrench, summary: "Updates, backups and security so your site keeps running smoothly.", intro: "We look after your website so you don't have to — regular updates, backups, security checks and content changes whenever you need them.", includes: ["Software and plugin updates", "Scheduled backups", "Security and uptime monitoring", "Monthly content updates", "Speed checks and fixes", "Priority WhatsApp support"], idealFor: ["Businesses without an in-house developer", "Sites that have been neglected", "Busy teams that need quick changes"] },
      { slug: "domain-hosting", title: "Domains & Hosting", icon: Server, summary: "Domain registration, fast hosting and business email, set up for you.", intro: "Register .co.ke, .ke, .com and other domains, host your site on fast servers and get professional email addresses — all set up and managed by our team.", includes: ["Domain search and registration", "Fast SSD hosting", "Free SSL certificate", "Business email setup", "DNS and transfer help", "Renewal reminders"], idealFor: ["New businesses getting online", "Anyone moving from an unreliable host", "Teams that need branded email"] },
    ],
  },
  {
    slug: "digital-marketing", title: "Digital Marketing", shortTitle: "Digital Marketing", icon: TrendingUp, image: marketingImage,
    imageAlt: "Marketing team reviewing social media analytics on a tablet",
    headline: "Digital Marketing That Brings You Real Customers",
    intro: "Data-driven SEO, paid ads and social media campaigns that put your business in front of the right people in Kenya — and turn attention into enquiries and sales.",
    benefits: [
      { title: "Reach your ideal audience", text: "Target by location, interests and behaviour so your budget goes to people most likely to buy." },
      { title: "Grow brand visibility", text: "Show up consistently across Google, social media and email so customers remember you." },
      { title: "Measure everything", text: "Clear reports show what's working, so we keep improving results month after month." },
    ],
    process: [
      { title: "Discovery & strategy", text: "We learn your business, competitors and goals, then build a plan for your market." },
      { title: "Campaign setup", text: "We create the content, ads and targeting, and launch across the right channels." },
      { title: "Optimise", text: "We track performance daily and adjust budgets, audiences and creative to improve results." },
      { title: "Report", text: "You get simple reports with results and next steps — no jargon." },
    ],
    faqs: [
      { q: "Why does my business need digital marketing?", a: "Most customers in Kenya search online or check social media before they buy. Marketing makes sure they find you — not a competitor." },
      { q: "Which service is right for me?", a: "It depends on your goals and budget. Ads bring quick results, SEO builds long-term traffic and social media builds loyalty. We'll recommend a mix on a free call." },
      { q: "How do you measure success?", a: "We agree on goals up front — leads, sales, calls or followers — and report against them every month." },
    ],
    services: [
      { slug: "seo-services", title: "SEO Services", icon: Search, summary: "Rank higher on Google and attract steady organic traffic.", intro: "We improve your website so it ranks for the searches your customers actually make — bringing in steady traffic without paying for every click.", includes: ["Keyword research for your market", "On-page and technical SEO fixes", "Google Business Profile optimisation", "Content planning and writing", "Local SEO for Kenyan cities", "Monthly ranking reports"], idealFor: ["Businesses that depend on Google searches", "Service providers in a specific town", "Online shops wanting free traffic"] },
      { slug: "ppc", title: "PPC & Google Ads", icon: Megaphone, summary: "Targeted ad campaigns on Google and social media that bring fast results.", intro: "Pay-per-click ads put you at the top of Google and in social feeds today. We set up, manage and optimise campaigns so every shilling works harder.", includes: ["Account setup and conversion tracking", "Keyword and audience research", "Ad copy and creative", "Google Search, Display and YouTube ads", "Meta and TikTok ads", "Weekly optimisation and monthly reports"], idealFor: ["Businesses needing leads quickly", "Product launches and promotions", "Online stores scaling sales"] },
      { slug: "social-media-marketing", title: "Social Media Marketing", icon: Users, summary: "Content and community management that builds a loyal following.", intro: "We plan, design and post engaging content on Instagram, TikTok, Facebook, X and LinkedIn, and manage your community so your brand stays active and trusted.", includes: ["Monthly content calendar", "Graphics, reels and captions", "Posting and scheduling", "Community and inbox management", "Influencer partnerships", "Performance reports"], idealFor: ["Brands with inactive social pages", "Businesses selling through social media", "Events and launches"] },
      { slug: "content-marketing", title: "Content & Email Marketing", icon: Mail, summary: "Blogs, newsletters and email automation that nurture leads.", intro: "Helpful content and well-timed emails keep your business top of mind and turn interested people into paying customers.", includes: ["Blog and article writing", "Newsletter design and sending", "Welcome and follow-up email sequences", "Lead magnets and sign-up forms", "List management", "Open and click reporting"], idealFor: ["Businesses with long sales cycles", "Online stores wanting repeat buyers", "Consultants building authority"] },
      { slug: "google-youtube-ads", title: "Google & YouTube Ads", icon: Youtube, summary: "Video and search campaigns on the world's biggest platforms.", intro: "Reach people when they search on Google and while they watch YouTube, with campaigns built around your goals and budget.", includes: ["Search and Performance Max campaigns", "YouTube video ad setup", "Remarketing audiences", "Landing page recommendations", "Budget management", "Results reporting"], idealFor: ["Brands with video content", "Businesses targeting high-intent searches", "Awareness campaigns"] },
    ],
  },
  {
    slug: "btl-media-creative", title: "BTL Media & Creative", shortTitle: "Creative Services", icon: Palette, image: creativeImage,
    imageAlt: "Designer sketching a logo beside brand colour swatches",
    headline: "Creative Design That Gets You Noticed",
    intro: "Logos, brand identities, marketing materials and interfaces that tell your story clearly and make a strong first impression — online and in print.",
    benefits: [
      { title: "First impressions count", text: "Strong visuals build credibility and trust with your audience instantly." },
      { title: "Communicate clearly", text: "Good design makes your message easy to understand and remember." },
      { title: "Drive action", text: "Thoughtful design guides people to call, buy, book or sign up." },
    ],
    process: [
      { title: "Creative brief", text: "We learn your vision, audience and goals to set a clear direction." },
      { title: "Concepts", text: "We share initial ideas and mood boards for your feedback." },
      { title: "Design & refine", text: "We develop the chosen direction and refine it with you." },
      { title: "Final delivery", text: "You receive ready-to-use files for print, web and social media." },
    ],
    faqs: [
      { q: "How many logo concepts do I get?", a: "Our branding packages include multiple initial concepts and rounds of revisions until you're happy." },
      { q: "Do you print as well as design?", a: "Yes. We can design and produce business cards, banners, brochures, booklets and more." },
      { q: "Which files will I receive?", a: "Print-ready PDFs plus PNG, JPG and vector files for web and social media." },
    ],
    services: [
      { slug: "brand-identity", title: "Brand Identity", icon: Sparkles, summary: "Logo, colours, fonts and guidelines for a consistent brand.", intro: "We create a complete visual identity — logo, colour palette, typography and usage guidelines — so your brand looks professional and consistent everywhere.", includes: ["Logo design with variations", "Colour palette and typography", "Brand guidelines document", "Business card and letterhead", "Social media profile kit", "All source files"], idealFor: ["New businesses", "Companies rebranding", "Brands with inconsistent visuals"] },
      { slug: "graphic-design", title: "Graphic Design", icon: PenTool, summary: "Posters, flyers, social graphics and marketing collateral.", intro: "Eye-catching designs for your marketing — from social media posts and flyers to company profiles and presentations.", includes: ["Social media graphics", "Flyers and posters", "Company profiles", "Presentations and pitch decks", "Menus and price lists", "Event branding"], idealFor: ["Ongoing marketing needs", "Events and promotions", "Sales teams needing collateral"] },
      { slug: "ui-ux-design", title: "UI/UX Design", icon: Brush, summary: "Intuitive interfaces for websites and mobile apps.", intro: "We design clear, easy-to-use screens for websites and apps, tested with real users so customers can find what they need and take action.", includes: ["User research and journeys", "Wireframes", "High-fidelity screen designs", "Clickable prototypes", "Design system and components", "Developer handover"], idealFor: ["Startups planning an app", "Teams improving a confusing product", "Businesses before a website build"] },
      { slug: "print-media", title: "Print Media & Production", icon: Printer, summary: "Business cards, banners, booklets and branded merchandise.", intro: "From luxury business cards to pull-up banners and branded merchandise, we design and produce print materials that leave a lasting impression.", includes: ["Business cards", "Pull-up and roll-up banners", "Brochures and booklets", "Branded merchandise", "Signage and stickers", "Delivery across Kenya"], idealFor: ["Exhibitions and events", "Office and shop branding", "Corporate gifts"] },
    ],
  },
];

export const EXTRA_SERVICES = [
  { title: "Print & Publications", text: "Books, manuals, annual reports and booklets with an instant quote builder.", href: "/printing", icon: FileText },
  { title: "Website Packages", text: "Ready-made website packages for every type of business.", href: "/websites", icon: Globe },
];

export function findCategory(slug: string) {
  return SERVICE_CATEGORIES.find(category => category.slug === slug);
}

export function findService(categorySlug: string, serviceSlug: string) {
  const category = findCategory(categorySlug);
  const service = category?.services.find(item => item.slug === serviceSlug);
  return category && service ? { category, service } : undefined;
}
