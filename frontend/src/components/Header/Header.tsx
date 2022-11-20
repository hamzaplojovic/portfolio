import "../../index.scss"
import {IconMenu, IconX} from "@tabler/icons"
import React from "react"

interface HeaderInterface {
    toggle: boolean
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header = (props: HeaderInterface) => {
    return <div className="header">
        <h1>Hamza Plojovic</h1>
        <div className="header-items">
            <h2>Projects</h2>
            <h2>About</h2>
            <h2>Contacts</h2>
            { props.toggle === false ? <IconMenu size={30} onClick={()=>props.setToggle(true)} className="icon"/> 
            : <IconX size={30} onClick={()=>props.setToggle(false)} className="icon"/>}
        </div>
    </div>

}