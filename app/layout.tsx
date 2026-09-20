import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CvViewerProvider } from "@/lib/CvViewerContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
  ],
};

export const metadata: Metadata = {
  title: "Priti Paudel Jaisi | Software & AI/ML Portfolio",
  description:
    "CSIT student focused on AI/ML, Data Engineering, and Intelligent Systems. Building practical applications and data pipelines.",
  keywords: [
    "Priti Paudel Jaisi",
    "portfolio",
    "developer",
    "AI",
    "ML",
    "Data Engineering",
    "Kathmandu",
  ],
  authors: [{ name: "Priti Paudel Jaisi", url: "https://github.com/Pritipaudel" }],
  openGraph: {
    title: "Priti Paudel Jaisi | Software & AI/ML Portfolio",
    description:
      "CSIT student focused on AI/ML, Data Engineering, and Intelligent Systems.",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${bricolage.variable} ${jetbrains.variable} font-sans bg-bg-primary dark:bg-bg-dark text-text-primary dark:text-zinc-200 antialiased`}>
        <ThemeProvider>
          <CvViewerProvider>
            <Navbar />
            <main>{children}</main>
          </CvViewerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
