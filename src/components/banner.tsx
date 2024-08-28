import React, { useEffect, useState } from "react";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import TypewriterEffect from "./typewriter-animation";

import SolarSystem from "./solar-system";
import { OrbitingCirclesDemo } from "./circle";

type Props = {};

const Banner = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay setting the visibility to ensure the transition is noticeable
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 0); // You can add a slight delay if needed, e.g., 100ms

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, []);
  return (
    <div className="relative flex h-full w-full items-center   overflow-hidden rounded-lg bg-background p-20 ">
      <div className="relative">
        <div className="absolute left-0 -top-10">
          <TypewriterEffect />{" "}
        </div>
        <p
          className={`text-lg mt-4 text-wrap w-1/2 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          I am a dedicated software engineer with 3 years of experience,
          specializing in front-end web development. My expertise lies in
          building dynamic and responsive applications using React, Next.js, and
          JavaScript. I also have experience in backend development with
          Node.js. I have a proven track record of developing robust telecom
          SaaS products, innovative chat applications, and comprehensive health
          management solutions.
        </p>
      </div>
      <div className=" absolute right-20">
        {/* <SolarSystem /> */}
        <OrbitingCirclesDemo />
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
