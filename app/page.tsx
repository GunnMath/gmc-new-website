import Image from 'next/image'


const InfoBlock = (props: { header: string, children:string }) => {
  return (
    <div>
      <div className="text-3xl font-bold">{props.header}</div>
      <div>{props.children}</div>
    </div>
  )
}

const ScheduleItem = (props: { start: string, end:string, children:string}) => {
  return (
    <div className="md:text-lg"><span className="font-bold">{">"}{props.start}-{props.end}:</span> {props.children}</div>
  )
}

export default function Home() {
  return (
    <main>
      <div className="px-10 pb-16 pt-32 md:px-20">
        <h1 className="font-bold text-4xl md:text-7xl">GUNN MATH COMPETITION</h1>
        <h2 className="text-md md:text-xl">March 24th, 2024  ///  8:30 AM - 4:30 PM  ///  Gunn High School</h2>
        
        <div className="absolute right-5 top-[20%] z-[-1] invisible md:visible"><Image src="/fsh.png" width={500} height={400} alt="GMC logo" /></div>

        <div className="mt-10 flex gap-10">
          <div className="flex flex-col gap-5"> 
            <InfoBlock header="2 Divisions">Beginner & Advanced (AIME Qualifiers)</InfoBlock>
            <InfoBlock header="Free Lunch">For all competitors</InfoBlock>
          </div>
          <div className="flex flex-col gap-5">
            <InfoBlock header="3 Rounds">Individual, Guts, & Team</InfoBlock>
            <InfoBlock header="Over $1000 in Prizes">For the top teams and individuals</InfoBlock>
          </div>
        </div>
        <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSenCWtv3C2JBd_ibmI-xp7mkOTdQYrtLHhC8BSwOlm_pW3dvg/viewform">
          <div className="inline-block font-bold text-3xl mt-12 py-5 px-16 rounded-lg bg-[#DEC880] hover:rotate-6 transition-all">Register</div>
        </a>
      </div>

      <div className="px-10 py-10 md:px-20">
        <h1 className="font-bold text-3xl md:text-5xl">About</h1>
        <p className="max-w-xl text-md md:text-lg my-3">
          The third annual Gunn Math Competition is hosted by dedicated students from Gunn Math Circle and will be held at Gunn High School on Sunday, March 24th 2024.
        </p>

        <h2 className="font-bold text-3xl mt-10">Divisions</h2>
        <p className="max-w-xl text-md md:text-lg my-3">
          The competition has 2 divisions, A and B. Division B will be for those who are relatively new to competition math and are generally taking a math class before calculus. Division A will be for those who are familiar with competition math, and will thus have harder problems. Participants who have participated in the AIME must compete in Division A.
        </p>

        <h2 className="font-bold text-3xl mt-10">Teams</h2>
        <p className="max-w-xl text-md md:text-lg my-3">
          Students will compete in teams of 4. (Teams of 2 or 3 are okay as well, but they will be at a disadvantage during the team rounds as they have fewer people.) Students may compete individually, but we strongly encourage competing in teams to get the most out of the competition.
        </p>

        <h2 className="font-bold text-3xl mt-10">Test Format</h2>
        <p className="max-w-xl text-md md:text-lg my-3">
          Individual Round: 60 minutes, 10 problems<br/>
          Team Round: 60 minutes, 15 problems<br />
          Guts Round: 75 minutes, 3x8 problems<br />
          Tiebreaker Round: 15 minutes, 3 problems (Qualifiers Only)
        </p>

        <p className="max-w-xl text-md md:text-lg my-3">
          In the Guts Round, problems are released in sets of 3. Students must submit answers to the problems in each set before moving on to the next set. This year, we will have multiple activities in the afternoon for students to choose from, including an Estimathon. More details about the exact activities will be announced soon!
        </p>

        <h2 className="font-bold text-3xl mt-10">Difficulty</h2>
        <p className="max-w-xl text-md md:text-lg my-3">
          For Div. A, the difficulty of the problems will range from early AMC 10 to mid or late AIME. For Div. B, the difficulty of the problems will range from AMC 8 to late AMC 10. In general, the Guts and Team rounds will be more difficult than the Individual round, as participants are working as a team.
        </p>
      </div>

      <div className="flex flex-col items-center py-32">
        <h1 className="font-bold text-3xl md:text-5xl my-5">Schedule</h1>
        <ScheduleItem start="8:30" end="9:15">Registration</ScheduleItem>
        <ScheduleItem start="9:30" end="10:40">Individual Round</ScheduleItem>
        <ScheduleItem start="10:40" end="12:00">Team Round</ScheduleItem>
        <ScheduleItem start="12:10" end="13:00">Lunch</ScheduleItem>
        <ScheduleItem start="13:00" end="14:20">Guts Round</ScheduleItem>
        <ScheduleItem start="14:30" end="15:45">Activities / Tiebreaks</ScheduleItem>
        <ScheduleItem start="16:00" end="16:30">Awards Ceremony</ScheduleItem>
      </div>

      <div className="flex flex-col items-center py-32 gap-5">
        <h1 className="font-bold text-3xl md:text-5xl my-5">Sponsors</h1>
        <a target="_blank" rel="noopener noreferrer" href="https://www.janestreet.com/" ><Image alt="Jane Street" width={300} height={50} src="/janestreet.png"/></a>
        <a target="_blank" rel="noopener noreferrer" href="https://wolfram.com/" ><Image alt="Wolfram" width={300} height={50} src="/wolfram.png" /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://live.poshenloh.com/" ><Image alt="Live" width={200} height={50} src="/live.png" /></a>
      </div>
    </main>
  );
}
