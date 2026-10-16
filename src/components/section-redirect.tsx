"use client";

import Link from "next/link";
import { useEffect } from "react";

export function SectionRedirect({
  hash,
  label,
}: {
  hash: string;
  label: string;
}) {
  useEffect(() => {
    window.location.replace(`/${hash}`);
  }, [hash]);

  return (
    <main className="grid min-h-screen place-items-center px-6">
      <p className="text-sm text-muted-foreground">
        Opening {label}.{" "}
        <Link href={`/${hash}`} className="text-foreground underline underline-offset-4">
          Continue
        </Link>
      </p>
    </main>
  );
}
