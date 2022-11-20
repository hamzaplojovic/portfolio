import "../../index.scss"
import { useTransition, animated } from "react-spring"
import React, {useEffect, useState } from "react";

export const Dropdown = (props: {
    isOpen:boolean,
    toggleAnimation? :boolean
}) => {
    const [visible, setVisible] = useState(false);
    const transition = useTransition(visible, {
        config: {duration: 500},
        from: { opacity: 0, y: 20},
        enter: { opacity: 1, y:0},
        leave: { opacity: 0, y:0}, 
    })
    useEffect(() => {
        if (props.toggleAnimation === true) {
            setVisible(true);
        } else {
            setVisible(false);
        }

    },[])
    return <>
        {props.toggleAnimation === true && (<div className="dropdown">{transition((style, item) => item && <animated.div style={style} className="dropdown">
            <a href="/">Projects</a>
            <a href="/">About</a>
            <a href="/">Contacts</a>
            </animated.div>)}</div>)}
    </>
}