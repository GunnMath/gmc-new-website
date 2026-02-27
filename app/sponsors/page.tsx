"use client";

import React from "react";
import NavBar from '@/components/nav';

const SPONSORS_DATA = [
    {
        name: "Thinkfund",
        tier: "Gold",
        desc: "The City of Palo Alto’s Think Fund is a youth mini-grant program that provides high school students with funding, mentorship, and City support to turn their ideas into community programs, events, or long-term initiatives.",
        img: "/sponsors/thinkfund.png",
        url: "https://www.mitchellparkteenservices.org/thinkfund"
    },
    {
        name: "City of Palo Alto",
        tier: "Gold",
        desc: "The City of Palo Alto supports numerous community programs and youth initiatives through its community grants.",
        img: "/sponsors/PaloAlto.png",
        url: "https://www.cityofpaloalto.org/Home"
    },
    {
        name: "LIVE by Po-Shen Loh",
        tier: "Silver",
        desc: "LIVE, by Po-Shen Loh is the first and only online math course that captivates, entertains, and inspires. Invented by legendary math coach Po-Shen Loh.",
        img: "/sponsors/live.png",
        url: "https://live.poshenloh.com/"
    },
    {
        name: "Jane Street",
        tier: "Silver",
        desc: "Jane Street is a global quantitative trading firm and liquidity provider trading a wide range of financial products.",
        img: "/sponsors/janestreet.png",
        url: "https://www.janestreet.com/"
    },
    {
        name: "Hudson River Trading",
        tier: "Silver",
        desc: "Hudson River Trading brings a scientific approach to trading financial products. We have built one of the world’s most sophisticated computing environments for research and development.",
        img: "/sponsors/HRT.png",
        url: "https://www.hudsonrivertrading.com/"
    },
    {
        name: "Citadel Securities",
        tier: "Silver",
        desc: "Citadel Securities is a leading global market maker, delivering a broad suite of fixed income and equity products to clients around the world.",
        img: "/sponsors/citadel.png",
        url: "https://www.citadelsecurities.com/"
    },
    {
        name: "DRW",
        tier: "Silver",
        desc: "We are a diversified trading firm innovating across both traditional and cutting-edge markets.",
        img: "/sponsors/DRW.png",
        url: "https://www.drw.com/"
    },
    {
        name: "Susquehanna International Group",
        tier: "Silver",
        desc: "Susquehanna is a global quantitative trading firm powered by scientific rigor, curiosity, and innovation.",
        img: "/sponsors/SIG.png",
        url: "https://sig.com/"
    },
    {
        name: "Stanford Research Park",
        tier: "Silver",
        desc: "From startup incubation to the innovation arms of global powerhouses, Stanford Research Park is the home to cutting-edge business.",
        img: "/sponsors/SRP.png",
        url: "https://stanfordresearchpark.com/"
    },
    {
        name: "AoPS Academy",
        tier: "Bronze",
        desc: "AoPS Academy is an after-school enrichment program with a mission to teach problem solving skills through advanced math, language arts, and science courses.",
        img: "/sponsors/aopsacademy.png",
        url: "https://aopsacademy.org/campus/mountainview"
    },
    {
        name: "Euler Circle",
        tier: "Bronze",
        desc: "Euler Circle is a mathematics institute for advanced students who love mathematics. It offers college-level mathematics classes specifically tailored to high-school students.",
        img: "/sponsors/eulercircle.png",
        url: "https://eulercircle.com/"
    },
    {
        name: "Wolfram",
        tier: "Bronze",
        desc: "Wolfram Research is one of the world's most respected computer, web and cloud software companies—as well as a powerhouse of scientific and technical innovation.",
        img: "/sponsors/wolfram.png",
        url: "https://www.wolfram.com/"
    },
    {
        name: "ContestDojo",
        tier: "Bronze",
        desc: "ContestDojo is an online math competition platform built and used for tournaments such as the Stanford Math Tournament and the Berkeley Math Tournament.",
        img: "/sponsors/contestdojo.png",
        url: "https://contestdojo.com/"
    },
];

export default function SponsorsPage() {
  return (
    <main className="bg-[#e4efff] min-h-screen text-[#002e66] relative overflow-x-hidden">
      <NavBar />

      <div className="px-6 md:px-20 pt-40 pb-20 max-w-5xl mx-auto">
        <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-black text-[#002e66] mb-6 tracking-tight">
                Our Sponsors
            </h1>
            <p className="text-xl text-[#002e66]/70 max-w-2xl mx-auto font-medium">
                GMC is made possible by the generous support of these organizations.
            </p>
        </div>

        <div className="space-y-8">
            {SPONSORS_DATA.map((sponsor, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start border border-[#002e66]/5">
                    <div className="w-48 h-32 flex-shrink-0 flex items-center justify-center p-4 bg-gray-50 rounded-xl">
                        <img src={sponsor.img} alt={sponsor.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                            <h2 className="text-2xl font-black text-[#002e66]">{sponsor.name}</h2>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                sponsor.tier === 'Gold' ? 'bg-yellow-100 text-yellow-700' :
                                sponsor.tier === 'Silver' ? 'bg-gray-100 text-gray-600' :
                                'bg-orange-100 text-orange-700'
                            }`}>
                                {sponsor.tier} Sponsor
                            </span>
                        </div>
                        <p className="text-[#002e66]/80 leading-relaxed font-medium">
                            {sponsor.desc}
                        </p>
                        <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-[#155EA5] font-bold hover:underline">
                            Visit Website &rarr;
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}
