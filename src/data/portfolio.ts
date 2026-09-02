export interface Project {
  name: string;
  description: string;
  problem: string;
  built: string;
  tech: string[];
  live: string;
  github: string;
  image: string;
  category: "AI" | "SaaS" | "Real-time" | "Marketplace" | "Internal Tools" | "Health";
  keyFeatures: string[];
}

export const PROJECTS: Project[] = [
  {
    name: "MaternAlert",
    description: "Life-saving maternal health monitoring application built for accessibility and real-time alerts against blood pressure and pre-eclampsia.",
    problem: "Lack of real-time monitoring for expectant mothers in high-risk environments.",
    built: "Built the patient-facing and healthworker facility application, including blood-pressure monitoring, reminders, trend detection, escalation workflows and appointment-related functionality. I also developed the backend and AI components as part of the wider product.",
    tech: ["React Native", "Web", "Expo", "TypeScript", "Node.js", "Prisma"],
    live: "https://maternalert-web.vercel.app/",
    github: "https://github.com/auspicious14/maternalert-fe.git",
    image: "/Matern2.png",
    category: "Health",
    keyFeatures: ["Health Tracking", "Automated Alerts", "Offline Mode", "Emergency Integration"]
  },
  {
    name: "DevDrill",
    description: "AI-powered coding practice platform designed to help developers master technical interviews through interactive, real-time feedback.",
    problem: "Founders need a way to help their users bridge the gap between theory and practical coding skills.",
    built: "Built an end-to-end platform with an integrated AI tutor, real-time code execution, and personalized learning paths.",
    tech: ["Next.js", "TypeScript", "Node.js", "OpenAI API", "TailwindCSS"],
    live: "https://techpractice.vercel.app",
    github: "https://github.com/auspicious14/resource-platform-fe.git",
    image: "/devdrill.png",
    category: "AI",
    keyFeatures: ["AI Code Reviews", "Real-time Execution", "Personalized Paths", "Progress Analytics"]
  },
  {
    name: "VideoAI",
    description: "An automated video-production system that turns structured content into narrated videos using AI-generated scripts, voice, visual assets and automated video composition.",
    problem: "Automate video creation processes for content creators and marketers.",
    built: "Built the pipeline that coordinates script generation, voice generation, visual asset generation and video rendering into a finished video. The system uses multiple AI services and automated media-processing workflows.",
    tech: ["Python", "FastAPI", "OpenAI API", "FFmpeg", "Kokoro-tts"],
    live: "#",
    github: "https://github.com/auspicious14/video-AI.git",
    image: "/second-order.png",
    category: "AI",
    keyFeatures: ["Video Generation", "Research", "Media Acquisition", "Audio Synthesis", "Video Rendering"]
  },
  {
    name: "Foozam",
    description: "AI-powered food recognition app that discovers nutritional facts in seconds. Think Shazam, but for food.",
    problem: "Health-conscious users struggle to track nutrition manually and need instant information about what they're eating.",
    built: "Developed a computer vision system that identifies food items and fetches real-time nutritional data from a specialized API.",
    tech: ["Next.js", "TypeScript", "Node.js", "Computer Vision API", "MongoDB"],
    live: "https://foozam-fe.vercel.app",
    github: "https://github.com/auspicious14/foozam-fe.git",
    image: "/foozam.png",
    category: "AI",
    keyFeatures: ["Food Recognition", "Nutritional Analysis", "Real-time Data", "Health Tracking"]
  },
  
  {
    name: "Event9ja",
    description: "A comprehensive event management and ticketing platform designed for seamless event organization and attendee management in Nigeria.",
    problem: "Event organizers struggle with fragmented tools for ticketing, guest management, and real-time event analytics.",
    built: "Built a high-performance event platform with real-time ticketing, QR-code check-ins, and a robust organizer dashboard.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "TailwindCSS"],
    live: "https://event9ja.vercel.app",
    github: "https://github.com/auspicious14/event9ja-fe.git",
    image: "/event9ja.png",
    category: "Marketplace",
    keyFeatures: ["Real-time Ticketing", "QR Check-in", "Attendee Analytics", "Organizer Dashboard"]
  },
  {
    name: "Promptiify",
    description: "A professional prompt refinement tool that enhances and optimizes user prompts for better AI interactions and more accurate results.",
    problem: "Founders and AI users struggle to write effective prompts, leading to subpar outputs from LLMs.",
    built: "Developed a sophisticated prompt engineering engine that analyzes user input and reconstructs it using best-practice AI prompt patterns.",
    tech: ["Next.js", "TypeScript", "Node.js", "OpenAI API", "TailwindCSS"],
    live: "https://promptiify.vercel.app",
    github: "https://github.com/auspicious14/promptify.git",
    image: "/promptiify.png",
    category: "AI",
    keyFeatures: ["Context Enhancement", "Structured Prompting", "Multi-model Optimization", "Prompt History"]
  },
  {
    name: "Inkly AI",
    description: "An advanced image generation tool that creates custom high-fidelity visuals using state-of-the-art AI technology.",
    problem: "Startups often lack the budget for custom design assets and need a way to generate unique, on-brand visuals quickly.",
    built: "Built a generative art platform with custom model fine-tuning and a seamless user interface for rapid image iteration.",
    tech: ["Next.js", "TypeScript", "Node.js", "Stable Diffusion", "MongoDB"],
    live: "https://inkly-ai.vercel.app",
    github: "https://github.com/auspicious14/image-generator-fe.git",
    image: "/inkly-ai.png",
    category: "AI",
    keyFeatures: ["Text-to-Image", "Image-to-Image", "Style Tuning", "Batch Generation"]
  },
  {
    name: "Vendify",
    description: "Scalable multi-vendor ecommerce platform with integrated payments and real-time communication.",
    problem: "Founders need a robust, marketplace-ready system that handles complex vendor-customer interactions seamlessly.",
    built: "Architected a high-performance marketplace with secure payment gateways, real-time chat via WebSockets, and a comprehensive vendor dashboard.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "Socket.io", "TailwindCSS"],
    live: "https://vendiify.vercel.app",
    github: "https://github.com/Auspicious14/healthshoponline-fe.git",
    image: "/vendify logo white.jpg",
    category: "Marketplace",
    keyFeatures: ["Multi-vendor Dashboards", "Real-time Chat", "Secure Payments", "Inventory Management"]
  },
  {
    name: "Tolatu",
    description: "A dual-mode conversion tool that transforms both written content and image-based text into natural-sounding audio format.",
    problem: "Accessibility and content consumption friction for users who prefer audio or have visual impairments.",
    built: "Integrated advanced OCR (Optical Character Recognition) with high-fidelity Text-to-Speech (TTS) engines for seamless conversion.",
    tech: ["Next.js", "TypeScript", "Node.js", "TTS API", "OCR Engine"],
    live: "https://tolatu.vercel.app",
    github: "https://github.com/auspicious14/tolatu-fe.git",
    image: "/tolatu.png",
    category: "AI",
    keyFeatures: ["Image-to-Speech", "Text-to-Speech", "Multi-language Support", "Custom Voice Profiles"]
  },
  {
    name: "LedgerMind AI",
    description: "A Revenue Intelligence Engine tailored for small businesses to analyze, predict, and optimize their revenue streams using data-driven insights.",
    problem: "Small businesses struggle to understand their financial health and lack accessible tools for revenue forecasting.",
    built: "Built an AI-driven financial dashboard that integrates with sales data to provide actionable revenue intelligence and growth recommendations.",
    tech: ["Next.js", "TypeScript", "Node.js", "OpenAI", "Recharts"],
    live: "https://ledgermind-ai.vercel.app",
    github: "https://github.com/auspicious14/ledgermind-ai.git",
    image: "/ledgermind-ai.png",
    category: "SaaS",
    keyFeatures: ["Revenue Forecasting", "Expense Tracking", "AI Insights", "Financial Reporting"]
  },
  {
    name: "Causis",
    description: "An AI system that analyzes visual input to understand how real-world environments function, fail, and can be improved.",
    problem: "Complex industrial or logistical environments lack automated systems for diagnosing operational inefficiencies from visual data.",
    built: "Developed a computer vision pipeline that processes real-time video feeds to identify patterns, anomalies, and optimization opportunities.",
    tech: ["Next.js", "TypeScript", "Node.js", "Computer Vision", "WebSockets"],
    live: "https://causis.vercel.app",
    github: "https://github.com/auspicious14/causis-fe.git",
    image: "/causis.png",
    category: "AI",
    keyFeatures: ["Visual Diagnosis", "Anomaly Detection", "Real-time Monitoring", "Pattern Analysis"]
  },
  {
    name: "Debug Your Mind",
    description: "A specialized tool designed to rewire impostor-driven thinking patterns in technology professionals through cognitive-behavioral techniques.",
    problem: "High-performing tech professionals often suffer from impostor syndrome, impacting their productivity and well-being.",
    built: "Created a psychological wellness tool with structured exercises, progress tracking, and AI-powered reflective journaling.",
    tech: ["Next.js", "TypeScript", "Node.js", "OpenAI", "TailwindCSS"],
    live: "https://debug-your-mind.vercel.app",
    github: "https://github.com/auspicious14/debug-your-mind.git",
    image: "/debug-your-mind.png",
    category: "SaaS",
    keyFeatures: ["Cognitive Reframing", "Progress Tracking", "Reflective Journaling", "AI Coaching"]
  },
  
  {
    name: "HallMate",
    description: "A comprehensive lecture hall booking application designed for universities to manage classroom reservations and optimize space utilization.",
    problem: "Inefficient and manual classroom scheduling processes leading to conflicts and underutilized campus resources.",
    built: "Architected a robust scheduling system with real-time availability tracking, role-based access control, and automated notifications.",
    tech: ["Next.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
    live: "https://hallmate.vercel.app", // Placeholder
    github: "https://github.com/auspicious14/hallmate-fe.git",
    image: "/vendify logo white.jpg",
    category: "Internal Tools",
    keyFeatures: ["Real-time Scheduling", "Admin Dashboard", "Conflict Detection", "Analytics"]
  }
];

export const TECH_STACK = {
  frontend: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  mobile: ["React Native", "Expo"],
  backendAndApi: ["Node.js", "NestJS", "GraphQL", "REST", "Socket.io", "Apollo Client", "OpenAI"],
  aiAndautomation: ["AI APIs", "LLM integrations", "automated media pipelines", "Python/FastAPI"],
  databaseAndTools: ["MongoDB", "Prisma", "Git", "GitHub"]
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
  name: "Uthman Abdulganiyu",
  story: "I've spent the last 4+ years building web and mobile applications, working mainly with React, Next.js, TypeScript and React Native. My professional experience has involved turning client requirements into working features, integrating APIs, maintaining existing applications and working across different products and codebases. Outside of professional work, I build my own products to explore ideas that interest me. Some of those include MaternAlert, a maternal-health platform, and VideoAI, an automated AI-powered video production system. I enjoy understanding how a product is supposed to work, figuring out the technical pieces behind it and turning that into something people can actually use.",
  location: "Lagos, Nigeria",
  experience: "4+ years of building web and mobile applications",
  specialization: "Web & Mobile Development, API Integration, Product Building"
};
