"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr";
import { MdOutlineMenuBook } from "react-icons/md";
import PopupMenu from "./popup-menu";
import { useRouter, usePathname } from "next/navigation";

export function UiPlayer() {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const menuRef = React.useRef<HTMLDivElement>(null);

  const routes = ["/tech-skills", "/projects", "/about"];

  // Function to handle outside click
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    // Add event listener to detect outside clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component is unmounted or isOpen changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleNextClick = () => {
    const currentIndex = routes.indexOf(pathname);
    const nextIndex = (currentIndex + 1) % routes.length; // Cycles through the routes
    router.push(routes[nextIndex]);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {isOpen && (
          <div ref={menuRef} className="absolute -top-[280px]">
            <PopupMenu />
          </div>
        )}
      </AnimatePresence>
      <div className="relative">
        <Dock magnification={60} distance={100}>
          <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
            <GrChapterPrevious
              className="size-full"
              onClick={() => router.back()}
            />
          </DockIcon>
          <DockIcon className="bg-black/10 dark:bg-white/10 p-3 relative">
            <MdOutlineMenuBook
              className="size-full"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          </DockIcon>

          <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
            <GrChapterNext onClick={handleNextClick} className="size-full" />
          </DockIcon>
        </Dock>
      </div>
    </div>
  );
}
