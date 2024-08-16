"use client";
import Header from "@/components/Header";
import useWindowSize from "@/hooks/useWIndowSize";

import Banner from "@/components/banner";

export default function Home() {
  const { width, height } = useWindowSize();
  console.log(width, height);
  return (
    <div>
      <Header />
      {/* Content */}
      <Banner />
    </div>
  );
}
