"use client";

import { motion } from "framer-motion";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { useCvViewer } from "@/lib/CvViewerContext";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  const { openCv } = useCvViewer();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <ScrollProgress />
      <BackToTop />
      <Hero onViewCv={openCv} />
      <SectionDivider variant="gradient" />
      <About />
      <SectionDivider variant="line" />
      <Skills />
      <SectionDivider variant="gradient" />
      <Projects />
      <SectionDivider variant="line" />
      <Experience />
      <SectionDivider variant="gradient" />
      <Contact />
    </motion.div>
  );
}
