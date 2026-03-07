"use client";

import React from "react";
import NavBar from "@/components/nav";

export default function PrizesAndScoring() {
  return (
    <main className="bg-[#001332] min-h-screen text-[#E4EFFF] relative pb-24 pt-32">
      <NavBar />
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-4">Prizes & Scoring</h1>
          <p className="text-lg md:text-xl opacity-80 font-medium max-w-2xl mx-auto">
            Everything you need to know about round formats, scoring algorithms, competition integrity, and our massive prize pool.
          </p>
        </div>

        {/* ROUNDS OVERVIEW TABLE */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-white/50 mb-12 text-[#002E67] overflow-x-auto">
          <h2 className="text-3xl font-bold mb-6">
            Rounds Overview
          </h2>
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-[#002E67]/20">
                <th className="py-3 px-4 font-bold text-lg">Round</th>
                <th className="py-3 px-4 font-bold text-lg">Time Limit</th>
                <th className="py-3 px-4 font-bold text-lg"># of Problems</th>
                <th className="py-3 px-4 font-bold text-lg">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#002E67]/10 font-medium">
              <tr>
                <td className="py-4 px-4 font-bold">Individual Round</td>
                <td className="py-4 px-4">60 minutes</td>
                <td className="py-4 px-4">10</td>
                <td className="py-4 px-4"></td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold">Team Round</td>
                <td className="py-4 px-4">60 minutes</td>
                <td className="py-4 px-4">15 (Division B), 10 (Division A)</td>
                <td className="py-4 px-4"></td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold">Guts Round</td>
                <td className="py-4 px-4">90 minutes</td>
                <td className="py-4 px-4">3x7 + 3x1 Estimating</td>
                <td className="py-4 px-4"></td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold">Tiebreakers</td>
                <td className="py-4 px-4">15 minutes (Div A), 15 minutes (Div B)</td>
                <td className="py-4 px-4">3</td>
                <td className="py-4 px-4 text-sm opacity-80">Only if required, for the top 10 individuals of each division</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-6 text-sm opacity-80 font-medium leading-relaxed bg-[#001332]/5 p-4 rounded-xl">
            <strong>Answers for all three rounds are not necessarily integers.</strong> Room assignments for each round will be specific to each team and will be assigned on the day of the competition during morning registration. Prior to each round, a similar set of instructions will be read out to all competitors about allowed materials, time limits, and procedures.
          </p>
        </div>

        {/* SCORING ALGORITHMS */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-white/50 mb-12 text-[#002E67]">
          <h2 className="text-3xl font-bold mb-6">
            Scoring Algorithms
          </h2>
          <p className="mb-6 font-medium opacity-90 text-lg">
            The score for each round is the <strong>sum of the weights</strong> of each problem solved correctly.
          </p>
          
          <div className="space-y-6">
            <div className="p-4 bg-[#001332]/5 rounded-xl border border-[#002E67]/5">
                <h3 className="font-bold text-xl mb-2">Individual Round</h3>
                <p className="font-medium opacity-80 leading-relaxed">
                  Each problem on the individual round is <strong>weighted differently</strong>; getting problem number <em>k</em> will merit you <span className="inline-block align-middle mx-1"><math xmlns="http://www.w3.org/1998/Math/MathML" display="inline"><msup><mrow><mo>(</mo><mfrac><mn>3</mn><mi>e</mi></mfrac><mo>)</mo></mrow><mrow><mi>k</mi><mo>-</mo><mn>1</mn></mrow></msup></math></span> points. Essentially, a problem is <strong>weighted more if it is later in the test</strong>, and this allows for <strong>no ties</strong> unless there are two competitors with the exact same distributions. The <strong>maximum total point value</strong> for the individual round is <strong>16.218</strong>.
                </p>
            </div>
            <div className="p-4 bg-[#001332]/5 rounded-xl border border-[#002E67]/5">
                <h3 className="font-bold text-xl mb-2">Team Round</h3>
                <p className="font-medium opacity-80 leading-relaxed">
                  Problems in the Team Round have <strong>fixed weights</strong>, with <strong>later problems weighing more</strong>. The <strong>maximum total point value</strong> for the team round is <strong>400</strong> (Division A) and <strong>600</strong> (Division B).
                </p>
            </div>
            <div className="p-4 bg-[#001332]/5 rounded-xl border border-[#002E67]/5">
                <h3 className="font-bold text-xl mb-2">Guts Round</h3>
                <p className="font-medium opacity-80 leading-relaxed">
                  Problems in the Guts Round have <strong>fixed weights by set</strong>, with <strong>later sets weighing more</strong>. The <strong>maximum total point value</strong> for the guts round is <strong>435</strong>.
                </p>
            </div>
            <div className="p-4 bg-[#001332]/5 rounded-xl border border-[#002E67]/5">
                <h3 className="font-bold text-xl mb-2">Overall Team Score</h3>
                <p className="font-medium opacity-80 leading-relaxed">
                  Across the three rounds, the overall team score will be <strong>weighted by ⅓-⅓-⅓</strong> for individual-team-guts. The individual component is the <strong>average of all team members' individual scores</strong> (provided that the team has at least 3 members). All component scores will be <strong>scaled to the highest achieved score</strong> for that component.
                </p>
            </div>
          </div>
        </div>

        {/* RULES & INTEGRITY */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-white/50 text-[#002E67] mb-16">
            <h2 className="text-2xl font-bold mb-4">
                Proctoring & Anti-Cheating
            </h2>
            <ul className="space-y-3 font-medium opacity-80 list-disc pl-5">
                <li>All competitors are expected to adhere to <strong>academic honesty</strong>. Students' work and solutions to each problem should be <strong>of their own</strong>, and <strong>no discussion will be allowed</strong> until the head proctor signals it is okay to do so.</li>
                <li><strong>Absolutely NO electronic devices</strong> are allowed as aids or communication devices during the rounds.</li>
                <li><strong>Writing utensils, protractors, and blank paper</strong> are the <strong>only tools allowed</strong> for ALL rounds (including the Estimathon).</li>
                <li>If it is decided that a certain individual has cheated, the <strong>entire team may be penalized</strong> for such actions.</li>
            </ul>
        </div>

        {/* PRIZE POOL BANNER */}
        <div className="bg-gradient-to-br from-blue-600/30 to-blue-800/30 border-2 border-blue-400/50 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm shadow-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Prize Pool</h2>
          <p className="text-xl text-blue-100 font-medium leading-relaxed max-w-3xl mx-auto mb-8">
            Activities winners and overall prizewinners are eligible to select from our expansive prize pool! 
            Choose from a massive selection of branded merchandise, high-end tech, educational math resources, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-[#002E67]">
              <div className="bg-white px-6 py-2 rounded-full font-bold shadow-md">Top 10 Individuals (Medals)</div>
              <div className="bg-white px-6 py-2 rounded-full font-bold shadow-md">Top 5 Team Round (Plaques)</div>
              <div className="bg-white px-6 py-2 rounded-full font-bold shadow-md">Top 5 Guts Round (Plaques)</div>
              <div className="bg-white px-6 py-2 rounded-full font-bold shadow-md">Top 5 Overall (Plaques)</div>
          </div>
        </div>

      </div>
    </main>
  );
}