// Portfolio case studies shown on /portfolio and /portfolio/<slug>.
export type PortfolioProject = { slug: string; title: string; category: string; image: string | null; problem: string; solution: string; liveUrl: string | null };

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    "slug": "astros-mining",
    "title": "Astros Mining (AsMiCo)",
    "category": "Mining & Mineral Trade",
    "image": "/site-assets/f69ca18d5a530eae.jpg",
    "problem": "A gold, copper, tanzanite and diamond trading operation across East and Central Africa needed an institutional-grade site to reach global buyers, showcase licensed compliance, and present live market data.",
    "solution": "Built a finance-grade mining platform with a live gold-price ticker, a featured mineral-assets catalogue (gold bars, copper sheets), regional-presence and ESG-impact sections, and an investor relations / quote-request funnel for institutional procurement.",
    "liveUrl": "https://astrosmining.com/"
  },
  {
    "slug": "batteriq",
    "title": "Batteriq",
    "category": "Portable Power E-commerce",
    "image": "/site-assets/91702c4790f89edf.jpg",
    "problem": "Needed a specialized e-commerce store with clear product comparisons, high-trust signals, and a focus on both portable and home solar backup solutions.",
    "solution": "Developed a fast-loading, product-focused e-commerce site with clear categories, featured deals, integrated customer testimonials, and quick links for consultation and expert support.",
    "liveUrl": "https://batteriq.com/"
  },
  {
    "slug": "bb-bread-bakemark",
    "title": "BB Bread (BakeMark)",
    "category": "FMCG & Food Manufacturing",
    "image": "/site-assets/4c65ac22351d4e5e.jpg",
    "problem": "Kenya's trusted bakery since 2016 needed a national consumer brand site to grow distributor recruitment, showcase the full product range (200g–800g white & brown loaves), communicate CSR initiatives like the Kenya Red Cross partnership and BB Bread football team, and serve as a county-by-county stockist locator.",
    "solution": "Built a vibrant brand-led platform with an animated hero slider, product grid, 17-county outlet map, distributor application flow, blog/CSR section, an admin-managed stockist network and an interactive chat widget for bulk orders and product enquiries.",
    "liveUrl": "https://bakemark.co.ke/"
  },
  {
    "slug": "beauty-bites",
    "title": "Beauty Bites",
    "category": "Beauty & Skincare E-Commerce",
    "image": "/site-assets/961796ba8c01eb9e.jpg",
    "problem": "A Nairobi CBD skincare retailer specialising in glutathione and whitening products needed an e-commerce catalogue organised across nine product categories, with seasonal promotions to move stock.",
    "solution": "Delivered a beauty e-commerce store with category mega-menus (Glutathione Injectables, Vitamin C & Collagen, Drinking Powders, Whitening Creams and more), best-seller and featured-product rails, and seasonal campaigns like the Easter Sale.",
    "liveUrl": "https://beautybites.co.ke/"
  },
  {
    "slug": "belioras",
    "title": "Belioras Luxe",
    "category": "Luxury Fashion & E-Commerce",
    "image": "/site-assets/d29e4f8e24dded21.jpg",
    "problem": "A Germany-based premium fashion and luxury hair brand needed an international, multilingual e-commerce store with a luxury aesthetic, hair length and shoe size guides, EUR pricing, and an AI styling assistant to convert global luxury buyers across Europe, the UK and the US.",
    "solution": "Built a sleek WooCommerce-powered luxury storefront with curated category pages (Hair, Jewelry, Handbags, Clothing, Shoes), wishlist and compare features, an integrated \"Bella\" AI style assistant, multi-language translation support, and a customer testimonial system showcasing reviews from Miami, Atlanta, Chicago, London, Houston and LA.",
    "liveUrl": "https://belioras.com/"
  },
  {
    "slug": "billan-beauty",
    "title": "Billan Beauty",
    "category": "International E-commerce (Beauty)",
    "image": "/site-assets/e2e53d7b8181dc6e.jpg",
    "problem": "Needed to sell CeraVe and other skincare products to both the UK and Kenyan markets, requiring a robust e-commerce setup to handle international logistics.",
    "solution": "Built an international e-commerce store with clear categorization of skincare/makeup and dedicated product pages, suitable for their UK and Kenya locations.",
    "liveUrl": "http://billanbeauty.co.uk/"
  },
  {
    "slug": "billy-furniture",
    "title": "Billy Furniture",
    "category": "Office & Home Furniture E-Commerce",
    "image": "/site-assets/418fa24d036e1961.jpg",
    "problem": "A Baba Dogo office-furniture supplier needed a catalogue-scale storefront to sell 40+ furniture types — executive seating, desks, storage and reception furniture — to corporate, education and healthcare buyers, not just walk-ins.",
    "solution": "Delivered a large-catalogue e-commerce store with organised navigation across 40+ product types, a Payment-on-Delivery model to lower the barrier for first-time buyers, and a Google reviews wall (59+ testimonials) to build trust with corporate clients.",
    "liveUrl": "https://billyfurniture.co.ke/"
  },
  {
    "slug": "born2fro",
    "title": "Born2fro",
    "category": "Natural Hair Care Retail",
    "image": "/site-assets/48bd1ce55ee8146e.jpg",
    "problem": "Needed a clean e-commerce channel to sell their specialized herbal hair care products, clearly demonstrating the ingredients and usage for their unique products.",
    "solution": "Designed a dedicated e-commerce storefront for their \"Grow Now\" collection, with a focus on product purity and detailed instructions, and visible customer reviews to build confidence.",
    "liveUrl": "https://born2fro.com/"
  },
  {
    "slug": "charities-association-kenya",
    "title": "Charities Association of Kenya (CAK)",
    "category": "NGO/PBO Support & Advocacy",
    "image": "/site-assets/02bd68c1c45d5c06.jpg",
    "problem": "Needed a clear, functional website to serve as the central resource for its member organizations, offering training, networking, and advocacy support services.",
    "solution": "Built an institutional member portal that clearly outlines the benefits of membership, details their five core services, and facilitates knowledge sharing among NGOs.",
    "liveUrl": "https://cak.co.ke/"
  },
  {
    "slug": "chichi-the-dj",
    "title": "Chichi The DJ",
    "category": "Entertainment & VIP Events",
    "image": "/site-assets/5c1ea2bbc9e3143e.jpg",
    "problem": "An international luxury event DJ required an energetic, upscale brand portfolio with embedded mix streaming, gig booking calendars, and press assets.",
    "solution": "Architected a vibrant entertainment showcase featuring audio streaming embeds, tour dates, and an electronic press kit (EPK).",
    "liveUrl": "https://chichithedj.us/"
  },
  {
    "slug": "cwpc-kenya-safaris",
    "title": "CWPC Kenya Safaris",
    "category": "Safari & Experiential Travel",
    "image": "/site-assets/d08a1e02ddd7ae4c.jpg",
    "problem": "An East African wilderness expedition company needed a fast, high-conversion safari booking engine with multi-country itinerary comparison and direct WhatsApp inquiry funnels.",
    "solution": "Engineered an immersive expedition portal detailing wildlife tours, day-by-day itineraries, lodge classifications, seasonal pricing, and instant quote requests.",
    "liveUrl": "https://www.cwpckenyasafaris.com/"
  },
  {
    "slug": "dealforge",
    "title": "Dealforge",
    "category": "Manpower & General Supplies",
    "image": "/site-assets/bbef06fd0de6a69a.jpg",
    "problem": "Needed a credible, corporate website to market their dual services—providing skilled manpower and managing general supplies—to diverse industrial sectors.",
    "solution": "Designed a trust-building corporate site with a simple three-step process (\"Consultation,\" \"Sourcing,\" \"Delivery\") that clearly explains how they meet both HR and procurement needs.",
    "liveUrl": "https://dealforge.org/"
  },
  {
    "slug": "di-fronte-al-mare",
    "title": "Di Fronte Al Mare",
    "category": "Luxury Property Sales",
    "image": "/site-assets/d982e8a8b3f4bbae.jpg",
    "problem": "Needed to market high-value, off-plan luxury apartments in Watamu to international and local investors, requiring a high-trust digital brochure.",
    "solution": "Created an elegant, bilingual (English/Italian) property showcase featuring high-resolution photography, virtual tours, and clear details on availability to secure pre-sales.",
    "liveUrl": "https://difrontealmare.com/en/"
  },
  {
    "slug": "diani-elite-taxi",
    "title": "Diani Elite Taxi",
    "category": "Transport & Airport Transfer Services",
    "image": "/site-assets/f182656d8c41fc5f.jpg",
    "problem": "A Diani-based taxi operator needed to move upmarket — from ad-hoc phone bookings to a professional booking site quoting fixed fares transparently across 30+ coastal routes and vehicle classes.",
    "solution": "Delivered a coastal transport site with a full fleet showcase (saloon to 25-seat minibus), fixed route/pricing tables in KES with live USD estimates, a WhatsApp-first booking widget, and dedicated pages for airport, SGR and hotel transfers.",
    "liveUrl": "https://dianielitetaxi.co.ke/"
  },
  {
    "slug": "electron-engineers",
    "title": "Electron Engineers",
    "category": "Electro-Mechanical Consultancy",
    "image": "/site-assets/d8f94af796eb1c45.jpg",
    "problem": "Required a high-authority website to present their end-to-end electromechanical services (Design, Installation, Maintenance) with integrity and local insight in the Somali market.",
    "solution": "Created a structured corporate site with detailed service breakdowns and a clear mission statement, focusing on \"Enduring Strength Together\" to build credibility with institutional clients.",
    "liveUrl": "https://electronengineers.com/"
  },
  {
    "slug": "elite-capital-fx",
    "title": "Elite Capital FX",
    "category": "Cryptocurrency Investment Platform",
    "image": "/site-assets/9a4825d37057f6cb.jpg",
    "problem": "A crypto investment platform needed a trust-building dashboard to present tiered USDT investment packages, live market data, and portfolio performance tracking for its investor base.",
    "solution": "Built a dark, fintech-grade platform with a live multi-coin price ticker, five investment package tiers with automatic payout calculations, a portfolio dashboard (daily earnings, total earned, referral bonus), a one-level referral programme, and a BEP-20 USDT deposit/withdrawal flow with PWA support.",
    "liveUrl": "https://elitecapital-mining.com/"
  },
  {
    "slug": "estty-hair-spa",
    "title": "Estty Hair & Spa",
    "category": "Beauty & Salon E-Commerce",
    "image": "/site-assets/7378654580bbe1a7.jpg",
    "problem": "A premier Kilimani luxury salon needed an integrated digital solution to manage appointments, virgin hair extensions sales, and custom wig consultations.",
    "solution": "Designed a chic beauty platform combining calendar appointment scheduling, virgin hair extension catalogs, and M-Pesa checkout.",
    "liveUrl": "http://esttyhair.com/"
  },
  {
    "slug": "forthright-kenya-real-estate",
    "title": "Forthright Kenya Real Estate",
    "category": "Real Estate Agency & Management",
    "image": "/site-assets/eefdc416cc555604.jpg",
    "problem": "Needed a comprehensive platform to manage property sales, rentals, and management contracts, requiring robust search features and clear service differentiation.",
    "solution": "Developed a full-service real estate portal with advanced filtering for diverse property types and dedicated modules for Property Management and Construction services.",
    "liveUrl": "https://forthrightkenyarealestate.com/"
  },
  {
    "slug": "furniture-center",
    "title": "Furniture Center",
    "category": "Home Furniture E-Commerce",
    "image": "/site-assets/73dd1500bafdf4d2.jpg",
    "problem": "A Kahawa Sukari furniture retailer needed an online catalogue for sofas, beds, dining sets and TV stands that could handle custom orders alongside a standard cart, without losing the direct WhatsApp relationship customers were used to.",
    "solution": "Built a furniture storefront with five core categories, a custom-order request pathway, WhatsApp checkout integration, and rotating seasonal discounts of 6-10% to drive online sales alongside the physical showroom.",
    "liveUrl": "https://furniturecenter.co.ke/"
  },
  {
    "slug": "gamers-safaris",
    "title": "Gamers Safaris",
    "category": "Luxury & Family Safaris",
    "image": "/site-assets/79d4a7090f833de8.jpg",
    "problem": "Required a captivating website to showcase their diverse tour types across multiple countries, offering flexible options for city tours and expeditions.",
    "solution": "Delivered a visually stunning travel portal with prominent featured safaris, clear pricing structures, and a simple 3-step booking process to convert highly visual inspiration into concrete bookings.",
    "liveUrl": "https://gamerssafaris.com/"
  },
  {
    "slug": "global-health-sustainable-development",
    "title": "Global Health and Sustainable Development (GHSD)",
    "category": "Global Health & Development NGO",
    "image": "/site-assets/dd5406b43868594f.jpg",
    "problem": "A US-registered foundation working across Africa needed a mission hub to explain its dual healthcare and Climate-SMART agriculture programmes and convert visitors into donors and partners.",
    "solution": "Delivered a foundation site structured around Health, Sustainable Agriculture and Climate SMART programme pillars, with embedded video storytelling, a clear donate pathway, and a partners section spotlighting collaborators across healthcare and farming.",
    "liveUrl": "https://globalhealthandsustainabledevelopment.com/"
  },
  {
    "slug": "gluk-dentistry-biomedical-sciences",
    "title": "GLUK School of Dentistry & Biomedical Sciences",
    "category": "Higher Education & Medical Training",
    "image": "/site-assets/590ec57967da1d7c.jpg",
    "problem": "Great Lakes University of Kisumu's dental school needed an admissions-focused site to explain its BDS and BSc Health Sciences programmes and convert prospective students into applicants.",
    "solution": "Built a university admissions site with clear programme breakdowns, a rolling news ticker for research and community milestones, a prospectus-request form, and direct 'Apply Now' pathways — positioning GLUK as a centre of dental education excellence in East Africa.",
    "liveUrl": "https://gluksdbs.org/"
  },
  {
    "slug": "golden-star-adventures",
    "title": "Golden Star Adventures",
    "category": "Luxury African Safaris",
    "image": "/site-assets/6eb5d6df280ebde5.jpg",
    "problem": "A boutique luxury safari operator required an evocative digital portal highlighting Maasai Mara migrations, Tsavo circuits, and KATO operator credentials.",
    "solution": "Engineered an African expedition platform with structured itinerary showcases, lodge classifications, traveler review schemas, and booking quote funnels.",
    "liveUrl": "https://goldenstaradventures.com/"
  },
  {
    "slug": "goldenprintfx",
    "title": "GoldenPrintFX",
    "category": "Forex Trading Mentorship",
    "image": "/site-assets/a3f67b369e6ac638.jpg",
    "problem": "Needed a platform to sell high-value trading courses and signals, requiring a transparent showcase of \"proven strategy\" and verifiable results to build trust with aspiring traders.",
    "solution": "Built an educational/sales funnel website featuring a free mini-course, detailed explanations of their mentorship models, and testimonials backed by screenshots of successful trade setups.",
    "liveUrl": "https://goldenprintfx.com/"
  },
  {
    "slug": "greenhunt-energy",
    "title": "Greenhunt Energy",
    "category": "Solar & Renewable Energy Sales",
    "image": "/site-assets/4d65bbeedbfac5c2.jpg",
    "problem": "Needed a platform to market and sell complex energy systems while establishing credibility for installation expertise and long-term warranties.",
    "solution": "Developed a robust e-commerce and services site that clearly lists products, highlights key figures, and positions them as the trusted, EPRA-certified partner for solar installation.",
    "liveUrl": "https://greenhuntenergy.co.ke/"
  },
  {
    "slug": "gridx-africa",
    "title": "GridX Africa",
    "category": "Renewable Energy & Cleantech",
    "image": "/site-assets/0183470068a89865.jpg",
    "problem": "A pan-African renewable energy developer needed an authoritative corporate site to showcase utility-scale solar deployments, communicate financial scale ($38.5M financed, 26+ MWp deployed, 19 MWh battery storage), highlight 49 projects across 5 countries (Kenya, Tanzania, Mozambique, DRC, Zambia), and attract C&I clients to fully-financed PPA solutions.",
    "solution": "Designed an impact-driven corporate site with animated stats counters, a 5-country project map, three bespoke service tiers (Industrial Clients, Technical Partners, Private Utilities), a featured project showcase (Two Rivers, Waridi Flower Farm, Muthu Keekorok Lodge, Kinondo Kwetu Resort and more), and clear PPA, operating lease and asset financing inquiry flows.",
    "liveUrl": "https://gridxafrica.com/"
  },
  {
    "slug": "high-yields",
    "title": "High Yields",
    "category": "Investment & Wealth Management",
    "image": "/site-assets/60a7ddc796a213ef.jpg",
    "problem": "Needed a trustworthy digital presence to attract high-net-worth clients, clearly explaining their diverse investment strategies in Equities, Fixed Income, and Real Estate.",
    "solution": "Created a highly professional corporate website that details their service plan (Portfolio Management, Financial Planning, Taxation) and emphasizes their \"Proven Track Record.\"",
    "liveUrl": "https://highyields.org/"
  },
  {
    "slug": "hometime-investments",
    "title": "Hometime Investments",
    "category": "Coastal Real Estate & AirBnB",
    "image": "/site-assets/c0a4bf321d4f53be.jpg",
    "problem": "Needed a mobile-friendly platform to list both long-term property sales and short-term AirBnB rentals on the Kenyan coast effectively.",
    "solution": "Delivered a customized real estate portal specifically for the coast, featuring separate, well-categorized listing sections for long-term rentals/sales and nightly AirBnB bookings.",
    "liveUrl": "https://hometime.co.ke/"
  },
  {
    "slug": "irene-muendo-isuzu",
    "title": "Irene Muendo Isuzu",
    "category": "Commercial Vehicle Sales",
    "image": "/site-assets/0539b6f020019f6c.jpg",
    "problem": "Required a simplified digital showroom that could effectively display their heavy-duty, light-duty, and SUV models, focusing on generating qualified leads for quotes.",
    "solution": "Created a streamlined vehicle catalogue with specific sections for all models, integrating a direct \"Get a Quote\" tool to accelerate the sales pipeline.",
    "liveUrl": "https://irenemuendoisuzu.co.ke/"
  },
  {
    "slug": "israel-universal-church",
    "title": "Israel Universal Church",
    "category": "Faith-Based Organization",
    "image": "/site-assets/e29758248957b6d2.png",
    "problem": "Needed a secure, reliable digital platform to centralize community updates, manage the calendar of sacred festivals, and enable online donation collection.",
    "solution": "Developed a faith-focused hub featuring live-stream integration, a comprehensive calendar of religious events, a clear Statement of Faith, and a simple online donation system.",
    "liveUrl": "https://israeluniversalchurch.org/"
  },
  {
    "slug": "kaky-travel",
    "title": "Kaky Travel",
    "category": "East Africa Travel Agency",
    "image": "/site-assets/65b018df9faaf97c.jpg",
    "problem": "Needed to streamline the booking and inquiry process for international and corporate clients seeking diverse African safaris and multi-country tours.",
    "solution": "Created a professional travel showcase emphasizing \"Expert Travel Guides\" and \"Flexible Travel Packages,\" with clear destination pages and a visible custom travel plan builder.",
    "liveUrl": "https://kakytravel.com/"
  },
  {
    "slug": "kishkids-baby-shop",
    "title": "KishKids Baby Shop",
    "category": "Baby & Kids E-Commerce",
    "image": "/site-assets/5e20213c2b587d0f.jpg",
    "problem": "A Ruiru-based baby and kids retailer needed a full online shop spanning toys, clothing, feeding sets, school bags and newborn packages, with countrywide delivery — not just a physical storefront.",
    "solution": "Built a category-rich e-commerce store with dedicated collections (Toys & Games, Clothing, Feeding Sets, School Bags, Newborn Packages), promotions and new-arrivals sections, account/wishlist features, and countrywide delivery messaging.",
    "liveUrl": "https://kishkidsbabyshop.co.ke/"
  },
  {
    "slug": "lifeline-consulting",
    "title": "Lifeline Consulting Firm",
    "category": "International Development Consulting",
    "image": "/site-assets/5a37f999959d6373.jpg",
    "problem": "A Nairobi and Mogadishu-based professional services firm needed a globally credible website to showcase expertise in public governance, monitoring & evaluation, climate action, and implementation advisory — and establish trust with institutional donors and partners like USAID, UNICEF, WFP, World Vision, DFID and the UK FCO.",
    "solution": "Built an authoritative consulting site with dedicated service tier pages (MEL, Risk Governance, Implementation & Advisory, Strategy & Reform, Climate & Environment), a regional deep-dive showcasing East African roots and on-the-ground presence across Somalia, Kenya and beyond, a portfolio of engagements, and a partner logo strip from 20+ international agencies to underline institutional credibility.",
    "liveUrl": "https://lifelineconsultingfirm.com/"
  },
  {
    "slug": "lion-cubs-contest",
    "title": "Lion Cubs Contest",
    "category": "Education & Competition Platform",
    "image": "/site-assets/15bb8cddd1a5366c.jpg",
    "problem": "A national mathematical talent competition required a high-concurrency voting and contestant registry platform capable of handling real-time vote tallies.",
    "solution": "Architected a resilient competition engine with live vote verification, multi-category leaderboard indexing, and fraud-resistant voter authentication.",
    "liveUrl": "https://lioncubscontest.com/"
  },
  {
    "slug": "lusweti-nabutola-advocates",
    "title": "Lusweti & Nabutola Advocates",
    "category": "Legal & Corporate Law",
    "image": "/site-assets/c077bb35777d66a4.jpg",
    "problem": "Needed an authoritative presence to convey expertise in complex legal areas and establish trust with high-value corporate clients.",
    "solution": "Designed a professional, high-authority website with clear practice area breakdowns and robust firm profiles to convert expert knowledge into client confidence.",
    "liveUrl": "https://luswetinabutola.com/"
  },
  {
    "slug": "madenitawe",
    "title": "Madenitawe",
    "category": "Personal Debt Management",
    "image": "/site-assets/de802af22294c624.jpg",
    "problem": "Kenyans struggling with multiple loans needed a single, trustworthy platform to consolidate debt, create personalized plans, and track their financial freedom journey.",
    "solution": "Created a user-friendly financial platform that provides debt consolidation tools, a secure payment and tracking system, and uses transparent language for instant client relief.",
    "liveUrl": "https://madenitawe.co.ke/"
  },
  {
    "slug": "maluki-bespoke",
    "title": "Maluki Bespoke",
    "category": "Luxury Bespoke Tailoring",
    "image": "/site-assets/61eb78baa817e7c9.jpg",
    "problem": "Required a website that conveyed luxury, supported their \"by-appointment-only\" model, and showcased their meticulous craftsmanship.",
    "solution": "Created an elegant, minimalist digital storefront with a strong visual focus on the lookbook and a clear call-to-action for private fitting appointments.",
    "liveUrl": "https://malukibespoke.com/"
  },
  {
    "slug": "mboga-express",
    "title": "Mboga Express",
    "category": "Fresh Produce & Grocery E-Commerce",
    "image": "/site-assets/238806676133b3f1.jpg",
    "problem": "A Nairobi fresh produce delivery service needed a full online grocery store to sell fruits, vegetables, eggs, meat and fresh juices by category, with fast doorstep delivery and time-windowed discounts to drive off-peak orders.",
    "solution": "Built a vibrant grocery storefront with 11+ product categories, a delivery-window discount engine (up to 10% off for 11am–4pm orders), wishlist and cart, safe payment methods, and a WhatsApp quick-chat widget for real-time customer support — one of our signature e-commerce builds.",
    "liveUrl": "https://mbogaexpress.co.ke/"
  },
  {
    "slug": "medixlearners",
    "title": "Medixlearners",
    "category": "Pharmacy Education",
    "image": "/site-assets/2cc0572cb9885da4.jpg",
    "problem": "Pharmacy students lacked a single, organized platform to access curated high-yield notes, past papers for degree/diploma, and critical regulatory updates.",
    "solution": "Developed a focused, subscription-based \"Pharmacy Hub\" with dedicated, secure sections for study documents, exam papers, and a constantly updated feed of PPB practice guidelines.",
    "liveUrl": "https://medixlearners.co.ke/"
  },
  {
    "slug": "mikotech-signage-branding",
    "title": "Mikotech Signage & Branding",
    "category": "Signage, Branding & Vehicle Wraps",
    "image": "/site-assets/b22b1c183d7fda94.jpg",
    "problem": "A Nairobi signage and branding company needed a professional site to showcase its 3D signage, vehicle branding and corporate gifting work and convert visitors into quote requests, not just walk-in enquiries.",
    "solution": "Built a services-and-shop hybrid site with a Portfolio gallery, an integrated online shop for branded merchandise, a one-click 'Request a Quote' widget, and WhatsApp chat — positioning Mikotech as Kenya's most trusted signage provider.",
    "liveUrl": "https://mikotechsigns.co.ke/"
  },
  {
    "slug": "miles-electro-mech",
    "title": "Miles Electro-Mech",
    "category": "Engineering & Construction Solutions",
    "image": "/site-assets/70b943ade5a0e4af.jpg",
    "problem": "Needed an authoritative site to showcase their extensive portfolio and clearly communicate their 12+ years of engineering excellence to potential industrial clients.",
    "solution": "Delivered a high-trust corporate website that explicitly lists services like Refrigeration, Solar Power, and Mechanical Ventilation, using statistics and client logos to highlight their successful track record.",
    "liveUrl": "https://mileselectromech.co.ke/"
  },
  {
    "slug": "nairobi-tote-bags",
    "title": "Nairobi Tote Bags",
    "category": "Custom Tote Bags & Corporate Branding E-Commerce",
    "image": "/site-assets/1741cb6c037e7b94.jpg",
    "problem": "A Mfangano Street tote bag manufacturer needed to move beyond walk-in and phone orders to a full online catalogue selling ready-made canvas and cotton totes alongside custom-branded corporate merchandise.",
    "solution": "Built an e-commerce storefront organised by bag style (Box Totes, Shoppers, Toiletry Bags, Drawstring Bags), with a dedicated custom-branding pathway for sublimation, DTF, screen printing and embroidery, wishlist and cart, and seasonal discounts of up to 30% to move stock.",
    "liveUrl": "https://nairobitotebags.co.ke/"
  },
  {
    "slug": "numeru-health-care-training-institute",
    "title": "Numeru Health Care Training Institute",
    "category": "Healthcare Vocational Training Institute",
    "image": "/site-assets/0ef910e115b11939.jpg",
    "problem": "A Meru-based healthcare training institute needed an admissions-focused site to explain its Health Assistant, Phlebotomy and Theatre Technician programmes and convert prospective students into enrolled applicants.",
    "solution": "Built an admissions site with clear programme breakdowns, a downloadable fee structure, graduate testimonials from students placed locally and abroad, and clear enrolment calls-to-action — positioning Numeru as a compassionate, career-focused training provider.",
    "liveUrl": "https://numeruinstitute.co.ke/"
  },
  {
    "slug": "nutrawell-africa",
    "title": "Nutrawell Africa Ltd",
    "category": "Health & Wellness E-Commerce",
    "image": "/site-assets/79e70658913589f7.jpg",
    "problem": "A natural wellness and botanical supplement brand needed a pharmacy-grade e-commerce storefront with automated M-Pesa STK checkout and clinical credibility signals.",
    "solution": "Built a Scandinavian health-minimalist online store with localized M-Pesa mobile checkout, product efficacy certifications, and dispatch logistics.",
    "liveUrl": "https://nutrawellafricaltd.co.ke/"
  },
  {
    "slug": "omni-agent-marketplace",
    "title": "Omni Agent Marketplace",
    "category": "AI SaaS & Business Automation",
    "image": "/site-assets/a9d767f4244083bc.jpg",
    "problem": "A Nairobi-based AI automation founder needed a marketplace-style platform to sell 21+ specialist AI agents to real estate agencies and e-commerce stores across Africa, the UAE, UK and US, with proof that responses stay fast and human-reviewed.",
    "solution": "Delivered a premium dark-themed SaaS marketplace with agent/department/mini-app catalogues, a live chat-style demo of the Lead Follow-Up Agent, integration badges (WhatsApp, M-Pesa, Shopify, GoHighLevel, n8n), and a 48-hour audit-to-deploy funnel.",
    "liveUrl": "https://omniagentmarketplace.com/"
  },
  {
    "slug": "oncolink",
    "title": "Oncolink",
    "category": "Oncology Resource Hub",
    "image": "/site-assets/e9c54349cd839dfe.jpg",
    "problem": "The medical field needed a centralized, authoritative resource for oncology information (patient support, clinical trials, professional directories) to replace disparate sources.",
    "solution": "Structured a comprehensive hub, clearly sectioning content for Patients, Professionals, and Community, ensuring the site functions as a trusted one-stop-shop for up-to-date cancer education and support.",
    "liveUrl": "https://oncolink.co.ke/"
  },
  {
    "slug": "onzetrends",
    "title": "Onzetrends",
    "category": "Fashion & Accessories E-commerce",
    "image": "/site-assets/6ea884d7b1c25e98.jpg",
    "problem": "Needed a stylish e-commerce platform to showcase and sell trendy, Kenyan-made bags (handbags, backpacks, laptop bags) with an emphasis on quality and luxury.",
    "solution": "Developed a visually appealing online store with clear product categories, featured deals, and a strong brand message of \"Luxury in Every Stitch\" to compete in the fast-paced Kenyan fashion market.",
    "liveUrl": "https://onzetrends.co.ke/"
  },
  {
    "slug": "opsok",
    "title": "OPSOK",
    "category": "Non-Profit / Healthcare Society",
    "image": "/site-assets/87420d43ce4485aa.jpg",
    "problem": "Needed a platform to unify its growing membership, promote professional development events, and advocate for policy change in Kenyan cancer care.",
    "solution": "Built a functional society portal for networking, events, and resources, enabling member registration, promoting their four dedicated committees, and integrating a donation system.",
    "liveUrl": "https://opsok.org/"
  },
  {
    "slug": "pals-flowers",
    "title": "Pals Flowers",
    "category": "Florist & Gifting E-Commerce",
    "image": "/site-assets/94cd48876982960b.jpg",
    "problem": "A Nairobi florist needed to replace phone-in flower orders with a proper online store capable of same-day delivery promises and occasion-based browsing for birthdays, valentines, weddings and funerals.",
    "solution": "Delivered a flower e-commerce site organised by Occasions and Collections, with Nairobi-wide and same-day delivery messaging, secure M-Pesa checkout, wishlist, and a \"Stay in Bloom\" newsletter signup to drive repeat orders.",
    "liveUrl": "https://palsflowers.co.ke/"
  },
  {
    "slug": "patamaps-directory",
    "title": "PataMaps",
    "category": "Directory & Hyperlocal Platform",
    "image": "/site-assets/112ccb0cd5e9b0ef.jpg",
    "problem": "Families seeking autism, occupational therapy, and neurodevelopmental therapy in East Africa struggled to locate accredited clinics and therapists.",
    "solution": "Developed an inclusive special-needs directory mapping certified therapists and neurodevelopmental centers with geolocation filters and verified reviews.",
    "liveUrl": "https://patamaps.com/"
  },
  {
    "slug": "pharma-thrive-africa",
    "title": "Pharma Thrive Africa",
    "category": "Pharmaceutical & CRO Services",
    "image": "/site-assets/13a4d20e63ce1811.jpg",
    "problem": "A clinical research organization and regulatory consultancy required a high-authority portal to showcase pharmacovigilance and drug safety trials.",
    "solution": "Designed a clinical CRO digital presence communicating compliance with PPB regulatory frameworks and scientific advisory credentials.",
    "liveUrl": "https://pharmathriveafrica.com/"
  },
  {
    "slug": "pharmapos",
    "title": "PharmaPOS",
    "category": "Pharmacy Point-of-Sale SaaS",
    "image": "/site-assets/f4fab71c26f4f400.jpg",
    "problem": "Kenyan pharmacies running retail and wholesale counters needed compliance-ready software — M-Pesa payments, KRA eTIMS invoicing, SHA/NHIF insurance claims and FEFO expiry tracking — built specifically for local pharmacy operations rather than adapted from generic POS software.",
    "solution": "Delivered a pharmacist-built POS SaaS with a public live demo, M-Pesa STK push and card payments, an offline-first PWA mode for spotty connections, cold-chain and FEFO batch tracking, role-based access for six staff types, and built-in 16% VAT and eTIMS compliance.",
    "liveUrl": "https://pharmacypos.co.ke/"
  },
  {
    "slug": "pomper-adventures",
    "title": "Pomper Adventures",
    "category": "Adventure Tour Operator",
    "image": "/site-assets/02e4722f34b94207.jpg",
    "problem": "Needed a global platform to market diverse adventure tours, secure client funds safely, and highlight handpicked experiences beyond the typical tourist offerings.",
    "solution": "Designed an adventure-focused website that emphasizes \"Trust Account Safety\" for secure bookings, features exciting tour packages, and includes a search engine for custom trip planning.",
    "liveUrl": "https://pomperadventures.com/"
  },
  {
    "slug": "purymax-exercise-therapy",
    "title": "Purymax Exercise Therapy",
    "category": "Physical Therapy & Sports Rehab",
    "image": "/site-assets/2149757d70cc1135.jpg",
    "problem": "Needed a patient-centric website to educate visitors on specialized treatments and provide professional bios for their expert Sports Scientists and Physical Therapists.",
    "solution": "Created a trustworthy medical services website with detailed service breakdowns, profiles of the expert team, and a clear call-to-action for immediate appointment booking.",
    "liveUrl": "https://purymaxtherapy.com/"
  },
  {
    "slug": "regal-scope-logistics",
    "title": "Regal Scope Logistics",
    "category": "Freight & Supply Chain",
    "image": "/site-assets/80e6e41c3d53554f.jpg",
    "problem": "Required an authoritative, scalable website to clearly list their diverse services (sea, air, warehousing) and establish credibility for global shipments.",
    "solution": "Designed a corporate-grade website emphasizing \"Versatility, Scalability, Know-How,\" with detailed service pages and an easy-to-use \"Get Quote\" system for lead generation.",
    "liveUrl": "https://regalscopelogistics.com/"
  },
  {
    "slug": "run-it-marketing",
    "title": "Run It Marketing",
    "category": "Digital Marketing & Growth Agency",
    "image": "/site-assets/c7b3ecfce573b7f0.jpg",
    "problem": "A dynamic creative content and growth agency needed an editorial portfolio showcasing brand campaigns and performance marketing ROI.",
    "solution": "Crafted a sleek digital agency showcase with video hero showcases, interactive campaign case studies, and discovery call booking funnels.",
    "liveUrl": "https://runitmarketing.co.ke/"
  },
  {
    "slug": "safety-stitch-ppe",
    "title": "Safety Stitch",
    "category": "PPE & Workwear Manufacturing",
    "image": "/site-assets/8399cb342e548a07.jpg",
    "problem": "An industrial protective gear manufacturer needed an interactive catalog for safety boots, high-vis reflector wear, and custom corporate uniforms.",
    "solution": "Built a specialized industrial workwear catalog featuring product certifications, size matrices, and bulk manufacturing quotation requests.",
    "liveUrl": "https://safetystitch.co.ke/"
  },
  {
    "slug": "sage-beans-export",
    "title": "Sage Beans Export",
    "category": "Agribusiness & Export",
    "image": "/site-assets/967f158da0c4a02d.jpg",
    "problem": "Needed a professional website to attract international buyers and local partners/investors, requiring clear communication on sustainability and quality.",
    "solution": "Developed a clean, professional agribusiness portal that highlights their 1000-acre project, modern farming practices, and uses a visual calculator to illustrate potential returns for partners.",
    "liveUrl": "https://sagebeans.co.ke/"
  },
  {
    "slug": "santorini-queen",
    "title": "Santorini Queen",
    "category": "Luxury Travel & Yacht Charters",
    "image": "/site-assets/608404ef4f941ef8.jpg",
    "problem": "A Santorini-based luxury travel operator needed a site as striking as the Aegean setting itself — one able to sell private yacht tours, catamaran sunsets and premium vehicle rentals to affluent international travellers.",
    "solution": "Designed a cinematic, editorial-style luxury travel site with a full-bleed hero, a curated fleet and tour collection (catamaran cruises, traditional boat tours, jeep rentals), guest testimonials, and an official partner network strip — built to convert high-end travellers browsing exclusive Greek escapes.",
    "liveUrl": "https://santoriniqueen.com/"
  },
  {
    "slug": "secularm-sacco",
    "title": "Secularm SACCO",
    "category": "Fintech & Cooperative Banking",
    "image": "/site-assets/6b0f35535fced04e.jpg",
    "problem": "A staff savings and credit cooperative society needed to digitize membership registration, asset financing loan calculators, and dividend tracking.",
    "solution": "Engineered a modern cooperative banking portal with interactive loan repayment calculators, downloadable forms, and member onboarding.",
    "liveUrl": "https://secularmsacco.co.ke/"
  },
  {
    "slug": "sedhuro",
    "title": "SEDHURO",
    "category": "Community Health & Advocacy",
    "image": "/site-assets/b231034f3d40e9aa.jpg",
    "problem": "The organization needed a clear, professional voice online to communicate their health and human rights advocacy work and attract funding/partners.",
    "solution": "Built an advocacy and information hub that clearly details their mission, projects, and impact stories, providing easy navigation for donors and potential partners.",
    "liveUrl": "https://sedhuro.org/"
  },
  {
    "slug": "shades-kenya",
    "title": "Shades & Fabrication Kenya",
    "category": "Shading, Fabrication & Outdoor Structures",
    "image": "/site-assets/4acc3d00e5300893.jpg",
    "problem": "Nairobi's carshade, canopy and shadesail installers relied on word-of-mouth and phone calls alone, with no digital presence to showcase 500+ completed projects or make it easy for homeowners and businesses to request a quote.",
    "solution": "Built a conversion-focused trade site with a clear services breakdown (carshading, canopies, shadesails, umbrellas, pergolas, shade screening, grills), a recent-projects gallery, trust stats (5+ years, 500+ projects), and one-tap call/WhatsApp quote requests.",
    "liveUrl": "https://shadeskenya.co.ke/"
  },
  {
    "slug": "sherrane-homes",
    "title": "Sherrane Homes",
    "category": "Real Estate Development",
    "image": "/site-assets/358cfcae0865d7f8.jpg",
    "problem": "Needed a platform to market new, modern residential developments to both first-time buyers and investors with high-quality visuals and transparent investment info.",
    "solution": "Developed an image-rich real estate showcase focused on \"Luxury Living,\" featuring project galleries and clear lead capture forms for site visits.",
    "liveUrl": "https://sherranehomes.co.ke/"
  },
  {
    "slug": "siema-majani-advocates",
    "title": "Siema Majani & Associates Advocates",
    "category": "Law Firm & Legal Services",
    "image": "/site-assets/82cdc77399941ea6.jpg",
    "problem": "Needed an elevated online presence to communicate expertise in key areas like Conveyancing, Litigation, and IP, reflecting their experience.",
    "solution": "Built an institutional website focused on practice area clarity, highlighting the firm’s cumulative experience, and providing dedicated contact paths for specific legal inquiries.",
    "liveUrl": "https://smaadvocates.com/"
  },
  {
    "slug": "smart-solutions-realtors",
    "title": "Smart Solutions Realtors",
    "category": "Real Estate Brokerage",
    "image": "/site-assets/c00217d9e01558f0.jpg",
    "problem": "Required a professional-grade listing platform to showcase properties and convey their full range of services from sales to consulting.",
    "solution": "Delivered a clean, intuitive platform for property listings with prominent calls-to-action for buying, selling, and consulting, supported by a strong foundation of transparent client testimonials.",
    "liveUrl": "https://smartsolutionsrealtors.com/"
  },
  {
    "slug": "sourcewall",
    "title": "Sourcewall NL",
    "category": "Sustainable Trade & Supply Chain",
    "image": "/site-assets/f0bf6fe8a62e96b7.png",
    "problem": "A Netherlands-based trade partner needed a sophisticated digital presence to showcase ESG-compliant trade corridors between Europe and East Africa, communicate complex regulatory expertise (HS codes, dual-use controls, customs documentation) and onboard enterprise clients into a transparent cargo visibility platform.",
    "solution": "Delivered a polished corporate site anchored by a six-phase process showcase, country and sector track record, real-time impact stats (12 active corridors, 98% compliance, 6 countries) and a 3-step cargo portal activation flow that converts qualified procurement leads.",
    "liveUrl": "https://sourcewall.nl/"
  },
  {
    "slug": "sparkling-mobile-detailing",
    "title": "Sparkling Mobile Detailing",
    "category": "Automotive & On-Demand Services",
    "image": "/site-assets/069543ee9700b545.jpg",
    "problem": "An on-demand mobile auto spa needed an easy appointment scheduler with transparent tiered vehicle packages and paint correction warranties.",
    "solution": "Delivered an automotive service platform featuring location-based scheduling, clear package tiers, and instant WhatsApp booking integration.",
    "liveUrl": "https://sparklingmobiledetailing.com/"
  },
  {
    "slug": "stalwarts-khs",
    "title": "Stalwarts KHS 2017",
    "category": "Alumni Network & Community Portal",
    "image": "/site-assets/860607bd53c87625.jpg",
    "problem": "The Kakamega High School Class of 2017 needed a dedicated alumni platform to connect 90+ members spread across 35 global locations and 77 different professions — enabling profile creation, classmate discovery, job opportunities, and seamless organisation of events and reunions.",
    "solution": "Built a full-featured alumni network with self-service member registration and profile management, a searchable directory across professions and locations, a jobs board, events and reunions management, and an alumni insights dashboard showing career and geographic distribution — all secured with login and sign-up flows.",
    "liveUrl": "https://stalwarts.co.ke/"
  },
  {
    "slug": "suhad-somalia",
    "title": "SUHAD — Scaling Up Humanitarian Assistance and Development",
    "category": "Humanitarian NGO & Community Development",
    "image": "/site-assets/146657ce936981e6.jpg",
    "problem": "A Somalia-based nonprofit empowering women and children through health, education, water/sanitation and peace-building programmes needed an internationally credible site to reach donors, volunteers and institutional partners.",
    "solution": "Built a mission-led NGO site with a strong narrative hero, quick-links for donating, volunteering and careers, a newsletter signup, and social integration — giving SUHAD a credible digital front door for global partners and funders.",
    "liveUrl": "https://suhadsom.org/"
  },
  {
    "slug": "tenders-access-hub",
    "title": "Tenders Access Hub",
    "category": "Procurement & Tender Intelligence Platform",
    "image": "/site-assets/a9a47e82b9603721.jpg",
    "problem": "Businesses hunting for government and private tenders across 190+ countries needed a single, real-time platform instead of checking dozens of national procurement portals separately.",
    "solution": "Built a live tender-aggregation platform with a real-time feed of 100,000+ live tenders, region and category browsing, funder logos (UN, World Bank, UNICEF, ADB, WHO), account creation, and consultancy/pricing tiers for serious bidders.",
    "liveUrl": "https://tendersaccesshub.com/"
  },
  {
    "slug": "the-city-internet-solutions",
    "title": "The City Internet Solutions",
    "category": "Internet Service Provider (ISP)",
    "image": "/site-assets/b98cf8d8374bf92e.jpg",
    "problem": "Needed a clear, geographically focused website to attract customers in specific suburbs and clearly present their tiered, affordable fiber packages.",
    "solution": "Developed a geographically-targeted website with a prominent \"Check Coverage\" feature, simple package tables, and social proof through customer testimonials from their service areas.",
    "liveUrl": "https://thecityinternetsolutions.co.ke/"
  },
  {
    "slug": "the-jumphouse",
    "title": "The JumpHouse",
    "category": "Kids Party & Event Rentals",
    "image": "/site-assets/e1edc1429c3d77c2.jpg",
    "problem": "A Nairobi bouncy-castle and party rental business needed to replace manual phone bookings with an online system that could sell distinct packages, show real reviews, and confirm bookings within minutes.",
    "solution": "Built a playful party-rental site with six bookable packages (bouncy castles, water slides, mascots, cotton candy), transparent per-event pricing, a 2-minute online booking flow, and a review wall backing its 4.9-star, 500+ parties track record.",
    "liveUrl": "https://jumphouse.co.ke/"
  },
  {
    "slug": "train-in-kenya",
    "title": "Train in Kenya Ventures",
    "category": "Sports Tourism & Elite Training",
    "image": "/site-assets/1351fcfb161f0330.jpg",
    "problem": "An elite sports training venture pairing international athletes with Kenya's world-record runners (Kipchoge, Kosgei, Rudisha, Kipyegon) needed a world-class booking platform to convert global athletes and fitness enthusiasts into paid camp participants across six iconic training destinations in Kenya.",
    "solution": "Built an adventure-tourism-inspired platform featuring athlete and coach profile showcases, tiered training-camp listings with pricing and review scores, integrated programme booking with a cart/checkout, training destination pages (Eldoret, Nairobi, Mombasa, Nyahururu, Rusinga Island, Lorian), international testimonials, and a newsletter to grow a global running community.",
    "liveUrl": "https://traininkenya.co.ke/"
  },
  {
    "slug": "transformation-ark-hub",
    "title": "Transformation Ark Hub",
    "category": "Leadership Coaching & Training",
    "image": "/site-assets/a86a7a571c29588f.jpg",
    "problem": "A Nairobi coaching practice running six distinct programmes (She Sparkles, Rising Stars, Swift Transform, Thrive@Work and more) needed one platform to sell cohort-based courses, publicise conferences, and prove its 500+ leaders coached track record.",
    "solution": "Built a programme-driven coaching site with dedicated pages and pricing per programme, an events/cohort calendar, a photo gallery from live conferences, and stats-led social proof (500+ leaders coached, 98% satisfaction, 50+ companies) to drive enrolments.",
    "liveUrl": "https://transformationarkhub.co.ke/"
  },
  {
    "slug": "uk-roadrunner",
    "title": "UK Roadrunner Limited",
    "category": "Automotive & International Logistics",
    "image": "/site-assets/6b4513191c9e6d64.jpg",
    "problem": "A UK-based luxury car exporter required a high-trust platform with searchable inventory of 200+ premium vehicles (Range Rover, Mercedes, BMW, Audi, Porsche), country-by-country shipping pages for 35+ destinations, a Kenya duty calculator, and end-to-end logistics service pages to win premium import enquiries from East Africa and beyond.",
    "solution": "Delivered a full automotive marketplace with multi-filter inventory search (make, model, price, mileage, year, finance), dynamic per-country shipping pages, an integrated Kenya car duty calculator, vehicle finance flows, RoRo and container shipping service pages, Trustindex review widgets and lead-capture booking forms.",
    "liveUrl": "https://ukroadrunner.co.uk/"
  },
  {
    "slug": "vape-collective-kenya",
    "title": "Vape Collective Kenya",
    "category": "Vape & Lifestyle Retail E-Commerce",
    "image": "/site-assets/387f778cc7a09d5a.jpg",
    "problem": "A Westlands vape retailer needed a full e-commerce storefront to sell its wide catalogue — disposables, pods, cigars, lighters, nicotine pouches and rolling papers — with real-time pricing and cart checkout, not just in-store sales.",
    "solution": "Built an e-commerce storefront with category-based browsing, sale pricing, an account/sign-in system, and a curated 'best sellers' and 600+ flavour catalogue to grow online orders alongside the physical Ambience Mall store.",
    "liveUrl": "https://vapecollectivekenya.com/"
  },
  {
    "slug": "visionaries",
    "title": "Visionaries",
    "category": "Pharmacist SACCO/Financial Hub",
    "image": "/site-assets/10947be46f3d0055.jpg",
    "problem": "Pharmacists needed a dedicated financial community and secure platform to manage savings, access low-interest loans, and participate in collaborative investments.",
    "solution": "Built a member-driven financial portal offering structured savings, loans, and investment services, emphasizing the community aspect, financial literacy, and convenient online member management.",
    "liveUrl": "https://visionaries.co.ke/"
  },
  {
    "slug": "visionary-pharmacists",
    "title": "Visionary Pharmacists",
    "category": "Financial Cooperative (Chama/SACCO)",
    "image": "/site-assets/10947be46f3d0055.jpg",
    "problem": "A pharmacist-led investment group with 20+ members needed a secure digital platform to manage structured savings, process KES 2M+ in low-interest member loans, coordinate financial literacy workshops, run community outreach programs, and give members 24/7 dashboard access to their accounts.",
    "solution": "Delivered a chama management portal with a secure member dashboard, savings and investment tracking, loan application and approval workflows, financial literacy resource library, community outreach reporting, and role-based access control — keeping the entire cooperative organized and transparent from a single platform.",
    "liveUrl": "https://visionaries.co.ke/"
  },
  {
    "slug": "zymera-medical-solutions",
    "title": "Zymera Medical Solutions",
    "category": "Healthcare & Medical Equipment",
    "image": "/site-assets/5c14214cde1ef916.jpg",
    "problem": "A turnkey hospital engineering and equipment provider needed an authoritative B2B catalog organizing 12 specialized clinical divisions.",
    "solution": "Engineered an ISO-compliant healthcare equipment portal with detailed technical specifications and direct institutional quotation workflows.",
    "liveUrl": "https://zymeramed.com/"
  }
];

export function findProject(slug: string) {
  return PORTFOLIO_PROJECTS.find(project => project.slug === slug);
}
