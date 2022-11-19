import { Dropdown } from "../Dropdown/Dropdown"
import { ScrollToTop } from "../ScrollToTop"
import { Banner } from "./AboutUtils/Banner"
import { Divider } from "./AboutUtils/Divider"
import { Me } from "./AboutUtils/Me"
import { Services } from "./AboutUtils/Services"

export const About = (props: {toggle:boolean}) => {
    return <>
        {props.toggle === false ?
        <div className="about">
        <h1 className="about-title">About</h1>
        <Banner/>
        <h1 className="about-name">Hamza</h1>
        <Divider id="0.2"/>
        <h1 className="about-job-description">Creating software for others to use</h1>
        <Divider id="1.0"/>
        <ScrollToTop/>
        <Me/>
        <Divider id="2.0"/>
        <Services/>
        <Divider id="3.0"/>
    </div>: <Dropdown isOpen={props.toggle} toggleAnimation={true}/>}
    </>
}
