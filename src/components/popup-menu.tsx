import React from "react";
import { motion } from "framer-motion";
import ZoomingCard from "./cards/zooming-card";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const titles = [
  { title: "Home", route: "/" },
  { title: "Technology Stack", route: "/tech-skills" },
  { title: "Projects", route: "/projects" },
  { title: "About", route: "/about" },
];
const PopupMenu = () => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      exit={{ rotate: -360, scale: 0 }}
      className=" h-3/4 w-64 bg-white dark:bg-slate-800 rounded-lg shadow-xl"
    >
      <div className="p-3">
        <h1 className="text-lg mb-3">Chapters</h1>
        {titles.map((ele) => (
          <div key={ele.title} onClick={() => router.push(ele.route)}>
            <ZoomingCard title={ele.title} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PopupMenu;
