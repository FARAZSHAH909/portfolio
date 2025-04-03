import React from "react";
import Link from "next/link";
import { FacebookIcon, GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/social-icons";

export default function Footer() {
  return (
    <footer className="bg-dark py-12">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold text-white bg-pink p-2 table px-3 rounded-lg mb-2">F</h2>
            <p className="text-zinc-400 mb-6">
              I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction.
            </p>

            <div className="flex gap-3">
              <Link href="https://facebook.com" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-md bg-dark-lighter hover:bg-pink transition-colors">
                <FacebookIcon className="h-5 w-5 text-white" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-md bg-dark-lighter hover:bg-pink transition-colors">
                <TwitterIcon className="h-5 w-5 text-white" />
              </Link>
              <Link href="https://www.linkedin.com/in/faraz-shah-934947306/" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-md bg-dark-lighter hover:bg-pink transition-colors">
                <LinkedInIcon className="h-5 w-5 text-white" />
              </Link>
              <Link href="https://github.com/FARAZSHAH909" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-md bg-dark-lighter hover:bg-pink transition-colors">
                <GitHubIcon className="h-5 w-5 text-white" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h6 className="text-lg font-bold text-white mb-4">Quick Link</h6>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-zinc-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-zinc-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-zinc-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-zinc-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contacts" className="text-zinc-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h6 className="text-lg font-bold text-white mb-4">Resources</h6>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                  Authentication
                </Link>
              </li>
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                  System Status
                </Link>
              </li>
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                  Over Right
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h6 className="text-lg font-bold text-white mb-4">Developers</h6>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                  API References
                </Link>
              </li>
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                  API Status
                </Link>
              </li>
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                  Open Source
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-lighter mt-12 pt-6 text-center">
          <p className="text-zinc-500 text-sm">
            © 2025. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
