"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { navItems, profile } from "@/lib/site";
import { cn } from "@/lib/utils";

const sectionIds = ["top", "work", "experience", "about", "contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.4] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="section-container flex h-16 items-center justify-between gap-4">
        <Link href="/#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center border border-foreground text-[11px] font-semibold tracking-[0.14em]">
            RDS
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-medium leading-none">{profile.name}</span>
            <span className="mt-1 block text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Frontend
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const id = item.href.split("#")[1];
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm transition-colors",
                  active === id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <a
            href={profile.resume}
            download={profile.resumeName}
            className="hidden h-10 items-center border border-foreground bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-primary hover:border-primary hover:text-primary-foreground sm:inline-flex"
          >
            Résumé
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center border border-border lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-border bg-background lg:hidden" aria-label="Mobile">
          <div className="section-container flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="border-b border-border py-4 text-lg"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={profile.resume}
              download={profile.resumeName}
              className="mt-4 inline-flex h-12 items-center justify-center bg-foreground text-sm font-medium text-background"
              onClick={() => setOpen(false)}
            >
              Download résumé
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
