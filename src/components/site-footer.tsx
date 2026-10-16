import Link from "next/link";
import { navItems, profile } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="section-container flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-2xl font-semibold tracking-[-0.045em]">{profile.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">{profile.role}</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Footer">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-muted-foreground hover:text-foreground">
              {item.name}
            </Link>
          ))}
          <Link href="/#skills" className="text-muted-foreground hover:text-foreground">
            Skills
          </Link>
        </nav>
        <div className="flex gap-5 text-sm">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="section-container flex items-center justify-between border-t border-border py-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
        <span>© {year}</span>
        <span>Open to connecting</span>
      </div>
    </footer>
  );
}
