import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceProps) => {
  return (
    <Card className="service-icon-bg border-none rounded-xl overflow-hidden">
      <CardContent className="p-8">
        <div className="flex flex-col gap-5">
          <div className="w-16 h-16 rounded-lg service-icon flex items-center justify-center">
            {icon}
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-white">
              <Link href="#" className="hover:text-pink transition-colors">
                {title}
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
    <section id="features" className="py-16">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-pink uppercase tracking-wider text-sm font-medium mb-3 inline-block">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold heading-gradient">What I Do</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Responsive Web Design"
            description="Creating mobile-friendly, pixel-perfect designs using HTML, CSS, Tailwind, and JavaScript."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>}
          />

          <ServiceCard
            title="Modern UI/UX"
            description="Crafting clean, interactive, and intuitive interfaces with React, Next.js, and GSAP animations."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>}
          />

          <ServiceCard
            title="Dynamic & Scalable Websites"
            description="Developing highly functional web applications with TypeScript, React, and Redux Toolkit."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>}
          />

          <ServiceCard
            title="Performance Optimization"
            description="Enhancing speed, efficiency, and smooth user experience through optimized code and best practices."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>}
          />

          <ServiceCard
            title=" State Management & API Integration"
            description="Managing data efficiently using Redux Toolkit and connecting front-end applications with RESTful APIs."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>}
          />

          <ServiceCard
            title="Cross-Browser & Version Contro"
            description="Ensuring seamless compatibility across all browsers and maintaining project versions using GitHub."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>}
          />
        </div>
      </div>
    </section>
  );
}
