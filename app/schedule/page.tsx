"use client";

import React, { ReactNode } from "react";
import NavBar from "@/components/nav";
import Link from "next/link";

export default function Schedule() {
  const scheduleItems: { time: string; event: string; loc: string; highlight?: boolean; desc: ReactNode }[] = [
    { 
      time: "8:00 - 8:45 AM", 
      event: "Registration / Check-In", 
      loc: "Bow Gym",
      desc: "Teams arrive, check in, and receive their nametags and competition packets for the day." 
    },
    { 
      time: "8:45 - 9:00 AM", 
      event: "Opening Ceremony", 
      loc: "Bow Gym",
      desc: "A brief welcome to the 5th Annual GMC! We will introduce the day's logistics, rules, and our generous sponsors." 
    },
    { 
      time: "9:15 - 10:15 AM", 
      event: "Individual Round", 
      loc: "N-Building",
      desc: "Each individual test is 10 problems and 60 minutes long, where all answers are single values (i.e. short answers). For Division A, these range in mid-AMC 10 to upper-AIME in difficulty, and for Division B, these range from AMC 8 to upper-AMC 10." 
    },
    { 
      time: "9:15 - 10:00 AM", 
      event: "Guest Speaker for Parents", 
      loc: "Bow Gym",
      highlight: true,
      desc: "A special presentation and Q&A session specifically for parents and coaches while the students are testing." 
    },
    { 
      time: "10:25 - 11:25 AM", 
      event: "Team Round", 
      loc: "N-Building",
      desc: "The Team Round is a 60-minute, 10-problem test for Division A, and a 60-minute, 15-problem test for Division B. All members of a team work together to target individual strengths and weaknesses, and all answers are single values." 
    },
    { 
      time: "11:30 - 12:15 PM", 
      event: "Lunch", 
      loc: "Bow Gym",
      desc: "Catered Jersey Mike's Subs will be provided for all competitors. During this time, competitors must stay on campus and eat in designated areas to rest and prepare for the afternoon rounds." 
    },
    { 
      time: "12:30 - 2:00 PM", 
      event: "Guts Round", 
      loc: "Bow/Titan Gym",
      desc: (
        <div className="space-y-4">
          <p>The Guts Round is an 90-minute team event with 27 short-answer questions on an assortment of subjects, of varying difficulty and point values. The problems are divided into 8 sets of 3 questions each, as well as 1 set of 3 estimation-style questions.</p>
          <p>All teams gather in one of the two gyms. At the starting signal, each team sends a runner to an assigned problem station to pick up copies of the first set of problems for each team member. As soon as a team has answers for one problem set, the runner may bring the answers to the problem station and pick up the next set. It is not expected that students will finish all the problems. Grading is immediate and scores are posted in real time.</p>
        </div>
      )
    },
    { 
      time: "2:15 - 3:30 PM", 
      event: "Activities Block 1 & Tiebreakers", 
      loc: "N-Building/Titan Gym",
      desc: (
        <div className="space-y-4">
          <p>
            <strong>Tiebreakers:</strong> Due to the nature of the Individual Round score algorithm, ties are unlikely. In the event of a tie between top performing competitors, we will be holding a tiebreaker round concurrently with Activities. Competitors who qualify will have exactly 15 minutes to solve 3 challenging problems. Ties in the tiebreaker round will be broken by submission time, and more details will be provided during the round if necessary.
          </p>
          <hr className="border-[#002E67]/10 my-4" />
          <p className="font-bold text-xl text-[#002E67]">Activities</p>
          <p>
            <strong>Plank Countdown:</strong> A Mathcounts-style countdown round, with a slight twist—you will have to solve problems while holding the plank position!
          </p>
          <p>
            <strong>SET:</strong> A fast-paced card game where a &quot;set&quot; is three cards. Within this group of three cards, every feature (color, shape, number, and shading) must be either all the same or all different. The person who finds the most sets in the game wins! (Note: SET requires some sort of electronic device like a phone or laptop, which may be provided by an organizer).
          </p>
          <p>
            <strong>Rubik&apos;s Cubing:</strong> The hobby of solving a Rubik&apos;s Cube and its many variants. All competitors will be graciously provided with a Jane Street Rubik&apos;s Cube and an HRT Rubik&apos;s Cube to learn.
          </p>
        </div>
      )
    },
    { 
      time: "3:45 - 5:00 PM", 
      event: "Activities Block 2: Estimathon", 
      loc: "Bow/Titan Gym",
      desc: (
        <p>
          Hosted by <strong>Jane Street</strong>, the Estimathon is a 13-question team (4 people) contest where the goal is to solve Fermi-style estimation problems. For more information, visit the <a href="https://estimathon.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 font-bold underline underline-offset-2 transition-colors">Estimathon website</a>.
        </p>
      )
    },
    { 
      time: "5:00 - 5:30 PM", 
      event: "Guest Speech for Students", 
      loc: "Bow Gym",
      highlight: true,
      desc: "A fascinating keynote speech given by our guest speaker to all students while our grading team finalizes the scores for the day." 
    },
    { 
      time: "5:30 - 6:00 PM", 
      event: "Awards Ceremony", 
      loc: "Bow/Titan Gym",
      desc: "Recognition of the top-performing individuals and teams across all divisions. We will be handing out medals, plaques, and allowing top performers and activity winners to select items from our massive prize pool!" 
    },
  ];

  return (
    <main className="bg-[#001332] min-h-screen text-[#E4EFFF] relative pb-24 pt-32">
      <NavBar />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <Link href="/" className="inline-block mb-6 text-blue-400 font-semibold hover:text-white transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-black mb-4">In-Depth Schedule</h1>
          <p className="text-lg opacity-80 font-medium">Sunday, March 29th, 2026. Times and locations are subject to change.</p>
        </div>

        <div className="space-y-6">
          {scheduleItems.map((item, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-2xl p-6 md:p-8 shadow-xl border ${item.highlight ? 'border-blue-400/50 shadow-blue-500/10' : 'border-white/10'}`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className={`text-2xl font-bold ${item.highlight ? 'text-blue-600' : 'text-[#002E67]'}`}>
                    {item.event}
                  </h3>
                  <div className="flex items-center gap-4 mt-2 font-semibold text-lg text-[#002E67]/70">
                    <span className="flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      {item.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      {item.loc}
                    </span>
                  </div>
                </div>
                {item.highlight && (
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap self-start">
                    Special Event
                  </span>
                )}
              </div>
              <div className="text-[#002E67]/80 font-medium leading-relaxed mt-4 pt-4 border-t border-[#002E67]/10">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}