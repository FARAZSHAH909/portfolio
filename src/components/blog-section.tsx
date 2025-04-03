import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogPostProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  slug: string;
}

const BlogPost = ({ title, excerpt, image, category, date, slug }: BlogPostProps) => {
  return (
    <Card className="bg-dark-lighter border-none rounded-xl overflow-hidden group">
      <div className="relative">
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="absolute top-5 left-5">
          <Badge className="bg-pink text-white hover:bg-pink/90">
            {category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <span className="text-zinc-400 text-sm block mb-3">{date}</span>
        <h3 className="text-xl font-bold mb-3">
          <Link href={`/blog/${slug}`} className="text-white hover:text-pink transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-zinc-400 mb-4">{excerpt}</p>
        <Link href={`/blog/${slug}`} className="text-white inline-flex items-center gap-2 hover:text-pink transition-colors">
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </CardContent>
    </Card>
  );
};

export default function BlogSection() {
  return (
    <section id="blog" className="py-16">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold heading-gradient mb-2">My Blog</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogPost
            title="The Ugly Truth About Design & Why You Should Care"
            excerpt="A complete guide to designing your personal portfolio website with tips and examples."
            image="https://ext.same-assets.com/3856146916/2574969155.jpeg"
            category="Design"
            date="May 26, 2023"
            slug="the-ugly-truth-about-design"
          />

          <BlogPost
            title="Is Freelancing The Right Career Path For You?"
            excerpt="A look at the pros and cons of freelancing and how to decide if it's right for you."
            image="https://ext.same-assets.com/3856146916/912725668.jpeg"
            category="Freelancing"
            date="April 15, 2023"
            slug="is-freelancing-right-for-you"
          />

          <BlogPost
            title="How to Create a Successful Mobile App from Scratch"
            excerpt="Learn the step-by-step process to build a successful mobile application from idea to launch."
            image="https://ext.same-assets.com/3856146916/1153871961.jpeg"
            category="Mobile Development"
            date="March 8, 2023"
            slug="create-mobile-app-from-scratch"
          />
        </div>
      </div>
    </section>
  );
}
