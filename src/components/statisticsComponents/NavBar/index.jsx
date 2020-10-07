import React, {useState} from 'react'

import './styles.css'

const NavBar = (props) => {
    const options = props.listEnum;
    const [selected, setSelected] = useState("button0")

    const sendOption = (e) => {
        const before = selected;
        setSelected(e.target.id)

        document.getElementById(before).className = "customButton"
        document.getElementById(e.target.id).className = "selectedButton"

        props.changeOption(e.target.value)
    }
    return (
        <div className={"mainNavBar"}>
            <div className={"buttonsNavBar"}>
                {options.options.map((e, index) => <button id={"button" + index} key={"button" + index} className={index == 0 ? "selectedButton" : "customButton"} value={e} onClick={sendOption}>{e}</button>)}
            </div>     
        </div>
    )
}

export default NavBar;