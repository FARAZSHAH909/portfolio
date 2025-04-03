import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
  likes: number;
  link: string;
  passwordProtected?: boolean;
}

const PortfolioItem = ({ title, category, image, likes, link, passwordProtected }: PortfolioItemProps) => {
  return (
    <Card className="bg-dark border-none overflow-hidden rounded-xl group">
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
          <Link href={link} className="text-white hover:text-pink transition-colors">
            {title}
          </Link>
        </h3>

        {passwordProtected && (
          <div className="bg-dark-lighter p-4 rounded-lg">
            <h4 className="text-sm text-center text-zinc-400 mb-2">
              Please enter the password to view the content.
            </h4>
            <p className="text-xs text-center mb-3">
              You want password? <Link href="mailto:example@gmail.com" className="text-pink">Request Password</Link>
            </p>
            <p className="text-xs text-center text-zinc-400">Demo Password is 12345</p>
          </div>
        )}
      </CardContent>
    </Card>
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
            title="NFT Dashboard Application Development."
            category="Gallery"
            image="https://ext.same-assets.com/3856146916/2574969155.jpeg"
            likes={1168}
            link="#"
            passwordProtected={true}
          />

          <PortfolioItem
            title="Online Food Delivery Mobile App Design."
            category="Video"
            image="https://ext.same-assets.com/3856146916/1153871961.jpeg"
            likes={561}
            link="#"
          />

          <PortfolioItem
            title="Travel App Design Creativity & Application."
            category="External Link"
            image="https://ext.same-assets.com/3856146916/1153871961.jpeg"
            likes={561}
            link="https://themeforest.net/user/rainbow-themes/portfolio"
          />

          <PortfolioItem
            title="Workout Website Design And Development."
            category="Image"
            image="https://ext.same-assets.com/3856146916/381643791.jpeg"
            likes={736}
            link="#"
          />

          <PortfolioItem
            title="Mobile Application Landing Page Design."
            category="Gallery"
            image="https://ext.same-assets.com/3856146916/912725668.jpeg"
            likes={667}
            link="#"
            passwordProtected={true}
          />

          <PortfolioItem
            title="Restaurant Mobile App Figma Design."
            category="Standard"
            image="https://ext.same-assets.com/3856146916/834879061.jpeg"
            likes={429}
            link="#"
          />
        </div>
      </div>
    </section>
  );
}
