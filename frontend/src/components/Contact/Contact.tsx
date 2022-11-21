import { IconArrowUpRight } from '@tabler/icons'
import React from 'react'
import "../../index.scss"
import { DropDownBlack } from '../Dropdown/Dropdown'

const ContactAboutDivider = () => {
    return <div className="contact-about-divider">
        <hr />
        <div className='contact-about-divider-items'>
            <div>
                <h1>Say hello! Whether it’s a chat about anything programming related or a potential project or opportunity you may have in mind, hit me up.</h1>
            </div>
            <div>
                <h1>The best way to reach me is through Email, or you can try your luck in my DM’s. Find me at hamzaplojovic9@gmail.com.</h1>
            </div>
        </div>
    </div>
}


const ContactDivider = (props : {id:string}) => {
    return (
        <>
            <hr className='contact-divider-hr'/>
            <div className="about-details">
                <h1 className="contact-divider-id">{props.id}</h1>
                <h1 className="about-details-job">Full Stack Developer</h1>
                <div className="about-details-items">
                    <h1 className="about-details-email">hamzaplojovic9@gmail.com</h1>
                    <h1 className="about-details-copyright">©2022</h1>
                </div>
            </div>
        </>
     )
}


const EmailMe =() => {
    return <a href='mailto:hamzaplojovic9@gmail.com' target="_blank" rel="noopener noreferrer" className='contact-email-wrapper'>
    <h1 className='contact-email'>Email me</h1>
    <div className="contact-icon">
        <IconArrowUpRight className='contact-arrow'/>
    </div>  
</a>
}

const SocialMediaDivider = () => { 
    return  <div className="social-media-divider">
        <div className='social-media-divider-title'><h1>Social Media</h1></div>
        <div>
            <hr />
        </div>
    </div>
}

const SocialMediaItem = (props: {
    name: string
    link:string
}) => {
    return <a href={props.link} className="social-media-item" target="_blank" rel='noopener noreferrer'>
        <div>
            <h1>{props.name}</h1>
            <div className="social-media-icon">
                <IconArrowUpRight className='social-media-arrow'/>
            </div>
        </div>
        <div>
            <hr />
        </div>
    </a>
}

const SocialMedia = () => {
    return <div className='social-media'>
        <SocialMediaDivider />
        <SocialMediaItem name='Instagram' link='https://instagram.com/hamzaplojovicc/'/>
        <SocialMediaItem name='Github' link='https://github.com/hamzaplojovic'/>
        <SocialMediaItem name='LinkedIn' link='https://linkedin.com/in/hamzaplojovic'/>
        <SocialMediaItem name='Coffee' link='https://www.buymeacoffee.com/plojovichamza'/>

    </div>
}

export const Contact = (props: {toggle:boolean}) => {
    return <>

    {props.toggle === false ? <div className='contact'>
        <h1 className='contact-heading'>Contact</h1>
        <ContactAboutDivider/>
        <EmailMe/>
        <ContactDivider id="1.0"/>
        <SocialMedia/>

    </div>: <DropDownBlack toggle={props.toggle} />}
    </>
}
