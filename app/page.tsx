  import Image from 'next/image'
  import { Heading1, Heading2, Paragraph, Title } from '../components/headers'
  import NavBar from '@/components/nav'


  const InfoBlock = (props: { header: string; children: string }) => {
    return (
      <div>
        <div className="text-3xl font-bold">{props.header}</div>
        <div className="break-words whitespace-normal">{props.children}</div>
      </div>
    );
  };
  

  const ScheduleItem = (props: { start: string, end: string, children: string, location?: string }) => {
    return (
      <div className="md:text-lg">
        <span className="font-bold">{">"}{props.start}-{props.end}:</span> {props.children}
        {props.location && <span className="text-gray-500"> {props.location}</span>}
      </div>
    );
  };
  

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
        <NavBar />
        <div className="px-10 pb-16 pt-32 md:px-20">
          <Title>GUNN MATH COMPETITION</Title>
          <h2 className="text-md md:text-xl">March 30th, 2025  ///  8:30 AM - 4:30 PM  ///  Gunn High School</h2>
          
          <div className="absolute right-5 top-[20%] z-[-1] invisible md:visible"><Image src="/fsh.png" width={500} height={400} alt="GMC logo" /></div>

          <div className="mt-10 flex gap-10">
            <div className="flex flex-col gap-5"> 
              <InfoBlock header="2 Divisions">Beginner & Advanced (AIME Qualifiers)</InfoBlock>
              <InfoBlock header="Free Lunch">For all competitors</InfoBlock>
            </div>
            <div className="flex flex-col gap-5">
              <InfoBlock header="3 Rounds">Individual, Guts, & Team</InfoBlock>
              <InfoBlock header="Over $7500 in Prizes">For the top teams and individuals</InfoBlock>
            </div>
            <div className="flex flex-col gap-5">
              <InfoBlock header="Po-Shen Loh Talk!"> insight on AI from distinguished mathematician </InfoBlock>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/11Ac9OguL8Ay38kQBQwlAPb5WGqTtD8cD-7ZJ7YDiy_4/edit?usp=sharing">
            <div className="inline-block font-bold text-3xl mt-8 py-5 px-16 rounded-lg bg-[#DEC880] hover:rotate-6 transition-all">
              GMC Manual
            </div>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSek6UnuM0p-Qx9Nntd_Cva_dOnVLDZq2WwoqYzN2lyjPkXM2g/viewform">
              <div className="inline-block font-bold text-3xl mt-8 py-5 px-16 rounded-lg bg-[#DEC880] hover:rotate-6 transition-all">
                Registration
              </div>
            </a>
  </div>

        </div>

        <div className="px-10 py-10 md:px-20">
          <Heading1>About</Heading1>
          <Paragraph>
            The fourth annual Gunn Math Competition is hosted by dedicated students from Gunn Math Circle and will be held at Gunn High School on Sunday, March 30th 2025.
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
            Guts Round: 90 minutes, 3x8 problems + 3x2 estimations<br />
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
          <ScheduleItem start="8:00" end="8:45" location="Bow gym">Registration</ScheduleItem>
          <ScheduleItem start="8:45" end="9:00" location="Bow gym">Opening Ceremony</ScheduleItem>
          <ScheduleItem start="9:15" end="10:15" location="N-building">Individual Round / Po-Shen Loh talk for parents</ScheduleItem>
          <ScheduleItem start="10:25" end="11:25" location="N-building">Team Round</ScheduleItem>
          <ScheduleItem start="11:30" end="12:30" location="Bow Gym">Lunch</ScheduleItem>
          <ScheduleItem start="12:45" end="14:05" location="Bow Gym">Guts Round</ScheduleItem>
          <ScheduleItem start="14:15" end="15:15" location="N-building">Activities / Tiebreaks</ScheduleItem>
          <ScheduleItem start="15:30" end="16:00" location="Bow gym">Po-Shen Loh talk!</ScheduleItem>
          <ScheduleItem start="16:00" end="16:30" location="Bow Gym">Awards Ceremony</ScheduleItem>

        </div>

        <div className="flex flex-col items-center py-32 gap-5">
          <h1 className="font-bold text-3xl md:text-5xl my-5">Sponsors</h1>
          <Sponsor src="/janestreetblack.png" url="https://www.janestreet.com/" alt="Jane Street" />
          <Sponsor src="/HRT.png" url="https://www.hudsonrivertrading.com/" alt="Hudson River Trading" />
          <Sponsor src="/dailychallenge.png" url="https://daily.poshenloh.com/" alt="Po Shen Loh Live" />
          <Sponsor src="/aops.png" url="https://artofproblemsolving.com/" alt="Art of Problem Solving" />
          <Sponsor src="/wolfram.png" url="https://www.wolfram.com/" alt="Wolfram" />
          <Sponsor src="/DRW.png" url="https://www.drw.com/" alt="DRW" />
          {/*
          
          <Sponsor src="/thinkfund.png" url="https://www.mitchellparkteenservices.org/thinkfund" alt="Thinkfund" square />
          
        
    */}
    </div>
      </main>
    );
  }
