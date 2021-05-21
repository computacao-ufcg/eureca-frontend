import React, { useState }  from 'react';

import { Link } from 'react-router-dom';
import TitleCardHome from '../TitleCardHome'
import SubjectsSummaryCardHome from './SubjectsSummaryCardHome';
import Mask6 from '../../../../assets/new_home_assets/mask_6.svg';
import Mask5 from '../../../../assets/new_home_assets/mask_5.svg';
import Mask7 from '../../../../assets/new_home_assets/mask_7.svg';
import '../style.css'

const SubjectsCardHome = () => {
  const labelActives = ['REPROVAÇÕES/NOTA', 'REPROVAÇÕES/FALTA', 'TRANCAMENTOS','TAXA DE SUCESSO','RETENÇÃO ABSOLUTA', 'RETENÇÃO RELATIVA']
  const [optionSubject, setOptionSubject] = useState("obrigatórias")
  const [titleSubject, setTitleSubject] = useState("OBRIGATÓRIAS")
  const [cards, setCards] = useState({ card1: true, card2: true, card3: true, card4: true, card5: true, card6: true, card7: true })
  const [propSubjects, setPropsSubjects] = useState([])
  const [labels, setLabels] = useState(labelActives)

    return (
        <React.Fragment>
            <div className="card-home-area2">
                <div className="card-home-content">
                    <div className="card-img-2">
                        <div className="mask7">
                            <img src={Mask7} alt="mask7" />
                        </div>
                        <div className="title-card-content">
                            <TitleCardHome title={"DISCIPLINAS"} />
                        </div>
                        
                        <div className="summary-card-content2">
                            <SubjectsSummaryCardHome cards={cards} option={optionSubject} dataSubjects={propSubjects} data={labels} title={titleSubject} />
                            <div className='type-students-grid'>
                              <div className='type-students'>
                                <div className={optionSubject === 'obrigatórias' ? 'type-student-selected' : 'type-student'}>
                                  <button className="type-button" type="button" onClick={() => {
                                          if (optionSubject !== "obrigatórias") {
                                              setOptionSubject("obrigatórias");
                                              setTitleSubject("OBRIGATÓRIAS");
                                          }
                                  }}>OBRIGATÓRIAS</button>

                                </div>
                                <div className={optionSubject === 'optativas' ? 'type-student-selected' : 'type-student'}>
                                  <button className="type-button" type="button" onClick={() => {
                                          if (optionSubject !== "optativas") {
                                              setOptionSubject("optativas");
                                              setTitleSubject("OPTATIVAS");
                                          }
                                  }}>OPTATIVAS</button>

                                </div>
                                <div className={optionSubject === 'eletivas' ? 'type-student-selected' : 'type-student'}>
                                  <button className="type-button" type="button" onClick={() => {
                                          if (optionSubject !== "eletivas") {
                                              setOptionSubject("eletivas");
                                              setTitleSubject("ELETIVAS");
                                          }
                                  }}>ELETIVAS</button>

                                </div>
                                <div className={optionSubject === 'complementares' ? 'type-student-selected' : 'type-student'}>
                                  <button className="type-button" type="button" onClick={() => {
                                          if (optionSubject !== "complementares") {
                                              setOptionSubject("complementares");
                                              setTitleSubject("COMPLEMENTARES");
                                          }
                                  }}>COMPLEMENTARES</button>

                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-home-content-footer">
                        <Link to={"/newDesign/statistics/students/" + optionSubject}>
                            <button type="button">VER MAIS</button>
                        </Link>
                        <Link to={"/newDesign/statistics/subjects/glossary"}>
                            <button type="button">GLOSSÁRIO</button>
                        </Link>
                        <div className="mask6">
                            <img src={Mask6} alt="mask6" />
                        </div>
                        <div className="mask5">
                            <img src={Mask5} alt="mask5" />
                        </div>
                    </div>
                </div>
            </div>
      
    </React.Fragment>
  );
};

export default SubjectsCardHome;
