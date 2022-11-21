import "../../index.scss"
import {IconMenu, IconX} from "@tabler/icons"
import React from "react"

interface HeaderInterface {
    toggle: boolean
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
    color: string
}

export const Header = (props: HeaderInterface) => {
    return <div className="header">
        <a href="/" className="header-title" style={{"color":props.color}}>Hamza Plojovic</a>
        <div className="header-items">
            <a href="/" style={{"color":props.color}}>About</a>
            <a href="/projects" style={{"color":props.color}}>Projects</a>
            <a href="/contact" style={{"color":props.color}}>Contact</a>
            { props.toggle === false ? <IconMenu size={30} onClick={()=>props.setToggle(true)} className="icon" color={props.color}/> 
            : <IconX size={30} onClick={()=>props.setToggle(false)} className="icon" color={props.color}/>}
        </div>
    </div>

}