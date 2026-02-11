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

export const metrics = [
  { value: "$1.2B+", label: "Assets Under Management" },
  { value: "5,000+", label: "Residential Units" },
  { value: "36", label: "Portfolio Companies" },
  { value: "4", label: "Countries" },
  { value: "200+", label: "Employees Across the Group" },
  { value: "14", label: "Markets Worldwide" },
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

export interface LeadershipMember {
  name: string;
  title: string;
  role: "executive" | "board";
  bio: string;
  initials: string;
  photo?: string;
}

export const leadership: LeadershipMember[] = [
  {
    name: "Alexander Reinhardt",
    title: "Managing Director - Asset Manager",
    role: "executive",
    bio: "Managing Director at Perkway Group with over 15 years of experience in real estate investment, asset management, and corporate strategy. Oversees portfolio performance, capital improvements, and value creation across the group's real estate holdings. Previously held senior positions at leading global real estate firms.",
    initials: "AR",
    photo: "/team/alexander-reinhardt.png",
  },
  {
    name: "Catherine Morel",
    title: "Chief Financial Officer",
    role: "executive",
    bio: "Oversees all financial operations, capital markets activity, and investor relations for the group. Brings deep expertise in real estate finance, structured transactions, and institutional fund management from prior roles at major investment banks and alternative asset managers.",
    initials: "CM",
    photo: "/team/catherine-morel.png",
  },
  {
    name: "David Chen",
    title: "Chief Operating Officer",
    role: "executive",
    bio: "Responsible for the day-to-day operations of Perkway's portfolio companies and operating platforms. Leads the integration of technology and operational best practices across all business segments. Background in hospitality operations and PropTech at scale.",
    initials: "DC",
    photo: "/team/david-chen.png",
  },
  {
    name: "Sarah Whitfield",
    title: "Chief Investment Officer",
    role: "executive",
    bio: "Leads all investment activity including acquisitions, dispositions, and capital deployment strategy. Brings institutional investment expertise from a career spanning private equity real estate, sovereign wealth fund advisory, and cross-border transaction structuring.",
    initials: "SW",
    photo: "/team/sarah-whitfield.png",
  },
  {
    name: "Nancy Wisner",
    title: "Board Member",
    role: "board",
    bio: "Independent board member with extensive experience in corporate governance, institutional real estate, and strategic advisory. Provides oversight on risk management, compliance, and long-term strategic direction.",
    initials: "NW",
    photo: "https://www.perkways.com/wp-content/uploads/2021/02/1.png",
  },
  {
    name: "Ariel Rosenberg",
    title: "Board Member",
    role: "board",
    bio: "Board member with a distinguished career in private equity, capital markets, and corporate finance. Advises on capital structure, M&A strategy, and institutional partnerships.",
    initials: "ARo",
    photo: "https://www.perkways.com/wp-content/uploads/2021/02/2.png",
  },
  {
    name: "Terry Leppla",
    title: "Board Member",
    role: "board",
    bio: "Board member bringing decades of experience in real estate development, construction, and urban planning. Provides strategic guidance on development pipeline, construction oversight, and regulatory affairs.",
    initials: "TL",
    photo: "https://www.perkways.com/wp-content/uploads/2021/02/3.png",
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
  date: string;
}

export const insights: InsightItem[] = [
  {
    id: "1",
    title: "The Future of Urban Housing: Why Institutional Capital Is Reshaping Residential Real Estate",
    excerpt:
      "An analysis of macro trends driving institutional investment into residential assets, and how Perkway Group is positioning its portfolio to capture long-term demographic tailwinds.",
    category: "Market Outlook",
    date: "January 2026",
  },
  {
    id: "2",
    title: "Adaptive Reuse as an Investment Thesis: Unlocking Value in Underutilized Urban Assets",
    excerpt:
      "How Perkway's development arm is converting aging commercial and heritage buildings into high-performing residential communities, generating superior risk-adjusted returns.",
    category: "Investment Strategy",
    date: "December 2025",
  },
  {
    id: "3",
    title: "Technology-Enabled Operations: Building the Infrastructure for Scalable Property Management",
    excerpt:
      "A look inside Perkway's proprietary technology stack and how AI-driven systems are transforming leasing velocity, maintenance efficiency, and resident satisfaction at scale.",
    category: "Technology",
    date: "November 2025",
  },
  {
    id: "4",
    title: "Perkway Group Announces Expansion into European Markets",
    excerpt:
      "The Group has established a representative office in London as part of its strategic expansion into key European markets, targeting co-living and purpose-built rental opportunities.",
    category: "Press Release",
    date: "October 2025",
  },
];

export const navigationItems = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Leadership", href: "/leadership" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];
