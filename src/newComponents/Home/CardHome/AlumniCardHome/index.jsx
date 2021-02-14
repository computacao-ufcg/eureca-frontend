import React from 'react';
import { Link } from 'react-router-dom'

import '../AlumniCardHome/style.css'

import TitleCardHome from '../TitleCardHome';
import SummaryCardHome from '../SummaryCardHome';

import Mask3 from '../../../../assets/new_home_assets/mask_3.svg';

const AlumniCardHome = () => {

    return (
        <React.Fragment>
            <div className={'card-home-area1'}>

                <div className={"card-home-content"}>
                    <div className={"title-card-content"}>
                        <TitleCardHome title={"EGRESSOS"} />
                    </div>
                    
                    <div className={"summary-card-content"}>
                        <SummaryCardHome />
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
        </React.Fragment>
    )
}

export default AlumniCardHome;