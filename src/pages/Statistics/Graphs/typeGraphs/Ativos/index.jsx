import React from 'react';

import { XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, Scatter, ScatterChart} from 'recharts';

import { getDataScatter } from '../../../utilAtivos';

import './style.css';

const Ativos = (props) => {
    console.log("Props de Ativos:", props);
    const dataAtivos = props.data[0] ? getDataScatter(props.data) : null;

    const CustomTooltip = ({ active, payload}) => {
        if (active) {
          return (
            <div className="custom-tooltip">
              <p className="title-tooltip">{payload[0].payload.matricula}</p>
              <p>Períodos Integralizados: {payload[0].payload.periodos_integralizados}</p>
              <p>Curso Concluído: {payload[0].payload.porcentagem_concluida}%</p>
            </div>
          );
        }
      
        return null;
    };

    return (
        <div className={'mainGraphs'}>
            {dataAtivos ? 
            <ScatterChart
                width={800}
                height={600}
                margin={{
                top: 20, right: 80, bottom: 20, left: 20,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"  />
                <Legend />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />}/>
                <XAxis dataKey="periodos_integralizados" type="number" name='periodosAtivos' />
                <YAxis dataKey="porcentagem_concluida" type="number" name='cursoConcluido' unit='%' />
                <Scatter data={dataAtivos[0]} fill={"Red"} name={"Aluno com dificuldades"}></Scatter>
                <Scatter data={dataAtivos[1]} fill={"green"} name={"Aluno na media dos discentes"}></Scatter>
                <Scatter data={dataAtivos[2]} fill={"blue"} name={"Aluno na media ideal"}></Scatter>
                <Scatter data={dataAtivos[3]} fill={"purple"} name={"Aluno com créditos concluidos"}></Scatter>          
            </ScatterChart> : null}          
        </div>
    )
}

export default Ativos;