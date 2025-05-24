"use client";

import React from "react";
import Link from "next/link";
import { FacebookIcon, GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/social-icons";

export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark py-12">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <Link
              href="/"
              className="text-2xl font-bold text-white bg-gradient-to-r from-pink to-purple-500 p-2 px-4 rounded-lg inline-block mb-4 hover:scale-105 transition-transform duration-200"
              aria-label="Faraz Shah Home"
              onClick={(e) => handleScroll(e, "home")}
            >
              FS
            </Link>
            <p className="text-zinc-400 mb-6">
              Freelance developer  tackling tech assignments in web, blockchain, AI, and more to deliver user-friendly, scalable solutions.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-dark-lighter hover:bg-pink transition-all duration-200 hover:scale-110"
                aria-label="Facebook Profile"
              >
                <FacebookIcon className="h-5 w-5 text-white" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-dark-lighter hover:bg-pink transition-all duration-200 hover:scale-110"
                aria-label="Twitter Profile"
              >
                <TwitterIcon className="h-5 w-5 text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/faraz-shah-934947306/"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-dark-lighter hover:bg-pink transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="h-5 w-5 text-white" />
              </Link>
              <Link
                href="https://github.com/FARAZSHAH909"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-dark-lighter hover:bg-pink transition-all duration-200 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="h-5 w-5 text-white" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <h6 className="text-lg font-bold text-white mb-4">Quick Links</h6>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#home"
                  className="text-zinc-400 hover:text-pink relative group transition-colors duration-200"
                  onClick={(e) => handleScroll(e, "home")}
                >
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-zinc-400 hover:text-pink relative group transition-colors duration-200"
                  onClick={(e) => handleScroll(e, "features")}
                >
                  Services
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-zinc-400 hover:text-pink relative group transition-colors duration-200"
                  onClick={(e) => handleScroll(e, "portfolio")}
                >
                  Portfolio
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-zinc-400 hover:text-pink relative group transition-colors duration-200"
                  onClick={(e) => handleScroll(e, "projects")}
                >
                  Projects
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#contacts"
                  className="text-zinc-400 hover:text-pink relative group transition-colors duration-200"
                  onClick={(e) => handleScroll(e, "contacts")}
                >
                  Contact
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-5">
            <h6 className="text-lg font-bold text-white mb-4">Tech Assignments</h6>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="text-zinc-400 hover:text-pink relative group transition-colors duration-200"
                  onClick={(e) => handleScroll(e, "features")}
                >
                  Website and App Development
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-zinc-400 hover:text-pink relative group transition-colors duration-200"
                  onClick={(e) => handleScroll(e, "features")}
                >
                  Blockchain Technology
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-zinc-400 hover:text-pink relative group transition-colors duration-200"
                  onClick={(e) => handleScroll(e, "features")}
                >
                  Cybersecurity
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-zinc-400 hover:text-pink relative group transition-colors duration-200"
                  onClick={(e) => handleScroll(e, "features")}
                >
                  AI Solutions
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-zinc-400 hover:text-pink relative group transition-colors duration-200"
                  onClick={(e) => handleScroll(e, "features")}
                >
                  Python Programming
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-zinc-400 hover:text-pink relative group transition-colors duration-200"
                  onClick={(e) => handleScroll(e, "features")}
                >
                  Java Development
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-zinc-400 hover:text-pink relative group transition-colors duration-200"
                  onClick={(e) => handleScroll(e, "features")}
                >
                  Desktop Applications
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-zinc-400 hover:text-pink relative group transition-colors duration-200"
                  onClick={(e) => handleScroll(e, "features")}
                >
                  Backend Development
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-lighter mt-12 pt-6 text-center">
          <p className="text-zinc-500 text-sm">
            © 2025 Faraz Shah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}