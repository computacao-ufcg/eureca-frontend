import React, { useState } from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Checkbox from 'rc-checkbox';

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
            let auxList = {"periodo": data[index].periodo, ...data[index].tags};
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
        <div className={'rootGraphEvadidos'}>
            <div className={'mainGraphEvadidos'}>
                <LineChart
                    width={800}
                    height={400}
                    data={props.data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="periodo" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" name={motivos[0]} type="monotone" dataKey={tag1} stroke="#885d41" activeDot={{ r: 8 }} />
                    <Line yAxisId="left" name={motivos[1]} type="monotone" dataKey={tag2} stroke="#0073e5" />
                    <Line yAxisId="left" name={motivos[2]} type="monotone" dataKey={tag3} stroke="#CE4760" />
                    <Line yAxisId="left" name={motivos[3]} type="monotone" dataKey={tag4} stroke="#2A252D" />
                    <Line yAxisId="left" name={motivos[4]} type="monotone" dataKey={tag5} stroke="#E4D2A5" />
                    <Line yAxisId="left" name={motivos[5]} type="monotone" dataKey={tag6} stroke="#343937" />
                    <Line yAxisId="left" name={motivos[6]} type="monotone" dataKey={tag7} stroke="#D2E414" />
                    <Line yAxisId="left" name={motivos[7]} type="monotone" dataKey={tag8} stroke="#282838" />
                    <Line yAxisId="left" name={motivos[8]} type="monotone" dataKey={tag9} stroke="#ED6827" />
                </LineChart>
                <div className={"optionsEvadidos"}>
                    {tags.map((e, index) => <label key={"label" + index}><Checkbox key={"check" + index} name={e} id={index} defaultChecked onChange={handleCheck}/>{" " + motivos[index]}</label>)}
                </div>
            </div>
            <div className={'exportEgressos'}>
                <Export data={auxCSV ? auxCSV : []} name={"dataEvadidos.csv"}/>
            </div>
        </div>
    )
}

export default GraphEvadidos;