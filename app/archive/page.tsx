import { Heading1, Heading2, Title } from "@/components/headers";
import NavBar from "@/components/nav";
import Link from "next/link";
import { Fragment } from "react";

const divs = ["A", "B"];
const tests = ["Individual", "Team", "Guts", "Tiebreak"];

const years = [{year: 2024, solutions: false}, { year: 2023, solutions: false }, { year: 2022, solutions: true }];

const YearArchive = (props: {year: number, solutions:boolean}) => {
    return (
        <div>
            <hr className="my-4 border-t border-[var(--dark-gold)]" />
            <Heading1>{props.year}</Heading1>
            <div>Year {props.year - 2021}.</div>

            <div className="grid grid-cols-2">
                {divs.map(division => <div key={division}>
                    <Heading2>Division {division}</Heading2>

                    <div className={`grid ${props.solutions ? "grid-cols-3" : "grid-cols-2"} max-w-md`}>

                        {tests.map(test => <Fragment key={test}>
                            <div className="font-bold">{test}:</div>
                            <div className="underline"><Link target="_blank" rel="noopener noreferrer" href={`/${props.year}/${test}_${division}.pdf`}>Problems</Link></div>
                            {props.solutions ? <div className="underline"><Link target="_blank" rel="noopener noreferrer" href={`/${props.year}/${test}_${division}_Solutions.pdf`}>Solutions</Link></div> : null}
                        </Fragment>)}

                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default function Archive () {
    return (
        <main>
            <NavBar />
            <div className="px-10 pb-10 pt-32 md:px-20">
                <Title>Archive</Title>
                <div>Since 2022.</div>
            </div>

            <div className="px-10 md:px-20 pb-32">
                {years.map(({ year, solutions }) => <YearArchive key={year} year={year} solutions={solutions} />)}
            </div>
        </main>
    )
}