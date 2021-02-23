import React from 'react';

import {MiniCardHome1} from '../../MiniCardHome'
import './style.css'

const AlumniCards = () => {

    return(
        <div className={'alumni-summary-card-main'}>
            <div className={'alumni-summary-card-title'}>
                <div className={'alumni-summary-card-info'}>
                    <div className={'alumni-summary-card-size'}>1709</div>
                    <div className={'alumni-summary-card-legend'}>EGRESSOS</div>
                </div>
            </div>
            <div className={'alumni-summary-card-cards'}>
                <MiniCardHome1 number={"0"} legend={"NA ACADEMIA"}/>
                <MiniCardHome1 number={"0"} legend={"NO GOVERNO"}/>
                <MiniCardHome1 number={"0"} legend={"NA INDÚSTRIA"}/>
                <MiniCardHome1 number={"0"} legend={"EM EMP. PRIVADA"}/>
                <MiniCardHome1 number={"0"} legend={"EM EMP. PÚBLICA"}/>
                <MiniCardHome1 number={"0"} legend={"EM EMP. MISTA"}/>
                <MiniCardHome1 number={"0"} legend={"EM ONGS"}/>
                <MiniCardHome1 number={"1385"} legend={"NÃO-CADASTRADOS"}/>
            </div>
        </div>
    )
}

export default AlumniCards;