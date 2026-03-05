export const PROJECTS = [
  {
    name: "DevDrill",
    description: "AI-powered coding practice platform designed to help developers master technical interviews through interactive, real-time feedback.",
    problem: "Founders need a way to help their users bridge the gap between theory and practical coding skills.",
    built: "Built an end-to-end platform with an integrated AI tutor, real-time code execution, and personalized learning paths.",
    tech: ["Next.js", "TypeScript", "Node.js", "OpenAI API", "TailwindCSS"],
    live: "https://techpractice.vercel.app",
    github: "https://github.com/auspicious14/resource-platform-fe.git",
    image: "/career-guidance.png" 
  },
  {
    name: "Foozam",
    description: "AI-powered food recognition app that discovers nutritional facts in seconds. Think Shazam, but for food.",
    problem: "Health-conscious users struggle to track nutrition manually and need instant information about what they're eating.",
    built: "Developed a computer vision system that identifies food items and fetches real-time nutritional data from a specialized API.",
    tech: ["Next.js", "TypeScript", "Node.js", "Computer Vision API", "MongoDB"],
    live: "https://foozam-fe.vercel.app",
    github: "https://github.com/auspicious14/foozam-fe.git",
    image: "/Group 46.png"
  },
  {
    name: "Vendify",
    description: "Scalable multi-vendor ecommerce platform with integrated payments and real-time communication.",
    problem: "Founders need a robust, marketplace-ready system that handles complex vendor-customer interactions seamlessly.",
    built: "Architected a high-performance marketplace with secure payment gateways, real-time chat via WebSockets, and a comprehensive vendor dashboard.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "Socket.io", "TailwindCSS"],
    live: "https://vendiify.vercel.app",
    github: "https://github.com/auspicious14/healthshoponline-fe.git",
    image: "/vendify logo white.jpg"
  },
  {
    name: "MaternAlert",
    description: "Life-saving maternal health monitoring application built for accessibility and real-time alerts.",
    problem: "Lack of real-time monitoring for expectant mothers in high-risk environments.",
    built: "Built a cross-platform mobile application with real-time health tracking and automated emergency alert systems.",
    tech: ["React Native", "Expo", "TypeScript", "Node.js", "MongoDB"],
    live: "#",
    github: "https://github.com/auspicious14/maternalert-fe.git",
    image: "/Image.png"
  }
];

export const TECH_STACK = {
  frontend: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  backend: ["Node.js", "Express", "GraphQL", "Socket.io", "OpenAI"],
  infrastructure: ["MongoDB", "Vercel", "AWS", "GitHub Actions"]
};

export const WORKFLOW = [
  {
    title: "Idea",
    description: "We dive deep into your core problem, define essential features, and map out the user journey to ensure we build what users actually need."
  },
  {
    title: "MVP Development",
    description: "Using modern frameworks like Next.js and Node.js, I build a high-performance, scalable product with speed and precision."
  },
  {
    title: "Launch & Iterate",
    description: "We ship your product to real users, gather feedback, and iterate quickly to find product-market fit."
  }
];

export const CAPABILITIES = [
  "SaaS Platforms",
  "AI-powered Applications",
  "Multi-vendor Marketplaces",
  "Real-time Systems",
  "Internal Tools & Dashboards",
  "Custom Startup MVPs"
];

export const TIMELINE = [
  { week: "Week 1", task: "Planning, Architecture & UI Design" },
  { week: "Week 2-4", task: "Core Feature Development & Integration" },
  { week: "Week 5", task: "Testing, Refinement & User Feedback" },
  { week: "Week 6", task: "Production Launch & Optimization" }
];

export const ABOUT = {
  name: "Uthman Abdulganiyu (Auspicious)",
  story: "I'm a Full-Stack Engineer who thrives at the intersection of startup ideas and technical execution. My goal is to eliminate the technical friction that founders face, building robust MVPs that allow you to focus on growth and product-market fit. I don't just write code; I build systems that solve real problems.",
  location: "Ilorin, Nigeria",
  experience: "3+ years of building real-world applications",
  specialization: "Startup MVPs, AI-powered systems, Scalable Backends"
};
