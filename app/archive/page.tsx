"use client";

import React, { useState, useEffect } from "react";
import NavBar from '@/components/nav';

// --- Type Definitions ---
type MediaItem = {
  name: string;
  href?: string;
  isComingSoon?: boolean;
};

type ExamItem = {
  name: string;
  link: string;
};

type YearGroup = {
  year: string;
  media?: MediaItem[];
  exams: ExamItem[];
};
// ------------------------

const YEARS: YearGroup[] = [
  {
    year: "2026",
    exams: [
      { name: "Individual A", link: "/2026/Individual_A.pdf" },
      { name: "Individual A Solutions", link: "/2026/Individual_A_Solutions.pdf" },
      { name: "Team A", link: "/2026/Team_A.pdf" },
      { name: "Team A Solutions", link: "/2026/Team_A_Solutions.pdf" },
      { name: "Guts A", link: "/2026/Guts_A.pdf" },
      { name: "Guts A Solutions", link: "/2026/Guts_A_Solutions.pdf" },
      { name: "Awards A", link: "/2026/Awards_A.pdf" },
      { name: "Awards B", link: "/2026/Awards_B.pdf" },
    ],
  },
  {
    year: "2025",
    media: [
        { name: "Google Photos Album", href: "https://photos.app.goo.gl/G1aHyWZQu4R99i6W7" }
    ],
    exams: [
      { name: "Individual A", link: "/2025/Individual_A.pdf" },
      { name: "Individual A Solutions", link: "/2025/Individual_A_Solutions.pdf" },
      { name: "Individual B", link: "/2025/Individual_B.pdf" },
      { name: "Individual B Solutions", link: "/2025/Individual_B_Solutions.pdf" },
      { name: "Team A", link: "/2025/Team_A.pdf" },
      { name: "Team A Solutions", link: "/2025/Team_A_Solutions.pdf" },
      { name: "Team B", link: "/2025/Team_B.pdf" },
      { name: "Team B Solutions", link: "/2025/Team_B_Solutions.pdf" },
      { name: "Guts A", link: "/2025/Guts_A.pdf" },
      { name: "Guts A Solutions", link: "/2025/Guts_A_Solutions.pdf" },
      { name: "Guts B", link: "/2025/Guts_B.pdf" },
      { name: "Guts B Solutions", link: "/2025/Guts_B_Solutions.pdf" },
      { name: "Tiebreaks A", link: "/2025/Tiebreaks_A.pdf" },
      { name: "Tiebreaks A Solutions", link: "/2025/Tiebreaks_A_Solutions.pdf" },
      { name: "Tiebreaks B", link: "/2025/Tiebreaks_B.pdf" },
      { name: "Tiebreaks B Solutions", link: "/2025/Tiebreaks_B_Solutions.pdf" },
      { name: "Estimathon", link: "/2025/Estimathon.pdf" },
      { name: "Estimathon Solutions", link: "/2025/Estimathon_Solutions.pdf" },
      { name: "Awards", link: "/2025/Awards.pdf" },
    ]
  },
  {
    year: "2024",
    media: [
        { name: "Photos coming soon", isComingSoon: true }
    ],
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
    media: [
        { name: "Google Drive Folder", href: "https://drive.google.com/drive/folders/1K5WU2t8V1lS5gqPG3nsmHqb22FqQax2I" }
    ],
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
    media: [
        { name: "Opening Ceremony Livestream", href: "https://www.youtube.com/watch?v=4P0PQ54_JoY" },
        { name: "Closing Ceremony Livestream", href: "https://www.youtube.com/live/k-chm_F5XQ8" }
    ],
    exams: [
        { name: "Individual A", link: "/2022/Individual_A.pdf" },
        { name: "Individual A Solutions", link: "/2022/Individual_A_Solutions.pdf" },
        { name: "Individual B", link: "/2022/Individual_B.pdf" },
        { name: "Individual B Solutions", link: "/2022/Individual_B_Solutions.pdf" },
        { name: "Team A", link: "/2022/Team_A.pdf" },
        { name: "Team A Solutions", link: "/2022/Team_A_Solutions.pdf" },
        { name: "Team B", link: "/2022/Team_B.pdf" },
        { name: "Team B Solutions", link: "/2022/Team_B_Solutions.pdf" },
        { name: "Guts A", link: "/2022/Guts_A.pdf" },
        { name: "Guts A Solutions", link: "/2022/Guts_A_Solutions.pdf" },
        { name: "Guts B", link: "/2022/Guts_B.pdf" },
        { name: "Guts B Solutions", link: "/2022/Guts_B_Solutions.pdf" },
        { name: "Tiebreaks A", link: "/2022/Tiebreaks_A.pdf" },
        { name: "Tiebreaks B", link: "/2022/Tiebreaks_B.pdf" },
    ]
  }
];

export default function Archive() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const handleScroll = () => setOffset(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-[#001332] min-h-screen text-[#E4EFFF] relative overflow-x-hidden pb-20">
      <NavBar />

      <div className="pt-40 pb-16 px-6 md:px-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
              
              <div 
                  className="max-w-2xl relative z-10 text-center md:text-left"
                  style={{ transform: `translateY(${offset * 0.4}px)` }}
              >
                  <span className="text-blue-300 font-bold tracking-widest uppercase text-xs mb-3 block">
                      Past Problems, Solutions, & Photos
                  </span>
                  <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
                      ARCHIVE
                  </h1>
                  <p className="text-gray-300 mt-4 text-lg font-medium opacity-90">
                      Review problems, solutions, and memories from previous years of the Gunn Math Competition.
                  </p>
              </div>

              <div 
                  className="relative opacity-10 hidden md:block"
                  style={{ transform: `translateY(${offset * -0.1}px)` }}
              >
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

      <div className="px-6 md:px-20 py-10 max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="space-y-16">
            {YEARS.map((yearGroup) => (
                <div key={yearGroup.year} className="relative">
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8 border-b-2 border-blue-400/50 pb-4">
                            <h2 className="text-3xl font-black text-white inline-block m-0">
                                {yearGroup.year}
                            </h2>
                            <div className="flex flex-wrap gap-2 md:mb-1">
                                {yearGroup.media?.map((item, idx) => (
                                    item.isComingSoon ? (
                                        <span key={idx} className="bg-white/5 text-white/50 px-3 py-1 rounded-full text-sm font-bold border border-white/10">
                                            {item.name}
                                        </span>
                                    ) : (
                                        <a key={idx} href={item.href || "#"} target="_blank" rel="noopener noreferrer" className="bg-white/10 text-blue-200 px-3 py-1 rounded-full text-sm font-bold hover:bg-white/20 hover:text-white transition-all flex items-center gap-1 border border-white/10">
                                            {item.name} <span>&rarr;</span>
                                        </a>
                                    )
                                ))}
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {yearGroup.exams.map((exam, idx) => (
                                <a 
                                    key={idx} 
                                    href={exam.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-white p-4 rounded-xl shadow-sm hover:shadow-white/20 border border-[#002E67]/10 hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-[100px] group"
                                >
                                    <div className="font-bold text-[#002E67] text-lg leading-tight group-hover:text-blue-600 transition-colors">
                                        {exam.name.replace("Individual", "Indiv.")}
                                    </div>
                                    <div className="flex justify-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 text-[#002E67]/30 group-hover:text-blue-600">
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