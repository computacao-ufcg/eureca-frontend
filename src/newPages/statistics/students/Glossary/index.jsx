import React from 'react'
import Header from '../../../../newComponents/Header';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css'

const Glossary = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <div className="main-content-glossary">
                <Header></Header>
                <div className="main-glossary">
                    <div className="backdot"><span onClick={() => history.goBack()} ><FiArrowLeft size={25} /></span></div>
                    <div className="container-title-glossary">
                        <h1>GLOSSÁRIO</h1>
                    </div>
                    <div className="definitions">
                        <p>Ativos: Alunos que estão cursando no momento atual </p>
                        <p>Retidos: Alunos (???) </p>
                        <p>Evadidos: Alunos que abandonaram o curso </p>
                        <p>Egressos: Alunos Formados </p>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Glossary;