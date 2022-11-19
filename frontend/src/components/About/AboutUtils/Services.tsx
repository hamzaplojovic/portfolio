import "aos/dist/aos.css"
import Aos from "aos"
import { useEffect } from "react"

interface ServicesItemInterface {
    id: string
    title:string
    description:string
}

const ServicesItem = (props: ServicesItemInterface) => {
    return(
        <div className="services-item">
            <div className="services-item-id">{props.id}</div>
            <div className="services-item-data">
                <div className="services-item-title">{props.title}</div>
                <div className="services-item-description">{props.description}</div>
            </div>
        </div>
    )
}

export const Services = () => {
    useEffect(() => {
        Aos.init();
    },[])
    const data = [
        {duration:"100","id":"01", "title": "Backend", "description": "Creating heart and soul of the entire application, mainly in Python. This includes creating a logic that the whole application is going to rely on, and creating secutiry and authentication for the application."},
        {duration:"1000","id":"02", "title": "Frontend", "description": "Creating body of the application, mainly in React. This includes creating a user interface that the user is going to interact with, and creating a logic that the user is going to interact with."},
        {duration:"100","id":"03", "title": "API", "description": "Creating something like a waiter, mainly in FastAPI,  that intercepts client requests, and takes them to the backend, where they are processed"},
        {duration:"100","id":"04", "title": "Hosting", "description": "Making a server that is going to host the application, and making sure that the application is going to be available for others to use."},

    ]
    return (
        <div className="services" data-aos="fade-down" data-aos-duration="500">
            <div className="services-heading">
                <h1>My core services and capabilities</h1>
            </div>
            <div className="services-items">
                {data.map((item:any)=>{
                    return <ServicesItem id={item.id} title={item.title} description={item.description}
                    data-aos="fade-up" data-aos-duration="500"/>
                })}
            </div>
        </div>
    )
}