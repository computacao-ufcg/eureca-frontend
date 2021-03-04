import React from 'react';

import { MiniCardHome1, MiniCardHome2, MiniCardHome3 } from '../../MiniCardHome'
import './style.css'

const WarningCards = () => {

    return (
        <div className="warning-cards-main">
            <MiniCardHome1 number={"60"} legend={"FIM ANO LETIVO"} />
            <MiniCardHome1 number={"1"} legend={"PRAZO TRANCAR"} />
            <MiniCardHome1 number={"1"} legend={"REP. POR FALTA"} />
            <MiniCardHome3 number={"40"} legend={"BAIXA MÉDIA"} />
            <MiniCardHome2 number={"42"} legend={"20% DE FALTAS"} />
            <MiniCardHome2 number={"3"} legend={"PROX. A JUBILAR"} />
            <MiniCardHome2 number={"37"} legend={"TRANCAMENTOS"} />
            <MiniCardHome1 number={"+"} legend={"CRIAR ALARME"} />

            {/*
            <div className="warning-1"></div>
            <div className="warning-2"></div>
            <div className="warning-2"></div>
            <div className="warning-2"></div>
            <div className="warning-3"></div>
            <div className="warning-4"></div>
            <div className="warning-4"></div>
            <div className="warning-5"></div>
            */}
        </div>
    )
}

export default WarningCards;