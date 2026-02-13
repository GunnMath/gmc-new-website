"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Handle scroll for background color
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Determine Nav Background for Desktop
  const navBg = scrolled 
    ? "bg-[#004184]/95 backdrop-blur-md shadow-md" 
    : isHome 
      ? "bg-transparent" 
      : "bg-[#002e66]";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 py-4 ${isOpen ? 'bg-transparent' : navBg}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="group flex items-center gap-3 relative z-50">
            <img 
              src="/fsh.png" 
              alt="GMC Logo" 
              className="w-10 h-10 object-contain brightness-0 invert group-hover:opacity-80 transition-opacity" 
            />
            <span className="font-black text-2xl text-white tracking-tighter group-hover:opacity-80 transition-opacity">
              GMC
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-white font-bold hover:text-blue-200 transition-colors">Home</Link>
              <Link href="/archive" className="text-white font-bold hover:text-blue-200 transition-colors">Archive</Link>
              <Link href="/guest-speaker" className="text-white font-bold hover:text-blue-200 transition-colors">Speaker</Link>
              <Link href="/organizers" className="text-white font-bold hover:text-blue-200 transition-colors">Staff</Link>
              <Link href="/sponsors" className="text-white font-bold hover:text-blue-200 transition-colors">Sponsors</Link>
              
              <a 
                href="https://contestdojo.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-[#004184] px-6 py-2 rounded-full font-black hover:bg-blue-50 hover:scale-105 transition-all shadow-lg"
              >
                Register
              </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden relative z-50 text-white cursor-pointer p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              // X Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#002e66] z-40 transition-all duration-300 ease-in-out flex flex-col justify-center items-center gap-8 md:hidden ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
          <Link href="/" className="text-3xl font-black text-white hover:text-blue-200 transition-colors">Home</Link>
          <Link href="/archive" className="text-3xl font-black text-white hover:text-blue-200 transition-colors">Archive</Link>
          <Link href="/guest-speaker" className="text-3xl font-black text-white hover:text-blue-200 transition-colors">Speaker</Link>
          <Link href="/organizers" className="text-3xl font-black text-white hover:text-blue-200 transition-colors">Staff</Link>
          <Link href="/sponsors" className="text-3xl font-black text-white hover:text-blue-200 transition-colors">Sponsors</Link>
          
          <a 
            href="https://contestdojo.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-[#004184] text-2xl px-8 py-3 rounded-full font-black hover:bg-blue-50 transition-all shadow-xl mt-4"
          >
            Register Now
          </a>
      </div>
    </>
  );
}