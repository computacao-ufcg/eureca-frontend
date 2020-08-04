import React from 'react'

const SideBar = (props) => {
    
    return (
        <div>
            {props.listOption.map((e, index) => <div><div>{e}</div><br/></div>)}
        </div>
    )
}

export default SideBar;