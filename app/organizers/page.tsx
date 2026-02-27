"use client";

import { Heading1 } from "@/components/headers";
import NavBar from "@/components/nav";

const staff = [
    {
        role: "Head of Operations",
        members: ["Chanew Kim"]
    },
    {
        role: "Problem Czars",
        members: ["Neil Dixit", "Alex Tsagaan"]
    },
    {
        role: "Problem Writers",
        members: ["Alex Bae", "Elliot Boyce", "Inhoo Chang", "Olivia Kim", "Grace Liu", "Aarush Rachakonda", "Reed Truong", "Albert Xu", "Aiden Yuan"]
    },
    {
        role: "Organizers",
        members: ["Daphne Chen", "Haridas Chowdhury", "James Dong", "Michael Ma", "Alex Peng", "Vineet Petlur", "Sami Rahim", "Cameron Rampell", "Nicholas Weng"]
    },
    {
        role: "Webmaster",
        members: ["Mary Yu"]
    }
];

const StaffCard = ({ name }: { name: string }) => {
    const parts = name.split(" ");
    const firstName = parts[0]; 
    const lastName = parts[1] || "";

    let imagePath = `/staff/${firstName}.jpg`;

    if (firstName === "Alex") {
        imagePath = `/staff/${firstName}${lastName.charAt(0)}.jpg`;
    }

    return (
        <div className="flex flex-col items-center group">
            <div className="w-48 h-48 relative mb-4 overflow-hidden rounded-full border-4 border-[#002E67] shadow-lg bg-gray-100">
                <img 
                    src={imagePath}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <h3 className="text-xl font-bold text-[#002E67] text-center">{name}</h3>
        </div>
    );
};

export default function Organizers() {
    return (
        <main className="bg-[#e4efff] min-h-screen">
            <NavBar />
            
            <div className="bg-[#002E67] pt-40 pb-16 px-10 md:px-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
                    <div className="max-w-2xl">
                        <span className="text-blue-300 font-bold tracking-widest uppercase text-xs mb-3 block">
                            Meet the Team
                        </span>
                        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
                            ORGANIZERS
                        </h1>
                        {/* UPDATED DESCRIPTION */}
                        <p className="text-gray-300 mt-4 text-lg max-w-lg font-bold">
                            The Gunn Math Competition is entirely student-run by a dedicated team of problem solvers, developers, and logistics coordinators.
                        </p>
                    </div>
                    
                    <div className="relative opacity-10 invisible lg:visible">
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

            <div className="px-10 md:px-20 py-20 max-w-7xl mx-auto space-y-24">
                {staff.map((group, idx) => (
                    <div key={idx}>
                        <div className="flex items-center gap-4 mb-12">
                            <h2 className="text-3xl font-bold text-[#002E67] uppercase tracking-wide">
                                {group.role}
                            </h2>
                            <div className="h-1 bg-[#002E67]/10 flex-1 rounded-full"></div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 justify-items-center">
                            {group.members.map((person) => (
                                <StaffCard key={person} name={person} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}