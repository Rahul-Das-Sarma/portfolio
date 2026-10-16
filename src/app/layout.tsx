import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/lib/site";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "Senior Frontend Developer working with React, Next.js, and Node.js. Portfolio of shipped products including AgentGuard, UI Atelier, Lotion, and Thumbnail Creator.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: "Rahul Das Sarma | Senior Frontend Developer",
  description,
  keywords: [
    "Senior Frontend Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "Full-Stack Developer",
    "TypeScript",
    "Rahul Das Sarma",
  ],
  authors: [{ name: profile.name, url: profile.site }],
  openGraph: {
    title: "Rahul Das Sarma | Senior Frontend Developer",
    description,
    type: "website",
    url: profile.site,
  },
  twitter: {
    card: "summary",
    title: "Rahul Das Sarma | Senior Frontend Developer",
    description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: profile.site,
  address: {
    "@type": "PostalAddress",
    addressCountry: "India",
  },
  sameAs: [profile.github, profile.linkedin, profile.x],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          fontSans.variable,
          "min-h-screen overflow-x-hidden bg-background font-sans text-foreground antialiased"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <a
            href="#top"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
          >
            Skip to content
          </a>
          <Header />
          {children}
          <SiteFooter />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
