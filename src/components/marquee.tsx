import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
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

const reviews = [
  {
    name: "Redux",
    img: <SiRedux size={50} color="#764abc" />,
  },
  {
    name: "React",
    img: <SiReact size={50} color="#61dbfb" />,
  },
  {
    name: "Kafka",
    img: <SiApachekafka size={50} />,
  },
  {
    name: "Javascript",
    img: <SiJavascript color="#F0DB4F" size={50} />,
  },
  {
    name: "Express",
    img: <SiExpress color="green" size={50} />,
  },
  {
    name: "Docker",
    img: <IoLogoDocker color="#0db7ed" size={50} />,
  },
  { name: "Next JS", img: <RiNextjsFill size={50} /> },
  {
    name: "Kubernetes",
    img: <SiKubernetes size={50} color="#3970e4 " />,
  },
  {
    name: "Mongodb",
    img: <SiMongodb color="green" size={50} />,
  },
  {
    name: "Github",
    img: <SiGithub size={50} />,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name }: { img: React.ReactNode; name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col items-center gap-2">
        {img}
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border ">
      <p className="text-3xl font-semibold mb-3">Tech Skills</p>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
    </div>
  );
}
