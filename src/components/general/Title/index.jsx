import React from 'react'

import './styles.css'

const Title = (props) => {

    return(
        <div className={'mainTitle'}>
            <div className={'nameTitle'}>{props.name}</div>
        </div>
    )
}

export default Title;