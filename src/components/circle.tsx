import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

export function OrbitingCirclesDemo() {
  const { theme } = useTheme();
  return (
    <div className="relative flex h-[500px] w-[500px] flex-col items-center justify-center overflow-hidden rounded-lg ">
      {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Circles
      </span> */}
      {theme === "light" ? <Sun size={80} color="gold" /> : <Moon size={80} />}

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <IoLogoYoutube color="#FF0000" size={20} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Link href={"https://twitter.com/rahul_dofficial"} target="_blank">
          <FaXTwitter size={20} />
        </Link>
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <Link
          href={"https://www.linkedin.com/in/rahuldsofficial/"}
          target="_blank"
        >
          <FaLinkedin size={40} color="#0072b1" />
        </Link>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Link href={"https://github.com/Rahul-Das-Sarma"} target="_blank">
          <FaGithub size={40} />
        </Link>
      </OrbitingCircles>
    </div>
  );
}
