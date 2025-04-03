import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  testimonial: string;
}

const TestimonialCard = ({ image, name, role, company, rating, testimonial }: TestimonialProps) => {
  return (
    <Card className="bg-dark-lighter border-none rounded-xl overflow-hidden">
      <CardContent className="p-8">
        <div className="flex flex-col mb-6">
          <div className="flex items-start gap-5 mb-6">
            <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-1">{name}</h4>
              <p className="text-zinc-400">
                {role} at {company}
              </p>
              <div className="flex items-center gap-1 mt-2">
                {Array(rating).fill(0).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          <p className="text-zinc-400">
            {testimonial}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default function TestimonialSection() {
  return (
    <section id="testimonial" className="py-16">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-pink uppercase tracking-wider text-sm font-medium mb-3 inline-block">What Clients Say</span>
          <h2 className="text-4xl md:text-5xl font-bold heading-gradient">Testimonial</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            image="https://ext.same-assets.com/3856146916/2574969155.jpeg"
            name="Nevine Acotanza"
            role="Android App Development"
            company="Rainbow IT"
            rating={5}
            testimonial="I purchased the theme a few weeks ago. I had some issues with the theme, I asked customer support to help me and they were very helpful and kind to help me solve the problem."
          />

          <TestimonialCard
            image="https://ext.same-assets.com/3856146916/912725668.jpeg"
            name="Jone Doe"
            role="Web Development"
            company="Alphabet Inc."
            rating={4}
            testimonial="Theme is very flexible and easy to use. Perfect for me. Customer support replied within minutes and fixed my problems. I definitely recommend this theme."
          />
        </div>

        <div className="flex justify-center gap-2 mt-8">
          <button className="w-3 h-3 rounded-full bg-dark-lighter"></button>
          <button className="w-3 h-3 rounded-full bg-pink"></button>
          <button className="w-3 h-3 rounded-full bg-dark-lighter"></button>
        </div>
      </div>
    </section>
  );
}
