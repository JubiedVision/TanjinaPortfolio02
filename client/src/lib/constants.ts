// Navigation links
export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

// Skills data for skills section
export const RESEARCH_SKILLS = [
  { name: "UX Research Methodologies", level: 95 },
  { name: "Qualitative Research Techniques", level: 90 },
  { name: "Quantitative Analysis", level: 85 },
  { name: "Data Collection and Analysis", level: 92 },
];

export const SPECIALIZED_SKILLS = [
  { name: "Web Research", level: 98, icon: "fa-globe" },
  { name: "Internet Research", level: 95, icon: "fa-search" },
  { name: "Email Research", level: 90, icon: "fa-envelope" },
  { name: "Data Visualization", level: 85, icon: "fa-chart-pie" },
];

export const PROFESSIONAL_SKILLS = [
  { 
    name: "Leadership", 
    level: 5, 
    icon: "fa-users-cog",
    description: "Led multiple research teams, fostering collaboration and excellence in research practices."
  },
  { 
    name: "Collaboration", 
    level: 5, 
    icon: "fa-handshake",
    description: "Effectively collaborate with product management teams to align research goals with business objectives."
  },
  { 
    name: "Communication", 
    level: 4.5, 
    icon: "fa-comments",
    description: "Excellent verbal and written communication skills, with the ability to present complex findings clearly to diverse audiences."
  },
  { 
    name: "Development Team Coordination", 
    level: 4, 
    icon: "fa-code-branch",
    description: "Coordinate with development teams to implement research-based recommendations and improvements."
  },
];

// Portfolio projects data
export const PORTFOLIO_PROJECTS = [
  {
    title: "E-commerce User Experience Analysis",
    category: "UX Research",
    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    problemStatement: "Identifying friction points in the checkout process causing cart abandonment.",
    methodology: "User interviews, usability testing, heatmap analysis, and quantitative survey data.",
    results: "35% reduction in cart abandonment rate and 27% increase in conversion after implementing recommendations."
  },
  {
    title: "B2B Lead Generation Campaign",
    category: "Lead Generation",
    image: "https://images.unsplash.com/photo-1529119513321-989c92a94914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    problemStatement: "Identifying and engaging high-quality decision-makers for a SaaS platform.",
    methodology: "Advanced web and email research, market segmentation, and personalized outreach strategies.",
    results: "200+ qualified leads generated, resulting in 45 new clients and $1.2M in annual revenue."
  },
  {
    title: "Mobile App User Journey Analysis",
    category: "UX Research",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    problemStatement: "Optimizing the onboarding flow to improve user retention and engagement.",
    methodology: "User journey mapping, cohort analysis, A/B testing, and moderated usability sessions.",
    results: "52% increase in 30-day retention rate and 24% improvement in feature adoption."
  },
  {
    title: "Market Segmentation Analysis",
    category: "Data Analysis",
    image: "https://images.unsplash.com/photo-1624028559893-c6cb56ea9659?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    problemStatement: "Identifying high-value customer segments for a financial services platform.",
    methodology: "Cluster analysis, demographic profiling, behavioral segmentation, and predictive modeling.",
    results: "Identified 3 high-value segments leading to a 41% increase in marketing ROI."
  },
  {
    title: "Lead Qualification Framework",
    category: "Lead Generation",
    image: "https://images.unsplash.com/photo-1539278670307-a69d04dc8a75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    problemStatement: "Creating a systematic approach to qualify leads and prioritize sales efforts.",
    methodology: "Historical data analysis, sales funnel optimization, and development of a lead scoring model.",
    results: "65% improvement in sales efficiency and 38% increase in conversion rate from lead to customer."
  },
  {
    title: "Product Feature Prioritization Study",
    category: "Data Analysis",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    problemStatement: "Determining which features to prioritize in the product roadmap based on user needs.",
    methodology: "Kano model analysis, conjoint analysis, user preference surveys, and competitive benchmarking.",
    results: "Identified top 5 features that increased user satisfaction by 48% and reduced development costs by 30%."
  }
];

// Testimonials data
export const TESTIMONIALS = [
  {
    quote: "Tanjina's research methodology is impeccable. Her insights transformed our product strategy and directly contributed to a 40% increase in user engagement. She has an exceptional ability to understand user behavior and translate findings into actionable recommendations.",
    name: "David Chen",
    position: "Product Manager, TechNova",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "Working with Tanjina was a game-changer for our lead generation strategy. Her thorough research and data-driven approach helped us identify our ideal customer profile with remarkable precision. As a team leader, she consistently delivers results while fostering a collaborative environment.",
    name: "Sarah Johnson",
    position: "Marketing Director, GrowthHub",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "Tanjina's ability to extract meaningful insights from complex data sets is truly remarkable. Her research not only identified critical user pain points but also provided a clear roadmap for addressing them. Her contribution to our product development process has been invaluable.",
    name: "Michael Torres",
    position: "CTO, InnovateSoft",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  }
];

// Experience data
export const EXPERIENCE_DATA = [
  {
    title: "Lead Generator",
    company: "Upleadsbd",
    period: "2020 - Present",
    current: true,
    responsibilities: [
      "Conducting comprehensive web research to identify potential leads and business opportunities",
      "Performing deep internet research to gather relevant data for client projects",
      "Leading email research campaigns to identify decision-makers and key stakeholders",
      "Analyzing research data to provide strategic insights for business development",
      "Managing and mentoring a team of research associates"
    ],
    achievements: [
      {
        title: "Best Team Leader of the Year",
        description: "Recognized for exceptional leadership and team performance"
      },
      {
        title: "Volunteer of the Year",
        description: "Awarded for outstanding contribution to community initiatives"
      }
    ]
  },
  {
    title: "Research Assistant",
    company: "University of Dhaka",
    period: "2018 - 2020",
    current: false,
    responsibilities: [
      "Assisted faculty members with research projects in the field of user experience and human-computer interaction",
      "Collected and analyzed data using qualitative and quantitative research methods",
      "Contributed to the preparation of research papers and academic publications"
    ]
  }
];

// Education data
export const EDUCATION_DATA = {
  university: {
    name: "University of Dhaka",
    degree: "Bachelor of Business Administration",
    specialization: "Marketing & Research",
    graduationYear: "2018",
    academicStanding: "First Class",
    achievements: [
      "Dean's List Honoree for academic excellence",
      "Outstanding Research Project Award",
      "Business Case Competition Finalist"
    ]
  },
  certifications: [
    {
      name: "Advanced UX Research Methods",
      provider: "Nielsen Norman Group",
      year: "2022",
      credentialId: "UXR-2022-8754"
    },
    {
      name: "Data Analytics Essentials",
      provider: "Google",
      year: "2021",
      credentialId: "GDA-7892-2021"
    },
    {
      name: "Lead Generation Specialist",
      provider: "HubSpot Academy",
      year: "2020",
      credentialId: "HSA-LG-4532-20"
    },
    {
      name: "Qualitative Research Methods",
      provider: "Coursera",
      year: "2019",
      credentialId: "CSA-QRM-3245-19"
    }
  ]
};
