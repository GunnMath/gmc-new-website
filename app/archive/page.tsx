"use client";

import React from "react";
import NavBar from '@/components/nav';

const YEARS = [
  {
    year: "2024",
    exams: [
      { name: "Individual A", link: "/2024/Individual_A.pdf" },
      { name: "Individual B", link: "/2024/Individual_B.pdf" },
      { name: "Team A", link: "/2024/Team_A.pdf" },
      { name: "Team B", link: "/2024/Team_B.pdf" },
      { name: "Guts A", link: "/2024/Guts_A.pdf" },
      { name: "Guts B", link: "/2024/Guts_B.pdf" },
      { name: "Tiebreaks A", link: "/2024/Tiebreaks_A.pdf" },
      { name: "Tiebreaks B", link: "/2024/Tiebreaks_B.pdf" },
      { name: "Awards A", link: "/2024/Awards_A.pdf" },
      { name: "Awards B", link: "/2024/Awards_B.pdf" },
    ]
  },
  {
    year: "2023",
    exams: [
      { name: "Individual A", link: "/2023/Individual_A.pdf" },
      { name: "Individual B", link: "/2023/Individual_B.pdf" },
      { name: "Team A", link: "/2023/Team_A.pdf" },
      { name: "Team B", link: "/2023/Team_B.pdf" },
      { name: "Guts A", link: "/2023/Guts_A.pdf" },
      { name: "Guts B", link: "/2023/Guts_B.pdf" },
      { name: "Tiebreaks A", link: "/2023/Tiebreak_A.pdf" },
      { name: "Tiebreaks B", link: "/2023/Tiebreak_B.pdf" },
    ]
  },
  {
    year: "2022",
    exams: [
        { name: "Individual A", link: "/2022/Individual_A.pdf" },
        { name: "Individual B", link: "/2022/Individual_B.pdf" },
        { name: "Team A", link: "/2022/Team_A.pdf" },
        { name: "Team B", link: "/2022/Team_B.pdf" },
        { name: "Guts A", link: "/2022/Guts_A.pdf" },
        { name: "Guts B", link: "/2022/Guts_B.pdf" },
    ]
  }
];

export default function Archive() {
  return (
    <main className="bg-[#e4efff] min-h-screen text-[#002e66] relative overflow-x-hidden">
      <NavBar />

      <div className="px-6 md:px-20 pt-40 pb-20 max-w-7xl mx-auto">
        <div className="mb-20">
            <h1 className="text-5xl md:text-7xl font-black text-[#002e66] mb-6 tracking-tight">
                Archive
            </h1>
            <p className="text-xl text-[#002e66]/70 max-w-2xl font-medium">
                Review problems and solutions from previous years of the Gunn Math Competition.
            </p>
        </div>

        <div className="space-y-16">
            {YEARS.map((yearGroup) => (
                <div key={yearGroup.year} className="relative">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-black text-[#002e66] mb-8 border-b-2 border-[#155EA5]/30 pb-4 inline-block">
                            {yearGroup.year}
                        </h2>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {yearGroup.exams.map((exam, idx) => (
                                <a 
                                    key={idx} 
                                    href={exam.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg border border-[#002e66]/5 hover:border-[#155EA5] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-[100px] group"
                                >
                                    <div className="font-bold text-[#002e66] text-lg leading-tight group-hover:text-[#155EA5] transition-colors">
                                        {exam.name.replace("Individual", "Indiv.")}
                                    </div>
                                    <div className="flex justify-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 text-[#002e66]/30 group-hover:text-[#155EA5]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}