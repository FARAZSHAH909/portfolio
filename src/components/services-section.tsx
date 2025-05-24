"use client";

import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { SiBlockchaindotcom, SiPython } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { AiOutlineRobot } from "react-icons/ai";
import { DiJava } from "react-icons/di";
import { BsWindowDesktop, BsServer } from "react-icons/bs";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, delay = 0 }: ServiceProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Card
      className="bg-dark/80 backdrop-blur-md border-none rounded-xl overflow-hidden hover:shadow-pink transition-all duration-300 hover:scale-105 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-8">
        <div className="flex flex-col gap-6">
          <div
            className="w-16 h-16 rounded-lg bg-gradient-to-r from-pink to-purple-500 flex items-center justify-center hover:scale-110 hover:shadow-pink transition-all duration-200"
            title={title}
          >
            {icon}
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-white relative group">
              <Link
                href="#projects"
                className="hover:text-pink transition-colors"
                onClick={(e) => handleScroll(e, "projects")}
                aria-label={`View projects for ${title}`}
              >
                {title}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
              </Link>
            </h3>
            <p className="text-zinc-400">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function ServicesSection() {
  return (
    <section id="features" className="py-20 bg-dark">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-pink uppercase tracking-wider text-sm font-medium mb-3 inline-block animate-pulse">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink to-purple-500 bg-clip-text text-transparent animate-fade-in-up">
           Our Tech Assignment Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Website and App Development"
            description="Crafting responsive websites and mobile apps with modern tools for awesome user experiences."
            icon={<FaReact className="h-8 w-8 text-white" />}
            delay={0}
          />
          <ServiceCard
            title="Blockchain Technology"
            description="Building secure blockchain apps for safe and transparent data solutions."
            icon={<SiBlockchaindotcom className="h-8 w-8 text-white" />}
            delay={100}
          />
          <ServiceCard
            title="Cybersecurity"
            description="Protecting systems with strong security measures against cyber threats."
            icon={<MdSecurity className="h-8 w-8 text-white" />}
            delay={200}
          />
          <ServiceCard
            title="AI Solutions"
            description="Creating smart AI tools to boost efficiency and smarter decisions."
            icon={<AiOutlineRobot className="h-8 w-8 text-white" />}
            delay={300}
          />
          <ServiceCard
            title="Python Programming"
            description="Developing powerful, flexible apps with Python for all kinds of needs."
            icon={<SiPython className="h-8 w-8 text-white" />}
            delay={400}
          />
          <ServiceCard
            title="Java Development"
            description="Building scalable Java apps customized for business goals."
            icon={<DiJava className="h-8 w-8 text-white" />}
            delay={500}
          />
          <ServiceCard
            title="Desktop Applications"
            description="Designing smooth desktop software for efficient workflows."
            icon={<BsWindowDesktop className="h-8 w-8 text-white" />}
            delay={600}
          />
          <ServiceCard
            title="Backend Development"
            description="Constructing reliable server-side systems for seamless performance."
            icon={<BsServer className="h-8 w-8 text-white" />}
            delay={700}
          />
        </div>
      </div>
    </section>
  );
}