"use client";
import React from "react";
import NavBar from '@/components/nav';

export default function PhotoAlbumsPage() {
  return (
    <main className="bg-[#E4EFFF] min-h-screen text-[#002E67] relative overflow-x-hidden pt-32 pb-20">
      <NavBar />
      <div className="px-6 md:px-20 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black mb-12 text-center tracking-tight">Photo Albums</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 2025 */}
            <a href="https://photos.app.goo.gl/vcgvXctyjPKaARDR8" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-3xl shadow-xl border border-[#002E67]/10 hover:-translate-y-2 hover:shadow-2xl transition-all group">
                <div className="text-4xl font-black text-[#002E67] mb-2 group-hover:text-[#155EA5] transition-colors">2025</div>
                <div className="font-bold opacity-70 flex items-center gap-2">Google Photos Album <span className="text-xl">&rarr;</span></div>
            </a>

            {/* 2024 */}
            <div className="bg-white/50 p-8 rounded-3xl border border-[#002E67]/10 flex flex-col justify-center">
                <div className="text-4xl font-black text-[#002E67] mb-2 opacity-50">2024</div>
                <div className="font-bold opacity-50">Photos coming soon</div>
            </div>

            {/* 2023 */}
            <a href="https://drive.google.com/drive/folders/1K5WU2t8V1lS5gqPG3nsmHqb22FqQax2I" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-3xl shadow-xl border border-[#002E67]/10 hover:-translate-y-2 hover:shadow-2xl transition-all group">
                <div className="text-4xl font-black text-[#002E67] mb-2 group-hover:text-[#155EA5] transition-colors">2023</div>
                <div className="font-bold opacity-70 flex items-center gap-2">Google Drive Folder <span className="text-xl">&rarr;</span></div>
            </a>

            {/* 2022 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#002E67]/10">
                <div className="text-4xl font-black text-[#002E67] mb-4">2022</div>
                <div className="flex flex-col gap-4">
                    <a href="https://www.youtube.com/watch?v=4P0PQ54_JoY" target="_blank" rel="noopener noreferrer" className="font-bold text-[#155EA5] hover:text-[#002E67] underline">
                        Opening Ceremony Livestream
                    </a>
                    <a href="https://www.youtube.com/live/k-chm_F5XQ8" target="_blank" rel="noopener noreferrer" className="font-bold text-[#155EA5] hover:text-[#002E67] underline">
                        Closing Ceremony Livestream
                    </a>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}