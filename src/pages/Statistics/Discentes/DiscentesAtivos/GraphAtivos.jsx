import React, { useEffect, useState }  from 'react';

import  { Loader, Modal, Button, Table } from 'rsuite';

import { XAxis, YAxis, CartesianGrid, Tooltip, Scatter, ScatterChart } from 'recharts';

import Legenda from '../../../../components/StatisticsComponents/ativos/Legenda';

import { getDataScatter, getPercentagem, getPeriodDown } from './utilAtivos';

import './graphAtivos.css';

const GraphAtivos = (props) => {
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const [load, setLoad] = useState(false);

    const [red, setRed ] = useState([]);
    const [green, setGreen ] = useState([]);
    const [blue, setBlue ] = useState([]);
    const [purple, setPurple ] = useState([]);
    const [periodDown, setPeriodDown] = useState([]);
    const [periodDownValue, setPeriodDownValue] = useState(0);

    //for modal
    const [show, setShow] = useState(false);
    const [elementsEquals, setElementsEquals] = useState([]);

    const handleCloseModal = () => {
        setShow(false);
    }


    const handleScatter = (event, data) => {
        let percentagem = event.payload.porcentagem_concluida;
        let elementsEquals = [];

        // coletando todos os elementos com a mesma porcentagem
        data.map( element => {
            if(element.porcentagem_concluida === percentagem){
                elementsEquals.push(element);
            }
        })

        // debugger
        setElementsEquals(elementsEquals);
        setShow(true);
    }
    

    useEffect(() => {
        const carregaDados = () => {
            setLoad(false);
            
            const [red, green, blue, purple] = getDataScatter(props.data);
            const [ period, percentagem ] = getPeriodDown(red);
    
            setMin(props.periodoMin);
            setMax(props.periodoMax);
            
            setRed(red);
            setGreen(green);
            setBlue(blue);
            setPurple(purple);
    
            setPeriodDown(period);
            setPeriodDownValue(percentagem);
    
            setLoad(true);
        }
        carregaDados();
    },[props]);

    const CustomTooltip = ({ active, payload }) => {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <p>Períodos Integralizados: {payload[0].payload.periodos_integralizados}</p>
                    <p>Créditos Integralizados: {payload[0].payload.porcentagem_concluida}%</p>
                </div>
            );
        }

        return null;
    };

    return (
        <div className="ativos-main">
            {load ?
            <React.Fragment>
                <div className="graph-main">
                    <ScatterChart
                        width={800}
                        height={700}
                        margin={{
                            top: 20, right: 80, bottom: 20, left: 20,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} content={CustomTooltip} />
                        <XAxis 
                            dataKey="periodos_integralizados" 
                            type="number" 
                            label={{ value: "Períodos Integralizados", position: 'insideBottom', offset:0 }}
                        />
                        <YAxis 
                            dataKey="porcentagem_concluida" 
                            type="number" 
                            label={{ value: "Créditos Integralizados (%)", angle: -90, position: 'insideLeft', offset:0 }}
                        />
                        <Scatter data={red}  onClick={ (e) => handleScatter(e, red)} fillOpacity={0.5} fill={"red"} name={"Abaixo do esperado"}></Scatter>
                        <Scatter data={green}  fillOpacity={0.5} fill={"green"} name={"Dentro do esperado"}></Scatter>
                        <Scatter data={blue} fillOpacity={0.5} fill={"blue"} name={"Ideal"}></Scatter>
                        <Scatter data={purple} fillOpacity={0.5} fill={"purple"} name={"Acima do esperado"}></Scatter>
                    </ScatterChart>
                </div>
                <Legenda></Legenda>
                <div className="ativos-texto">
                    <p>Existem <strong>{props.data.length}</strong> discentes ativos com ingresso entre <strong>{min}</strong> e <strong>{max}</strong>. <strong>{blue.length}</strong> ({getPercentagem(props, blue)}%)
                    dos discentes ativos estão com a execução curricular no patamar ideal, <strong>{green.length}</strong> ({getPercentagem(props, green)}%)
                    estão dentro do esperado, <strong>{purple.length}</strong> ({getPercentagem(props, purple)}%) estão acima do esperado,
                    enquanto que <strong>{red.length}</strong> ({getPercentagem(props, red)}%) estão com a execução curricular abaixo do esperado.  
                    <strong>{periodDown}</strong> é o semestre com mais discentes com execução curricular abaixo do esperado ({periodDownValue}).
                    </p>
                </div>
                <Modal backdrop={true} show={show} onHide={handleCloseModal} size="lg" >
                    <Modal.Body>
                        <Table
                            height={400}
                            width={800}
                            data={elementsEquals}
                            onRowClick={data => {
                              console.log(data);
                            }}
                          >
                            <Table.Column width={200} align="center" fixed>
                              <Table.HeaderCell>Matrícula</Table.HeaderCell>
                              <Table.Cell dataKey="matricula" />
                            </Table.Column>
                  
                            <Table.Column width={200} fixed>
                              <Table.HeaderCell>Períodos Integralizados</Table.HeaderCell>
                              <Table.Cell dataKey="periodos_integralizados" />
                            </Table.Column>

                            <Table.Column width={200} fixed>
                              <Table.HeaderCell>Créditos Integralizados (%)</Table.HeaderCell>
                              <Table.Cell dataKey="porcentagem_concluida" />
                            </Table.Column>

                            <Table.Column width={200} fixed>
                              <Table.HeaderCell>Periodo de Ingresso</Table.HeaderCell>
                              <Table.Cell dataKey="periodo_ingresso" />
                            </Table.Column>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleCloseModal} appearance="primary">
                        Ok
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment> : <Loader content="Carregando..." vertical></Loader>}
        </div>
    )
}

export default GraphAtivos;
