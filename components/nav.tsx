"use client";

import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Staff", href: "/organizers" },
    { name: "Speaker", href: "/guest-speaker" },
    { name: "Archive", href: "/archive" },
    { name: "Sponsors", href: "/sponsors" },
];

export default function NavBar() {
    // Removed scroll listener since we want it always solid
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        // Fixed background color #002E67, always visible
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#002E67] shadow-lg py-3 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                
                {/* Logo Area */}
                <Link href="/" className="font-black text-2xl tracking-tighter text-white flex items-center gap-3 group">
                    {/* Added FSH Logo */}
                    <img 
                        src="/fsh.png" 
                        alt="GMC Logo" 
                        className="h-10 w-auto brightness-0 invert group-hover:scale-110 transition-transform" 
                    />
                    <div className="flex items-center gap-2">
                        <span className="text-blue-300">GMC</span>
                        <span>2026</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href}
                            className="text-sm font-bold text-white/80 hover:text-white uppercase tracking-wider transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    
                    {/* Registration Button */}
                    <a 
                        href="https://docs.google.com/document/d/1qopZbE5LUcpiWEU_osvv0JdezB_i2LFfhR9zKfjFtks/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-[#002E67] px-5 py-2 rounded-full font-bold text-sm hover:bg-blue-50 transition-all hover:scale-105 shadow-md"
                    >
                        Register
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                        {mobileMenuOpen ? (
                             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#002E67] border-t border-white/10 p-6 flex flex-col gap-4 shadow-xl">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href}
                            className="text-lg font-bold text-white block py-3 border-b border-white/5 hover:text-blue-200 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                     <a 
                        href="https://docs.google.com/document/d/1qopZbE5LUcpiWEU_osvv0JdezB_i2LFfhR9zKfjFtks/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-[#002E67] text-center px-5 py-3 rounded-xl font-bold mt-2 hover:bg-gray-100"
                    >
                        Register Now
                    </a>
                </div>
            )}
        </nav>
    );
}