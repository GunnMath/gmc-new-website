"use client";
import React from "react";
import NavBar from '@/components/nav';

export default function MapPage() {
  return (
    <main className="bg-[#E4EFFF] min-h-screen text-[#002E67] relative overflow-x-hidden pt-32 pb-20">
      <NavBar />
      <div className="px-6 md:px-20 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">Campus Map</h1>
        <p className="text-xl font-semibold opacity-70 mb-12">
            Find your way around the Gunn High School campus.
        </p>
        
        <div className="bg-white p-4 md:p-8 rounded-3xl shadow-xl border border-[#002E67]/10 flex justify-center">
            <img 
                src="/GMC_Map.png" 
                alt="Gunn Math Competition Campus Map" 
                className="w-full h-auto max-w-4xl rounded-xl shadow-sm"
            />
        </div>
      </div>
    </main>
  );
}