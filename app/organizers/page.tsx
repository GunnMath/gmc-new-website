"use client";

import React from "react";
import NavBar from '@/components/nav';

// Staff Data based on your specific hierarchy
const STAFF = {
  director: [
    { name: "Chanew", realName: "Chanew Kim" }
  ],
  czars: [
    { name: "Neil", realName: "Neil Dixit" },
    { name: "AlexT", realName: "Alex Tsagaan" }
  ],
  writers: [
    { name: "AlexB", realName: "Alex Bae" },
    { name: "Elliot", realName: "Elliot Boyce" },
    { name: "Inhoo", realName: "Inhoo Chang" },
    { name: "Olivia", realName: "Olivia Kim" },
    { name: "Grace", realName: "Grace Liu" },
    { name: "Aarush", realName: "Aarush Rachakonda" },
    { name: "Reed", realName: "Reed Truong" },
    { name: "Albert", realName: "Albert Xu" },
    { name: "Aiden", realName: "Aiden Yuan" }
  ],
  organizers: [
    { name: "Daphne", realName: "Daphne Chen" },
    { name: "Haridas", realName: "Haridas Chowdhury" },
    { name: "James", realName: "James Dong" },
    { name: "Michael", realName: "Michael Ma" },
    { name: "AlexP", realName: "Alex Peng" },
    { name: "Vineet", realName: "Vineet Petlur" },
    { name: "Sami", realName: "Sami Rahim" },
    { name: "Cameron", realName: "Cameron Rampell" },
    { name: "Nicholas", realName: "Nicholas Weng" },
    { name: "Mary", realName: "Mary Yu" }
  ]
};

const StaffCard = ({ item }: { item: { name: string, realName: string } }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#002e66]/10 flex flex-col h-full">
      <div className="aspect-square bg-gray-100 overflow-hidden relative">
        <img 
          src={`/staff/${item.name}.jpg`} 
          alt={item.realName}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = `https://placehold.co/400x400/004184/FFF?text=${item.name[0]}`;
          }}
        />
      </div>
      <div className="p-4 text-center bg-white flex-1 flex items-center justify-center">
        <h3 className="text-lg font-black text-[#002e66] leading-tight">{item.realName}</h3>
      </div>
    </div>
  );
};

const RoleSection = ({ title, members }: { title: string, members: { name: string, realName: string }[] }) => (
  <div className="mb-16">
    <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-black text-[#002e66] whitespace-nowrap">
        {title}
        </h2>
        <div className="h-[2px] w-full bg-[#002e66]/10 rounded-full"></div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {members.map((member, idx) => (
        <StaffCard key={idx} item={member} />
      ))}
    </div>
  </div>
);

export default function Organizers() {
  return (
    <main className="bg-[#e4efff] min-h-screen text-[#002e66] relative overflow-x-hidden">
      <NavBar />

      <div className="px-6 md:px-20 pt-40 pb-20 max-w-7xl mx-auto">
        <div className="text-center mb-20">
            <span className="bg-[#004184] text-white font-bold px-4 py-1 rounded-full text-xs tracking-widest uppercase mb-4 inline-block shadow-md">
                The Team
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-[#002e66] mb-6 tracking-tight">
                Meet the Staff
            </h1>
            <p className="text-xl text-[#002e66]/70 max-w-2xl mx-auto font-medium">
                The Gunn Math Competition is entirely student-run by a dedicated team of problem solvers, developers, and logistics coordinators.
            </p>
        </div>

        <RoleSection title="Director" members={STAFF.director} />
        <RoleSection title="Problem Czars" members={STAFF.czars} />
        <RoleSection title="Problem Writers" members={STAFF.writers} />
        <RoleSection title="Organizers" members={STAFF.organizers} />
      </div>
    </main>
  );
}