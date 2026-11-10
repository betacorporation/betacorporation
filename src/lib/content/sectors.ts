import type { LucideIcon } from "lucide-react";
import { Briefcase, Building2, Church, Dumbbell, GraduationCap, HandHeart, Factory, HeartPulse, Hotel, Landmark, PartyPopper, Rocket, Scale, Scissors, ShoppingBag, Sprout, Truck, UtensilsCrossed } from "lucide-react";

// Business types shown on /solutions and /industries.
export type Sector = { name: string; icon: LucideIcon; solution: string; needs: string[] };

export const SECTORS: Sector[] = [
  { name: "Hotels & Hospitality", icon: Hotel, solution: "Drive direct bookings with a stunning website featuring online reservations, galleries and guest reviews.", needs: ["Booking engine", "Photo galleries", "Google Maps & reviews"] },
  { name: "Real Estate", icon: Building2, solution: "Sell and let more properties with searchable listings, virtual tours and instant lead capture.", needs: ["Property listings", "Enquiry forms", "WhatsApp leads"] },
  { name: "Restaurants & Cafes", icon: UtensilsCrossed, solution: "Get more diners with digital menus, online ordering and table reservations.", needs: ["Digital menu", "Online orders", "Reservations"] },
  { name: "Schools & Education", icon: GraduationCap, solution: "Boost enrolment with online admissions, parent portals and news updates.", needs: ["Online admissions", "Events calendar", "Parent portal"] },
  { name: "Clinics & Healthcare", icon: HeartPulse, solution: "Attract more patients with appointment booking, doctor profiles and patient resources.", needs: ["Appointment booking", "Doctor profiles", "Service pages"] },
  { name: "Law Firms & Legal", icon: Scale, solution: "Build authority with practice-area pages, attorney profiles and secure client intake.", needs: ["Practice areas", "Team profiles", "Consultation forms"] },
  { name: "eCommerce & Retail", icon: ShoppingBag, solution: "Sell online with M-Pesa checkout, product management and fast, mobile-friendly stores.", needs: ["M-Pesa checkout", "Stock management", "Delivery options"] },
  { name: "Churches & Ministries", icon: Church, solution: "Connect your congregation with sermon archives, events and online giving.", needs: ["Sermon archive", "Events", "Online giving"] },
  { name: "NGOs & Non-Profits", icon: HandHeart, solution: "Amplify your impact with project showcases, donor updates and online donations.", needs: ["Impact stories", "Donations", "Reports & downloads"] },
  { name: "Startups & Tech", icon: Rocket, solution: "Launch and scale with a conversion-focused site that attracts users, investors and partners.", needs: ["Landing pages", "Product demos", "Sign-up flows"] },
  { name: "Manufacturing & Industrial", icon: Factory, solution: "Win bigger contracts with product catalogues, certifications and quote requests.", needs: ["Product catalogue", "Certifications", "Quote requests"] },
  { name: "Salons & Spas", icon: Scissors, solution: "Book more clients with online appointments, service menus and before-and-after galleries.", needs: ["Online booking", "Service menu", "Galleries"] },
  { name: "Logistics & Transport", icon: Truck, solution: "Build client trust with fleet showcases, tracking pages and online quotes.", needs: ["Quote requests", "Tracking", "Fleet showcase"] },
  { name: "Agriculture & Agribusiness", icon: Sprout, solution: "Reach new buyers with product catalogues, export information and enquiry systems.", needs: ["Product catalogue", "Buyer enquiries", "Export info"] },
  { name: "Gyms & Fitness", icon: Dumbbell, solution: "Grow memberships with class schedules, trainer profiles and online registration.", needs: ["Class timetable", "Memberships", "Trainer profiles"] },
  { name: "Finance & Saccos", icon: Landmark, solution: "Earn member trust with product pages, loan calculators and secure member portals.", needs: ["Loan calculators", "Member portal", "Downloads"] },
  { name: "Events & Entertainment", icon: PartyPopper, solution: "Sell more tickets with event pages, portfolios and sponsor showcases.", needs: ["Ticketing", "Event pages", "Media galleries"] },
  { name: "Consultants & Professionals", icon: Briefcase, solution: "Attract premium clients with a polished site that showcases your expertise.", needs: ["Service pages", "Case studies", "Booking calls"] },
];
