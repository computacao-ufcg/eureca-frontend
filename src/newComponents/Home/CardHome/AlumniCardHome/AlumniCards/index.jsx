import React from 'react';

import {MiniCardHome1, MiniCardHome2, MiniCardHome3} from '../../MiniCardHome'
import './style.css'

const AlumniCards = () => {

    return(
        <div className="alumni-cards-main">
            <MiniCardHome1 number={"0"} legend={"NA ACADEMIA"}/>
            <MiniCardHome1 number={"0"} legend={"NA INDÚSTRIA"}/>
            <MiniCardHome1 number={"0"} legend={"EM EMP. PRIVADA"}/>
            <MiniCardHome3 number={"0"} legend={"EM EMP. PÚBLICA"}/>
            <MiniCardHome2 number={"0"} legend={"EM EMP. MISTA"}/>
            <MiniCardHome2 number={"0"} legend={"NO GOVERNO"}/>
            <MiniCardHome2 number={"0"} legend={"EM ONGS"}/>
            <MiniCardHome1 number={"3"} legend={"CADASTRADOS"}/>

        </div>
    )
}

export default AlumniCards;