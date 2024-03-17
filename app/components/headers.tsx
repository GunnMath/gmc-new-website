import { ReactNode } from "react"

export function Title (props: { children: string, className?:string }) {
    return (
        <h1 className={"font-bold text-4xl md:text-7xl " + props.className}>{props.children}</h1>
    )
}

export function Heading1 (props: { children: string }) {
    return (
        <h1 className="font-bold text-3xl md:text-5xl mt-10 mb-2">{props.children}</h1>
    )
}

export function Heading2(props: { children: string }) {
    return (
        <h2 className="font-bold text-3xl mt-10 mb-2">{props.children}</h2>
    )
}

export function Paragraph(props: { children: ReactNode }) {
    return (
        <p className="max-w-xl text-md md:text-lg my-2">{props.children}</p>
    )
}
