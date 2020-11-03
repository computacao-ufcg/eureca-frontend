import React from 'react'

import {Link} from 'react-router-dom'

import './style.css'

const SideBar = (props) => {
    
    return (
        <div className={"mainSideBar"}>
            <div className={"optionsSideBar"}>
                {props.listOption.map((e, index) => <Link key={"linkInside" + index} to={props.navSelected + props.names[index]}><button  className={props.selectedOption === e ? "selectedOption" : "customOption"} value={e}>{e}</button></Link>)}  
            </div>
        </div>
    )
} 

export default SideBar;