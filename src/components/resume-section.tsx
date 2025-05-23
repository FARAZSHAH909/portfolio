"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { SiBlockchaindotcom, SiPython } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { AiOutlineRobot } from "react-icons/ai";
import { DiJava } from "react-icons/di";
import { BsWindowDesktop, BsServer } from "react-icons/bs";

interface ProjectItemProps {
  title: string;
  description: string;
  tech: string;
  techIcons: React.ReactNode[];
  delay?: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, tech, techIcons, delay = 0 }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mb-6 animate-slide-in" style={{ animationDelay: `${delay}ms` }}>
      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 relative group">
        <Link
          href="#contacts"
          className="hover:text-pink transition-colors focus:text-pink focus:outline-none focus:ring-2 focus:ring-pink"
          onClick={(e) => handleScroll(e, "contacts")}
          aria-label={`Contact for details about ${title}`}
        >
          {title}
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink group-hover:w-full group-focus:w-full transition-all duration-300"></span>
        </Link>
      </h3>
      <p className="text-sm sm:text-lg text-white mb-2 flex items-center gap-2 flex-wrap">
        {tech}
        <span className="flex gap-2">
          {techIcons.map((icon, index) => (
            <span key={index} className="text-pink animate-pulse" title={tech.split(", ")[index] || "Tech"}>
              {icon}
            </span>
          ))}
        </span>
      </p>
      <p className="text-zinc-400 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="assignments" className="py-12 sm:py-20 bg-dark" role="region" aria-label="Assignments">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <span className="text-pink uppercase tracking-wider text-xs sm:text-sm font-medium mb-3 inline-block animate-pulse">
            Tech Assignments
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink to-purple-500 bg-clip-text text-transparent animate-slide-in">
            Completed Tech Assignments for Clients
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6">
          <Card className="bg-dark border border-pink/50 rounded-lg hover:shadow-pink hover:border-pink transition-all duration-300 sm:w-[calc(50%-0.75rem)]">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 bg-gradient-to-r from-pink to-purple-500 bg-clip-text text-transparent">
                Client Tech Assignments
              </h3>
              <ProjectItem
                title="Checkout Flow Optimization"
                tech="Website Development, Backend Development"
                techIcons={[<FaReact key="react" className="h-4 sm:h-5 w-4 sm:w-5" />, <BsServer key="server" className="h-4 sm:h-5 w-4 sm:w-5" />]}
                description="Optimized the checkout flow for an e-commerce platform, successfully delivered to reduce cart abandonment for a retail client."
                delay={0}
              />
              <ProjectItem
                title="Smart Contract for NFT Marketplace"
                tech="Blockchain Technology"
                techIcons={[<SiBlockchaindotcom key="blockchain" className="h-4 sm:h-5 w-4 sm:w-5" />]}
                description="Developed and deployed a smart contract for an NFT marketplace, completed for a startup to ensure secure transactions."
                delay={100}
              />
              <ProjectItem
                title="Security Patch for API"
                tech="Cybersecurity, Backend Development"
                techIcons={[<MdSecurity key="security" className="h-4 sm:h-5 w-4 sm:w-5" />, <BsServer key="server" className="h-4 sm:h-5 w-4 sm:w-5" />]}
                description="Implemented a security patch for a client’s REST API, delivered to protect against data breaches for a fintech company."
                delay={200}
              />
              <ProjectItem
                title="Inventory Sync Module"
                tech="Java Development, Backend Development"
                techIcons={[<DiJava key="java" className="h-4 sm:h-5 w-4 sm:w-5" />, <BsServer key="server" className="h-4 sm:h-5 w-4 sm:w-5" />]}
                description="Built a real-time inventory sync module for a logistics client, successfully completed to streamline warehouse operations."
                delay={300}
              />
            </CardContent>
          </Card>

          <Card className="bg-dark border border-pink/50 rounded-lg hover:shadow-pink hover:border-pink transition-all duration-300 sm:w-[calc(50%-0.75rem)]">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 bg-gradient-to-r from-pink to-purple-500 bg-clip-text text-transparent">
                More Client Assignments
              </h3>
              <ProjectItem
                title="AI Lead Sorting Tool"
                tech="AI Solutions, Python Programming"
                techIcons={[<AiOutlineRobot key="ai" className="h-4 sm:h-5 w-4 sm:w-5" />, <SiPython key="python" className="h-4 sm:h-5 w-4 sm:w-5" />]}
                description="Developed a simple AI tool to sort leads by priority for a marketing agency, successfully delivered to streamline their sales process."
                delay={0}
              />
              <ProjectItem
                title="Expense Tracker UI"
                tech="Desktop Applications, Java Development"
                techIcons={[<BsWindowDesktop key="desktop" className="h-4 sm:h-5 w-4 sm:w-5" />, <DiJava key="java" className="h-4 sm:h-5 w-4 sm:w-5" />]}
                description="Designed a user-friendly expense tracker UI for a desktop app, completed for a small business client."
                delay={100}
              />
              <ProjectItem
                title="Customer Feedback Dashboard"
                tech="Website Development"
                techIcons={[<FaReact key="react" className="h-4 sm:h-5 w-4 sm:w-5" />]}
                description="Built a customer feedback dashboard for a SaaS client, successfully delivered to visualize user insights."
                delay={200}
              />
              <ProjectItem
                title="Data Cleanup Script"
                tech="Python Programming"
                techIcons={[<SiPython key="python" className="h-4 sm:h-5 w-4 sm:w-5" />]}
                description="Wrote a Python script to clean and standardize a client’s CRM data, completed for a sales team."
                delay={300}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .animate-slide-in {
            animation-duration: 0.3s;
          }
          .animate-pulse {
            animation: none;
          }
          .group-hover\:w-full {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;