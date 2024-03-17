import Image from 'next/image'
import { Heading1, Heading2, Paragraph, Title } from './components/headers'


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

const Sponsor = (props: { src: string, url: string, alt:string, square?:boolean }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={props.url} >
      <img alt={props.alt} className={( props.square ? "max-w-[15rem] max-h-[15rem] " : "max-w-[20rem] max-h-[5rem] ") + "rounded-md"} src={props.src} />
    </a>
  )
}

export default function Home() {
  return (
    <main>
      <div className="px-10 pb-16 pt-32 md:px-20">
        <Title>GUNN MATH COMPETITION</Title>
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
        <Heading1>About</Heading1>
        <Paragraph>
          The third annual Gunn Math Competition is hosted by dedicated students from Gunn Math Circle and will be held at Gunn High School on Sunday, March 24th 2024.
        </Paragraph>

        <Heading2>Divisions</Heading2>
        <Paragraph>
          The competition has 2 divisions, A and B. Division B will be for those who are relatively new to competition math and are generally taking a math class before calculus. Division A will be for those who are familiar with competition math, and will thus have harder problems. Participants who have participated in the AIME must compete in Division A.
        </Paragraph>

        <Heading2>Teams</Heading2>
        <Paragraph>
          Students will compete in teams of 4. (Teams of 2 or 3 are okay as well, but they will be at a disadvantage during the team rounds as they have fewer people.) Students may compete individually, but we strongly encourage competing in teams to get the most out of the competition.
        </Paragraph>

        <Heading2>Test Format</Heading2>
        <Paragraph>
          Individual Round: 60 minutes, 10 problems<br />
          Team Round: 60 minutes, 15 problems<br />
          Guts Round: 75 minutes, 3x8 problems<br />
          Tiebreaker Round: 15 minutes, 3 problems (Qualifiers Only)
        </Paragraph>

        <Paragraph>
          In the Guts Round, problems are released in sets of 3. Students must submit answers to the problems in each set before moving on to the next set. This year, we will have multiple activities in the afternoon for students to choose from, including an Estimathon. More details about the exact activities will be announced soon!
        </Paragraph>

        <Heading2>Difficulty</Heading2>
        <Paragraph>
          For Div. A, the difficulty of the problems will range from early AMC 10 to mid or late AIME. For Div. B, the difficulty of the problems will range from AMC 8 to late AMC 10. In general, the Guts and Team rounds will be more difficult than the Individual round, as participants are working as a team.
        </Paragraph>
      </div>

      <div className="flex flex-col items-center py-32">
        <Heading1>Schedule</Heading1>
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
        <Sponsor src="/janestreet.png" url="https://www.janestreet.com/" alt="Jane Street" />
        <Sponsor src="/thinkfund.png" url="https://www.mitchellparkteenservices.org/thinkfund" alt="Thinkfund" square />
        <Sponsor src="/aops.png" url="https://artofproblemsolving.com/" alt="Art of Problem Solving" />
        <Sponsor src="/wolfram.png" url="https://www.wolfram.com/" alt="Wolfram" />
        <Sponsor src="/live.png" url="https://live.poshenloh.com/" alt="Live" />
      </div>
    </main>
  );
}
