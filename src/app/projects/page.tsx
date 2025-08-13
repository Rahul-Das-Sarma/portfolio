"use client";
import Image from "next/image";
import React from "react";
import { Github, ExternalLink, Code, Star } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projectsData } from "./project-configs";

type Props = {};

const Page = (props: Props) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen">
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
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of MERN stack projects showcasing my expertise in
              full-stack development, from MongoDB and PostgreSQL databases to
              React frontends with Node.js backends.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group"
              >
                <div className="relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <Image
                        src={project.icon}
                        width={120}
                        height={80}
                        alt={project.title}
                        className="object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Code className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-medium">Tech Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.split(", ").map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs font-medium bg-accent rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex space-x-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors cursor-pointer"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href={project.web}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex p-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors cursor-pointer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </div>

                      <div className="flex items-center space-x-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">Featured</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/20 rounded-2xl transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="inline-flex flex-col items-center space-y-4 p-8 glass-morphism rounded-2xl">
              <h3 className="text-2xl font-bold">
                Interested in collaborating?
              </h3>
              <p className="text-muted-foreground">
                I&apos;m always open to discussing new opportunities and
                interesting projects.
              </p>
              <Link
                href="https://twitter.com/rahul_dofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Page;
