"use client";
import GlassCard from "@/components/cards/glass-cards";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="p-5">
      <h1 className="text-xl mt-5 mb-10">About</h1>
      <div className="flex">
        <div className="w-2/4 mr-5">
          <p className="">
            I am a self-taught developer who started learning coding through
            Udemy in 2019. My early focus was on mastering React, JavaScript,
            MongoDB, Express, and Node.js, which laid the foundation for coding
            journey.
          </p>
          <h1 className="text-lg my-3 underline">
            BluespaceLabs Pvt. Ltd. (2021-2023)
          </h1>
          <p className="mb-3">
            In 2021, I joined Bluespacelabs as a Frontend Developer, where I
            played a key role in developing Microfrontends and a telecom
            product. My time there honed my expertise in creating scalable and
            innovative solutions.
          </p>
          <h1 className="text-lg my-3 underline">
            IkureTechsoft Pvt. Ltd. (2023-Present)
          </h1>
          <p>
            Currently, I lead a small frontend team at Ikure Techsoft. Alongside
            my professional role, I am actively building full-stack projects
            that solve real-world problems.
          </p>
        </div>
        <div className="w-1/3 ml-10">
          <GlassCard>
            <div className="p-5">
              <h1 className="text-md">Contact Me</h1>
              <div className="flex">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  whileHover={{ scale: 1.5 }}
                  exit={{ rotate: -360, scale: 0 }}
                  className="flex justify-center items-center h-44 w-40"
                >
                  <FaLinkedinIn size={50} />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  whileHover={{ scale: 1.5 }}
                  exit={{ rotate: -360, scale: 0 }}
                  className="flex justify-center items-center h-44 w-40"
                >
                  <FaXTwitter size={50} />
                </motion.div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default About;
