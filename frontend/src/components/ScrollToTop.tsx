import { useEffect, useState } from "react";
import SmoothScroll from "smooth-scroll"
import "../index.scss"
import {IconChevronUp} from "@tabler/icons"

var scroll = new SmoothScroll();

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [_, setHeight] = useState(0)

    const listenToScroll = () => {
        let heightToHideFrom = 200;
        const winScroll = document.body.scrollTop || 
            document.documentElement.scrollTop;
        setHeight(winScroll);
    
        if (winScroll > heightToHideFrom) {  
             isVisible && setIsVisible(false);
        } else {
             setIsVisible(true);
        }  
      };
    
    useEffect(() => {   
        window.addEventListener("scroll", listenToScroll);
        return () => 
           window.removeEventListener("scroll", listenToScroll); 
      }, [])

    return <>
    {!isVisible && <button className="scroll-to-top" onClick={()=>{
        scroll.animateScroll(0, null, {speed:1000, easing:"easeInQuad", clip:true})
    }}><IconChevronUp size={50} stroke={0.5} className="scroll-to-top-icon"/></button>}</>
}