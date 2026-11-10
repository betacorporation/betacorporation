import type { LucideIcon } from "lucide-react";
import { BarChart3, Bell, Boxes, CalendarCheck, Clock, Cloud, CreditCard, FileSignature, FileText, Globe, GraduationCap, HardDrive, KanbanSquare, Lock, Mail, PiggyBank, Receipt, Server, ShieldCheck, Smartphone, UserCheck, Users, Vote, Wallet, Workflow, Zap } from "lucide-react";

// Software products shown on /products and their own pages.
export type Product = {
  path: string; name: string; tagline: string; title: string; intro: string; icon: LucideIcon; demoMessage: string;
  features: { title: string; text: string; icon: LucideIcon }[]; steps: { title: string; text: string }[]; audience: string[];
  faqs: { q: string; a: string }[];
};

export const PRODUCTS: Product[] = [
  {
    path: "/chamabox", name: "Beta Chama", icon: PiggyBank, tagline: "Chama & investment group management",
    title: "Run Your Chama Smarter with Beta Chama",
    intro: "One place to manage contributions, loans, meetings, votes and financial reports — so your group spends less time on admin and more time growing wealth.",
    demoMessage: "Hello Beta Corporation, I'd like a demo of Beta Chama for our group.",
    features: [
      { icon: Users, title: "Member management", text: "Digital member profiles with roles for chairperson, treasurer and secretary." },
      { icon: Wallet, title: "Contribution tracking", text: "Record contributions, flag late payments and reconcile M-Pesa payments." },
      { icon: CreditCard, title: "Loan management", text: "Loan applications, interest, repayment schedules and live balances." },
      { icon: BarChart3, title: "Financial reports", text: "Statements and summaries ready for monthly meetings and AGMs." },
      { icon: Bell, title: "Automatic reminders", text: "SMS and email nudges for contributions, loans and meetings." },
      { icon: Vote, title: "Meetings & voting", text: "Agendas, minutes and transparent digital votes on decisions." },
      { icon: ShieldCheck, title: "Secure by design", text: "Encrypted data, audit logs and regular backups." },
      { icon: Smartphone, title: "Made for phones", text: "Members check balances and apply for loans from any phone." },
    ],
    steps: [
      { title: "Set up your group", text: "We register your chama, contribution schedule and officials." },
      { title: "Invite members", text: "Members join by SMS or WhatsApp link and see their own records." },
      { title: "Track & report", text: "Record contributions, approve loans and print statements in one click." },
    ],
    audience: ["Chamas and investment clubs", "Welfare groups", "Table banking groups", "Family and alumni groups"],
    faqs: [
      { q: "Can members pay by M-Pesa?", a: "Yes. Contributions and loan repayments can be matched to M-Pesa payments." },
      { q: "Is our data private?", a: "Each group's records are separate and only visible to its members and officials." },
      { q: "How much does it cost?", a: "Pricing depends on group size and features. Message us for a quote and a free demo." },
    ],
  },
  {
    path: "/elitehost", name: "Beta Hosting", icon: Server, tagline: "Domains, web hosting & business email",
    title: "Fast, Reliable Web Hosting with Beta Hosting",
    intro: "Fast SSD hosting, free SSL, local support and Kenya-friendly domain pricing — with our team handling the technical setup for you.",
    demoMessage: "Hello Beta Corporation, I'd like to register a domain / get hosting.",
    features: [
      { icon: Globe, title: "Domain registration", text: ".co.ke, .ke, .com, .org and many more extensions." },
      { icon: HardDrive, title: "SSD web hosting", text: "Fast servers for quick-loading websites." },
      { icon: Lock, title: "Free SSL", text: "The padlock that keeps visitors safe and builds trust." },
      { icon: Mail, title: "Business email", text: "Professional addresses like you@yourbusiness.co.ke." },
      { icon: Cloud, title: "Daily backups", text: "Your website and email are backed up automatically." },
      { icon: Zap, title: "Done-for-you setup", text: "We connect your domain, website and email for you." },
    ],
    steps: [
      { title: "Choose your domain", text: "Tell us the name you want and we'll check availability." },
      { title: "Pick a plan", text: "We recommend hosting that fits your website and traffic." },
      { title: "Go live", text: "We set everything up and hand over your logins." },
    ],
    audience: ["New businesses getting online", "Websites moving from a slow host", "Teams needing branded email"],
    faqs: [
      { q: "Can you move my existing website?", a: "Yes. We migrate your website and email with minimal downtime." },
      { q: "Do you register .co.ke domains?", a: "Yes, along with .ke, .com, .org, .africa and many others." },
      { q: "What if something goes wrong?", a: "Message us on WhatsApp and our team will help you directly." },
    ],
  },
  {
    path: "/hr-system", name: "Beta HRIS", icon: UserCheck, tagline: "Complete HR management system",
    title: "The HR System Your Organisation Actually Runs On",
    intro: "A secure, integrated HR system covering everything from recruitment to exit — staff records, leave, attendance, payroll handover, performance and training.",
    demoMessage: "Hello Beta Corporation, I'd like a demo of Beta HRIS for our organisation.",
    features: [
      { icon: Users, title: "Employee records", text: "One master record per staff member with documents and alerts." },
      { icon: Workflow, title: "Recruitment", text: "Job posts, applications, shortlisting and interview scoring." },
      { icon: CalendarCheck, title: "Leave & absence", text: "Leave types, balances, approvals and an absence calendar." },
      { icon: Clock, title: "Time & attendance", text: "Biometric integration, imports and self-service clocking." },
      { icon: Receipt, title: "Payroll handover", text: "Period data assembled from salary, attendance and leave." },
      { icon: BarChart3, title: "Performance", text: "KPI agreements, reviews and development plans." },
      { icon: GraduationCap, title: "Training", text: "Training needs, plans, sessions and history." },
      { icon: FileSignature, title: "Documents & e-signature", text: "Version-controlled files and secure electronic signing." },
    ],
    steps: [
      { title: "Discovery", text: "We map your HR policies, approvals and structure." },
      { title: "Configure", text: "We set up modules, roles and workflows for your organisation." },
      { title: "Train & launch", text: "Your HR team and staff are trained and go live with support." },
    ],
    audience: ["Companies with 20+ staff", "NGOs and institutions", "Schools and hospitals", "Organisations with multiple branches"],
    faqs: [
      { q: "Can it be branded as our own?", a: "Yes. The system can carry your organisation's name and branding." },
      { q: "Does it connect to our payroll?", a: "It prepares payroll data for export to your finance or payroll system." },
      { q: "Can staff use it on their phones?", a: "Yes. Staff self-service works on any phone or computer." },
    ],
  },
  {
    path: "/frostwoodcrm", name: "Beta CRM", icon: KanbanSquare, tagline: "CRM, invoicing & M-Pesa payments",
    title: "Run Your Business and Get Paid Faster with Beta CRM",
    intro: "Customers, sales pipeline, invoicing, M-Pesa payments, projects and reports together in one simple platform — one source of truth instead of scattered spreadsheets.",
    demoMessage: "Hello Beta Corporation, I'd like a demo of Beta CRM.",
    features: [
      { icon: KanbanSquare, title: "Sales pipeline", text: "Drag-and-drop deals with a full activity timeline per contact." },
      { icon: FileText, title: "Invoices & quotes", text: "Branded, tax-ready invoices and quotes in under a minute." },
      { icon: Smartphone, title: "M-Pesa payments", text: "Customers pay by STK push and receipts are issued automatically." },
      { icon: Boxes, title: "Projects", text: "Link milestones to invoices and keep projects on budget." },
      { icon: Globe, title: "Client portal", text: "Clients view proposals, approve and pay online." },
      { icon: BarChart3, title: "Business reports", text: "Revenue, unpaid invoices and sales trends at a glance." },
      { icon: Bell, title: "Automation", text: "Automatic payment reminders and follow-ups." },
      { icon: ShieldCheck, title: "Security", text: "Encryption and role-based access for your team." },
    ],
    steps: [
      { title: "Import customers", text: "Bring in your contacts and open deals." },
      { title: "Set up billing", text: "Add your branding, taxes and M-Pesa details." },
      { title: "Sell & get paid", text: "Send quotes, invoice and collect payments in one place." },
    ],
    audience: ["Agencies and consultants", "Contractors", "Training centres", "Wholesalers and growing SMEs"],
    faqs: [
      { q: "Is there a free trial?", a: "Message us for a guided demo and trial setup for your business." },
      { q: "Does it work with KRA requirements?", a: "Invoices include your tax details and VAT, and we can advise on compliance setup." },
      { q: "Can my whole team use it?", a: "Yes, with separate logins and permissions for each team member." },
    ],
  },
];

export function findProduct(path: string) {
  return PRODUCTS.find(product => product.path === path)!;
}
