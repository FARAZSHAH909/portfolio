"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
  likes: number;
  passwordProtected?: boolean;
  video?: string; // Video URL (e.g., MP4 or YouTube embed)
  uiVideo?: string; // UI video URL
  emailScreenshot?: string; // Email screenshot URL
  reportScreenshot?: string; // Report screenshot URL
  description?: string; // Optional project description
}

const Modal = ({
  isOpen,
  onClose,
  project,
}: {
  isOpen: boolean;
  onClose: () => void;
  project: PortfolioItemProps | null;
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-dark-lighter border border-pink/50 rounded-xl max-w-4xl w-full mx-4 sm:mx-6 max-h-[90vh] overflow-y-auto p-6 sm:p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-pink to-purple-500 bg-clip-text text-transparent">
            {project.title}
          </h3>
          <Button
            onClick={onClose}
            className="bg-pink hover:bg-pink/90 text-white px-4 h-10"
          >
            Close
          </Button>
        </div>

        {project.description && (
          <p className="text-zinc-400 mb-6">{project.description}</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Video */}
          {project.video && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Project Video</h4>
              <video
                controls
                className="w-full rounded-lg"
                src={project.video}
                title={`${project.title} Video`}
              />
            </div>
          )}

          {/* UI Video */}
          {project.uiVideo && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">UI Video</h4>
              <video
                controls
                className="w-[200px] rounded-lg"
                src={project.uiVideo}
                title={`${project.title} UI Video`}
              />
            </div>
          )}

          {project.emailScreenshot && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Report Screenshot (PDF)</h4>
              <object
                data={project.emailScreenshot}
                type="application/pdf"
                width="100%"
                height="500"
                className="rounded-lg"
              >
                <p className="text-white">
                  PDF cannot be displayed.{" "}
                  <a href={project.emailScreenshot} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                    Click here to download
                  </a>
                </p>
              </object>
            </div>
          )}


        {/* Report Screenshot */}
        {project.reportScreenshot && (
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Email Screenshot</h4>
            <Image
              src={project.reportScreenshot}
              alt={`${project.title} Report Screenshot`}
              width={400}
              height={300}
              className="w-full rounded-lg object-contain"
            />
          </div>
        )}
      </div>

      <style jsx>{`
          @media (max-width: 640px) {
            .max-w-4xl {
              margin: 0 1rem;
            }
            video,
            img {
              max-height: 200px;
            }
          }
        `}</style>
    </div>
    </div >
  );
};

const PortfolioItem = ({
  title,
  category,
  image,
  likes,
  passwordProtected,
  video,
  uiVideo,
  emailScreenshot,
  reportScreenshot,
  description,
}: PortfolioItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card
        className="bg-dark border-none overflow-hidden rounded-xl group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative">
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="absolute top-5 left-5">
            <Badge className="bg-dark/80 text-white hover:bg-dark/90 backdrop-blur-sm">
              {category}
            </Badge>
          </div>

          <div className="absolute top-5 right-5">
            <Badge className="bg-dark/80 text-white hover:bg-dark/90 backdrop-blur-sm">
              {likes}
            </Badge>
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4">
              {title}
          </h3>
        </CardContent>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={{ title, category, image, likes,  passwordProtected, video, uiVideo, emailScreenshot, reportScreenshot, description }}
      />
    </>
  );
};

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16">
      <div className="container max-w-7xl mx-auto px-6 ">
     <div className="text-center mb-8">
  <h2 className="text-3xl md:text-5xl  font-bold heading-gradient pb-5">
    Our Work Samples
  </h2>
  <span className=" text-sm md:text-1xl text-zinc-400 mb-3 inline-block">
    The following work samples are from assignments completed for Cloud Innovators Solution (CIS), a respected tech company. These examples reflect the quality and standards we maintain in every project.
  </span>
  <p className="text-sm md:text-xl ">
    Please note : Due to security and confidentiality reasons, only selected parts of the work are shown.
  </p>
</div>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PortfolioItem
            title="CYBERGUARD Quiz App Assignment"
            category="CYBERGUARD"
            image="https://ext.same-assets.com/3856146916/1153871961.jpeg"
            likes={1168}
            passwordProtected={true}
            // Placeholder video
            uiVideo="CYBERGUARD/Fwd NY-DP-RIL(REF)-02 Ui Screen Video.mp4" // Placeholder UI video
            video="CYBERGUARD/Fwd NY-DP-RIL(REF)-02 Code Video.mp4"
            emailScreenshot="CYBERGUARD/Fwd NY-DP-RIL(REF)-02 CYBER GUARD PDF.pdf" // Placeholder screenshot
            reportScreenshot="CYBERGUARD/Screenshot 2025-05-23 110815.png" // Placeholder screenshot
            description="CYBERGUARD Quiz App Assignment"
          />

          <PortfolioItem
            title="E-commerce Website with Block Chain Assignment"
            category="E-commerce"
            image="https://ext.same-assets.com/3856146916/1153871961.jpeg"
            likes={561}
            video="ecommere/NY-DP-ALB(REF)-02 Code Short Video - Copy - Copy.mp4" // Placeholder
            uiVideo="ecommere/NY-DP-ALB(REF)-02 UI Short Video - Copy - Copy.mp4" // Placeholder
            emailScreenshot="ecommere/NY-DP-ALB(REF)-02 readme.pdf" // Placeholder
            reportScreenshot="ecommere/Screenshot 2025-05-23 113021.png" // Placeholder
            description="E-commerce Website with Block Chain Assignment"
          />

          <PortfolioItem
            title="Gitex Driver WebSite"
            category="Gitex"
            image="https://ext.same-assets.com/3856146916/1153871961.jpeg"
            likes={561}
            video="Gitex/Fwd NY-DP-AIB(REF)-01 Code Video.mp4" // Placeholder
            uiVideo="Gitex/Disaster-relief-fund Gitex Ui Screen Video.mp4" // Placeholder
            emailScreenshot="Gitex/Fwd NY-DP-AIB(REF)-01 Gitex PDf.pdf" // Placeholder
            reportScreenshot="Gitex/Screenshot 2025-05-23 114739.png" // Placeholder
            description="Gitex Driver WebSite"
          />

          <PortfolioItem
            title="Swiftride WebSite With Block Chain Assignment"
            category="Swiftride"
            image="https://ext.same-assets.com/3856146916/381643791.jpeg"
            likes={736}
            video="Swiftride/NY-DP-TIB(REF)-01 SwiftRide Code  Video.mp4" // Placeholder
            uiVideo="Swiftride/NY-DP-TIB(REF)-01 Swiftride UI Video.mp4" // Placeholder
            emailScreenshot="Swiftride/NY-DP-TIB(REF)-01 Swiftride Readme.pdf" // Placeholder
            reportScreenshot="Swiftride/Screenshot 2025-05-23 120133.png" // Placeholder
            description="Swiftride WebSite With Block Chain Assignment"
          />

          
        </div>
      </div>
    
    </section>
  );
}