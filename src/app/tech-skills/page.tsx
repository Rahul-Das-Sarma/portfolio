"use client";
import React from "react";
import { motion } from "framer-motion";
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

type Props = {};
const arrObj = [
  { icon: <SiReact size={70} />, title: "React" },
  { icon: <SiRedux />, title: "Redux" },
  { icon: <SiJavascript />, title: "Javascript" },
  { icon: <SiApachekafka />, title: "Kafka" },
  { icon: <SiExpress />, title: "Express" },
  { icon: <SiGithub />, title: "Github" },
  { icon: <IoLogoDocker />, title: "Docker" },
  { icon: <RiNextjsFill />, title: "Next JS" },
  { icon: <SiKubernetes />, title: "Kubernetes" },
  { icon: <SiMongodb />, title: "Mongo db" },
];

const TechSkill = (props: Props) => {
  return (
    <div className="relative  h-[100vh] w-full  overflow-hidden rounded-lg  bg-background p-20 md:shadow-xl">
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
        <h1 className="text-lg font-bold">Technology Stack</h1>
        <div className="flex flex-wrap m-5">
          {arrObj.map((ele) => (
            <div key={ele.title} className=" flex justify-center items-center">
              <GlassCard>
                <div className="flex justify-center items-center h-44 w-40">
                  {ele.icon}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
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

export default TechSkill;
