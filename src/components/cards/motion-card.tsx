import React from "react";
import { motion } from "framer-motion";
import GlassCard from "./glass-cards";
import { BsTwitterX } from "react-icons/bs";

interface Motioncard {
  height: string | "h-52";
}

const Motioncard = ({ height }: Motioncard) => {
  return (
    <motion.div
      className={`${height} w-44  flex gap-x-10 border rounded-full`}
      style={{ translateX: "-50%", translateY: "-50%" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      <div className="h-14 w-14">
        {/* First orbit*/}
        <GlassCard>
          <div className=" h-14 w-14 flex justify-center items-center">
            <BsTwitterX size={35} />
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
};

export default Motioncard;
