import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const SolarSystem: React.FC = () => {
  // Use animation controls for each orbit
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const { theme } = useTheme();

  const createOrbitVariants = (duration: number) => ({
    rotate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration,
        ease: "linear",
      },
    },
  });

  // Start the animations when the component mounts
  useEffect(() => {
    controls1.start("rotate");
    controls2.start("rotate");
    controls3.start("rotate");
  }, [controls1, controls2, controls3]);

  const handleHoverStart = (controls: any) => {
    controls.stop(); // Stop the animation
  };

  const handleHoverEnd = (controls: any) => {
    controls.start("rotate"); // Resume the animation
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Sun */}
      <motion.div className="relative">
        {/* <Sun size={80} color="gold" /> */}
        {theme === "light" ? (
          <Sun size={80} color="gold" />
        ) : (
          <Moon size={80} />
        )}
        {/* <Sun */}

        {/* First Orbit */}
        <motion.div
          className="
            absolute 
            top-1/2 
            left-1/2 
            w-[200px] 
            h-[200px] 
            -ml-[100px] 
            -mt-[100px] 
            rounded-full 
            border 
            border-dashed 
            border-gray-400 
            flex 
            justify-start 
            items-center
          "
          variants={createOrbitVariants(10)}
          animate={controls1}
          onHoverStart={() => handleHoverStart(controls1)}
          onHoverEnd={() => handleHoverEnd(controls1)}
        >
          <FaGithub
            size={30}
            className="ml-[170px] dark:text-white text:black"
          />
        </motion.div>

        {/* Second Orbit */}
        <motion.div
          className="
            absolute 
            top-1/2 
            left-1/2 
            w-[300px] 
            h-[300px] 
            -ml-[150px] 
            -mt-[150px] 
            rounded-full 
            border 
            border-dashed 
            border-gray-400 
            flex 
            justify-start 
            items-center
          "
          variants={createOrbitVariants(15)}
          animate={controls2}
          // onHoverStart={() => handleHoverStart(controls2)}
          // onHoverEnd={() => handleHoverEnd(controls2)}
        >
          <FaXTwitter
            size={30}
            // color="black dark:white"
            className="ml-[270px] dark:text-white text:black"
          />
        </motion.div>

        {/* Third Orbit */}
        <motion.div
          className="
            absolute 
            top-1/2 
            left-1/2 
            w-[400px] 
            h-[400px] 
            -ml-[200px] 
            -mt-[200px] 
            rounded-full 
            border 
            border-dashed 
            border-gray-400 
            flex 
            justify-start 
            items-center
          "
          variants={createOrbitVariants(18)}
          animate={controls3}
          // onHoverStart={() => handleHoverStart(controls3)}
          // onHoverEnd={() => handleHoverEnd(controls3)}
        >
          <FaLinkedin size={30} color="#0077B5" className="ml-[370px]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SolarSystem;
