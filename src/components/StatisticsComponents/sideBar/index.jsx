import React, { useState } from 'react'

import {Link} from 'react-router-dom'

import './style.css'

const SideBar = (props) => {
 
    return (
        <div className={"mainSideBar"}>
            <div className={"optionsSideBar"}>
                {props.listOption.map((e, index) => <Link to={props.navSelected + e}><button key={"buttonSide" + index} className={props.selectedOption == e ? "selectedOption" : "customOption"} value={e}>{e}</button></Link>)}  
            </div>
        </div>
    )
} 

export default SideBar;