import React from 'react';
import Disciplina from '../../../newComponents/Disciplinas';

import HeaderHome from '../../../newComponents/Home/Header';
import TitleHome from '../../../newComponents/Home/Title';
import Periodo from '../../../newComponents/Periodos';

import './styles.css'

/*<div className="titulo">CURSOS</div>*/

const Cursos = () => {


    return(

        <React.Fragment>
            <HeaderHome/>
            <TitleHome/>

            <div className="container-1">

                    
                <div className="titulo">CURSOS</div>

                
                <div className="caminho">
                    <div className="matriculados">
                        MATRICULADOS
                    </div>

                    <div className="filtro1">
                        FILTRO
                    </div>
                    <div className="filtro2">
                        FILTRO
                    </div>
                </div>
                

                <div className="container-2">


                    <div className="column">
                        <Periodo id="p1" periodo="1º Período"/>

                        <Disciplina id="fmcc1" nome="Fundamentos da Matemática para Ciência a Computação I" />
                        <Disciplina id="prog1" nome="Programação 1" />
                        <Disciplina id="lp1" nome="Laboratório de Programação I" />
                        <Disciplina id="ic" nome="Introdução à Computação" />
                        <Disciplina id="og1" nome="Optativa Geral" />

                    </div>
                    <div className="column">
                        <Periodo id="p2" periodo="2º Período"/>

                        <Disciplina id="fmcc2" nome="Fundamentos da Matemática para Ciência a Computação II" />
                        <Disciplina id="calc1" nome="Cálculo Diferencial e Integral I" />
                        <Disciplina id="prog2" nome="Programação II" />
                        <Disciplina id="lp2" nome="Laboratório de Programação II" />
                        <Disciplina id="og2" nome="Optativa Geral" />
                    </div>
                    <div className="column">
                        <Periodo id="p3" periodo="3º Período"/>

                        <Disciplina id="linear" nome="Álgebra Linear"/>
                        <Disciplina id="logica" nome="Lógica para Computação" />
                        <Disciplina id="calc2" nome="Cálculo Diferencial e Integral II" />
                        <Disciplina id="eda" nome="Estrutura de Dados" />
                        <Disciplina id="leda" nome="Laboratório de Estrutura de Dados" />
                        <Disciplina id="tg" nome="Teoria dos Grafos" />
                    </div>
                    <div className="column">
                        <Periodo id="p4" periodo="4º Período"/>
                        
                        <Disciplina id="prob" nome="Introdução à Probalidade" />
                        <Disciplina id="psoft" nome="Projeto de Software" />
                        <Disciplina id="plp" nome="Paradigmas de Linguagens de Programação" />
                        <Disciplina id="bd" nome="Banco de Dados I" />
                        <Disciplina id="oac" nome="Organização e Arquitetura de Computadores" />
                        <Disciplina id="loac" nome="Laboratório de Organização e Arquitetura de Computadores" />
                    </div>
                    <div className="column">
                        <Periodo id="p5" periodo="5º Período"/>

                        <Disciplina id="estatistica" nome="Estatística Aplicada" />
                        <Disciplina id="analise" nome="Análise de Sistemas" />
                        <Disciplina id="es" nome="Engenharia de Software" />
                        <Disciplina id="redes" nome="Redes de Computadores" />
                        <Disciplina id="so" nome="Sistemas Operacionais" />
                        <Disciplina id="tc" nome="Teoria da Computação" />
                    </div>
                    <div className="column">
                        <Periodo id="p6" periodo="6º Período"/>
                        
                        <Disciplina id="motodologia" nome="Metodologia Científica"/>
                        <Disciplina id="concorrente" nome="Programação Concorrente" />
                        <Disciplina id="ia" nome="Inteligência Artificial" />
                        <Disciplina id="opt1" nome="Optativa Específica" />
                        <Disciplina id="opt2" nome="Optativa Específica" />
                    </div>
                    <div className="column">
                        <Periodo id="p7" periodo="7º Período"/>

                        <Disciplina id="atal" nome="Análise e Técnicas de Algoritmos"/>
                        <Disciplina id="compiladores" nome="Compiladores" />
                        <Disciplina id="opt3" nome="Optativa Específica" />         
                        <Disciplina id="opt4" nome="Optativa Específica" />
                        <Disciplina id="og3" nome="Optativa Geral" />
                    </div>
                    <div className="column">
                        <Periodo id="p8" periodo="8º Período"/>

                        <Disciplina id="projeto1" nome="Projeto em Computação I"/>
                        <Disciplina id="ptcc" nome="Projeto de Trabalho de Conclusão de Curso" />
                        <Disciplina id="opt5" nome="Optativa Específica" />
                        <Disciplina id="opt6" nome="Optativa Específica" />
                        <Disciplina id="og4" nome="Optativa Geral" />
                    </div>
                    <div className="column">
                        <Periodo id="p9" periodo="9º Período"/>

                        <Disciplina id="projeto2" nome="Projeto em Computação II"/>
                        <Disciplina id="tcc" nome="Trabalho de Conclusão de Curso" />
                        <Disciplina id="opt7" nome="Optativa Específica" />
                        <Disciplina id="opt8" nome="Optativa Específica" />
                        <Disciplina id="opt9" nome="Optativa Específica" />
                        <Disciplina id="opt10" nome="Optativa Específica" />
                    </div>

                </div>
            </div>

            
                
        </React.Fragment>

        
        
        
        
        
    )
}

export default Cursos;