export const SITE = {
  name: "Priti Paudel Jaisi",
  tagline:
    "CSIT undergraduate with a focus on Data Science and AI/ML.",
  email: "preetipaudel456@gmail.com",
  location: "Gongabu, Kathmandu",
  cvUrl: "/cv.pdf",
  links: {
    github: "https://github.com/Pritipaudel",
    linkedin: "https://www.linkedin.com/in/priti-paudel-jaisi-8bb4a1299/",
    email: "mailto:preetipaudel456@gmail.com",
  },
} as const;

export const EDUCATION = [
  {
    degree: "Bachelor in Computer Science and Information Technology",
    school: "Padmakanya Multiple Campus, Tribhuvan University",
    location: "Bagbazaar, Nepal",
    period: "November 2022 - December 2026",
  },
  {
    degree: "High School",
    school: "Capital College Research Center",
    location: "Kathmandu, Nepal",
    period: "October 2020 - May 2022",
  },
] as const;

export const SKILLS = {
  frontend: ["JavaScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  backend: ["Python", "C", "C++", "Django", "Node.js"],
  database: ["MySQL", "PostgreSQL", "MongoDB"],
  devops: ["Git", "GitHub", "NumPy", "Pandas", "Matplotlib"],
} as const;

export const PROJECTS = [
  {
    name: "SheSync",
    description:
      "AI-powered PCOS chatbot using MedGemma for context-aware health guidance. Personalized diet recommendations via RAG based on symptoms, preferences, and health data.",
    tech: ["Python", "MedGemma", "RAG", "AI"],
    github: "https://github.com/kritika-011/SheSync_",
    live: "",
  },
  {
    name: "3D PBR Map Generation",
    description:
      "AI-driven pipeline to generate PBR texture maps (depth, normal, roughness, ambient occlusion) from a single 2D image. Hybrid Vision Transformer with DINOv2 encoder.",
    tech: ["Python", "PyTorch", "DINOv2", "Vision Transformer"],
    github: "https://github.com/fuseai-fellowship/PBR-map-generation-for-realistic-3D-modeling",
    live: "",
  },
  {
    name: "Eco-Guard",
    description:
      "An AI-powered environmental monitoring system designed to detect and alert against ecological threats like illegal deforestation and poaching using real-time data analysis.",
    tech: ["Python", "TensorFlow", "Flask"],
    github: "https://github.com/Pritipaudel/Eco-Guard",
    live: "", 
  },
] as const;

export const EXPERIENCE = [
  {
    company: "Fusemachines",
    role: "AI Fellow",
    location: "Kathmandu, Nepal",
    period: "April 2025 - December 2025",
    points: [
      "Selected for six-month fellowship in the 2025 cohort.",
      "Worked on AI-based generation of 3D PBR texture maps from 2D images for realistic rendering applications.",
    ],
  },
  {
    company: "Women Leaders in Technology",
    role: "Fellow",
    location: "Kathmandu, Nepal",
    period: "October 2024 - April 2025",
    points: [
      "One of 15 selected female students for the six-month fellowship in the 2024 cohort.",
      "Two-week workshop on Node.js, MongoDB, and soft skills, followed by a hackathon project.",
    ],
  },
  {
    company: "Microsoft Learn Student Ambassador",
    role: "Beta MLSA",
    location: "Kathmandu, Nepal",
    period: "October 2024 - Present",
    points: [
      "Selected as Beta MLSA, showcasing leadership and technical expertise.",
      "Organized interactive workshops on GitHub for version control and collaborative coding.",
    ],
  },
] as const;

export const EXPERIENCE_LOGOS: Record<string, string> = {
  Fusemachines: "/images/fuse.jpg",
  "Women Leaders in Technology": "/images/wilt.png",
  "Microsoft Learn Student Ambassador": "/images/mba.png",
};

export const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#connect", label: "Connect" },
] as const;

