"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { SiBlockchaindotcom, SiPython } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { AiOutlineRobot } from "react-icons/ai";
import { DiJava } from "react-icons/di";
import { BsWindowDesktop, BsServer } from "react-icons/bs";

interface ProjectItemProps {
  period: string;
  title: string;
  description: string;
  tech: string;
  techIcons: React.ReactNode[];
  delay?: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ period, title, description, tech, techIcons, delay = 0 }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mb-8 animate-slide-in" style={{ animationDelay: `${delay}ms` }}>
      <span className="text-zinc-400 text-sm mb-2 block">{period}</span>
      <h3 className="text-xl font-bold text-white mb-1 relative group">
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
      <p className="text-lg text-white mb-2 flex items-center gap-2">
        {tech}
        <span className="flex gap-2">
          {techIcons.map((icon, index) => (
            <span key={index} className="text-pink animate-pulse" title={tech.split(", ")[index] || "Tech"}>
              {icon}
            </span>
          ))}
        </span>
      </p>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-dark" role="region" aria-label="Projects">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-pink uppercase tracking-wider text-sm font-medium mb-3 inline-block animate-pulse">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink to-purple-500 bg-clip-text text-transparent animate-slide-in">
            Tech Assignments at Cloud Innovators Solution
          </h2>
        </div>

        <Tabs defaultValue="completed" className="w-full">
          <TabsList className="flex flex-wrap justify-center space-x-4 mb-12 border-none bg-transparent">
            <TabsTrigger
              value="completed"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-pink rounded-none px-4 py-2 text-lg bg-transparent text-zinc-400 hover:text-pink hover:bg-dark/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink"
            >
              Completed Projects
            </TabsTrigger>
            <TabsTrigger
              value="ongoing"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-pink rounded-none px-4 py-2 text-lg bg-transparent text-zinc-400 hover:text-pink hover:bg-dark/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink"
            >
              Ongoing Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="completed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-dark border border-pink/50 rounded-lg hover:shadow-pink hover:border-pink transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-pink to-purple-500 bg-clip-text text-transparent">
                    Completed Tech Assignments
                  </h3>
                  <ProjectItem
                    period="Jan 2025 - Mar 2025"
                    title="E-Commerce Website"
                    tech="Website and App Development, Backend Development"
                    techIcons={[<FaReact key="react" className="h-5 w-5" />, <BsServer key="server" className="h-5 w-5" />]}
                    description="Built a responsive online store with secure payment integration for a retail client."
                    delay={0}
                  />
                  <ProjectItem
                    period="Oct 2024 - Dec 2024"
                    title="Blockchain-Based Voting System"
                    tech="Blockchain Technology"
                    techIcons={[<SiBlockchaindotcom key="blockchain" className="h-5 w-5" />]}
                    description="Developed a secure, transparent voting app using blockchain for a local organization."
                    delay={100}
                  />
                  <ProjectItem
                    period="Jul 2024 - Sep 2024"
                    title="Cybersecurity Audit Tool"
                    tech="Cybersecurity, Python Programming"
                    techIcons={[<MdSecurity key="security" className="h-5 w-5" />, <SiPython key="python" className="h-5 w-5" />]}
                    description="Created a Python tool to scan and secure client systems from cyber threats."
                    delay={200}
                  />
                  <ProjectItem
                    period="Apr 2024 - Jun 2024"
                    title="Java Inventory Management"
                    tech="Java Development, Backend Development"
                    techIcons={[<DiJava key="java" className="h-5 w-5" />, <BsServer key="server" className="h-5 w-5" />]}
                    description="Built a scalable inventory system for a warehouse using Java and REST APIs."
                    delay={300}
                  />
                </CardContent>
              </Card>

              <Card className="bg-dark border border-pink/50 rounded-lg hover:shadow-pink hover:border-pink transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-pink to-purple-500 bg-clip-text text-transparent">
                    More Completed Assignments
                  </h3>
                  <ProjectItem
                    period="Jan 2024 - Mar 2024"
                    title="AI Chatbot"
                    tech="AI Solutions, Python Programming"
                    techIcons={[<AiOutlineRobot key="ai" className="h-5 w-5" />, <SiPython key="python" className="h-5 w-5" />]}
                    description="Developed an AI-powered chatbot for customer support using Python and NLP."
                    delay={0}
                  />
                  <ProjectItem
                    period="Oct 2023 - Dec 2023"
                    title="Desktop Accounting App"
                    tech="Desktop Applications, Java Development"
                    techIcons={[<BsWindowDesktop key="desktop" className="h-5 w-5" />, <DiJava key="java" className="h-5 w-5" />]}
                    description="Created a user-friendly desktop app for financial tracking and reporting."
                    delay={100}
                  />
                  <ProjectItem
                    period="Jul 2023 - Sep 2023"
                    title="Mobile App for Task Management"
                    tech="Website and App Development"
                    techIcons={[<FaReact key="react" className="h-5 w-5" />]}
                    description="Built a mobile app to help users manage tasks with a clean, intuitive interface."
                    delay={200}
                  />
                  <ProjectItem
                    period="Apr 2023 - Jun 2023"
                    title="Backend API for Social Platform"
                    tech="Backend Development, Python Programming"
                    techIcons={[<BsServer key="server" className="h-5 w-5" />, <SiPython key="python" className="h-5 w-5" />]}
                    description="Developed a scalable REST API for a social media platform using Python."
                    delay={300}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ongoing">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-dark border border-pink/50 rounded-lg hover:shadow-pink hover:border-pink transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-pink to-purple-500 bg-clip-text text-transparent">
                    Ongoing Tech Assignments
                  </h3>
                  <ProjectItem
                    period="Apr 2025 - Present"
                    title="AI-Powered Analytics Dashboard"
                    tech="AI Solutions, Backend Development"
                    techIcons={[<AiOutlineRobot key="ai" className="h-5 w-5" />, <BsServer key="server" className="h-5 w-5" />]}
                    description="Building a dashboard to analyze data using AI and secure backend systems."
                    delay={0}
                  />
                  <ProjectItem
                    period="Mar 2025 - Present"
                    title="Blockchain Supply Chain Tracker"
                    tech="Blockchain Technology, Backend Development"
                    techIcons={[<SiBlockchaindotcom key="blockchain" className="h-5 w-5" />, <BsServer key="server" className="h-5 w-5" />]}
                    description="Working on a blockchain app to track supply chain data securely."
                    delay={100}
                  />
                  <ProjectItem
                    period="Feb 2025 - Present"
                    title="Cybersecurity Monitoring System"
                    tech="Cybersecurity, Python Programming"
                    techIcons={[<MdSecurity key="security" className="h-5 w-5" />, <SiPython key="python" className="h-5 w-5" />]}
                    description="Developing a real-time monitoring tool to detect and prevent cyber threats."
                    delay={200}
                  />
                  <ProjectItem
                    period="Jan 2025 - Present"
                    title="Cross-Platform Desktop App"
                    tech="Desktop Applications, Java Development"
                    techIcons={[<BsWindowDesktop key="desktop" className="h-5 w-5" />, <DiJava key="java" className="h-5 w-5" />]}
                    description="Creating a desktop app for project management with cross-platform support."
                    delay={300}
                  />
                </CardContent>
              </Card>

              <Card className="bg-dark border border-pink/50 rounded-lg hover:shadow-pink hover:border-pink transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-pink to-purple-500 bg-clip-text text-transparent">
                    More Ongoing Assignments
                  </h3>
                  <ProjectItem
                    period="Dec 2024 - Present"
                    title="Mobile Fitness App"
                    tech="Website and App Development"
                    techIcons={[<FaReact key="react" className="h-5 w-5" />]}
                    description="Building a mobile app to track fitness goals with a user-friendly design."
                    delay={0}
                  />
                  <ProjectItem
                    period="Nov 2024 - Present"
                    title="Java E-Learning Platform"
                    tech="Java Development, Backend Development"
                    techIcons={[<DiJava key="java" className="h-5 w-5" />, <BsServer key="server" className="h-5 w-5" />]}
                    description="Developing an e-learning platform with Java for interactive courses."
                    delay={100}
                  />
                  <ProjectItem
                    period="Oct 2024 - Present"
                    title="Python Automation Script"
                    tech="Python Programming"
                    techIcons={[<SiPython key="python" className="h-5 w-5" />]}
                    description="Creating automation scripts to streamline client workflows using Python."
                    delay={200}
                  />
                  <ProjectItem
                    period="Sep 2024 - Present"
                    title="Backend for E-Commerce Platform"
                    tech="Backend Development, Website and App Development"
                    techIcons={[<BsServer key="server" className="h-5 w-5" />, <FaReact key="react" className="h-5 w-5" />]}
                    description="Working on a robust backend system for an e-commerce platform."
                    delay={300}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;