"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const navLinks = [
    { name: "Home", href: "/" },
    {
        name: "Contest",
        dropdown: [
            { name: "Registration Info", href: "/registration-info" },
            { name: "Manual", href: "https://docs.google.com/document/d/11Ac9OguL8Ay38kQBQwlAPb5WGqTtD8cD-7ZJ7YDiy_4/edit?tab=t.0#heading=h.3sn6znb7b0ay", external: true },
            { name: "Speaker", href: "/guest-speaker" }
        ]
    },
    {
        name: "About",
        dropdown: [
            { name: "Our Mission", href: "/mission" },
            { name: "Organizers", href: "/organizers" },
            { name: "Past Organizers", href: "/past-organizers" },
            { name: "Photo Privacy", href: "/photo-privacy" },
            { name: "Sponsors", href: "/sponsors" }
        ]
    },
    {
        name: "Archive",
        dropdown: [
            { name: "Problems & Results", href: "/archive" },
            { name: "Photo Albums", href: "/photo-albums" }
        ]
    },
    { name: "FAQ", href: "/faq" },
    {
        name: "Contact",
        dropdown: [
            { name: "Email", href: "mailto:ghsmathcircle@gmail.com", external: true },
            { name: "Discord", href: "https://discord.gg/7EBjsHUppM", external: true },
            { name: "Instagram", href: "https://www.instagram.com/gunnmathcircle/", external: true }
        ]
    }
];

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const navRef = useRef<HTMLElement>(null);

    // Close dropdowns if the user clicks anywhere outside the navigation bar
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Toggle logic for desktop click menus
    const toggleDropdown = (name: string) => {
        setActiveDropdown(prev => (prev === name ? null : name));
    };

    return (
        <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 bg-[#002E67] shadow-lg py-3 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                
                {/* Logo Area */}
                <Link href="/" onClick={() => setActiveDropdown(null)} className="font-black text-2xl tracking-tighter text-white flex items-center gap-3 group">
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
                <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navLinks.map((item) => (
                        item.dropdown ? (
                            <div key={item.name} className="relative">
                                <button 
                                    onClick={() => toggleDropdown(item.name)}
                                    className="text-sm font-bold text-white/80 hover:text-white uppercase tracking-wider transition-colors flex items-center gap-1 py-4"
                                >
                                    {item.name}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                                
                                {/* Dropdown Menu (Click to open) */}
                                <div className={`absolute left-0 top-full mt-0 w-48 bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-200 transform origin-top overflow-hidden ${activeDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                    <div className="py-2">
                                        {item.dropdown.map(subItem => (
                                            <Link 
                                                key={subItem.name}
                                                href={subItem.href}
                                                target={subItem.external ? "_blank" : undefined}
                                                rel={subItem.external ? "noopener noreferrer" : undefined}
                                                className="block px-5 py-2.5 text-sm font-bold text-[#002E67] hover:bg-blue-50 hover:text-[#155EA5] transition-colors"
                                                onClick={() => setActiveDropdown(null)}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link 
                                key={item.name} 
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="text-sm font-bold text-white/80 hover:text-white uppercase tracking-wider transition-colors py-4"
                            >
                                {item.name}
                            </Link>
                        )
                    ))}
                    
                    {/* Registration Button */}
                    <a 
                        href="https://contestdojo.com/register"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-[#002E67] px-5 py-2 rounded-full font-bold text-sm hover:bg-blue-50 transition-all hover:scale-105 shadow-md ml-2"
                    >
                        Register
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden text-white p-2"
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
                <div className="lg:hidden absolute top-full left-0 w-full bg-[#002E67] border-t border-white/10 p-6 flex flex-col shadow-xl max-h-[80vh] overflow-y-auto">
                    {navLinks.map((item) => (
                        item.dropdown ? (
                            <div key={item.name} className="py-3 border-b border-white/5">
                                <button 
                                    className="w-full text-left flex justify-between items-center text-xs font-black text-blue-300 uppercase tracking-widest mb-3 pl-2"
                                    onClick={() => toggleDropdown(`mobile-${item.name}`)}
                                >
                                    {item.name}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-4 h-4 transition-transform ${activeDropdown === `mobile-${item.name}` ? 'rotate-180' : ''}`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                                
                                {/* Expandable Mobile Sub-menu */}
                                <div className={`flex flex-col gap-3 pl-4 border-l-2 border-white/10 overflow-hidden transition-all duration-300 ${activeDropdown === `mobile-${item.name}` ? 'max-h-96 opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
                                    {item.dropdown.map(subItem => (
                                        <Link 
                                            key={subItem.name} 
                                            href={subItem.href}
                                            target={subItem.external ? "_blank" : undefined}
                                            rel={subItem.external ? "noopener noreferrer" : undefined}
                                            className="text-lg font-bold text-white hover:text-blue-200 transition-colors py-1"
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                                setActiveDropdown(null);
                                            }}
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link 
                                key={item.name} 
                                href={item.href}
                                className="text-lg font-bold text-white block py-4 border-b border-white/5 hover:text-blue-200 transition-colors"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    setActiveDropdown(null);
                                }}
                            >
                                {item.name}
                            </Link>
                        )
                    ))}
                     <a 
                        href="https://contestdojo.com/register"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-[#002E67] text-center px-5 py-3 rounded-xl font-bold mt-6 hover:bg-gray-100"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Register Now
                    </a>
                </div>
            )}
        </nav>
    );
}