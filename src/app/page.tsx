"use client";
import Header from "@/components/Header";
import useWindowSize from "@/hooks/useWIndowSize";

import Banner from "@/components/banner";
import { UiPlayer } from "@/components/ui-player";
import { motion } from "framer-motion";
// import { MarqueeDemo } from "@/components/marquee";

export default function Home() {
  const { width, height } = useWindowSize();
  console.log(width, height);
  return (
    <motion.div
      exit={{ rotate: 360, scale: 0 }}
      className="relative overflow-hidden h-[100vh]"
    >
      <Header />
      {/* Content */}
      <Banner />
      {/* <MarqueeDemo /> */}
      <div className="absolute left-[45%] bottom-10">
        <UiPlayer />
      </div>
    </motion.div>
  );
}
