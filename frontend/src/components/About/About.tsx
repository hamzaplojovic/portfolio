import { DropDownGreen } from "../Dropdown/Dropdown"
import { ScrollToTop } from "../ScrollToTop"
import { Banner } from "./AboutUtils/Banner"
import { Divider } from "./AboutUtils/Divider"
import { Me } from "./AboutUtils/Me"
import { Services } from "./AboutUtils/Services"
import Aos from "aos"
import "aos/dist/aos.css"
import React, { useEffect } from "react"

export const About = (props: {toggle:boolean}) => {
    useEffect(() => {
        Aos.init({duration: 1500});
    },[])
    return <>
        {props.toggle === false ?
        <div className="about">
        <ScrollToTop/>

        <h1 className="about-title" data-aos="fade-in" data-aos-duration="500">About</h1>
        <Banner data-aos="fade-up" data-aos-duration="1000"/>
        <h1 className="about-name" data-aos="fade-up" data-aos-duration="500">Hamza</h1>
        <Divider id="0.2"/>
        <h1 className="about-job-description" data-aos="fade-down" data-aos-duration="500">Creating software for others to use</h1>
        <Divider id="1.0"/>
        <Me/>
        <Divider id="2.0"/>
        <Services/>
        <Divider id="3.0"/>
    </div>: <DropDownGreen toggle={props.toggle} />}
    </>
}
