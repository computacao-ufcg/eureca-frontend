import React, { useState } from 'react';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Line, ComposedChart } from 'recharts';

import { Switch } from 'pretty-checkbox-react'
import '@djthoms/pretty-checkbox';

import 'rc-checkbox/assets/index.css';
import './style.css'

import Export from '../../../../components/StatisticsComponents/Export';

import {motivos} from './dropoutUtil';

const EvadedGraph = (props) => {

    const data = props.data ? props.data.terms : null

    const [tag1, setTag1] = useState("reasons.failed3Times");
    const [tag2, setTag2] = useState("reasons.reenterSameCourse");
    const [tag3, setTag3] = useState("reasons.reenterOtherCourse");
    const [tag4, setTag4] = useState("reasons.failedAll");
    const [tag5, setTag5] = useState("reasons.cancelled");
    const [tag6, setTag6] = useState("reasons.cancelledByDecree");
    const [tag7, setTag7] = useState("reasons.cancelledCourseChange");
    const [tag8, setTag8] = useState("reasons.cancelledUponRequest");
    const [tag9, setTag9] = useState("reasons.leftWithoutNotice");
    const [tag10, setTag10] = useState("reasons.missedGraduation");
    const [tag11, setTag11] = useState("reasons.transferred");
    const [total, setTotal] = useState("reasons.totalDropouts");
    
    const changeData = (data) => {
        let list = [];
        if(data){
            for (let index = 0; index < data.length; index++) {
                let auxList = {"periodo": data[index].periodo, 
                            "3 reprovações na mesma disciplina" : data[index].reasons.tag1,
                            "Novo ingresso no mesmo curso": data[index].reasons.tag2,
                            "Novo ingresso em outro curso": data[index].reasons.tag3,
                            "Reprovado por falta em todas as disciplinas": data[index].reasons.tag4,
                            "Cancelamento da matrícula": data[index].reasons.tag5,
                            "Cancelamento p/ decisão judicial": data[index].reasons.tag6,
                            "Cancelamento p/ mudança de curso": data[index].reasons.tag7,
                            "Cancelamento p/ solicitação do aluno": data[index].reasons.tag8,
                            "Cancelamento por abandono": data[index].reasons.tag9};
                list.push(auxList);
            }
        }
        return list
    }
    
    const handleCheck = (e) => {
        if(e.target.name === 'tag0') {
            if(e.target.checked){
                setTag1("reasons.failed3Times");
            } else {
                setTag1(null);
            }
        } else if(e.target.name === 'tag1') {
            if(e.target.checked){
                setTag2("reasons.reenterSameCourse");
            } else {
                setTag2(null);
            }
        } else if(e.target.name === 'tag2') {
            if(e.target.checked){
                setTag3("reasons.reenterOtherCourse");
            } else {
                setTag3(null);
            }
        } else if(e.target.name === 'tag3') {
            if(e.target.checked){
                setTag4("reasons.failedAll");
            } else {
                setTag4(null);
            }
        } else if(e.target.name === 'tag4') {
            if(e.target.checked){
                setTag5("reasons.cancelled");
            } else {
                setTag5(null);
            }
        } else if(e.target.name === 'tag5') {
            if(e.target.checked){
                setTag6("reasons.cancelledByDecree");
            } else {
                setTag6(null);
            }
        } else if(e.target.name === 'tag6') {
            if(e.target.checked){
                setTag7("reasons.cancelledCourseChange");
            } else {
                setTag7(null);
            }
        } else if(e.target.name === 'tag7') {
            if(e.target.checked){
                setTag8("reasons.cancelledUponRequest");
            } else {
                setTag8(null);
            }
        } else if(e.target.name === 'tag8') {
            if(e.target.checked){
                setTag9("reasons.leftWithoutNotice");
            } else {
                setTag9(null);
            }
        } else if(e.target.name === 'tag9') {
            if(e.target.checked){
                setTag10("reasons.missedGraduation");
            } else {
                setTag10(null);
            }
        } else if(e.target.name === 'tag10') {
            if(e.target.checked){
                setTag11("reasons.transferred");
            } else {
                setTag11(null);
            }
        } else if(e.target.name === 'tag11') {
            if(e.target.checked){
                setTotal("reasons.totalDropouts");
            } else {
                setTotal(null);
            }
        } 
    }

    return (
        <React.Fragment>
            {data ? 
            <div className='rootGraphEvadidos'>
                <div className='mainGraphEvadidos'>
                    <ComposedChart
                        width={800}
                        height={400}
                        data={data}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="term" label={{ value: 'Semestres', angle: 0, position: 'insideBottom', offset:-5 }} />
                        <YAxis yAxisId="left" label={{ value: 'Evadidos', angle: -90, position: 'insideLeft'}}/>
                        <Tooltip />
                        <Area yAxisId="left" name={motivos[0]} type="monotone" stackId="1" dataKey={tag1} stroke="#B2EDD0" fill="#B2EDD0" />
                        <Area yAxisId="left" name={motivos[1]} type="monotone" stackId="1" dataKey={tag2} stroke="#EFAB54" fill="#EFAB54" />
                        <Area yAxisId="left" name={motivos[2]} type="monotone" stackId="1" dataKey={tag3} stroke="#24BDAF" fill="#24BDAF" />
                        <Area yAxisId="left" name={motivos[3]} type="monotone" stackId="1" dataKey={tag4} stroke="#F64969" fill="#F64969"/>
                        <Area yAxisId="left" name={motivos[4]} type="monotone" stackId="1" dataKey={tag5} stroke="#F6B545" fill="#24BDAF"/>
                        <Area yAxisId="left" name={motivos[5]} type="monotone" stackId="1" dataKey={tag6} stroke="#E4D2A5" fill="#E4D2A5"/>
                        <Area yAxisId="left" name={motivos[6]} type="monotone" stackId="1" dataKey={tag7} stroke="#C99192" fill="#C99192"/>
                        <Area yAxisId="left" name={motivos[7]} type="monotone" stackId="1" dataKey={tag8} stroke="#3A3D3D" fill="#3A3D3D"/>
                        <Area yAxisId="left" name={motivos[8]} type="monotone" stackId="1" dataKey={tag9} stroke="#C3D440" fill="#C3D440"/>
                        <Area yAxisId="left" name={motivos[9]} type="monotone" stackId="1" dataKey={tag10} stroke="#6C7468" fill="#6C7468"/>
                        <Area yAxisId="left" name={motivos[10]} type="monotone" stackId="1" dataKey={tag11} stroke="#FD577D" fill="#FD577D"/>
                        <Line yAxisId="left" name={"Total"} type="monotone" stackId="1" dataKey={total} stroke="#5F6081" fill="#5F6081"/>
                    </ComposedChart>
                    <div className="optionsEvadidos">
                        {motivos.map((e, index) => <label key={"label" + index}><Switch shape="fill" className={"checkbox" + index} key={"check" + index} name={"tag" + index} id={index} defaultChecked onChange={handleCheck}/>{" " + motivos[index]}</label>)}
                    </div>
                </div>
                <div className='textEgressos'>
                    <p>
                    Entre <strong>{data[0].term}</strong> e <strong>{data[data.length - 1].term}</strong>, <strong>{props.data.summary.netDropoutCount}</strong> discentes se desligaram definitivamente do curso, sem colar grau. Entretanto, o número total de desligamentos no período foi <strong>{props.data.summary.grossDropoutCount}</strong>, considerando discentes que foram desligados e que reingressaram no curso. A relação entre evadidos e matriculados no período é <strong>{props.data.summary.grossDropoutEnrolledRate.toFixed(2)}</strong>, enquanto que a relação entre evadidos e egressos é <strong>{props.data.summary.grossDropoutAlumnusRate.toFixed(2)}</strong>.
                    </p>
                </div>
                
            </div>
            : <div></div>}
        </React.Fragment>
    )
}

export default EvadedGraph;