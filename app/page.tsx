"use client";

import { motion } from "framer-motion";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <ScrollProgress />
      <BackToTop />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </motion.div>
  );
}

