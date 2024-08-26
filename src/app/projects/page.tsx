"use client";
import GlassCard from "@/components/cards/glass-cards";
import TypingEffect from "@/components/typingEffect";
import Image from "next/image";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="p-5">
      <h1 className="text-xl ">Projects</h1>
      <div className="flex mt-5">
        <div className="m-4">
          <GlassCard>
            <div className="w-64 h-96 p-5 flex flex-col justify-center">
              <Image
                src="https://cdn.pixabay.com/photo/2020/05/31/19/26/cherries-5243873_1280.jpg"
                width={300}
                height={400}
                alt="sa"
              />
              <div>
                <p className="text-lg mt-3"> Title </p>
                <p className="w-56">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
        <div className="m-4">
          <GlassCard>
            <div className="w-64 h-96 p-5 flex items-center justify-center">
              <h1>
                {" "}
                <TypingEffect text="Coming Soon..." />
              </h1>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Page;
