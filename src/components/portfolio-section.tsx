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
  link: string;
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
                className="w-full rounded-lg"
                src={project.uiVideo}
                title={`${project.title} UI Video`}
              />
            </div>
          )}

          {/* Email Screenshot */}
          {project.emailScreenshot && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Email Screenshot</h4>
              <Image
                src={project.emailScreenshot}
                alt={`${project.title} Email Screenshot`}
                width={400}
                height={300}
                className="w-full rounded-lg object-contain"
              />
            </div>
          )}

          {/* Report Screenshot */}
          {project.reportScreenshot && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Report Screenshot</h4>
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
    </div>
  );
};

const PortfolioItem = ({
  title,
  category,
  image,
  likes,
  link,
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
            <Link
              href={link}
              className="text-white hover:text-pink transition-colors"
              onClick={(e) => e.stopPropagation()} // Prevent modal from opening when clicking link
            >
              {title}
            </Link>
          </h3>
        </CardContent>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={{ title, category, image, likes, link, passwordProtected, video, uiVideo, emailScreenshot, reportScreenshot, description }}
      />
    </>
  );
};

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-sm text-zinc-400 mb-3 inline-block">Visit my portfolio and keep your feedback</span>
          <h2 className="text-4xl md:text-5xl font-bold heading-gradient">My Portfolio</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PortfolioItem
            title="Gitex Driver User App"
            category="Gallery"
            image="/gitex.png"
            likes={1168}
            link="https://gitex-seven.vercel.app/"
            passwordProtected={true}
            video="/videos/gitex-driver-user.mp4" // Placeholder video
            uiVideo="/videos/gitex-driver-ui.mp4" // Placeholder UI video
            emailScreenshot="/screenshots/gitex-email.png" // Placeholder screenshot
            reportScreenshot="/screenshots/gitex-report.png" // Placeholder screenshot
            description="A mobile app for drivers to manage routes and deliveries, built with React Native."
          />

          <PortfolioItem
            title="Online Food Delivery Mobile App Design"
            category="Video"
            image="https://ext.same-assets.com/3856146916/1153871961.jpeg"
            likes={561}
            link="https://food-website-one-rho.vercel.app/"
            video="/videos/food-delivery.mp4" // Placeholder
            uiVideo="/videos/food-delivery-ui.mp4" // Placeholder
            emailScreenshot="/screenshots/food-delivery-email.png" // Placeholder
            reportScreenshot="/screenshots/food-delivery-report.png" // Placeholder
            description="A sleek mobile app design for food delivery with real-time tracking."
          />

          <PortfolioItem
            title="Gitex Driver Admin App"
            category="External Link"
            image="https://ext.same-assets.com/3856146916/1153871961.jpeg"
            likes={561}
            link="https://gitex-diver.vercel.app/"
            video="/videos/gitex-admin.mp4" // Placeholder
            uiVideo="/videos/gitex-admin-ui.mp4" // Placeholder
            emailScreenshot="/screenshots/gitex-admin-email.png" // Placeholder
            reportScreenshot="/screenshots/gitex-admin-report.png" // Placeholder
            description="Admin dashboard for managing driver assignments and analytics."
          />

          <PortfolioItem
            title="Quiz-App Design"
            category="Image"
            image="https://ext.same-assets.com/3856146916/381643791.jpeg"
            likes={736}
            link="https://try-quiz-app-demo.netlify.app/"
            video="/videos/quiz-app.mp4" // Placeholder
            uiVideo="/videos/quiz-app-ui.mp4" // Placeholder
            emailScreenshot="/screenshots/quiz-app-email.png" // Placeholder
            reportScreenshot="/screenshots/quiz-app-report.png" // Placeholder
            description="An interactive quiz app with engaging UI and real-time feedback."
          />

          <PortfolioItem
            title="Cart-Mart Design"
            category="Gallery"
            image="https://ext.same-assets.com/3856146916/912725668.jpeg"
            likes={667}
            link="https://cart-mart.netlify.app/"
            video="/videos/cart-mart.mp4" // Placeholder
            uiVideo="/videos/cart-mart-ui.mp4" // Placeholder
            emailScreenshot="/screenshots/cart-mart-email.png" // Placeholder
            reportScreenshot="/screenshots/cart-mart-report.png" // Placeholder
            description="E-commerce platform design with seamless checkout and product browsing."
          />

          <PortfolioItem
            title="Vyrva Music App"
            category="Standard"
            image="https://ext.same-assets.com/3856146916/834879061.jpeg"
            likes={429}
            link="https://vyrva-music-app.netlify.app/"
            video="/videos/vyrva-music.mp4" // Placeholder
            uiVideo="/videos/vyrva-music-ui.mp4" // Placeholder
            emailScreenshot="/screenshots/vyrva-music-email.png" // Placeholder
            reportScreenshot="/screenshots/vyrva-music-report.png" // Placeholder
            description="A music streaming app with personalized playlists and offline support."
          />
        </div>
      </div>
    </section>
  );
}