import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/social-icons";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-dark/80 backdrop-blur-sm">
      <div className="container max-w-7xl mx-auto py-4 px-6 flex items-center justify-between">
      <Link 
  href="/" 
  className="text-2xl font-bold text-white bg-pink p-2  px-3 rounded-lg"
>
  F
</Link>


        <nav className="hidden md:flex items-center gap-8">
          <Link href="#home" className="text-zinc-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#features" className="text-zinc-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#portfolio" className="text-zinc-300 hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link href="#resume" className="text-zinc-300 hover:text-white transition-colors">
            Resume
          </Link>
          {/* <Link href="#testimonial" className="text-zinc-300 hover:text-white transition-colors">
            Testimonial
          </Link>
          <Link href="#clients" className="text-zinc-300 hover:text-white transition-colors">
            Clients
          </Link>
          <Link href="#pricing" className="text-zinc-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#blog" className="text-zinc-300 hover:text-white transition-colors">
            Blog
          </Link> */}
          <Link href="#contacts" className="text-zinc-300 hover:text-white transition-colors">
            Contacts
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
          <Button className="bg-pink hover:bg-pink/90">find with me</Button>
            <Link href="https://github.com" target="_blank" className="p-2 rounded-md bg-dark hover:bg-pink transition-colors">
              <GitHubIcon className="h-4 w-4 text-white" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="p-2 rounded-md bg-dark hover:bg-pink transition-colors">
              <TwitterIcon className="h-4 w-4 text-white" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="p-2 rounded-md bg-dark hover:bg-pink transition-colors">
              <LinkedInIcon className="h-4 w-4 text-white" />
            </Link>
          </div>

         
        </div>

        <button className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
