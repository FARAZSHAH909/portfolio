import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FacebookIcon, GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/social-icons";

export default function ContactSection() {
  return (
    <section id="contacts" className="py-16">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold heading-gradient">Contact With Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <Card className="bg-dark-lighter border-none rounded-xl overflow-hidden h-full">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://ext.same-assets.com/3856146916/912725668.jpeg"
                    alt="Contact"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">Personal Contact</h3>
                  <p className="text-zinc-400 mb-6">
                    I am available for freelance work. Connect with me via phone, email or social media.
                  </p>

                  <div className="mb-4">
                    <span className="text-zinc-400 block mb-1">Email:</span>
                    <a href="mailto:example@gmail.com" className="text-white font-medium hover:text-pink transition-colors">
                      farazshah9095@gmail.com
                    </a>
                  </div>

                  <div className="mb-6">
                    <span className="text-zinc-400 block mb-1">Phone:</span>
                    <a href="tel:+1234567890" className="text-white font-medium hover:text-pink transition-colors">
                      92+03183052533
                    </a>
                  </div>

                  <div>
                    <span className="text-zinc-400 block mb-3">Find with me</span>
                    <div className="flex gap-3">
                      <Link href="https://facebook.com" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink hover:shadow-none transition-all">
                        <FacebookIcon className="h-5 w-5 text-white" />
                      </Link>
                      <Link href="https://github.com/FARAZSHAH909" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink hover:shadow-none transition-all">
                        <GitHubIcon className="h-5 w-5 text-white" />
                      </Link>
                      <Link href="https://www.linkedin.com/in/faraz-shah-934947306/" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink hover:shadow-none transition-all">
                        <LinkedInIcon className="h-5 w-5 text-white" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-7">
            <Card className="bg-dark-lighter border-none rounded-xl overflow-hidden">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="text-white block mb-2">Your Name</label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="bg-dark text-white border-dark-lighter focus:border-pink h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="text-white block mb-2">Email Address</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="bg-dark text-white border-dark-lighter focus:border-pink h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-white block mb-2">Subject</label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Subject"
                      className="bg-dark text-white border-dark-lighter focus:border-pink h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-white block mb-2">Your Message</label>
                    <Textarea
                      id="message"
                      placeholder="Write your message here..."
                      className="bg-dark text-white border-dark-lighter focus:border-pink min-h-[150px]"
                    />
                  </div>

                  <Button className="bg-pink hover:bg-pink/90 text-white px-8 h-12">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
