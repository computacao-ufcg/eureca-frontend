import React from 'react';
import { Link } from 'react-router-dom'

import '../AlumniCardHome/style.css'

import TitleCardHome from '../TitleCardHome';
import AlumniCards from './AlumniCards'

import Mask6 from '../../../../assets/new_home_assets/mask_6.svg';
import Mask5 from '../../../../assets/new_home_assets/mask_5.svg';

const AlumniCardHome = (props) => {

    return (
        <React.Fragment>
            <div className={'card-home-area1'}>
                <div className={"alumni-card-home-content"}>
                    <div className={"title-card-content"}>
                        <TitleCardHome title={"EGRESSOS"} />
                    </div>
                    <div className={"alumni-card-content"}>
                        <AlumniCards data={props.data} />
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
                    <div className={"alumni-card-img-1"}>
                        <div className={"mask6"}>
                            <img src={Mask6} alt="mask6" />
                        </div>
                        <div className={"mask5"}>
                            <img src={Mask5} alt="mask5" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default AlumniCardHome;
