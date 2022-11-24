import "../../index.scss"
import React from "react"

const Dropdown = (props: {
    isOpen:boolean,
    className:string
}) => {
    return <>
        <div className={props.className} >
            <a href="/">About</a>
            <a href="/">Projects</a>
            <a href="/contact">Contact</a>
            </div>
    </>
}
export const DropDownGreen = (props: {toggle:boolean}) => {
    return <Dropdown isOpen={props.toggle} className="dropdown-green"/>
}

export const DropDownBlack = (props: {toggle:boolean}) => {
    return <Dropdown isOpen={props.toggle} className="dropdown-black"/>
}