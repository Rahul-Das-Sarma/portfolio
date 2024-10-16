"use client";
import GlassCard from "@/components/cards/glass-cards";
// import TypingEffect from "@/components/typingEffect";
import Image from "next/image";
import React from "react";
import { SiGithub } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
import Link from "next/link";
import { projectsData } from "./project-configs";
type Props = {};

const Page = (props: Props) => {
  return (
    <div className="p-5">
      <h1 className="text-xl ">Projects</h1>
      <div className="flex mt-5">
        <div className="m-4">
          {projectsData.map((ele) => (
            <GlassCard key={ele.id}>
              <div className="w-full h-45 p-5 flex justify-center">
                <Image src={ele.icon} width={300} height={100} alt="sa" />
                <div className="ml-3">
                  <p className="text-lg mt-3"> {ele.title} </p>
                  <p className="w-full"> {ele.description}</p>
                  <p className="text-lg mt-3"> Tech Stack : </p>
                  <p className="w-full"> {ele.tech}</p>
                  <div className="flex mt-3">
                    <Link href={ele.github} target="blank">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        initial={{ scale: 1 }}
                      >
                        <SiGithub size={50} />
                      </motion.div>
                    </Link>

                    <Link href={ele.web} target="blank">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        initial={{ scale: 1 }}
                      >
                        <TbWorldWww size={50} className="ml-3" />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
