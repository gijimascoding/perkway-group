export const company = {
  name: "Perkway Group",
  legalName: "Perkway Capital Group",
  tagline: "Building Enduring Value Across Industries",
  description:
    "Perkway Group is a diversified holding company with principal investments spanning real estate, hospitality, technology, and financial services. We acquire, develop, and operate businesses that shape the built environment and the communities within it.",
  email: "info@perkways.com",
  investorEmail: "investors@perkways.com",
  phone: "+44 (0) 20 7946 0958",
  address: {
    street: "100 Bishopsgate, Level 24",
    city: "London",
    province: "EC2N 4AG",
    postal: "EC2N 4AG",
    country: "United Kingdom",
  },
  social: {
    linkedin: "https://linkedin.com/company/perkway",
    twitter: "https://twitter.com/perkwaygroup",
  },
};

/**
 * Every figure quoted anywhere on the site resolves to this object, and every
 * stat block prints `figuresAsOf` beneath it. Institutional readers check the
 * as-of date before they read the number; a figure without one reads as
 * decorative. Two hardcoded stat arrays previously let the same metric appear
 * as both "$1.2B+" and "$1.1B+" on one page.
 */
export const figuresAsOf = "June 30, 2026";

export const figures = {
  aum: "$1.2B+",
  units: "5,000+",
  companies: "36",
  countries: "4",
  employees: "200+",
  markets: "14",
  founded: "2018",
} as const;

export const metrics = [
  { value: figures.aum, label: "Assets Under Management" },
  { value: figures.units, label: "Residential Units" },
  { value: figures.companies, label: "Portfolio Companies" },
  { value: figures.countries, label: "Countries" },
  { value: figures.employees, label: "Employees Across the Group" },
  { value: figures.markets, label: "Markets Worldwide" },
];

export const aboutMetrics = [
  { value: figures.founded, label: "Year Founded" },
  { value: figures.aum, label: "Assets Under Management" },
  { value: figures.companies, label: "Portfolio Companies" },
  { value: figures.countries, label: "Countries of Operation" },
];

export interface BusinessSegment {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: string;
}

export const businessSegments: BusinessSegment[] = [
  {
    id: "real-estate",
    title: "Real Estate Investments",
    subtitle: "Core Portfolio",
    description:
      "Strategic acquisition, development, and management of residential and mixed-use assets across North American and European markets. Our portfolio includes multifamily housing, purpose-built rentals, and value-add repositioning opportunities.",
    highlights: [
      "5,000+ residential units under ownership or management",
      "Multifamily, mixed-use, and purpose-built rental assets",
      "Value-add repositioning and ground-up development",
      "Active in 14 metropolitan markets",
    ],
    icon: "building",
  },
  {
    id: "hospitality",
    title: "Hospitality & Hybrid Living",
    subtitle: "Operating Platform",
    description:
      "Developing and operating next-generation hospitality concepts that blend hotel-caliber service with residential flexibility. From branded co-living residences to furnished extended-stay suites, we serve a global tenant base across key urban markets.",
    highlights: [
      "Branded co-living and furnished residences",
      "Extended-stay and hybrid hospitality models",
      "Serving 80+ nationalities across 4 countries",
      "Full-stack operating platform with proprietary technology",
    ],
    icon: "hotel",
  },
  {
    id: "proptech",
    title: "Technology & Innovation",
    subtitle: "PropTech & AI",
    description:
      "Investing in and developing proprietary technology platforms that power real estate operations, enhance resident experiences, and drive data-informed decision-making across the group and for third-party clients.",
    highlights: [
      "AI-powered leasing and property management systems",
      "Resident experience and community platforms",
      "Data analytics and portfolio intelligence tools",
      "Marketplace and demand aggregation technology",
    ],
    icon: "chip",
  },
  {
    id: "property-management",
    title: "Property Management",
    subtitle: "Operational Excellence",
    description:
      "Institutional-grade property management services for owned and third-party portfolios. We deliver superior operating performance through standardized systems, technology integration, and a resident-first operational philosophy.",
    highlights: [
      "Full-service residential property management",
      "Compliance, maintenance, and tenant relations",
      "Revenue optimization and cost control",
      "Scalable platform across diverse asset types",
    ],
    icon: "management",
  },
  {
    id: "development",
    title: "Development & Construction",
    subtitle: "Capital Deployment",
    description:
      "End-to-end real estate development capabilities from site acquisition and entitlement through construction management and lease-up. We specialize in adaptive reuse, urban infill, and purpose-built rental communities.",
    highlights: [
      "Ground-up development and adaptive reuse",
      "Construction management and general contracting",
      "Urban infill and mixed-use projects",
      "Sustainable building and LEED-aligned design",
    ],
    icon: "crane",
  },
  {
    id: "asset-management",
    title: "Asset Management",
    subtitle: "Value Creation",
    description:
      "Disciplined asset management strategies focused on long-term value creation through capital improvements, operational optimization, and strategic repositioning. We manage assets on behalf of the group and institutional co-investment partners.",
    highlights: [
      "Portfolio strategy and capital allocation",
      "Yield optimization and NOI growth programs",
      "Institutional co-investment partnerships",
      "Risk management and compliance oversight",
    ],
    icon: "chart",
  },
  {
    id: "lending",
    title: "Real Estate Lending",
    subtitle: "Credit & Structured Finance",
    description:
      "Providing structured financing solutions to qualified real estate operators and developers. Our lending platform offers bridge loans, mezzanine financing, and preferred equity across select asset classes and markets.",
    highlights: [
      "Bridge and transitional lending",
      "Mezzanine financing and preferred equity",
      "Construction and renovation financing",
      "Structured credit solutions for institutional sponsors",
    ],
    icon: "dollar",
  },
  {
    id: "advisory",
    title: "Advisory & Consulting",
    subtitle: "Strategic Services",
    description:
      "Providing strategic advisory services to real estate owners, operators, and investors seeking to optimize portfolio performance, enter new markets, or implement technology-driven operational improvements.",
    highlights: [
      "Market entry and expansion strategy",
      "Operational and technology consulting",
      "Capital markets and transaction advisory",
      "ESG and sustainability consulting",
    ],
    icon: "handshake",
  },
];

