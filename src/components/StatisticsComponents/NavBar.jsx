import React from 'react'

const NavBar = (props) => {
    const options = props.listEnum;

    const sendOption = (e) => {
        console.log(e.target.value)
        props.changeOption(e.target.value)
    }
    return (
        <div>
            {options.options.map((e, index) => <button value={e} onClick={sendOption}>{e}</button>)}
        </div>
    )
}

export default NavBar;