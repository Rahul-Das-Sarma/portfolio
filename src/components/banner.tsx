import React from "react";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import TypewriterEffect from "./typewriter-animation";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="relative flex h-[500px] w-full items-center  overflow-hidden rounded-lg bg-background p-20 md:shadow-xl">
      <div className="w-100">
        <TypewriterEffect />
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
