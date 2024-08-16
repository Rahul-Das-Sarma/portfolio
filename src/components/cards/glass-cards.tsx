import React from "react";

type Props = {
  children: React.ReactNode;
};

const GlassCard = (props: Props) => {
  return (
    <div className="h-full w-full bg-purple-300 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
      {props.children}
    </div>
  );
};

export default GlassCard;
