import React from 'react';

import './style.css'

import TitleCardHome from '../TitleCardHome';

import { MiniCardHome2, MiniCardHome4 } from '../MiniCardHome';

import Mask9 from '../../../../assets/new_home_assets/mask_9.svg';

const CoursesCardHome = () => {

    return (
        <React.Fragment>
            <div className='card-home-area2'>
                <div className="card-home-nude">
                    <div>
                        <div className="title-card-content">
                            <TitleCardHome title={"CURSOS"}/>
                            <div className="subtitle-courses">2020.1</div>
                        </div>
                        <div className="summary-card-content2">
                            <MiniCardHome2 number={"XX"} legend={"OFERTADAS"}/>
                            <MiniCardHome4 number={"XX"} legend={"TRANCADAS"}/>
                        </div>
                    </div>
                    <div className="card-img-6">
                        <div className="mask9">
                            <img src={Mask9} alt="mask9" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CoursesCardHome;