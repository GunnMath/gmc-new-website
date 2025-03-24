import { Heading1, Heading2, Title } from "@/components/headers";
import NavBar from "@/components/nav";
import Link from "next/link";
import { Fragment } from "react";
import Image from 'next/image';


export default function Guestspeaker () {
    return (
        <main>
            <NavBar />
            <div className="absolute right-5 top-[20%] z-[-1] invisible md:visible">
                <Image src="/fsh.png" width={500} height={400} alt="GMC logo" />
            </div>
            <div className="px-10 pb-10 pt-32 md:px-20">
                <Title>Guest speaker: Po-Shen Loh</Title>
                <div>Carnegie Mellon University professor. Former USA head coach for International Mathematical Olympiad (IMO).   </div>
                
                <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/11Ac9OguL8Ay38kQBQwlAPb5WGqTtD8cD-7ZJ7YDiy_4/edit?usp=sharing">
                    <div className="mt-10 underline">From poshenloh.com</div> 
                    </a>
                <h1 className="text-md md:text-xl">Biographical sketch</h1>
                <div>Po-Shen Loh is a social entrepreneur and mathematician, with a track record of inventing incentive-aligned solutions to address timely population-scale real-world problems, from pandemic control to helping human society thrive in the AI era. He is a math professor at Carnegie Mellon University, and served a decade-long term as the national coach of the USA International Mathematical Olympiad team from 2013–2023. Since 2023, he has been the Vice President of the IMO Foundation, as the founder and organizer of the annual IMO Alumni Reunion. His latest innovation brings together math stars and professional actors, to mass-produce live-streamed creative problem-solving lessons that match the engagement level of online video entertainment.</div>
                <br></br>
                <div>As an academic, Po-Shen has earned distinctions ranging from an International Mathematical Olympiad silver medal to the United States Presidential Early Career Award for Scientists and Engineers. His pure scientific research considered a variety of questions that lie at the intersection of combinatorics (the study of discrete systems), probability theory, and computer science. As an educator, he was the coach of Carnegie Mellon University’s math team when it achieved its first-ever #1 rank among all North American universities, and the coach of the USA Math Olympiad team when it achieved its first-ever back-to-back #1-rank victories in 2015 and 2016, and then again in 2018 and 2019. His research and educational outreach takes him to cities across the world, reaching over 10,000 people each year through public lectures and events, and he has featured in or co-created videos totaling over 24 million YouTube views.</div>
                <br></br>
                <div>Po-Shen received his undergraduate degree in mathematics from Caltech in 2004, graduating with the highest GPA in his class. He received a master’s degree in mathematics from the University of Cambridge in 2005, where he was supported by a Winston Churchill Foundation Scholarship. He continued his studies at Princeton, supported by a Hertz Foundation Fellowship and a National Science Foundation Graduate Research Fellowship, where he completed his Ph.D. in mathematics at the end of 2009, and has been on the faculty at Carnegie Mellon University ever since.</div>
            </div>
            <br></br>
            <br></br>
            <div className="flex mt-20 justify-center">
                <Image src="/Po-ShenLoh.jpg" width={1024} height={683} alt="GMC logo" />
            </div>

        </main>
        
    )
}