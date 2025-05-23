"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FacebookIcon, GitHubIcon, LinkedInIcon } from "@/components/social-icons";

interface Message {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export default function ContactSection() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  // Table state
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://rspmassege-default-rtdb.firebaseio.com/messages.json",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }

        const data = await response.json();
        const messagesArray: Message[] = data
          ? Object.keys(data).map((key) => ({
              ...data[key],
            }))
          : [];
        setMessages(messagesArray);
      } catch (err) {
        console.error("Error fetching messages:", err);
        setError("Failed to load messages. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, []);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        "https://rspmassege-default-rtdb.firebaseio.com/messages.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString(),
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Refresh messages after submission
      const refreshedResponse = await fetch(
        "https://rspmassege-default-rtdb.firebaseio.com/messages.json",
        { method: "GET" },
      );
      const data = await refreshedResponse.json();
      const messagesArray: Message[] = data
        ? Object.keys(data).map((key) => ({
            ...data[key],
          }))
        : [];
      setMessages(messagesArray);
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    I am available for freelance work. Connect with me via phone, email, or social media.
                  </p>

                  <div className="mb-4">
                    <span className="text-zinc-400 block mb-1">Email:</span>
                    <a
                      href="mailto:farazshah9095@gmail.com"
                      className="text-white font-medium hover:text-pink transition-colors"
                    >
                      farazshah9095@gmail.com
                    </a>
                  </div>

                  <div className="mb-6">
                    <span className="text-zinc-400 block mb-1">Phone:</span>
                    <a
                      href="tel:+923183052533"
                      className="text-white font-medium hover:text-pink transition-colors"
                    >
                      +92 318 3052533
                    </a>
                  </div>

                  <div>
                    <span className="text-zinc-400 block mb-3">Find with me</span>
                    <div className="flex gap-3">
                      <Link
                        href="https://facebook.com"
                        target="_blank"
                        className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink hover:shadow-none transition-all"
                      >
                        <FacebookIcon className="h-5 w-5 text-white" />
                      </Link>
                      <Link
                        href="https://github.com/FARAZSHAH909"
                        target="_blank"
                        className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink hover:shadow-none transition-all"
                      >
                        <GitHubIcon className="h-5 w-5 text-white" />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/faraz-shah-934947306/"
                        target="_blank"
                        className="w-12 h-12 flex items-center justify-center rounded-lg service-icon-bg hover:bg-pink hover:shadow-none transition-all"
                      >
                        <LinkedInIcon className="h-5 w-5 text-white" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-7">
            <Card className="bg-dark-lighter border-none rounded-xl overflow-hidden mb-8">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="text-white block mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="bg-dark text-white border-dark-lighter focus:border-pink h-12"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="text-white block mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="bg-dark text-white border-dark-lighter focus:border-pink h-12"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-white block mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Subject"
                      className="bg-dark text-white border-dark-lighter focus:border-pink h-12"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-white block mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Write your message here..."
                      className="bg-dark text-white border-dark-lighter focus:border-pink min-h-[150px]"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-pink hover:bg-pink/90 text-white px-8 h-12"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  {submitStatus && (
                    <p
                      className={`text-sm mt-4 ${
                        submitStatus.includes("successfully")
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {submitStatus}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* <Card className="bg-dark-lighter border border-pink/50 rounded-lg hover:shadow-pink hover:border-pink transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 bg-gradient-to-r from-pink to-purple-500 bg-clip-text text-transparent">
                  Submitted Messages
                </h3>
                {isLoading && <p className="text-white text-center">Loading messages...</p>}
                {error && <p className="text-red-500 text-center">{error}</p>}
                {!isLoading && !error && messages.length === 0 && (
                  <p className="text-zinc-400 text-center">No messages found.</p>
                )}
                {!isLoading && !error && messages.length > 0 && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-white">
                      <thead>
                        <tr className="bg-dark border-b border-pink/50">
                          <th className="p-4 text-sm sm:text-base font-semibold">Name</th>
                          <th className="p-4 text-sm sm:text-base font-semibold">Email</th>
                          <th className="p-4 text-sm sm:text-base font-semibold">Subject</th>
                          <th className="p-4 text-sm sm:text-base font-semibold">Message</th>
                          <th className="p-4 text-sm sm:text-base font-semibold">Timestamp</th>
                        </tr>
                      </thead>
                      <tbody>
                        {messages.map((message, index) => (
                          <tr
                            key={index}
                            className="border-b border-dark-lighter hover:bg-dark/50 transition-colors"
                          >
                            <td className="p-4 text-sm sm:text-base">{message.name}</td>
                            <td className="p-4 text-sm sm:text-base">
                              <a
                                href={`mailto:${message.email}`}
                                className="hover:text-pink transition-colors"
                              >
                                {message.email}
                              </a>
                            </td>
                            <td className="p-4 text-sm sm:text-base">{message.subject}</td>
                            <td className="p-4 text-sm sm:text-base max-w-xs truncate">
                              {message.message}
                            </td>
                            <td className="p-4 text-sm sm:text-base">
                              {new Date(message.timestamp).toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent> */}
            {/* </Card> */}
          </div>
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
          table {
            font-size: 0.875rem;
          }
          th,
          td {
            padding: 0.75rem;
          }
          .max-w-xs {
            max-width: 150px;
          }
        }
      `}</style>
    </section>
  );
}