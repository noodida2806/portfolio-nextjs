import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/theme/theme-provider";
import ActiveSectionContextProvider from "@/context/active-section-context";
import LanguageProvider from "@/context/language-context";
import { Toaster } from "react-hot-toast";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FixedControls from "@/components/fixed-controls";
import CursorParticles from "@/components/cursor-particles";
import CommandPalette from "@/components/command-palette";

export const metadata: Metadata = {
  title: "Noo DiDa | Personal Portfolio",
  description: "A full-stack developer with 3+ years of experience in building modern web and mobile applications.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Portfolio"],
  authors: [{ name: "Ngo Dinh Dai" }],
  openGraph: {
    title: "Noo DiDa | Personal Portfolio",
    description: "A full-stack developer with 3+ years of experience in building modern web and mobile applications.",
    url: "https://noodida.dev",
    siteName: "Noo DiDa Portfolio",
    images: [
      {
        url: "/avatar.jpg",
        width: 384,
        height: 384,
        alt: "Noo DiDa - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noo DiDa | Personal Portfolio",
    description: "A full-stack developer with 3+ years of experience in building modern web and mobile applications.",
    images: ["/avatar.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className="font-[var(--font-sf-pro-text),ui-sans-serif,system-ui,-apple-system,sans-serif] bg-white-canvas text-jet-black relative pt-28 sm:pt-36 dark:bg-[#1d1d1f] dark:text-white/90"
      >
        <LanguageProvider>
          <ActiveSectionContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem={true}
              disableTransitionOnChange
            >
              <CursorParticles />
              <CommandPalette />
              <Header />
              {children}
              <Footer />
              <Toaster position="top-right" />
              <FixedControls />
            </ThemeProvider>
          </ActiveSectionContextProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
