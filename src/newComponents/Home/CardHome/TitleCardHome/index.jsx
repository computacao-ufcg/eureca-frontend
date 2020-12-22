import React from 'react'

import './style.css'

const TitleCardHome = (props) => {

    return(
        <div className="title-card-name">
            {props.title}
        </div>
    )
}

export default TitleCardHome;