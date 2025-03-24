import Link from "next/link";
import { ReactNode } from "react";
import RegisterButton from './reg';

function NavOption ( props: { children: ReactNode, url: string } ) {
    return (
        <div>
            <Link href={props.url}>
                {props.children}
            </Link>
        </div>
    )
}

export default function NavBar() {
    return (
        <div className="flex justify-between items-center p-5 italic relative">
            {/* Left-aligned navigation options */}
            <div className="flex gap-10">
                <NavOption url="/">About</NavOption>
                <NavOption url="/archive">Archive</NavOption>
                <NavOption url="/guest-speaker">Guest Speaker: Po-Shen Loh!</NavOption>
                <NavOption url="https://docs.google.com/document/d/1xVPsXSMIRpIVcHKfncZmQsb5UXslwHl74RNFR6OjrKw/edit?tab=t.0">Sponsor Packet</NavOption>
            </div>

            {/* Right-aligned Register Button */}
            <div className="right-5 justify-between relative">
            ghsmathcircle@gmail.com
            </div>
        </div>
    );
}
