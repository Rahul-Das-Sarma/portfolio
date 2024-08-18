import React from "react";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import TypewriterEffect from "./typewriter-animation";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import GlassCard from "./cards/glass-cards";
import { motion } from "framer-motion";
import Motioncard from "./cards/motion-card";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="relative flex h-[500px] w-full items-center   overflow-hidden rounded-lg bg-background p-20 md:shadow-xl">
      <div className="w-100">
        <TypewriterEffect />
      </div>
      <div className=" absolute right-2">
        <div
          className=" h-5 w-5 bg-red-500 z-10 rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <Motioncard height="h-52" />
        <Motioncard height="h-60" />
      </div>

      {/* <motion.div
          className="absolute"
          style={{ translateX: "-50%", translateY: "-50%" }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="h-14 w-14"
            style={{ translateX: "150px" }} // Larger distance for a wider orbit
          >
            <GlassCard>
              <div className="h-14 w-14 flex justify-center items-center">
                <FaLinkedin size={35} />
              </div>
            </GlassCard>
          </motion.div>
        </motion.div> */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
};

export default Banner;
