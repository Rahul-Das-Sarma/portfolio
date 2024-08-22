import React from "react";
import { motion } from "framer-motion";
import ZoomingCard from "./cards/zooming-card";

const PopupMenu = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className=" h-64 w-64 bg-white dark:bg-slate-800 rounded-lg shadow-xl"
    >
      <div className="p-3">
        <h1 className="text-lg mb-3">Chapters</h1>
        <ZoomingCard title="Technology Stack" />
        <ZoomingCard title="Projects" />
        <ZoomingCard title="About" />
      </div>
    </motion.div>
  );
};

export default PopupMenu;
