import React from "react";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import TypewriterEffect from "./typewriter-animation";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import GlassCard from "./cards/glass-cards";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="relative flex h-[500px] w-full items-center   overflow-hidden rounded-lg bg-background p-20 md:shadow-xl">
      <div className="w-100">
        <TypewriterEffect />
      </div>
      <div className="h-52 w-44 absolute right-2">
        <div className="h-14 w-14">
          <GlassCard>
            <div className=" h-14 w-14 flex justify-center items-center">
              <BsTwitterX size={35} />
            </div>
          </GlassCard>
        </div>
        <div className="h-14 w-14">
          <GlassCard>
            <div className="h-14 w-14 flex justify-center items-center">
              <FaLinkedin size={35} />
            </div>
          </GlassCard>
        </div>
      </div>
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
