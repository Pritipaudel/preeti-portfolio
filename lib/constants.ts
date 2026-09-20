export const SITE = {
  name: "Priti Paudel Jaisi",
  tagline:
    "I build intelligent systems that feel seamless, reliable, scalable, and thoughtfully engineered from idea to deployment.",
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
  languages: [
    "Python",
    "SQL",
    "JavaScript",
    "TypeScript",
    "C",
    "C++",
  ],

  libraries: [
    "PyTorch",
    "TensorFlow",
    "Scikit-Learn",
    "OpenCV",
    "MediaPipe",
    "Hugging Face",
    "LangChain",
    "Transformers",
  ],

  data: [
    "Pandas",
    "NumPy",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Vector Databases",
    "RAG",
  ],

  frameworks: [
    "Django",
    "Django REST Framework",
    "FastAPI",
    "Flask",
    "Streamlit",
  ],

  genai: [
    "LLMs",
    "Generative AI",
    "Prompt Engineering",
    "Embeddings",
    "Vector Search",
    "LangChain",
    "LangGraph",
  ],

  tools: [
    "Git",
    "GitHub",
    "Docker",
    "Linux",
    "AWS",
    "Jupyter",
    "VS Code",
  ],
} as const;

export const PROJECTS = [
  {
    name: "PoseFit",
    description:
      "AI-powered adaptive exercise coaching system for real-time pose analysis and personalized guidance. Implemented joint angle estimation with EMA stabilization, cosine similarity-based recommendations, and a dynamic engine adjusting to user demographics and posture patterns.",
    tech: ["Python", "React", "Django", "MediaPipe", "PostgreSQL"],
    github: "https://github.com/Pritipaudel/last_year_project",
    live: "",
    image: "/images/projects/posefit.jpg",
    category: "AI/ML / Full Stack",
    year: "2026",
    featured: true,
  },
  {
    name: "3D PBR Map Generation",
    description:
      "AI-driven pipeline generating PBR texture maps (depth, normal, roughness, ambient occlusion) from a 2D image. Implemented a hybrid Vision Transformer architecture using DINOv2 encoder and custom feature-fusion modules with RAFT for high-resolution single-step inference.",
    tech: ["Python", "PyTorch", "DINOv2", "Vision Transformer"],
    github: "https://github.com/fuseai-fellowship/PBR-map-generation-for-realistic-3D-modeling",
    live: "",
    image: "/images/projects/pbr.jpg",
    category: "Computer Vision",
    year: "2026",
    featured: false,
  },
  {
    name: "Fingerprint Minutiae Matching",
    description:
      "Classical fingerprint recognition system implementing Gabor filtering, skeletonization, and minutiae extraction with FAR/FRR/EER evaluation.",
    tech: ["Python", "OpenCV", "FastAPI", "Image Processing"],
    github: "https://github.com/Pritipaudel/fingerprint-minutiae-extraction-matching",
    live: "",
    image: "/images/projects/fingerprint.jpg",
    category: "Algorithms",
    year: "2026",
    featured: false,
  },
  {
    name: "GRE Vocabulary System",
    description:
      "Document processing pipeline that extracts vocabulary from scanned GRE books using MinerU OCR, enriches definitions via APIs, and serves structured learning content.",
    tech: ["Python", "OCR", "Streamlit", "PostgreSQL"],
    github: "https://github.com/Pritipaudel/gre_prep",
    live: "",
    image: "/images/projects/gre.jpg",
    category: "Data Pipeline",
    year: "2026",
    featured: false,
  },
  {
    name: "SheSync",
    description:
      "AI-powered chatbot using MedGemma for context-aware symptom support and personalized health guidance. Built a RAG pipeline to generate adaptive, personalized diet recommendations based on user health inputs and behavioral context.",
    tech: ["Python", "MedGemma", "RAG", "AI"],
    github: "https://github.com/kritika-011/SheSync_",
    live: "",
    image: "/images/projects/shesync.jpg",
    category: "AI/ML",
    year: "2025",
    featured: false,
  },
  {
    name: "Eco-Guard",
    description:
      "AI-powered environmental monitoring system designed to detect and alert against ecological threats like illegal deforestation and poaching using real-time data analysis.",
    tech: ["Python", "TensorFlow", "Flask"],
    github: "https://github.com/Pritipaudel/Eco-Guard",
    live: "",
    image: "/images/projects/ecoguard.jpg",
    category: "Computer Vision",
    year: "2024",
    featured: false,
  },
] as const;

export const EXPERIENCE = [
  {
    company: "Wiseyak",
    role: "AI Research Intern",
    location: "Kathmandu, Nepal",
    period: "Jan 2026 - April 2026",
    points: [
      "Contributed to the backend development of a pathology workflow system using Django for cervical cancer screening and laboratory operations.",
      "Designed and implemented APIs and backend functionalities for microscopy image handling, processing, and system integration.",
      "Integrated a cellular-level microscope camera pipeline for real-time image capture within the web platform.",
      "Built a custom annotation and labeling system to support microscopy data analysis and workflow efficiency.",
    ],
  },
  {
    company: "Fusemachines",
    role: "AI fellow",
    location: "Kathmandu, Nepal",
    period: "April 2025 - December 2025",
    points: [
      "One of the selected fellow to be awarded with six-months fellowship in the 2025 cohort.",
      "Developed an AI-based 3D PBR texture map generation pipeline from 2D images for realistic rendering applications.",
      "Worked with computer vision and deep learning architectures, including DINOv2, RAFT, and DepthNormalDPT, for feature extraction and surface-property estimation.",
    ],
  },
  {
    company: "Women Leaders in Technology",
    role: "Fellow",
    location: "Kathmandu, Nepal",
    period: "October 2024 - April 2025",
    points: [
      "One of 15 selected female students to be awarded the six-months fellowship in the 2024 cohort.",
      "Two-week workshop on Node Js, MongoDB, and soft skills, followed by a hackathon project.",
    ],
  },
] as const;

export const EXPERIENCE_LOGOS: Record<string, string> = {
  Fusemachines: "/images/fuse.jpg",
  "Women Leaders in Technology": "/images/wilt.png",
};

export const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#connect", label: "Connect" },
] as const;