export interface GlobalOffice {
  city: string;
  country: string;
  type: "headquarters" | "regional" | "representative";
}

export const globalPresence: GlobalOffice[] = [
  { city: "London", country: "UK", type: "headquarters" },
  { city: "Toronto", country: "Canada", type: "regional" },
  { city: "New York", country: "United States", type: "regional" },
];

export const operatingMarkets = [
  "Montréal",
  "Toronto",
  "Ottawa",
  "Vancouver",
  "Calgary",
  "Halifax",
  "New York",
  "Boston",
  "Washington, D.C.",
  "Chicago",
  "Seattle",
  "London",
  "Miami",
  "Austin",
];

export const expansionMarkets: string[] = [];

export interface InsightItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  /**
   * Month + year today. Institutional publishers date to the day
   * ("July 30, 2026") — a month-only stamp reads as undated filler. Set an
   * exact publication date here once each piece has one.
   */
  date: string;
  image: string;
}

export const insights: InsightItem[] = [
  {
    id: "1",
    title: "The Future of Urban Housing: Why Institutional Capital Is Reshaping Residential Real Estate",
    excerpt:
      "An analysis of macro trends driving institutional investment into residential assets, and how Perkway Group is positioning its portfolio to capture long-term demographic tailwinds.",
    category: "Market Outlook",
    date: "January 2026",
    image: "/images/residential.jpg",
  },
  {
    id: "2",
    title: "Adaptive Reuse as an Investment Thesis: Unlocking Value in Underutilized Urban Assets",
    excerpt:
      "How Perkway's development arm is converting aging commercial and heritage buildings into high-performing residential communities, generating superior risk-adjusted returns.",
    category: "Investment Strategy",
    date: "December 2025",
    image: "/images/architecture.jpg",
  },
  {
    id: "3",
    title: "Technology-Enabled Operations: Building the Infrastructure for Scalable Property Management",
    excerpt:
      "A look inside Perkway's proprietary technology stack and how AI-driven systems are transforming leasing velocity, maintenance efficiency, and resident satisfaction at scale.",
    category: "Technology",
    date: "November 2025",
    image: "/images/interior.jpg",
  },
  {
    id: "4",
    title: "Perkway Group Announces Expansion into European Markets",
    excerpt:
      "The Group has established a representative office in London as part of its strategic expansion into key European markets, targeting co-living and purpose-built rental opportunities.",
    category: "Press Release",
    date: "October 2025",
    image: "/images/london.jpg",
  },
];

export const navigationItems = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];
