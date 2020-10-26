import React, { useState } from 'react';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import { Switch } from 'pretty-checkbox-react'
import '@djthoms/pretty-checkbox';

import 'rc-checkbox/assets/index.css';
import '../../styles.css'

import Export from '../../../../components/StatisticsComponents/Export';

import {tags, motivos} from './utilEvadidos';

const GraphEvadidos = (props) => {

    const [tag1, setTag1] = useState("tags.tag1");
    const [tag2, setTag2] = useState("tags.tag2");
    const [tag3, setTag3] = useState("tags.tag3");
    const [tag4, setTag4] = useState("tags.tag4");
    const [tag5, setTag5] = useState("tags.tag5");
    const [tag6, setTag6] = useState("tags.tag6");
    const [tag7, setTag7] = useState("tags.tag7");
    const [tag8, setTag8] = useState("tags.tag8");
    const [tag9, setTag9] = useState("tags.tag9");
    
    const changeData = (data) => {
        let list = [];
        for (let index = 0; index < data.length; index++) {
            let auxList = {"periodo": data[index].periodo, 
                        "3 reprovações na mesma disciplina" : data[index].tags.tag1,
                        "Novo ingresso no mesmo curso": data[index].tags.tag2,
                        "Novo ingresso em outro curso": data[index].tags.tag3,
                        "Reprovado por falta em todas as disciplinas": data[index].tags.tag4,
                        "Cancelamento da matrícula": data[index].tags.tag5,
                        "Cancelamento p/ decisão judicial": data[index].tags.tag6,
                        "Cancelamento p/ mudança de curso": data[index].tags.tag7,
                        "Cancelamento p/ solicitação do aluno": data[index].tags.tag8,
                        "Cancelamento por abandono": data[index].tags.tag9};
            list.push(auxList);
        }
        return list
    }
    let auxCSV = props.data ? changeData(props.data) : null;
    
    const handleCheck = (e) => {
        if(e.target.name === 'tag1') {
            if(e.target.checked){
                setTag1("tags.tag1");
            } else {
                setTag1(null);
            }
        } else if(e.target.name === 'tag2') {
            if(e.target.checked){
                setTag2("tags.tag2");
            } else {
                setTag2(null);
            }
        } else if(e.target.name === 'tag3') {
            if(e.target.checked){
                setTag3("tags.tag3");
            } else {
                setTag3(null);
            }
        } else if(e.target.name === 'tag4') {
            if(e.target.checked){
                setTag4("tags.tag4");
            } else {
                setTag4(null);
            }
        } else if(e.target.name === 'tag5') {
            if(e.target.checked){
                setTag5("tags.tag5");
            } else {
                setTag5(null);
            }
        } else if(e.target.name === 'tag6') {
            if(e.target.checked){
                setTag6("tags.tag6");
            } else {
                setTag6(null);
            }
        } else if(e.target.name === 'tag7') {
            if(e.target.checked){
                setTag7("tags.tag7");
            } else {
                setTag7(null);
            }
        } else if(e.target.name === 'tag8') {
            if(e.target.checked){
                setTag8("tags.tag8");
            } else {
                setTag8(null);
            }
        } else if(e.target.name === 'tag9') {
            if(e.target.checked){
                setTag9("tags.tag9");
            } else {
                setTag9(null);
            }
        }
    }

    return (
        <React.Fragment>
            {props.data ? 
            <div className={'rootGraphEvadidos'}>
                <div className={'mainGraphEvadidos'}>
                    <AreaChart
                        width={800}
                        height={400}
                        data={props.data}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="periodo" label={{ value: 'Semestres', angle: 0, position: 'insideBottom', offset:-5 }} />
                        <YAxis yAxisId="left" label={{ value: 'Evadidos', angle: -90, position: 'insideLeft'}} />
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
                    </AreaChart>
                    <div className={"optionsEvadidos"}>
                        {tags.map((e, index) => <label key={"label" + index}><Switch shape="fill" className={"checkbox" + index} key={"check" + index} name={e} id={index} defaultChecked onChange={handleCheck}/>{" " + motivos[index]}</label>)}
                    </div>
                </div>
                <div className={'textEgressos'}>
                    <p>
                    Entre <strong>{props.data[0].periodo}</strong> e <strong>{props.data[props.data.length - 1].periodo}</strong>, <strong>AA</strong> discentes se desligaram definitivamente do curso, sem colar grau. Entretanto, o número total de desligamentos no período foi <strong>BB</strong>, considerando discentes que foram desligados e que reingressaram no curso. A relação entre evadidos e matriculados no período é <strong>CC.C</strong>, enquanto que a relação entre evadidos e egressos é <strong>DD.D</strong>.
                    </p>
                </div>
                <div className={'exportEgressos'}>
                    <Export data={auxCSV ? auxCSV : []} name={"evadidos"}/>
                </div>
            </div>
            : null}
        </React.Fragment>
    )
}

export default GraphEvadidos;