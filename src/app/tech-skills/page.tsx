"use client";
import React from "react";
import { motion } from "framer-motion";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
// import FlickeringGrid from "@/components/magicui/flickering-grid";

type Props = {};

const PageOne = (props: Props) => {
  return (
    <div className="relative flex h-[100vh] w-full items-center justify-center overflow-hidden rounded-lg  bg-background p-20 md:shadow-xl">
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

      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </div>
  );
};

export default PageOne;
