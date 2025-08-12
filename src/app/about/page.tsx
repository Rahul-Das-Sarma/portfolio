"use client";
import {
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Code,
  Heart,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";

type Props = {};

const About = (props: Props) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "IkureTechsoft Pvt. Ltd.",
      period: "2023 - Present",
      location: "India",
      description:
        "Leading a frontend team and building full-stack applications that solve real-world problems. Mentoring junior developers and implementing best practices.",
      highlights: [
        "Team Leadership",
        "Full-Stack Development",
        "Mentoring",
        "Architecture Design",
      ],
    },
    {
      title: "Frontend Developer",
      company: "BluespaceLabs Pvt. Ltd.",
      period: "2021 - 2023",
      location: "India",
      description:
        "Developed microfrontends and telecom products with focus on scalable and innovative solutions. Worked with modern React ecosystem and cloud technologies.",
      highlights: [
        "Microfrontends",
        "Telecom Solutions",
        "React Ecosystem",
        "Scalable Architecture",
      ],
    },
  ];

  const personalInfo = [
    { icon: MapPin, label: "Location", value: "India" },
    {
      icon: Mail,
      label: "Email",
      value: "rahuldsofficial@gmail.com",
      href: "mailto:rahuldsofficial@gmail.com",
    },
    { icon: Calendar, label: "Experience", value: "3+ Years" },
    { icon: Code, label: "Focus", value: "Frontend & Full-Stack" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rahuldsofficial/",
      label: "LinkedIn",
      color: "text-blue-600",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/rahul_dofficial",
      label: "Twitter",
      color: "text-blue-400",
    },
    {
      icon: Mail,
      href: "mailto:rahuldsofficial@gmail.com",
      label: "Email",
      color: "text-red-500",
    },
  ];

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
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about creating digital experiences that make a
              difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="lg:col-span-2 space-y-12"
            >
              {/* Introduction */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold font-serif">My Journey</h2>
                <div className="prose prose-lg dark:prose-invert">
                  <p className="text-muted-foreground leading-relaxed">
                    I am a self-taught developer who began my coding journey
                    through Udemy in 2019. What started as curiosity quickly
                    became a passion as I mastered React, JavaScript, MongoDB,
                    Express, and Node.js - technologies that laid the foundation
                    for my career.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, I specialize in building dynamic, responsive web
                    applications with a focus on user experience and
                    performance. I believe in writing clean, maintainable code
                    and staying up-to-date with the latest technologies and best
                    practices.
                  </p>
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="space-y-8"
              >
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                  <h2 className="text-3xl font-bold font-serif">Experience</h2>
                </div>

                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="relative bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-purple-600 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1 mt-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium bg-accent rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Personal Touch */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-purple-600" />
                  <h2 className="text-3xl font-bold font-serif">Beyond Code</h2>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    When I&apos;m not coding, I enjoy exploring new
                    technologies, contributing to open-source projects, and
                    sharing knowledge with the developer community. I believe in
                    continuous learning and am always excited to take on new
                    challenges that push my boundaries.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Personal Info */}
              <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
                <h3 className="text-xl font-bold">Quick Info</h3>
                <div className="space-y-4">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <info.icon className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        {info.href ? (
                          <Link
                            href={info.href}
                            className="font-medium hover:text-purple-600 transition-colors"
                          >
                            {info.value}
                          </Link>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
                <h3 className="text-xl font-bold">Connect</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <Link key={index} href={social.href} target="_blank">
                      <motion.div
                        whileHover={{ scale: 1.05, x: 5 }}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-all duration-300"
                      >
                        <social.icon className={`w-5 h-5 ${social.color}`} />
                        <span className="font-medium">{social.label}</span>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border border-border rounded-2xl p-6 text-center space-y-4">
                <h3 className="text-xl font-bold">Let&apos;s Work Together</h3>
                <p className="text-muted-foreground">
                  I&apos;m always interested in new opportunities and exciting
                  projects.
                </p>
                <Link href="mailto:rahuldsofficial@gmail.com">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get In Touch
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
