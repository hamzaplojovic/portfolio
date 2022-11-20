import React from "react"

interface DividerInterface {
    id: string
}

export const Divider = (props:DividerInterface) => {
    return (
        <>
            <hr />
            <div className="about-details">
                <h1 className="about-id">{props.id}</h1>
                <h1 className="about-details-job">Full Stack Developer</h1>
                <div className="about-details-items">
                    <h1 className="about-details-email">hamzaplojovic9@gmail.com</h1>
                    <h1 className="about-details-copyright">©2022</h1>
                </div>
            </div>
        </>
     )
}

