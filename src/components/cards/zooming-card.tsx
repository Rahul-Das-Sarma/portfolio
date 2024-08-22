import React from "react";
import { motion } from "framer-motion";
type Props = {
  title: string;
};

const ZoomingCard = (props: Props) => {
  const [hover, setHover] = React.useState(false);
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative rounded p-3 text-sm cursor-pointer mb-2
        ${hover ? "border-0" : "border border-gray-400"}`}
    >
      <div
        className={`absolute inset-0 rounded border-2
        ${
          hover
            ? "border-blue-500 animate-border-progress"
            : "border-transparent"
        }`}
        style={{
          borderImageSlice: 1,
          borderImageSource: hover
            ? "linear-gradient(90deg, #3B82F6 0%, #3B82F6 100%)"
            : "none",
        }}
      ></div>
      <div className="relative z-10">{props.title}</div>
    </motion.div>
  );
};

export default ZoomingCard;
