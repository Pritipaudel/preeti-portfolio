"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { CvViewer } from "@/components/CvViewer";

type CvViewerContextValue = {
  openCv: () => void;
  closeCv: () => void;
};

const CvViewerContext = createContext<CvViewerContextValue | null>(null);

export function CvViewerProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openCv = useCallback(() => setOpen(true), []);
  const closeCv = useCallback(() => setOpen(false), []);

  return (
    <CvViewerContext.Provider value={{ openCv, closeCv }}>
      {children}
      <CvViewer open={open} onClose={closeCv} />
    </CvViewerContext.Provider>
  );
}

export function useCvViewer() {
  const ctx = useContext(CvViewerContext);
  if (!ctx) return { openCv: () => {}, closeCv: () => {} };
  return ctx;
}
