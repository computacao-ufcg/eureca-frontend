import React, { useEffect, useState } from 'react';

import { FiSearch } from 'react-icons/fi';

import { Loader, Modal, Button } from 'rsuite';

import Header from '../Header';

import ActiveSlider from './ActiveSlider';
import ActiveGraph from './ActiveGraph';

import TableDiscent from './TableDiscent';

import api from '../../../services/api';

import './styles.css';

import { dataSelectExample } from './activeUtil';

const Actives = () => {

    const [checkall, setCheckAll] = useState(false);

    const [dataAtivos, setDataAtivos] = useState([]);
    const [dataExport, setDataExport] = useState([]);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [label, setLabel] = useState([]);
    // const [load, setLoad] = useState(true);

    // For the Text info
    const [redLength, setRedLength] = useState(0);
    const [greenLength, setGreenLength] = useState(0);
    const [blueLength, setBlueLength] = useState(0);
    const [purpleLength, setPurpleLength] = useState(0);

    // for modal
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState('');

    const handleCloseModal = () => {
        setShow(false);
    }

    const handleSearch = (event) => {
        if (event.keyCode === 13){
            setSearch(event.target.value);
            setShow(true)  
        }    
    }

    const handleText = (lengthRed, lengthGreen, lengthBlue, lengthPurple) => {
        setRedLength(lengthRed);
        setGreenLength(lengthGreen);
        setBlueLength(lengthBlue);
        setPurpleLength(lengthPurple);
    }

    const getLabel = (data) => {
        const aux = new Set();
        let newLabel = [];

        data.forEach(e => {
            aux.add(e.periodo_ingresso); // montando o novo label com elementos unicos.
        });

        newLabel = Array.from(aux).sort((a, b) => a - b); // Transformando em array e ordenando o Label

        setMin(0);
        setMax(newLabel.length - 1);

        return newLabel;
    }

    const handleSlider = (min, max) => {
        setMin(min);
        setMax(max);
    }

    const fetchDataApiWithLabel = async (min, max) => {
        const query = `ativos?de=${label[min]}&ate=${label[max]}`;
        const queryExport = `ativos/csv?de=${label[min]}&ate=${label[max]}`;

        const resAtivos = await api.get(`api/estatisticas/${query}`, {});
        const resExport = await api.get(`api/estatisticas/${queryExport}`, {});

        if (resAtivos.statusText === 'OK') {
            setDataAtivos(resAtivos.data);
        } else {
            console.log("Error Data Ativos");
        }

        if (resExport.statusText === 'OK') {
            setDataExport(resExport.data);
        } else {
            console.log("Error Data Export");
        }
    }

    useEffect(() => {
        const fetchDataApiWithoutLabel = async () => {
            const query = 'ativos';
            const queryExport = 'ativos/csv';

            const resAtivos = await api.get(`api/estatisticas/${query}`, {});
            const resExport = await api.get(`api/estatisticas/${queryExport}`, {});

            if (resAtivos.statusText === 'OK') {
                setDataAtivos(resAtivos.data);
                setLabel(getLabel(resAtivos.data));
            } else {
                console.log("Error Data Ativos");
            }

            if (resExport.statusText === 'OK') {
                setDataExport(resExport.data);
            } else {
                console.log("Error Data Export");
            }
        }

        fetchDataApiWithoutLabel();
    }, [])


    return (
        <div className="main-container">
            <Header></Header>
            <div className="main-actives">
                <div className="main-actives-resume">
                    <div className="resume-text">
                        <p>ATIVOS</p>
                        <p>{label[min]} a {label[max]}</p>
                        <p>{redLength + blueLength + greenLength + purpleLength}</p>
                        <p>DISCENTES</p>
                    </div>
                    <div className="resume-box">
                        <div>
                            <p><span>{blueLength}</span><br /> ideal</p>
                        </div>
                        <div>
                            <p><span>{greenLength}</span><br />  esperado</p>
                        </div>
                        <div>
                            <p><span>{purpleLength}</span><br />  acima</p>
                        </div>
                        <div>
                            <p><span>{redLength}</span><br />  abaixo</p>
                        </div>
                    </div>
                </div>

                <div className="actives-input-box">
                    <div>
                        <FiSearch size={25} />
                    </div>
                    <input type="text" placeholder="Buscar por matrícula" onKeyUp={handleSearch}/>
                </div>

                <div className="actives-graph-box">
                    <div onMouseUp={() => fetchDataApiWithLabel(min, max)}>
                        <ActiveSlider changeSlider={handleSlider} labels={label} min={min} max={max}></ActiveSlider>
                    </div>
                    <ActiveGraph data={dataAtivos} handleText={handleText} ></ActiveGraph>
                </div>

                <div className="actives-select-group-box">
                    <p>seleção</p>
                    <div className="table-titles">
                        {/* <input type="checkbox" value={checkall} onChange={setCheckAll(!checkall)} /> */}
                        <input type="checkbox" />
                        <button>limpar seleção</button>
                        <button>criar lista</button>
                    </div>

                    <div>
                        <table>
                            {dataSelectExample.map(e => (
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td><svg height={20} width={20}> <circle cx={10} cy={10} r={5} fill={e.svgColor}></circle></svg></td>
                                    <td className="actives-td-enrollment">{e.matricula}</td>
                                    <td className="actives-td-name">{e.name}</td>
                                    <td className="actives-td-email">{e.email}</td>
                                    <td className="actives-td-credits">{e.credits} créditos</td>
                                    <td className="actives-td-subjects">{e.subjects} disciplinas</td>
                                </tr>
                            ))}
                        </table>
                    </div>

                </div>
            </div>
            <Modal backdrop={true} overflow={true} show={show} onHide={handleCloseModal} size="lg" >
                <Modal.Body>
                    <TableDiscent enrollment={search} dataActives={dataAtivos} ></TableDiscent>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleCloseModal} appearance="primary">
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Actives;