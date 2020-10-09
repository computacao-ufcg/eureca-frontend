import React from 'react'
import {Link} from 'react-router-dom' 

import './style.css'

const NavBar = (props) => {
    
    return (
        <div className={"mainNavBar"}>
            <div className={"buttonsNavBar"}>
                <Link to={'discentes'}>
                    <button id={"buttonDiscentes"} className={props.selectedOption === "Discentes" ? "selectedButton" : "customButton"} value={"Discentes"} >Discentes</button>
                </Link>
                <Link to={'disciplinas'}>
                    <button id={"buttonDisciplinas"} className={props.selectedOption === "Disciplinas" ? "selectedButton" : "customButton"} value={"Disciplinas"}>Disciplinas</button>
                </Link>
                <Link to={'matriculas'}>
                    <button id={"buttonMatriculas"} className={props.selectedOption === "Matrículas" ? "selectedButton" : "customButton"} value={"Matrículas"} >Matrículas</button>
                </Link>
            </div>     
        </div>
    )
}

export default NavBar;