import React from 'react';
import { Link } from 'react-router-dom'

import '../AlumniCardHome/style.css'

import TitleCardHome from '../TitleCardHome';
import AlumniCards from './AlumniCards'

import Mask3 from '../../../../assets/new_home_assets/mask_3.svg';

const AlumniCardHome = () => {

    return (
        <React.Fragment>
            <div className={'card-home-area1'}>

                <div className={"card-home-content"}>
                    <div className={"card-img-5"}>
                        <div className={"card-img-5-up"}>
                            <div className={"title-card-content"}>
                                <TitleCardHome title={"EGRESSOS"} />
                            </div>
                            <div className={"mask3"}>
                                <img src={Mask3} alt="mask3" />
                            </div>
                        </div>
                        <div className={"summary-card-content-3"}>
                            <AlumniCards />
                        </div>
                        <div className={"alumni-buttons"}>
                            <div className={'seemore-button'}>
                                <Link to={'newDesign/alumniufcg/seemore'}>
                                    <button type="submit">VER MAIS</button>
                                </Link>
                            </div>
                            <div className={"updatedata-button"}>
                                <Link to={'newDesign/alumniufcg/updatedata'}>
                                    <button type="submit">ATUALIZAR DADOS</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AlumniCardHome;