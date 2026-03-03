import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CvViewerProvider } from "@/lib/CvViewerContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
  ],
};

export const metadata: Metadata = {
  title: "Priti Paudel Jaisi | Portfolio",
  description:
    "CSIT graduate focused on AI and full-stack development. Building intelligent applications and 3D rendering pipelines. Based in Kathmandu, Nepal.",
  keywords: [
    "Priti Paudel Jaisi",
    "portfolio",
    "developer",
    "AI",
    "full-stack",
    "Kathmandu",
  ],
  authors: [{ name: "Priti Paudel Jaisi", url: "https://github.com/Pritipaudel" }],
  openGraph: {
    title: "Priti Paudel Jaisi | Portfolio",
    description:
      "CSIT graduate focused on AI and full-stack development. Building intelligent applications.",
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
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>
          <CvViewerProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </CvViewerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
