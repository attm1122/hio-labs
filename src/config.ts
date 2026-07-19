// Site configuration
// HIO Labs — AI Transformation & Enterprise AI Adoption

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "HIO Labs — AI Transformation & Enterprise Adoption",
  description: "HIO Labs helps organizations adopt AI with confidence, building the capabilities that drive real business transformation. Strategy, implementation, and capability growth for enterprise leaders.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "HIO Labs",
  links: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
  ],
  contactLabel: "Contact",
  contactHref: "mailto:hello@hiolabs.ai",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "HIO LABS",
  roles: ["AI Transformation", "Enterprise Adoption"],
  backgroundImage: "/images/hero-bg.png",
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "ABOUT HIO LABS",
  description: "HIO Labs partners with forward-thinking organizations to drive AI adoption with confidence. We don't just deliver solutions — we build the internal capabilities, culture, and strategic clarity that turn AI investment into lasting competitive advantage. From initial roadmap to scaled implementation, we help enterprises navigate complexity and move fast without breaking things.",
  experienceValue: "50+",
  experienceLabel: "AI Engagements\nDelivered",
  stats: [
    { value: "98%", label: "Client Retention" },
    { value: "12", label: "Industries Served" },
    { value: "$2B+", label: "Value Enabled" },
  ],
  images: [
    { src: "/images/about-1.png", alt: "Enterprise AI strategy session" },
    { src: "/images/about-2.png", alt: "AI capability building workshop" },
    { src: "/images/about-3.png", alt: "AI transformation roadmap" },
    { src: "/images/about-4.png", alt: "Modern enterprise workspace" },
  ],
};

// Services section configuration
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "WHAT WE DO",
  heading: "AI Transformation / Strategy",
  services: [
    {
      iconName: "LineChart",
      title: "AI Transformation Strategy",
      description: "Enterprise roadmap development, feasibility analysis, and ROI modeling. We help leadership teams identify high-impact AI opportunities, assess readiness, and build executable transformation plans that align AI investment with business outcomes.",
      image: "/images/service-2.png",
    },
    {
      iconName: "Sparkles",
      title: "Generative AI & Enterprise Applications",
      description: "We design and deploy production-ready AI applications powered by large language models — from enterprise AI agents and workflow automation to custom knowledge systems that integrate securely into your existing infrastructure and processes.",
      image: "/images/service-4.png",
    },
  ],
};

// Portfolio section configuration
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "",
  heading: "",
  description: "",
  projects: [],
  cta: {
    label: "",
    heading: "",
    linkText: "",
    linkHref: "",
  },
  viewAllLabel: "",
};

// Testimonials section configuration
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "",
  heading: "",
  testimonials: [],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["AI Transformation", "Enterprise Adoption", "Capability Building"],
  heading: "Ready to Transform with AI?",
  description: "Let's talk about how HIO Labs can help your organization adopt AI with confidence — from strategy to implementation, and from first pilot to enterprise scale.",
  buttonText: "Start a Conversation",
  buttonHref: "mailto:hello@hiolabs.ai",
  email: "hello@hiolabs.ai",
  backgroundImage: "/images/cta-bg.png",
};

// Footer section configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "HIO Labs",
  description: "Helping organizations adopt AI with confidence. Building the capabilities that drive real business transformation.",
  columns: [
    {
      title: "Services",
      links: [
        { label: "AI Transformation Strategy", href: "#services" },
        { label: "Generative AI & Enterprise Applications", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Careers", href: "mailto:careers@hiolabs.ai" },
        { label: "Contact", href: "mailto:hello@hiolabs.ai" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Research", href: "#" },
        { label: "Open Source", href: "#" },
        { label: "Privacy Policy", href: "#" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Linkedin", href: "https://linkedin.com/company/hiolabs", label: "LinkedIn" },
    { iconName: "Twitter", href: "https://twitter.com/hiolabs", label: "Twitter" },
    { iconName: "Github", href: "https://github.com/hiolabs", label: "GitHub" },
  ],
  newsletterHeading: "Stay Ahead of the Curve",
  newsletterDescription: "Get the latest insights on AI strategy, emerging technologies, and industry trends delivered to your inbox.",
  newsletterButtonText: "Subscribe",
  newsletterPlaceholder: "Enter your email",
  copyright: "© 2025 HIO Labs. All rights reserved.",
  credit: "Built with precision and intelligence.",
};
