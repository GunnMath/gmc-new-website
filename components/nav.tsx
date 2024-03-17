import Link from "next/link";
import { ReactNode } from "react";

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
        <div className="flex gap-10 p-5 italic">
            <NavOption url="/">About</NavOption>
            <NavOption url="/archive">Archive</NavOption>
        </div>
    )
}