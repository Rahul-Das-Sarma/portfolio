import React from "react";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import TypewriterEffect from "./typewriter-animation";

import SolarSystem from "./solar-system";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="relative flex h-[500px] w-full items-center   overflow-hidden rounded-lg bg-background p-20 ">
      <div className="w-100">
        <TypewriterEffect />{" "}
      </div>
      <div className=" absolute right-44">
        <div
          className=" h-5 w-5 bg-red-500 z-10 rounded-full"
          style={{
            top: "50%",
            left: "50%",
          }}
        />
        <SolarSystem />
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
