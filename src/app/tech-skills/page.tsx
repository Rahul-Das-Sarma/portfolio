"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  SiRedux,
  SiReact,
  SiJavascript,
  SiExpress,
  SiGithub,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiNginx,
  SiLinux,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  Code2,
  Database,
  Cloud,
  Settings,
  Layers,
  Monitor,
} from "lucide-react";
import Header from "@/components/Header";
import DotPattern from "@/components/magicui/dot-pattern";

interface TechItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  category: string;
  proficiency: number;
  color: string;
}

const techStack: TechItem[] = [
  // Frontend
  {
    icon: SiReact,
    title: "React",
    category: "Frontend",
    proficiency: 95,
    color: "#61dbfb",
  },
  {
    icon: RiNextjsFill,
    title: "Next.js",
    category: "Frontend",
    proficiency: 90,
    color: "#000000",
  },
  {
    icon: SiJavascript,
    title: "JavaScript",
    category: "Frontend",
    proficiency: 95,
    color: "#F0DB4F",
  },
  {
    icon: SiTypescript,
    title: "TypeScript",
    category: "Frontend",
    proficiency: 85,
    color: "#3178C6",
  },
  {
    icon: SiTailwindcss,
    title: "Tailwind CSS",
    category: "Frontend",
    proficiency: 90,
    color: "#06B6D4",
  },
  {
    icon: SiRedux,
    title: "Redux",
    category: "Frontend",
    proficiency: 85,
    color: "#764abc",
  },

  // Backend
  {
    icon: SiNodedotjs,
    title: "Node.js",
    category: "Backend",
    proficiency: 85,
    color: "#339933",
  },
  {
    icon: SiExpress,
    title: "Express",
    category: "Backend",
    proficiency: 80,
    color: "#000000",
  },

  // Database
  {
    icon: SiMongodb,
    title: "MongoDB",
    category: "Database",
    proficiency: 85,
    color: "#47A248",
  },
  {
    icon: SiPostgresql,
    title: "PostgreSQL",
    category: "Database",
    proficiency: 75,
    color: "#336791",
  },

  // DevOps & Cloud
  {
    icon: SiDocker,
    title: "Docker",
    category: "DevOps",
    proficiency: 80,
    color: "#0db7ed",
  },
  {
    icon: SiKubernetes,
    title: "Kubernetes",
    category: "DevOps",
    proficiency: 70,
    color: "#3970e4",
  },
  {
    icon: FaAws,
    title: "AWS",
    category: "DevOps",
    proficiency: 75,
    color: "#FF9900",
  },
  {
    icon: SiVercel,
    title: "Vercel",
    category: "DevOps",
    proficiency: 85,
    color: "#000000",
  },
  {
    icon: SiNginx,
    title: "Nginx",
    category: "DevOps",
    proficiency: 70,
    color: "#009639",
  },

  // Tools
  {
    icon: SiGithub,
    title: "Git",
    category: "Tools",
    proficiency: 90,
    color: "#F05032",
  },
  {
    icon: SiLinux,
    title: "Linux",
    category: "Tools",
    proficiency: 75,
    color: "#FCC624",
  },
];

const categories = [
  { name: "All", icon: Monitor, color: "text-purple-600" },
  { name: "Frontend", icon: Code2, color: "text-blue-600" },
  { name: "Backend", icon: Layers, color: "text-green-600" },
  { name: "Database", icon: Database, color: "text-orange-600" },
  { name: "DevOps", icon: Cloud, color: "text-red-600" },
  { name: "Tools", icon: Settings, color: "text-gray-600" },
];

const TechSkill: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTech =
    selectedCategory === "All"
      ? techStack
      : techStack.filter((tech) => tech.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20">
        <div className="section-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold font-serif mb-6">
              <span className="gradient-text">Technology</span> Stack
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The tools and technologies I use to bring ideas to life
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300",
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "bg-accent hover:bg-accent/80"
                )}
              >
                <category.icon
                  className={cn(
                    "w-4 h-4",
                    selectedCategory === category.name
                      ? "text-white"
                      : category.color
                  )}
                />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Tech Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            {filteredTech.map((tech, index) => (
              <motion.div
                key={tech.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 group-hover:scale-110 transition-transform duration-300">
                      <tech.icon
                        className="w-8 h-8"
                        {...({ style: { color: tech.color } } as any)}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-center font-semibold mb-3">
                    {tech.title}
                  </h3>

                  {/* Proficiency Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="font-medium">{tech.proficiency}%</span>
                    </div>
                    <div className="w-full bg-accent rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.proficiency}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium bg-accent rounded-full">
                      {tech.category}
                    </span>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/20 rounded-2xl transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: "Frontend Technologies", value: "6+" },
              { label: "Backend Technologies", value: "2+" },
              { label: "Database Systems", value: "2+" },
              { label: "DevOps Tools", value: "5+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Background Pattern */}
          <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] opacity-30"
            )}
          />
        </div>
      </section>
    </div>
  );
};

export default TechSkill;
