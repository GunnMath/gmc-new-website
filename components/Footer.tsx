import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#002E67] text-[#E4EFFF] py-8 text-center border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-5">
        <div className="flex flex-wrap justify-center gap-6 text-sm tracking-widest uppercase">
          <a href="mailto:ghsmathcircle@gmail.com" className="hover:text-blue-300 transition-colors">
            ghsmathcircle@gmail.com
          </a>
          <span className="opacity-30">|</span>
          <a href="https://discord.gg/7EBjsHUppM" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
            Discord Server
          </a>
        </div>
        <div className="text-sm opacity-70">
          © 2026 Gunn Math Circle. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}