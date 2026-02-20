"use client";

import React from "react";

type SponsorTier = "Gold" | "Silver" | "Bronze" | "Partner";

interface Sponsor {
  name: string;
  src: string;
  url: string;
  tier: SponsorTier;
}

const sponsors: Sponsor[] = [
  // --- GOLD ---
  { name: "Thinkfund", src: "/sponsors/thinkfund.png", url: "https://www.mitchellparkteenservices.org/thinkfund", tier: "Gold" },
  { name: "City of Palo Alto", src: "/sponsors/PaloAlto.png", url: "https://www.cityofpaloalto.org/Home", tier: "Gold" },
  { name: "National Math Camps", src: "/sponsors/nationalmathcamps.png", url: "https://www.nationalmathcamps.org/", tier: "Gold" },
  
  // --- SILVER ---
  { name: "DRW", src: "/sponsors/DRW.png", url: "https://www.drw.com/", tier: "Silver" },
  { name: "Jane Street", src: "/sponsors/janestreet.png", url: "https://www.janestreet.com/", tier: "Silver" },
  { name: "Hudson River Trading", src: "/sponsors/HRT.png", url: "https://www.hudsonrivertrading.com/", tier: "Silver" },
  { name: "Citadel Securities", src: "/sponsors/citadel.png", url: "https://www.citadelsecurities.com/", tier: "Silver" },
  { name: "LIVE by Po-Shen Loh", src: "/sponsors/live.png", url: "https://live.poshenloh.com/", tier: "Silver" },
  { name: "Stanford Research Park", src: "/sponsors/SRP.png", url: "https://stanfordresearchpark.com/", tier: "Silver" },
  { name: "Susquehanna International Group", src: "/sponsors/sig.png", url: "https://sig.com/", tier: "Silver" },

  // --- BRONZE ---
  { name: "Euler Circle", src: "/sponsors/eulercircle.png", url: "https://eulercircle.com/", tier: "Bronze" },
  { name: "ContestDojo", src: "/sponsors/contestdojo.png", url: "https://contestdojo.com/", tier: "Bronze" },
  { name: "AoPS Academy", src: "/sponsors/aopsacademy.png", url: "https://aopsacademy.org/campus/mountainview", tier: "Bronze" },
  { name: "AwesomeMath", src: "/sponsors/awesomeMath.png", url: "https://www.awesomemath.org/", tier: "Bronze" },
  { name: "Art of Problem Solving", src: "/sponsors/aops.png", url: "https://artofproblemsolving.com/", tier: "Bronze" },
  { name: "Wolfram", src: "/sponsors/wolfram.png", url: "https://www.wolfram.com/", tier: "Bronze" },
];

const TierSection = ({ tier, color, data }: { tier: SponsorTier; color: string; data: Sponsor[] }) => {
  if (data.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full max-w-6xl mb-16">
      {data.map((s, idx) => (
        <a
          key={idx}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center bg-white p-6 rounded-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
          style={{ 
            width: tier === "Gold" ? "300px" : tier === "Silver" ? "260px" : "220px",
            height: tier === "Gold" ? "180px" : tier === "Silver" ? "140px" : "120px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = color;
            e.currentTarget.style.borderWidth = "2px";
            e.currentTarget.style.boxShadow = `0 0 25px ${color}66`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#e5e7eb";
            e.currentTarget.style.borderWidth = "1px";
            e.currentTarget.style.boxShadow = "0 1px 2px 0 rgb(0 0 0 / 0.05)";
          }}
        >
          <div className="relative w-full h-full">
            <img
              src={s.src}
              alt={s.name}
              className="w-full h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default function Sponsors() {
  const goldSponsors = sponsors.filter((s) => s.tier === "Gold");
  const silverSponsors = sponsors.filter((s) => s.tier === "Silver");
  const bronzeSponsors = sponsors.filter((s) => s.tier === "Bronze");

  return (
    <div className="flex flex-col items-center py-10 px-5 w-full">
      <h2 className="text-3xl md:text-4xl font-black text-[#002e66] mb-16 tracking-tight text-center">
        Thank you to our sponsors
      </h2>

      <TierSection tier="Gold" color="#FFD700" data={goldSponsors} />
      <TierSection tier="Silver" color="#C0C0C0" data={silverSponsors} />
      <TierSection tier="Bronze" color="#CD7F32" data={bronzeSponsors} />
      
      <div className="mt-4 text-[#002e66]/50 text-sm font-bold">
        Interested in sponsoring? Contact us at <a href="mailto:ghsmathcircle@gmail.com" className="underline hover:text-[#002e66] transition-colors">ghsmathcircle@gmail.com</a>
      </div>
    </div>
  );
}