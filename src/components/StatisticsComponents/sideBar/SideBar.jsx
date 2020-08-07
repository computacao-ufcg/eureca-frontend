import React from 'react'

import './style.css'

const SideBar = (props) => {
    
    return (
        <div className={"mainSideBar"}>
            <div className={"optionsSideBar"}>
                {props.listOption.map((e, index) => <div className={"customOption"}>{e}</div>)}  
            </div>
        </div>
    )
}

export default SideBar;