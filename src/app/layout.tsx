import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { UiPlayer } from "@/components/ui-player";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Rahul Das Sarma - Software Engineer & Frontend Developer",
  description:
    "Experienced software engineer specializing in React, Next.js, and modern web development. Building innovative solutions with 3+ years of expertise in frontend and full-stack development.",
  keywords: [
    "Software Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "JavaScript",
    "Web Development",
  ],
  authors: [{ name: "Rahul Das Sarma" }],
  openGraph: {
    title: "Rahul Das Sarma - Software Engineer",
    description:
      "Experienced software engineer specializing in React, Next.js, and modern web development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          fontSans.variable,
          fontSerif.variable,
          "font-sans antialiased relative overflow-x-hidden min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <div className="fixed left-1/2 bottom-8 transform -translate-x-1/2 z-50">
            <UiPlayer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
