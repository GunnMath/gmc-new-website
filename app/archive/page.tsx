"use client";

import React, { useState, useEffect } from "react";
import { Heading1, Heading2 } from "@/components/headers";
import NavBar from "@/components/nav";
import Link from "next/link";
import { Fragment } from "react";
import Image from 'next/image';

const divs = ["A", "B"];
const tests = ["Individual", "Team", "Guts", "Tiebreak", "Awards"];

const years = [
  { year: 2024, solutions: true },
  { year: 2023, solutions: true },
  { year: 2022, solutions: true }
];

const YearArchive = (props: { year: number, solutions: boolean }) => {
    return (
        <div className="mb-16">
            <hr className="mb-8 border-t-4 border-[#0b0b45] w-24 opacity-20" />
            
            <div className="flex items-baseline gap-4 mb-2">
                <Heading1>{props.year}</Heading1>
                <span className="text-gray-500 font-medium text-lg">Year {props.year - 2021}</span>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {divs.map(division => (
                    <div key={division} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#0b0b45] transition-colors">
                        <div className="mb-4">
                            <Heading2>Division {division}</Heading2>
                        </div>

                        <div className={`grid ${props.solutions ? "grid-cols-[1.5fr_1fr_1fr]" : "grid-cols-[2fr_1fr]"} gap-y-3 gap-x-4`}>
                            <div className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">Test</div>
                            <div className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">File</div>
                            {props.solutions && <div className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">Sol</div>}

                            {tests.map(test => (
                                <Fragment key={test}>
                                    <div className="font-bold text-[#0b0b45]">{test}</div>
                                    <div>
                                        <Link 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            href={`/${props.year}/${test === "Tiebreak" ? "Tiebreaks" : test}_${division}.pdf`}
                                            className="text-blue-600 hover:text-[#0b0b45] hover:underline"
                                        >
                                            PDF
                                        </Link>
                                    </div>
                                    {props.solutions ? (
                                        <div>
                                            <Link 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                href={`/${props.year}/${test === "Tiebreak" ? "Tiebreaks" : test}_${division}_Solutions.pdf`}
                                                className="text-green-600 hover:text-[#0b0b45] hover:underline"
                                            >
                                                Sol
                                            </Link>
                                        </div>
                                    ) : null}
                                </Fragment>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function Archive() {
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
                            Past Problems
                        </span>
                        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
                            ARCHIVE
                        </h1>
                        <p className="text-gray-300 mt-4 text-lg max-w-lg">
                            Browse problems and solutions from previous years of the Gunn Math Competition (2022-Present).
                        </p>
                    </div>

                    {/* Logo moves reverse/slower (-0.1 speed) */}
                    <div 
                        className="relative opacity-10 invisible lg:visible"
                        style={{ transform: `translateY(${offset * -0.1}px)` }}
                    >
                        {/* PATH UPDATED: /fsh.png */}
                        <Image src="/fsh.png" width={300} height={240} alt="GMC logo" className="object-contain brightness-0 invert" />
                    </div>
                </div>
            </div>

            {/* Content Container (z-20 and bg-white needed to cover the parallax content as it scrolls up) */}
            <div className="px-10 md:px-20 py-20 max-w-7xl mx-auto relative z-20 bg-white">
                {years.map(({ year, solutions }) => (
                    <YearArchive key={year} year={year} solutions={solutions} />
                ))}
            </div>
        </main>
    )
}