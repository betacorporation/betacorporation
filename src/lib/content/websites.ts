// Website packages listed on /websites. Prices are starting prices in KES.
export type WebsitePackage = { name: string; price: number; group: WebsiteGroup };
export const WEBSITE_GROUPS = ["Business & Corporate", "Online Stores", "Professional Services", "Hospitality & Travel", "Education & Community", "Personal & Creative"] as const;
export type WebsiteGroup = (typeof WEBSITE_GROUPS)[number];

const raw: [WebsiteGroup, string, number][] = [
  ["Business & Corporate", "Startup Business Website", 45000],
  ["Business & Corporate", "Small Business Professional Site", 50000],
  ["Business & Corporate", "Corporate Company Profile Website", 75000],
  ["Business & Corporate", "NGO & Non-Profit Website", 60000],
  ["Business & Corporate", "Construction Company Portfolio Site", 65000],
  ["Business & Corporate", "Security Company Website", 55000],
  ["Business & Corporate", "Manufacturing Company Website", 80000],
  ["Business & Corporate", "Investment Firm Website", 85000],
  ["Business & Corporate", "Logistics & Transport Website", 70000],
  ["Business & Corporate", "Sacco & Microfinance Website", 90000],
  ["Business & Corporate", "Real Estate Agency Website", 80000],
  ["Online Stores", "Online Boutique & Fashion Store", 85000],
  ["Online Stores", "Electronics Shop eCommerce Site", 95000],
  ["Online Stores", "Cosmetics & Beauty Products Store", 80000],
  ["Online Stores", "Online Bookstore with M-Pesa", 90000],
  ["Online Stores", "Furniture & Decor eCommerce Website", 120000],
  ["Online Stores", "Online Grocery & Supermarket Store", 150000],
  ["Online Stores", "Digital Products & Courses Store", 85000],
  ["Online Stores", "Dropshipping Store Website", 100000],
  ["Online Stores", "Single Product Showcase Website", 65000],
  ["Online Stores", "Farm & Agro-products eCommerce Site", 95000],
  ["Online Stores", "Pharmacy Website with eCommerce", 60000],
  ["Professional Services", "Law Firm & Advocates Website", 75000],
  ["Professional Services", "Medical Clinic & Doctor's Website", 65000],
  ["Professional Services", "Dentist Practice Website", 60000],
  ["Professional Services", "Architect & Interior Designer Portfolio", 55000],
  ["Professional Services", "Accountant & Audit Firm Website", 70000],
  ["Professional Services", "Consultant's Professional Website", 45000],
  ["Professional Services", "Engineering Firm Website", 75000],
  ["Professional Services", "Marketing Agency Website", 65000],
  ["Professional Services", "Gym & Fitness Center Website", 55000],
  ["Hospitality & Travel", "Hotel & Lodge Website with Booking", 120000],
  ["Hospitality & Travel", "Tour & Travel Company Website", 85000],
  ["Hospitality & Travel", "Restaurant & Cafe Website with Menu", 55000],
  ["Hospitality & Travel", "Airbnb & Vacation Rental Site", 50000],
  ["Hospitality & Travel", "Event & Conference Website with Ticketing", 70000],
  ["Hospitality & Travel", "Car Rental Service Website", 80000],
  ["Hospitality & Travel", "Guesthouse & B&B Website", 40000],
  ["Education & Community", "Primary or Secondary School Website", 75000],
  ["Education & Community", "College or Training Institute Website", 90000],
  ["Education & Community", "Kindergarten & Daycare Website", 45000],
  ["Education & Community", "Church & Religious Organization Website", 55000],
  ["Education & Community", "Community Hub or Association Website", 60000],
  ["Education & Community", "Driving School Website", 50000],
  ["Education & Community", "Online Learning Platform (Basic)", 100000],
  ["Personal & Creative", "Personal Portfolio for Professionals", 35000],
  ["Personal & Creative", "Personal Blog or Vlogger Website", 30000],
  ["Personal & Creative", "Musician or Artist EPK Website", 40000],
  ["Personal & Creative", "Photographer's Portfolio Website", 45000],
  ["Personal & Creative", "Wedding Invitation Website", 25000],
];

export const WEBSITE_PACKAGES: WebsitePackage[] = raw.map(([group, name, price]) => ({ group, name, price }));

export const PACKAGE_INCLUDES = ["Mobile-friendly custom design", "Free SSL & speed setup", "WhatsApp & call buttons", "Basic SEO & Google setup"];

export function formatKes(amount: number) {
  return `KES ${amount.toLocaleString("en-KE")}`;
}
