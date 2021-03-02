import React from 'react';

import './style.css'

const MiniCardHome1 = (props) => {

    return (
        <div className={"main-mini-card-home"}>
            <div className={"number-mini-card-home"}>
                <div className={"number-mini-card-home-content"}>{props.number}</div>
            </div>
            <div className={"legend-mini-card-home"}>{props.legend}</div>
        </div>
    )
}

const MiniCardHome2 = (props) => {

    return (
        <div className={"main-mini-card-home-2"}>
            <div className={"number-mini-card-home"}>
                <div className={"number-mini-card-home-content"}>{props.number}</div>
            </div>
            <div className={"legend-mini-card-home"}>{props.legend}</div>
        </div>
    )
}

const MiniCardHome3 = (props) => {

    return (
        <div className={"main-mini-card-home-3"}>
            <div className={"number-mini-card-home"}>
                <div className={"number-mini-card-home-content"}>{props.number}</div>
            </div>
            <div className={"legend-mini-card-home"}>{props.legend}</div>
        </div>
    )
}

const MiniCardHome4 = (props) => {

    return (
        <div className={"main-mini-card-home-4"}>
            <div className={"number-mini-card-home"}>
                <div className={"number-mini-card-home-content"}>{props.number}</div>
            </div>
            <div className={"legend-mini-card-home"}>{props.legend}</div>
        </div>
    )
}

export { MiniCardHome1, MiniCardHome2, MiniCardHome3, MiniCardHome4 };