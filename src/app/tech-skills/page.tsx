"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

const PageOne = (props: Props) => {
  return (
    <div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        exit={{ rotate: -360, scale: 0 }}
      >
        Technology Stack
      </motion.div>
    </div>
  );
};

export default PageOne;
