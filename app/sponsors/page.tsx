"use client";

import React from "react";
import NavBar from '@/components/nav';

const SPONSORS_DATA = [
    {
        name: "City of Palo Alto",
        tier: "Gold",
        desc: "The City of Palo Alto supports numerous community programs and youth initiatives through its community grants.",
        img: "/sponsors/PaloAlto.png",
        url: "https://www.cityofpaloalto.org/Home"
    },
    {
        name: "Thinkfund",
        tier: "Gold",
        desc: "The City of Palo Alto’s Think Fund is a youth mini-grant program that provides high school students with funding, mentorship, and City support to turn their ideas into community programs, events, or long-term initiatives.",
        img: "/sponsors/thinkfund.png",
        url: "https://www.mitchellparkteenservices.org/thinkfund"
    },
{
    name: "Non-Trivial",
    tier: "Gold",
    desc: (
        <>
            Launch your impactful research journey before university with Non-Trivial, a selective online program for ambitious teenagers. Build research skills, hear from experts, and join a global community of exceptional young thinkers as you learn to identify and tackle humanity's most pressing challenges. School-year training courses followed by a free summer Fellowship with mentorship, project grants, and college scholarships up to $10,000. Register for exclusive application opportunities <a href="https://apply.non-trivial.org/referral-network" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">here</a>.
        </>
    ),
    img: "/sponsors/nontrivial.png",
    url: "https://apply.non-trivial.org/referral-network"
},
    {
        name: "Jump Trading",
        tier: "Silver",
        desc: "Jump Trading is a leading global quantitative trading firm that combines sophisticated quantitative research, cutting-edge technology, and an entrepreneurial culture. Founded in 1999, Jump has over 2,000 employees across offices in Chicago, New York, London, Amsterdam, Singapore, Shanghai, Hong Kong, and more. Jump is still privately owned and funded, fostering a culture of intellectual curiosity and learning. Our people are some of the world’s most brilliant minds with backgrounds from the trading industry, Silicon Valley tech companies and start-ups, top PhD programs and research labs. We have a 25+ year history of investing in superior infrastructure, including custom hardware, software, wireless networks, and a world-class supercomputer. We leverage our proprietary technology to analyse massive data sets and identify trends in global markets across asset classes.",
        img: "/sponsors/jump.png",
        url: "https://www.jumptrading.com/"
    },
    {
        name: "Jane Street",
        tier: "Silver",
        desc: "Jane Street is a quantitative trading firm with offices worldwide. They hire smart, humble people who love to solve problems, build systems, and test theories. You’ll learn something new every day in their office—whether it’s connecting with a colleague to share perspectives, or participating in a talk, class, or game night. Their success is driven by their people and they never stop improving.",
        img: "/sponsors/janestreet.png",
        url: "https://www.janestreet.com/"
    },
    {
        name: "Hudson River Trading",
        tier: "Silver",
        desc: "Hudson River Trading is one of the world’s leading quantitative trading firms, powered by a community of curious and technical minds who share a passion for complex problems, cutting-edge tech, and elegant math. Whether your expertise lies in math, computer science, physics, or beyond, we empower deep thinkers from a range of backgrounds to build the future of trading. Learn more about HRT and our open roles on our website.",
        img: "/sponsors/HRT.png",
        url: "https://www.hudsonrivertrading.com/"
    },
    {
        name: "Citadel | Citadel Securities",
        tier: "Silver",
        desc: "Citadel is a leading alternative investment manager, delivering consistently high returns to clients including endowments, hospitals, and pensions.\n\nCitadel Securities is a leading global market maker, delivering a broad suite of fixed income and equity products to clients around the world.",
        img: "/sponsors/citadel.png",
        url: "https://www.citadel.com/"
    },
    {
        name: "DRW",
        tier: "Silver",
        desc: "DRW is a diversified trading firm with over 3 decades of experience bringing sophisticated technology and exceptional people together to operate in markets around the world. We value autonomy and the ability to quickly pivot to capture opportunities, so we operate using our own capital and trading at our own risk. At DRW, we seek the best and then get out of their way. We foster a low-ego environment with minimal hierarchy and a strong commitment to continuous learning.",
        img: "/sponsors/DRW.png",
        url: "https://www.drw.com/"
    },
    {
        name: "Susquehanna International Group",
        tier: "Silver",
        desc: "Susquehanna is a global quantitative trading firm powered by scientific rigor, curiosity, and innovation.",
        img: "/sponsors/susquehanna.png",
        url: "https://sig.com/"
    },
    {
        name: "LIVE by Po-Shen Loh",
        tier: "Silver",
        desc: "LIVE, by Po-Shen Loh is the first and only online math course that captivates, entertains, and inspires. Invented by legendary math coach Po-Shen Loh.",
        img: "/sponsors/live.png",
        url: "https://live.poshenloh.com/"
    },
    {
        name: "Stanford Research Park",
        tier: "Silver",
        desc: "Since 1951, Stanford Research Park has been the home to cutting-edge business and a top destination for people who want to shape the future. Today, the innovative companies and talented employees based in Stanford Research Park continue to pursue bold ideas and make real world impacts with initiatives ranging from life-saving therapies to robotics and cybersecurity to autonomous vehicles.",
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
    {
        name: "AwesomeMath",
        tier: "Bronze",
        desc: "AwesomeMath is devoted to providing enriching experiences in mathematics and physics for intellectually curious learners. Through our summer programs, year-round academy, online journal, and publications, AwesomeMath fosters a community that values creativity, passionate problem-solving, and lifetime learning.",
        img: "/sponsors/awesomeMath.png",
        url: "https://awesomemath.org/"
    },
    {
        name: "AoPS Online",
        tier: "Bronze",
        desc: "Since 1993, AoPS has helped hundreds of thousands of passionate students succeed in the classroom and beyond. We know that learning math means more than memorizing formulas or doing lots of simple calculations quickly. Students deserve teachers and peers who share their enthusiasm and a curriculum that helps them think critically and understand concepts on a deeper level. AoPS provides the opportunity to learn to solve problems by trying, failing, and ultimately succeeding.",
        img: "/sponsors/aops.png",
        url: "https://aops.com/"
    },
    {
        name: "blackpenredpen",
        tier: "Bronze",
        desc: "blackpenredpen (also abbreviated as bprp), is a Taiwanese American math professor and a YouTuber known for making videos of himself solving mathematical problems. The name of the channel comes from the colors he prefers for whiteboard markers in many of his videos.",
        img: "/sponsors/bprp.png",
        url: "https://www.youtube.com/c/blackpenredpen"
    },
];

export default function SponsorsPage() {
  return (
    <main className="bg-[#001332] min-h-screen text-[#E4EFFF] relative overflow-x-hidden pt-32 pb-20">
      <NavBar />

      <div className="px-6 md:px-20 max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                Our Sponsors
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto font-medium">
                GMC is made possible by the generous support of these organizations.
            </p>
        </div>

        <div className="space-y-8">
            {SPONSORS_DATA.map((sponsor, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl flex flex-col md:flex-row gap-8 items-center md:items-start border border-white/50 text-[#002E67]">
                    <div className="w-48 h-32 flex-shrink-0 flex items-center justify-center p-4 bg-gray-50 shadow-inner rounded-xl">
                        <img src={sponsor.img} alt={sponsor.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                            <h2 className="text-2xl font-black text-[#002E67]">{sponsor.name}</h2>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-max mx-auto md:mx-0 ${
                                sponsor.tier === 'Gold' ? 'bg-yellow-100 text-yellow-700' :
                                sponsor.tier === 'Silver' ? 'bg-gray-100 text-gray-600' :
                                'bg-orange-100 text-orange-700'
                            }`}>
                                {sponsor.tier} Sponsor
                            </span>
                        </div>
                        <p className="text-[#002E67]/80 leading-relaxed font-medium whitespace-pre-line">
                            {sponsor.desc}
                        </p>
                        <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-blue-600 font-bold hover:underline">
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