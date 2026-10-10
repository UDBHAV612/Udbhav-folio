// Source: Udbhav_Chabbra_Resume.pdf. Null URLs are intentionally not rendered.
export const portfolio = {
  name: "Udbhav Chabbra",
  initials: "UC",
  location: "Hyderabad, India",
  email: "udbhavchabbra.uc@gmail.com",
  phone: "+91 9949030000",
  headline: {
    lead: "Building intelligent software for",
    highlight: "real-world problems.",
  },
  intro:
    "Final-year Computer Science & Data Science student at MGIT. Exploring the intersection of applied AI, full-stack engineering, and thoughtful products.",
  about:
    "I like building software around the way people actually work. That means connecting orders and ingredients in BakeFlow AI, routing complaints with machine learning, and making personal finances easier to track. I’m drawn to applied AI and full-stack development because they let me take an idea from a useful model or backend service to a product someone can use.",
  aboutLead:
    "I’m interested in what happens when an idea becomes a useful product.",
  currentFocus: "Applied AI · Full-stack development · Product engineering",
  heroTagline: "AI-minded. Product-focused.",
  resume: "/Udbhav_Chabbra_Resume.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/udbhav-chabbra-b3bb812b8",
    github: "https://github.com/UDBHAV612" as string | null,
  }, // GitHub profile supplied by Udbhav; LinkedIn and email verified in resume.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || null, // TODO: set your deployed origin.
  experience: [
    {
      organization: "HCLTech",
      role: "Project Intern",
      duration: "Oct 2025 — Jan 2026",
      location: "Virtual",
      description: "AI-powered physical & mental health monitoring",
      contributions: [
        "Contributed to a health monitoring application using machine learning, Generative AI, and agent-based workflows.",
        "Developed backend AI modules for mood analysis, wellness recommendations, anomaly detection, and automated weekly health summaries.",
        "Supported API integration, debugging, testing, technical documentation, and collaborative feature development.",
      ],
      technologies: ["Python", "FastAPI", "Machine Learning", "Generative AI"],
    },
  ],
  education: [
    {
      institution: "Mahatma Gandhi Institute of Technology (MGIT)",
      degree: "B.Tech · Computer Science and Data Science",
      period: "2023 — 2027",
      result: "8.77 CGPA",
    },
  ],
  // Edit the category labels and item arrays here; the skills grid follows automatically.
  skills: [
    {
      category: "Programming languages",
      items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C"],
    },
    {
      category: "Frontend development",
      items: ["Next.js", "React", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      category: "Backend development",
      items: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
    },
    {
      category: "AI & machine learning",
      items: [
        "Machine Learning",
        "Generative AI",
        "LLMs",
        "Scikit-learn",
        "Data Analysis",
      ],
    },
    {
      category: "Databases & ORM",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Drizzle ORM"],
    },
    {
      category: "Tools & platforms",
      items: ["Git", "GitHub", "Docker", "Postman", "VS Code"],
    },
  ],
  concepts: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "DBMS",
    "API Integration",
    "Debugging & Testing",
  ],
  certifications: [
    {
      title:
        "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle University",
      detail: "Oct 2025",
    },
    {
      title: "The Complete Python Bootcamp: From Zero to Hero in Python",
      issuer: "Udemy",
      detail: "22.5 hours",
    },
  ],
};
export type ProjectScreenshot = {
  // Real application captures only; paths are relative to public/.
  src: `/images/${string}` | `/screenshots/${string}`;
  alt: string;
  caption: string;
  width: number;
  height: number;
};
export type TechnicalDecision = { title: string; detail: string };
export type Project = {
  slug: string;
  name: string;
  category: string;
  status: "Built" | "In development";
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  architecture: string[];
  decisions: TechnicalDecision[];
  challenges: string[];
  lessons: string[];
  screenshots: ProjectScreenshot[];
  github: string | null;
  demo: string | null;
  visual: string;
};
export const projects: Project[] = [
  {
    slug: "bakeflow-ai",
    name: "BakeFlow AI",
    category: "Full-stack · AI integration",
    status: "In development",
    summary:
      "Connecting bakery orders, recipes, and inventory in one practical operations platform.",
    problem:
      "Bakery operations involve connected workflows: orders, recipes, ingredients, production planning, purchasing, and customer history.",
    solution:
      "Building a full-stack SaaS-style platform that connects these workflows with business insights and business-aware AI assistance.",
    features: [
      "Order-based inventory reservation",
      "Automatic ingredient consumption and stock movements",
      "Recipe snapshots",
      "Business-aware AI assistance",
      "Orders, production planning, purchasing, and customer history",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "REST APIs"],
    architecture: [
      "Next.js + TypeScript application",
      "REST APIs",
      "Prisma data access",
      "PostgreSQL database",
    ],
    github: null,
    demo: null,
    visual: "bakery",
    decisions: [
      {
        title: "Order-based inventory reservation",
        detail:
          "Implemented inventory reservation against orders, alongside automatic ingredient consumption and stock movements.",
      },
      {
        title: "Recipe snapshots",
        detail:
          "Implemented recipe snapshots within the bakery operations platform.",
      },
      {
        title: "Business-aware assistance",
        detail: "Integrated business-aware AI assistance into the platform.",
      },
    ],
    // TODO: add only source-backed project retrospectives.
    challenges: [],
    lessons: [],
    screenshots: [
      {
        src: "/images/bakeflow/dashboard.png",
        alt: "BakeFlow dashboard showing bakery revenue, upcoming orders, and today's operations",
        caption: "Dashboard — an overview of revenue, orders, and work needing attention.",
        width: 2940,
        height: 1670,
      },
      {
        src: "/images/bakeflow/orders.png",
        alt: "BakeFlow order form with customer, pickup, status, payment, and order summary fields",
        caption: "Orders — create an order with customer, pickup, and payment details.",
        width: 2940,
        height: 1670,
      },
      {
        src: "/images/bakeflow/production.png",
        alt: "BakeFlow production page showing a pickup date range and products to make",
        caption: "Production — plan what needs to be made for upcoming pickups.",
        width: 2940,
        height: 1670,
      },
      {
        src: "/images/bakeflow/shopping-list.png",
        alt: "BakeFlow shopping list showing ingredients to buy and estimated costs",
        caption: "Shopping list — see ingredient quantities and estimated purchasing costs.",
        width: 2940,
        height: 1670,
      },
      {
        src: "/images/bakeflow/ingredients.png",
        alt: "BakeFlow ingredients page listing unit costs, kitchen stock, buying needs, and stock status",
        caption: "Ingredients — track unit costs, stock levels, and buying needs.",
        width: 2940,
        height: 1670,
      },
    ],
  },
  {
    slug: "complaint-management",
    name: "Intelligent Complaint Management",
    category: "Machine learning · Backend",
    status: "Built",
    summary:
      "Turning incoming complaints into routed, trackable tickets with machine learning.",
    problem:
      "Incoming complaints need to reach the appropriate department and remain trackable after submission.",
    solution:
      "Built a TF-IDF and linear-model complaint classifier, exposed through FastAPI and integrated with a Node.js/Express backend.",
    features: [
      "Machine-learning complaint classification",
      "Automatic department routing",
      "Generated ticket IDs",
      "Complaint status tracking",
    ],
    stack: ["Python", "TF-IDF", "FastAPI", "Node.js", "Express.js"],
    architecture: [
      "Complaint input",
      "TF-IDF + linear model via FastAPI",
      "Node.js / Express integration",
      "Department assignment + ticket tracking",
    ],
    github: null,
    demo: null,
    visual: "routing",
    decisions: [
      {
        title: "TF-IDF and a linear model",
        detail:
          "Used TF-IDF with a linear model for machine-learning complaint classification.",
      },
      {
        title: "FastAPI prediction service",
        detail:
          "Exposed the classifier through FastAPI and integrated it with a Node.js/Express backend.",
      },
      {
        title: "Routing with ticket tracking",
        detail:
          "The backend generates ticket IDs, assigns departments, and tracks complaint status.",
      },
    ],
    // TODO: add only source-backed project retrospectives and real captures.
    challenges: [],
    lessons: [],
    screenshots: [],
  },
  {
    slug: "personal-finance",
    name: "Personal Finance Manager",
    category: "Full-stack · Product development",
    status: "Built",
    summary:
      "A clearer view of everyday finances through income, expense, and budget tracking.",
    problem:
      "Personal finances require a consolidated view of income, expenses, and budgets.",
    solution:
      "Developed a responsive full-stack application with financial tracking and dashboards.",
    features: [
      "Income tracking",
      "Expense tracking",
      "Budget management",
      "Responsive dashboards",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Drizzle ORM", "PostgreSQL"],
    architecture: [
      "Next.js + React interface",
      "Tailwind CSS responsive styling",
      "Drizzle ORM",
      "PostgreSQL database",
    ],
    github: null,
    demo: null,
    visual: "finance",
    decisions: [
      {
        title: "Responsive application interface",
        detail: "Built the interface with Next.js, React, and Tailwind CSS.",
      },
      {
        title: "PostgreSQL with Drizzle ORM",
        detail:
          "Used PostgreSQL and Drizzle ORM in the full-stack application.",
      },
      {
        title: "Tracking and dashboards",
        detail:
          "Combined income, expense, and budget tracking with dashboards.",
      },
    ],
    // TODO: add only source-backed project retrospectives and real captures.
    challenges: [],
    lessons: [],
    screenshots: [],
  },
];
export const navigation = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Contact",
];
