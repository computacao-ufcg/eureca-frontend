import React, { useState } from 'react'

import './style.css'

const SideBar = (props) => {

    const [selected, setSelected] = useState("buttonSide0")

    const sendOption = (e) =>{
        
        setSelected(e.target.id)
        props.changeOption(e.target.value)
    }
    
    return (
        <div className={"mainSideBar"}>
            <div className={"optionsSideBar"}>
                {props.listOption.map((e, index) => <button key={"buttonSide" + index} id={"buttonSide" + index} className={"customOption"} value={e} onClick={sendOption}>{e}</button>)}  
            </div>
        </div>
    )
} 

export default SideBar;