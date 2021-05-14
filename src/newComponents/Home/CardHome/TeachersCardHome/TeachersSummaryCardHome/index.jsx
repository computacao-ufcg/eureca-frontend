import React from 'react';

import './style.css'

import {MiniCardHome1, MiniCardHome2, MiniCardHome3, MiniCardHome4, MiniCardHome5} from '../../MiniCardHome';

const TeachersSummaryCardHome = (props) => {

    console.log(props.dataTeachers);
    const labels = props.data;
    const data = props.dataTeachers;

    return(
        <div className='teachers-summary-card-main'>
            <div className='teachers-summary-card-title'>
                <div className='teachers-summary-card-info'>
                    <div className='teachers-summary-card-type'>{props.title}</div>
                    <div className='teachers-summary-card-age'>1986.1 a 2019.2</div>
                    <div className='teachers-summary-card-size'>{data[0] || 0}</div>
                    
                </div>
                <div className='teachers-summary-left-cards'>
                   {props.cards.card6 && <MiniCardHome4 option={props.option} number={data[5] || 0} legend={labels[4]}/>} 
                   {props.cards.card5 &&<MiniCardHome1 option={props.option} number={data[6] || 0} legend={labels[5]}/>}
                </div>
            </div>
            <div className={'teachers-summary-card-cards'}>
                <MiniCardHome1 option={props.option} number={data[1] || 0} legend={labels[0]}/>
                <MiniCardHome1 option={props.option} number={data[2] || 0} legend={labels[1]}/>
                {props.cards.card4?<MiniCardHome1 option={props.option} number={data[3] || 0} legend={labels[2]}/>:<MiniCardHome3 option={props.option} number={data[3] || 0} legend={labels[2]}/>}
                {props.cards.card4 &&<MiniCardHome1 option={props.option} number={data[4] || 0} legend={labels[3]}/>}
                
            </div>
           
        </div>
    )
}

export default TeachersSummaryCardHome;