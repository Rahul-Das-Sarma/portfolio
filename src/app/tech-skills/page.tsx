"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useDragControls, PanInfo } from "framer-motion";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import {
  SiRedux,
  SiReact,
  SiApachekafka,
  SiJavascript,
  SiExpress,
  SiGithub,
} from "react-icons/si";
import { IoLogoDocker } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiKubernetes } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import GlassCard from "@/components/cards/glass-cards";
import TypingEffect from "@/components/typingEffect";
import { FaAws } from "react-icons/fa6";

interface TechItem {
  icon: JSX.Element;
  title: string;
}

const arrObj: TechItem[] = [
  { icon: <SiReact size={70} color="#61dbfb" />, title: "React" },
  { icon: <SiRedux size={70} color="#764abc" />, title: "Redux" },
  { icon: <SiJavascript size={70} color="#F0DB4F" />, title: "Javascript" },
  { icon: <SiApachekafka size={70} />, title: "Kafka" },
  { icon: <SiExpress size={70} color="green" />, title: "Express" },
  { icon: <SiGithub size={70} />, title: "Github" },
  { icon: <IoLogoDocker size={70} color="#0db7ed" />, title: "Docker" },
  { icon: <RiNextjsFill size={70} />, title: "Next JS" },
  { icon: <SiKubernetes size={70} color="#3970e4 " />, title: "Kubernetes" },
  { icon: <SiMongodb size={70} color="green" />, title: "Mongo db" },
  { icon: <FaAws size={70} />, title: "AWS" },
];

const TechSkill: React.FC = () => {
  const controls = useDragControls();
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<{
    [key: string]: { x: number; y: number };
  }>({});
  const [initialPositions, setInitialPositions] = useState<{
    [key: string]: { x: number; y: number };
  }>({});

  useEffect(() => {
    const initialPos: { [key: string]: { x: number; y: number } } = {};

    setInitialPositions(initialPos);
    setPositions(initialPos); // Initialize positions at the start
  }, []);

  const handleReset = () => {
    setPositions(initialPositions);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[100vh] w-full overflow-hidden rounded-lg bg-background p-20 md:shadow-xl"
    >
      <h1 className="text-lg font-bold">Technology Stack (Draggable Cards)</h1>

      <div className="flex flex-wrap m-3">
        {arrObj.map((ele, index) => (
          <motion.div
            drag
            dragControls={controls}
            dragConstraints={{
              top: -100,
              left: -100,
              right: 100,
              bottom: 100,
            }}
            key={ele.title}
            className="flex justify-center items-center m-5"
          >
            <GlassCard>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                exit={{ rotate: -360, scale: 0 }}
                className="flex justify-center items-center h-44 w-40"
              >
                {ele.icon}
              </motion.div>
              <TypingEffect text={ele.title} />
            </GlassCard>
          </motion.div>
        ))}
      </div>

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

export default TechSkill;
