"use client";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Download,
  ExternalLink,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { OrbitingCirclesDemo } from "@/components/circle";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Rahul-Das-Sarma",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rahuldsofficial/",
      label: "LinkedIn",
    },
    {
      icon: FaXTwitter,
      href: "https://twitter.com/rahul_dofficial",
      label: "X",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="section-container">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
          >
            {/* Content */}
            <div className="space-y-8">
              <motion.div variants={fadeInUp} className="space-y-4">
                <motion.p
                  className="text-lg text-muted-foreground font-medium"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  Hello, I&apos;m
                </motion.p>
                <motion.h1
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  className="text-5xl lg:text-7xl font-bold font-serif"
                >
                  <span className="gradient-text">Rahul</span>
                  <br />
                  <span className="text-foreground">Das Sarma</span>
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  className="text-xl lg:text-2xl text-muted-foreground"
                >
                  MERN Stack Developer & Software Engineer
                </motion.p>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="text-lg leading-relaxed text-muted-foreground max-w-2xl"
              >
                I specialize in building full-stack web applications using the
                <span className="text-purple-600 font-semibold">
                  {" "}
                  MERN stack (MongoDB, Express.js, React, Node.js)
                </span>{" "}
                and PostgreSQL databases. With comprehensive expertise in modern
                web development, I create innovative solutions that solve
                real-world problems.
              </motion.p>

              {/* Social Links */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="flex items-center space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <Link key={social.label} href={social.href} target="_blank">
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative p-3 rounded-full bg-accent hover:bg-accent/80 transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        {social.label}
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span>View My Work</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center space-x-3 px-8 py-4 border-2 border-border rounded-full font-semibold hover:bg-accent transition-all duration-300"
                >
                  <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  <span>Download CV</span>
                </motion.button>
              </motion.div>
            </div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              <div className="floating-animation">
                <OrbitingCirclesDemo />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Pattern */}
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </section>
    </div>
  );
}
