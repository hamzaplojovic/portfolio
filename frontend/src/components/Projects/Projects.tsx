import React from 'react'
import { DropDownBlack } from "../Dropdown/Dropdown"

export const Projects = (props: {toggle:boolean}) => {
    return <>
    {props.toggle === false ?
    <div className="projects">
        <div className="projects-item"></div>
        <div className="projects-item"></div>
        <div className="projects-item"></div>
        <div className="projects-item"></div>
        <div className="projects-item"></div>
        <div className="projects-item"></div>

    </div>: <DropDownBlack toggle={props.toggle} />}
</>
}