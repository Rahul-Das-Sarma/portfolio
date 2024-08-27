"use client";
import GlassCard from "@/components/cards/glass-cards";
import TypingEffect from "@/components/typingEffect";
import Image from "next/image";
import React from "react";
import { SiGithub } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
type Props = {};

const Page = (props: Props) => {
  return (
    <div className="p-5">
      <h1 className="text-xl ">Projects</h1>
      <div className="flex mt-5">
        <div className="m-4">
          <GlassCard>
            <div className="w-full h-96 p-5 flex justify-center">
              <Image
                src="https://cdn.pixabay.com/photo/2020/05/31/19/26/cherries-5243873_1280.jpg"
                width={300}
                height={400}
                alt="sa"
              />
              <div className="ml-3">
                <p className="text-lg mt-3"> Title </p>
                <p className="w-full">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                </p>
                <p className="text-lg mt-3"> Tech Stack : </p>
                <p className="w-full">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry wn
                </p>
                <div className="flex mt-3">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    initial={{ scale: 1 }}
                  >
                    <SiGithub size={50} />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    initial={{ scale: 1 }}
                  >
                    <TbWorldWww size={50} className="ml-3" />
                  </motion.div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
        {/* <div className="m-4">
          <GlassCard>
            <div className="w-64 h-96 p-5 flex items-center justify-center">
              <h1>
                {" "}
                <TypingEffect text="Coming Soon..." />
              </h1>
            </div>
          </GlassCard>
        </div> */}
      </div>
    </div>
  );
};

export default Page;
