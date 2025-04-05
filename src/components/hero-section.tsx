import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FacebookIcon, GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/social-icons";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { BsGrid   } from 'react-icons/bs';

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-16 min-h-screen flex items-center">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-lg mb-4 text-zinc-400">Welcome to my world</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 heading-gradient">
              Hi, I'm <span className="text-pink">Faraz Shah</span> <br />
              a <span className="typed-text">Front-End Developer.</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl mb-8">
            I am a Front-End Developer skilled in HTML, CSS, JavaScript, and React, Next, and Tailwind creating responsive and user-friendly websites. I focus on clean UI, performance, and modern design to enhance user experience. My goal is to develop efficient, scalable, and visually appealing web solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <span className="text-sm text-zinc-400 block mb-3">find with me</span>
                <div className="flex gap-3">
                  <Link href="https://facebook.com" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink hover:shadow-none transition-all">
                    <FacebookIcon className="h-5 w-5 text-white" />
                  </Link>
                  <Link href="https://github.com/FARAZSHAH909" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink hover:shadow-none transition-all">
                    <GitHubIcon className="h-5 w-5 text-white" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/faraz-shah-934947306/" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink hover:shadow-none transition-all">
                    <LinkedInIcon className="h-5 w-5 text-white" />
                  </Link>
                </div>
              </div>

              <div >
      <span className="text-sm text-zinc-400 block mb-3">Best skill on</span>
      <div className="flex gap-3 flex-wrap">
        {/* HTML Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg">
          <FaHtml5 className="h-5 w-5 text-orange-500" />
        </div>

        {/* CSS Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg">
          <FaCss3Alt className="h-5 w-5 text-blue-500" />
        </div>

        {/* JavaScript Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg">
          <FaJs className="h-5 w-5 text-yellow-500" />
        </div>

        {/* React Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg">
          <FaReact className="h-5 w-5 text-blue-600" />
        </div>

        {/* Next.js Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg">
          <SiNextdotjs className="h-5 w-5 text-black" />
        </div>

        {/* Redux Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg">
          <SiRedux className="h-5 w-5 text-purple-600" />
        </div>

        {/* Tailwind Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg">
          <SiTailwindcss className="h-5 w-5 text-teal-400" />
        </div>

        {/* UI/UX Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg">
          <BsGrid className="h-5 w-5 text-gray-800" />
        </div>

        {/* TypeScript Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg">
          <SiTypescript className="h-5 w-5 text-blue-500" />
        </div>

        {/* ES6 Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg">
          <IoLogoJavascript className="h-5 w-5 text-yellow-600" />
        </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
            <div className="relative w-full max-w-[350px] aspect-[3/4]">
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-pink/10 rounded-lg z-0"></div>
              <Image
                src='/farazshah.jpeg'
                alt="Jone Lee"
                fill
                className="rounded-lg z-10 object-cover"
              />
            </div>

            <div className="absolute bottom-4 right-4 left-4 mx-auto bg-gradient-to-r from-[#2e3134] to-[#212428] p-4 rounded-lg shadow-lg max-w-xs z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6a67ce] to-[#fc636b] flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Tilt Animation Portfolio</h4>
                  <p className="text-xs text-zinc-400">Created by Faraz Shah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
