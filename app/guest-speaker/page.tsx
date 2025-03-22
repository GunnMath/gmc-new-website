import { Heading1, Heading2, Title } from "@/components/headers";
import NavBar from "@/components/nav";
import Link from "next/link";
import { Fragment } from "react";

export default function Guestspeaker () {
    return (
        <main>
            <NavBar />
            <div className="px-10 pb-10 pt-32 md:px-20">
                <Title>Po-Shen Loh</Title>
                <div>Former IMO head coach for USA.   </div>
                
            </div>
        </main>
    )
}