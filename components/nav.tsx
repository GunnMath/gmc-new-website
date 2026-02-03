"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0b0b45]/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* LOGO - Path reverted to /fsh.png so Next.js handles the prefix */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110">
            <Image 
                src="/fsh.png" 
                alt="GMC Logo" 
                fill 
                className="object-contain brightness-0 invert" 
            />
          </div>
          <span className="font-bold text-white text-lg md:text-xl tracking-tight group-hover:text-gray-200 transition-colors">
            GMC 2026
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/organizers">Organizers</NavLink>
          <NavLink href="/guest-speaker">Guest Speaker</NavLink>
          <NavLink href="/archive">Archive</NavLink>
          
          <a
            href="https://contestdojo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0b0b45] px-5 py-2 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all shadow-sm"
          >
            Register
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          ☰
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="text-white/80 hover:text-white font-medium transition-colors text-sm uppercase tracking-wider"
  >
    {children}
  </Link>
);