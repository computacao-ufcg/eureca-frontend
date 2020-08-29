import React, { useState } from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Checkbox from 'rc-checkbox';

import 'rc-checkbox/assets/index.css';
import './style.css'

const Egressos = (props) => {

    const [tag1, setTag1] = useState(props.labels[0])
    const [tag2, setTag2] = useState(props.labels[1])
    const [tag3, setTag3] = useState(props.labels[2])
    const [tag4, setTag4] = useState(props.labels[3])
    const [tag5, setTag5] = useState(props.labels[4])
    const [tag6, setTag6] = useState(props.labels[5])
    const [tag7, setTag7] = useState(props.labels[6])
    const [tag8, setTag8] = useState(props.labels[7])
    const [tag9, setTag9] = useState(props.labels[8])
    
    const handleCheck = (e) => {
        if(e.target.name === 'tag1') {
            if(e.target.checked){
                setTag1("tag1")
            } else {
                setTag1(null)
            }
        } else if(e.target.name === 'tag2') {
            if(e.target.checked){
                setTag2("tag2")
            } else {
                setTag2(null)
            }
        } else if(e.target.name === 'tag3') {
            if(e.target.checked){
                setTag3("tag3")
            } else {
                setTag3(null)
            }
        } else if(e.target.name === 'tag4') {
            if(e.target.checked){
                setTag4("tag4")
            } else {
                setTag4(null)
            }
        } else if(e.target.name === 'tag5') {
            if(e.target.checked){
                setTag5("tag5")
            } else {
                setTag5(null)
            }
        } else if(e.target.name === 'tag6') {
            if(e.target.checked){
                setTag6("tag6")
            } else {
                setTag6(null)
            }
        } else if(e.target.name === 'tag7') {
            if(e.target.checked){
                setTag7("tag7")
            } else {
                setTag7(null)
            }
        } else if(e.target.name === 'tag8') {
            if(e.target.checked){
                setTag8("tag8")
            } else {
                setTag8(null)
            }
        } else if(e.target.name === 'tag9') {
            if(e.target.checked){
                setTag9("tag9")
            } else {
                setTag9(null)
            }
        }
    }

    return (
        <div className={'mainGraphs'}>
            <LineChart
                width={800}
                height={300}
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
                <Line yAxisId="left" type="monotone" dataKey={tag1} stroke="#885d41" activeDot={{ r: 8 }} />
                <Line yAxisId="right" type="monotone" dataKey={tag2} stroke="#0073e5" />
                <Line yAxisId="right" type="monotone" dataKey={tag3} stroke="#CE4760" />
                <Line yAxisId="right" type="monotone" dataKey={tag4} stroke="#2A252D" />
                <Line yAxisId="right" type="monotone" dataKey={tag5} stroke="#E4D2A5" />
                <Line yAxisId="right" type="monotone" dataKey={tag6} stroke="#343937" />
                <Line yAxisId="right" type="monotone" dataKey={tag7} stroke="#D2E414" />
                <Line yAxisId="right" type="monotone" dataKey={tag8} stroke="#282838" />
                <Line yAxisId="right" type="monotone" dataKey={tag9} stroke="#ED6827" />
            </LineChart>
            <div className={"optionsEvadidos"}>
                {props.labels.map((e, index) => <label key={"label" + index}><Checkbox name={e} id={index} defaultChecked onChange={handleCheck}/>{" " + e}</label>)}
            </div>
        </div>
    )
}

export default Egressos;