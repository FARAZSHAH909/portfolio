"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/social-icons";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPython, SiBlockchaindotcom, SiWebassembly } from "react-icons/si";
import { MdSecurity, MdOutlineNetworkCheck } from "react-icons/md";
import { AiOutlineRobot } from "react-icons/ai";
import { DiJava } from "react-icons/di";
import { BsWindowDesktop, BsServer } from "react-icons/bs";

export default function HeroSection() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-32 pb-16 min-h-screen flex items-center">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-lg mb-4 text-zinc-400 animate-fade-in">Welcome to My Portfolio</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 heading-gradient animate-fade-in-up">
              Hi, I'm <span className="text-pink">Faraz Shah</span> <br />
              a <span className="typed-text">Freelance Developer</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl mb-8 animate-fade-in-up delay-100">
              I'm a freelance developer, specializing in tech assignments like web and app development, blockchain, cybersecurity, AI, Python, Java, and more. I deliver scalable, user-friendly solutions tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <span className="text-sm text-zinc-400 block mb-3">Connect with Me</span>
                <div className="flex gap-3">
                  <Link
                    href="https://github.com/FARAZSHAH909"
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink hover:shadow-none transition-all duration-200 hover:scale-110"
                    aria-label="GitHub Profile"
                  >
                    <GitHubIcon className="h-5 w-5 text-white" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/faraz-shah-934947306/"
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink hover:shadow-none transition-all duration-200 hover:scale-110"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedInIcon className="h-5 w-5 text-white" />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink hover:shadow-none transition-all duration-200 hover:scale-110"
                    aria-label="Twitter Profile"
                  >
                    <TwitterIcon className="h-5 w-5 text-white" />
                  </Link>
                </div>
              </div>

              <div>
                <span className="text-sm text-zinc-400 block mb-3">Core Skills</span>
                <div className="flex gap-3 flex-wrap">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink/20 transition-all duration-200 hover:scale-110" title="HTML">
                    <FaHtml5 className="h-5 w-5 text-orange-500" />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink/20 transition-all duration-200 hover:scale-110" title="CSS">
                    <FaCss3Alt className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink/20 transition-all duration-200 hover:scale-110" title="JavaScript">
                    <FaJs className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink/20 transition-all duration-200 hover:scale-110" title="React">
                    <FaReact className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink/20 transition-all duration-200 hover:scale-110" title="Next.js">
                    <SiNextdotjs className="h-5 w-5 text-black" />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink/20 transition-all duration-200 hover:scale-110" title="Tailwind CSS">
                    <SiTailwindcss className="h-5 w-5 text-teal-400" />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink/20 transition-all duration-200 hover:scale-110" title="TypeScript">
                    <SiTypescript className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink/20 transition-all duration-200 hover:scale-110" title="Python">
                    <SiPython className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink/20 transition-all duration-200 hover:scale-110" title="Java">
                    <DiJava className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink/20 transition-all duration-200 hover:scale-110" title="Cybersecurity">
                    <MdSecurity className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink/20 transition-all duration-200 hover:scale-110" title="Blockchain">
                    <SiBlockchaindotcom className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink/20 transition-all duration-200 hover:scale-110" title="AI">
                    <AiOutlineRobot className="h-5 w-5 text-black" />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink/20 transition-all duration-200 hover:scale-110" title="Desktop Applications">
                    <BsWindowDesktop className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink/20 transition-all duration-200 hover:scale-110" title="Backend Development">
                    <BsServer className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink/20 transition-all duration-200 hover:scale-110" title="Networking">
                    <MdOutlineNetworkCheck className="h-5 w-5 text-blue-700" />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink/20 transition-all duration-200 hover:scale-110" title="WebAssembly">
                    <SiWebassembly className="h-5 w-5 text-indigo-600" />
                  </div>
                </div>
              </div>
            </div>

            <Button
              className="mt-8 bg-pink hover:bg-pink/90 text-white font-medium px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <Link href="#contacts" onClick={(e) => handleScroll(e, "contacts")}>
                Work with Me
              </Link>
            </Button>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
            <div className="relative w-full max-w-[350px] aspect-[3/4] group">
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-pink/10 rounded-lg z-0 group-hover:scale-105 transition-transform duration-300"></div>
              <Image
                src="/farazshah.jpeg"
                alt="Faraz Shah"
                fill
                className="rounded-lg z-10 object-cover group-hover:shadow-lg transition-shadow duration-300"
              />
            </div>

            <div className="absolute bottom-4 right-4 left-4 mx-auto bg-gradient-to-r from-[#2e3134] to-[#212428] p-4 rounded-lg shadow-lg max-w-xs z-20 animate-fade-in-up delay-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink to-purple-500 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Tech Assignments Delivered</h4>
                  <p className="text-xs text-zinc-400">By Faraz Shah </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}