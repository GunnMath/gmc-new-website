"use client";

import React from "react";
import NavBar from '@/components/nav';
// FIX: Use absolute import
import { Heading1, Heading2, Paragraph } from '@/components/headers'; 

const SPONSORS_DATA = [
    {
        name: "Thinkfund",
        tier: "Gold",
        desc: "The City of Palo Alto’s Think Fund is a youth mini-grant program that provides high school students with funding, mentorship, and City support to turn their ideas into community programs, events, or long-term initiatives, using revenue originally dedicated to teen services through the former Bryant Street Garage Fund.",
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
        name: "National Math Camps",
        tier: "Gold",
        desc: "NMC is an organization that runs immersive summer math enrichment camps where mathematically talented students explore advanced concepts with expert instructors, build community with peers, and grow their problem-solving skills in a supportive, residential setting.",
        img: "/sponsors/nationalmathcamps.png",
        url: "https://www.nationalmathcamps.org/"
    },
    {
        name: "Jane Street",
        tier: "Silver",
        desc: "Jane Street is a global quantitative trading firm and liquidity provider trading a wide range of financial products, including ETFs, equities, futures, commodities, options, bonds, digital assets, and currencies. We have offices in New York, London, Hong Kong, and Amsterdam which allow us to make markets continually on more than 200 trading venues in over 40 countries around the world. We excel at providing liquidity in complex markets, especially during periods of dislocation and volatility. While our committed capital and firmwide risk book provides us with the capacity, our technology and flat structure fosters a culture of collaboration that facilitates these complex trades.",
        img: "/sponsors/janestreet.png",
        url: "https://www.janestreet.com/"
    },
    {
        name: "Hudson River Trading",
        tier: "Silver",
        desc: "Hudson River Trading brings a scientific approach to trading financial products. We have built one of the world’s most sophisticated computing environments for research and development. Our researchers are at the forefront of innovation in the world of algorithmic trading. At HRT we come from all sorts of backgrounds: mathematics, computer science, statistics, physics, and engineering. We’re a community of self-starters, motivated by the excitement of being at the cutting edge of automated trading. We’re friends and colleagues, whether we are sharing a meal, playing the latest board game, or writing elegant code. We embrace a culture of togetherness that extends far beyond the walls of our office.",
        img: "/sponsors/HRT.png",
        url: "https://www.hudsonrivertrading.com/"
    },
    {
        name: "Citadel",
        tier: "Silver",
        desc: "Citadel is an American multinational hedge fund and financial services company. Founded in 1990 by Ken Griffin, it has more than $63 billion in assets under management as of June 2024. The company has over 2,800 employees, with corporate headquarters in Miami, Florida, and offices throughout North America, Asia, and Europe. We drive capital to the world’s most impactful and compelling investments, leveraging our combination of talent, technology, analytics and global scale.",
        img: "/sponsors/citadel.png",
        url: "https://www.citadel.com/"
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
        desc: "Susquehanna is a global quantitative trading firm powered by scientific rigor, curiosity, and innovation. Our culture is intellectually driven and highly collaborative, bringing together researchers, engineers, and traders to design and deploy impactful strategies in our systematic trading environment.  To meet the unique challenges of global markets, Susquehanna applies machine learning and advanced quantitative research to vast datasets in order to uncover actionable insights and build effective strategies. By uniting deep market expertise with cutting-edge technology, we excel in solving complex problems and pushing boundaries together.",
        img: "/sponsors/sig.png",
        url: "https://sig.com/"
    },
    {
        name: "Stanford Research Park",
        tier: "Silver",
        desc: "From startup incubation, to the innovation arms and campuses of global powerhouses, Stanford Research Park is the home to cutting-edge business and a top destination for people who want to shape the future.",
        img: "/sponsors/SRP.png",
        url: "https://stanfordresearchpark.com/"
    },
    {
        name: "AoPS Academy",
        tier: "Bronze",
        desc: "AoPS Academy is an after-school enrichment program with a mission to teach problem solving skills through advanced math, language arts, and science courses. GMC is supported by the Mountain View Campus.",
        img: "/sponsors/aopsacademy.png",
        url: "https://aopsacademy.org/"
    },
    {
        name: "Wolfram",
        tier: "Bronze",
        desc: "Founded by Stephen Wolfram in 1987, Wolfram Research is one of the world's most respected computer, web and cloud software companies—as well as a powerhouse of scientific and technical innovation. As a pioneer in computation and computational knowledge, we have pursued a long-term vision to develop the science, technology and tools to make computation an ever-more-potent force in today's and tomorrow's world.",
        img: "/sponsors/wolfram.png",
        url: "https://www.wolfram.com/"
    },
    {
        name: "ContestDojo",
        tier: "Bronze",
        desc: "ContestDojo is an online math competition platform built and used for tournaments such as the Stanford Math Tournament and the Berkeley Math Tournament. The aim of the project is to be a powerful and customizable site to handle registration, payment, test-taking, and other aspects of any math contest, eliminating the need for each event to build custom software.",
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