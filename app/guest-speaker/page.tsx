"use client";

import React, { useState, useEffect } from "react";
import { Heading1 } from "@/components/headers";
import NavBar from "@/components/nav";

export default function Guestspeaker() {
    // Parallax Logic
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffset(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className="bg-white min-h-screen">
            <NavBar />

            {/* Parallax Hero Section */}
            <div className="bg-[#0b0b45] pt-40 pb-16 px-10 md:px-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
                    
                    {/* Text moves slower (0.4 speed) */}
                    <div 
                        className="max-w-2xl relative z-10"
                        style={{ transform: `translateY(${offset * 0.4}px)` }}
                    >
                        <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-3 block">
                            Special Event
                        </span>
                        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
                            GUEST SPEAKER
                        </h1>
                        <p className="text-gray-300 mt-4 text-lg">
                            Hear from leading minds in mathematics and problem solving.
                        </p>
                    </div>

                    {/* Logo moves reverse/slower (-0.1 speed) */}
                    <div 
                        className="relative opacity-10 invisible lg:visible"
                        style={{ transform: `translateY(${offset * -0.1}px)` }}
                    >
                        {/* Standard IMG tag for Logo */}
                        <img 
                            src="/fsh.png" 
                            width="300" 
                            height="240" 
                            alt="GMC logo" 
                            className="object-contain brightness-0 invert" 
                        />
                    </div>
                </div>
            </div>

            {/* Content Container with White Background to cover parallax scroll */}
            <div className="relative z-20 bg-white">
                
                {/* 2026 Placeholder Section */}
                <div className="max-w-7xl mx-auto px-10 md:px-20 py-20 border-b border-gray-100">
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10 text-center">
                        <h2 className="text-3xl font-bold text-[#0b0b45] mb-2">2026 Guest Speaker</h2>
                        <p className="text-xl text-gray-500 italic">Coming Soon</p>
                    </div>
                </div>

                {/* 2025 Speaker Profile */}
                <div className="max-w-7xl mx-auto px-10 md:px-20 py-20">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        
                        {/* Text Content */}
                        <div className="flex-1 space-y-6 text-gray-700 leading-relaxed text-lg">
                            <div>
                                <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">2025 Speaker</span>
                                <Heading1>Po-Shen Loh</Heading1>
                                <p className="font-bold text-[#0b0b45] text-xl mt-2">
                                    Carnegie Mellon University Professor & Former USA IMO Head Coach
                                </p>
                            </div>

                            <p>
                                Po-Shen Loh is a social entrepreneur and mathematician, with a track record of inventing incentive-aligned solutions to address timely population-scale real-world problems, from pandemic control to helping human society thrive in the AI era. He is a math professor at Carnegie Mellon University, and served a decade-long term as the national coach of the USA International Mathematical Olympiad team from 2013–2023.
                            </p>
                            
                            <p>
                                Since 2023, he has been the Vice President of the IMO Foundation, as the founder and organizer of the annual IMO Alumni Reunion. His latest innovation brings together math stars and professional actors, to mass-produce live-streamed creative problem-solving lessons that match the engagement level of online video entertainment.
                            </p>

                            <p>
                                As an academic, Po-Shen has earned distinctions ranging from an International Mathematical Olympiad silver medal to the United States Presidential Early Career Award for Scientists and Engineers. His pure scientific research considered a variety of questions that lie at the intersection of combinatorics (the study of discrete systems), probability theory, and computer science.
                            </p>

                            <p>
                                As an educator, he was the coach of Carnegie Mellon University’s math team when it achieved its first-ever #1 rank among all North American universities, and the coach of the USA Math Olympiad team when it achieved its first-ever back-to-back #1-rank victories in 2015 and 2016, and then again in 2018 and 2019. His research and educational outreach takes him to cities across the world, reaching over 10,000 people each year through public lectures and events, and he has featured in or co-created videos totaling over 24 million YouTube views.
                            </p>

                            <div className="pt-6">
                                <a 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    href="https://docs.google.com/document/d/11Ac9OguL8Ay38kQBQwlAPb5WGqTtD8cD-7ZJ7YDiy_4/edit?usp=sharing"
                                    className="inline-block bg-[#0b0b45] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#1a1a5e] transition-colors shadow-md"
                                >
                                    View Full Bio
                                </a>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="w-full lg:w-[400px] flex-shrink-0">
                            <div className="sticky top-24">
                                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0b0b45]">
                                    {/* Standard IMG tag for Speaker Photo */}
                                    <img 
                                        src="/Po-ShenLoh.jpg" 
                                        alt="Po-Shen Loh" 
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <p className="text-center text-gray-500 mt-4 text-sm">
                                    Photograph courtesy of Po-Shen Loh
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}