"use client";
import React, { useState } from "react";

const faqs = [
  {
    q: "How much does it cost to participate?",
    a: "The tournament is completely free! However, an optional $20 donation is greatly appreciated to help support Gunn Math Circle."
  },
  {
    q: "What materials are allowed during the competition?",
    a: "You may only use writing utensils and protractors. All scratch paper will be provided by the proctors, so please do not bring your own. Calculators and all electronic devices are strictly prohibited across all rounds (including the Estimathon and tiebreakers)."
  },
  {
    q: "Do I need a full team of 4 to compete?",
    a: "Teams can have a maximum of 4 participants. Smaller teams are accepted, but they may be at a disadvantage during the Team Round. You can sign up as an individual needing a team on the registration form, or find teammates through the official Discord server."
  },
  {
    q: "Which division should I choose?",
    a: "Division A is for students experienced with competition math and is required for any team with an AIME qualifier. Division B is recommended for students who are relatively new to competition math."
  },
  {
    q: "Will the free lunch accommodate dietary restrictions?",
    a: "Yes! Lunch will be catered by Jersey Mike's Subs. We will accommodate dietary restrictions to the best of our ability, and vegan, vegetarian, and pescatarian options will be available."
  },
  {
    q: "Are parents allowed to spectate the competition?",
    a: "Parents are welcome to spectate the Guts Round and the Estimathon activity. For all other rounds, we ask that parents do not spectate so competitors can focus. Instead, we highly recommend parents attend the optional Guest Speaker talk in the morning."
  },
  {
    q: "Where should attendees park?",
    a: "Attendees should park in the main parking lot next to the front office, as it is the closest lot to the main locations for the competition (Bow Gym and N-Building)."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <h2 className="text-3xl md:text-4xl font-black text-[#002E67] mb-8 text-center tracking-tight">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="bg-white border border-[#002E67]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
        >
          <button
            className="w-full px-6 py-5 text-left flex justify-between items-center bg-white"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-black text-[#002E67] text-lg pr-4">{faq.q}</span>
            <svg 
              className={`w-6 h-6 text-[#002E67] flex-shrink-0 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            className={`px-6 text-[#002E67]/80 font-medium overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            {faq.a}
          </div>
        </div>
      ))}
    </div>
  );
}