import "../../index.scss"
import {IconMenu, IconX} from "@tabler/icons"

export const Header = (props: {toggle:boolean, setToggle:any}) => {
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