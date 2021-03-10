import React, { useEffect, useState } from 'react';

import { FiSearch } from 'react-icons/fi';

import { Modal, Button } from 'rsuite';

import Header from '../../../../newComponents/Header';

import ActiveSlider from './ActiveSlider';
import ActiveGraph from './ActiveGraph';

import TableDiscent from './TableDiscent';

import { api_EB } from '../../../../services/api';

import './styles.css';

import { dataSelectExample } from './activeUtil';

const Actives = () => {

    const [checkall, setCheckAll] = useState(false);

    const [dataActives, setDataActives] = useState([]);
    const [activesSummary, setActivesSummary] = useState([]);
    const [dataExport, setDataExport] = useState([]);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [label, setLabel] = useState([]);

    const [loadding, setLoadding] = useState(true);

    // for modal
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState('');

    const handleCloseModal = () => {
        setShow(false);
    }

    const handleSearch = (event) => {
        if (event.keyCode === 13) {
            setSearch(event.target.value);
            setShow(true)
        }
    }

    const handleSlider = (min, max) => {
        setMin(min);
        setMax(max);
    }

    const fetchDataApiWithLabel = async (min, max) => {
        const queryActives = `api/statistics/students/actives?from=${label[min]}&to=${label[max]}`;
        const queryActivesCSV = `api/statistics/students/actives/csv?from=${label[min]}&to=${label[max]}`;

        const token = sessionStorage.getItem('eureca-token');

        const options = {
            headers: {
                'Authentication-Token': token,
            },
        }

        const resActives = await api_EB.get(queryActives, options);
        const resActivesCSV = await api_EB.get(queryActivesCSV, options);

        if (resActives.status === 200) {
            setDataActives(resActives.data.actives);
            setActivesSummary(resActives.data.summary);
        } else {
            console.log("Error Data Ativos");
        }

        if (resActivesCSV.status === 200) {
            setDataExport(resActivesCSV.data);
        } else {
            console.log("Error Data Export");
        }
    }

    useEffect(() => {
        const fetchDataApiWithoutLabel = async () => {
            setLoadding(true);
            const queryActives = 'api/statistics/students/actives?from=1950.0&to=2049.9';
            const queryActivesCSV = 'api/statistics/students/actives/csv?from=1950.0&to=2049.9';

            const token = sessionStorage.getItem('eureca-token');

            const options = {
                headers: {
                    'Authentication-Token': token,
                },
            }

            const resActives = await api_EB.get(queryActives, options);
            const resActivesCSV = await api_EB.get(queryActivesCSV, options);

            if (resActives.status === 200) {
                setDataActives(resActives.data.actives);
                setLabel(resActives.data.sliderLabel);
                setMax(resActives.data.sliderLabel.length - 1);
                setActivesSummary(resActives.data.summary);
            } else {
                console.error("Error Data Ativos");
            }

            if (resActivesCSV.status === 200) {
                setDataExport(resActivesCSV.data);
            } else {
                console.error("Error Data Export");
            }
            setLoadding(false);
        }

        fetchDataApiWithoutLabel();
    }, [])


    return (
        <div className="main-container">
            <Header></Header>
            <div className="main-actives">
                {loadding ? <h1>Carregando...</h1> :
                    <React.Fragment>
                        <div className="main-actives-resume">
                            <div className="resume-text">
                                <p>ATIVOS</p>
                                <p>{label[min]} a {label[max]}</p>
                                <p>{activesSummary.activesCount}</p>
                                <p>DISCENTES</p>
                            </div>
                            <div className="resume-box">
                                <div>
                                    <p><span>{activesSummary.riskClassCount.normal}</span><br />  Normal</p>
                                </div>
                                <div>
                                    <p><span>{activesSummary.riskClassCount.late}</span><br />  Atrasado</p>
                                </div>
                                <div>
                                    <p><span>{activesSummary.riskClassCount.advanced}</span><br /> Avançado</p>
                                </div>
                                <div>
                                    <p><span>{activesSummary.riskClassCount.critical}</span><br />  Crítico</p>
                                </div>
                                <div>
                                    <p><span>{activesSummary.riskClassCount.notApplicable}</span><br />  Não Aplicável</p>
                                </div>
                                <div>
                                    <p><span>{activesSummary.riskClassCount.unfeasible}</span><br />  Inviável</p>
                                </div>
                            </div>
                        </div>

                        <div className="actives-input-box">
                            <div>
                                <FiSearch size={25} />
                            </div>
                            <input type="text" placeholder="Buscar por matrícula" onKeyUp={handleSearch} />
                        </div>

                        <div className="actives-graph-box">
                            <div onMouseUp={() => fetchDataApiWithLabel(min, max)}>
                                <ActiveSlider changeSlider={handleSlider} labels={label} min={min} max={max} />
                            </div>
                            <ActiveGraph data={dataActives} />
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
                                    <tbody>

                                        {dataSelectExample.map( (e, index) => (
                                            <tr key={"tr" + index}>
                                                <td><input type="checkbox" /></td>
                                                <td><svg height={20} width={20}> <circle cx={10} cy={10} r={5} fill={e.svgColor}></circle></svg></td>
                                                <td className="actives-td-enrollment">{e.matricula}</td>
                                                <td className="actives-td-name">{e.name}</td>
                                                <td className="actives-td-email">{e.email}</td>
                                                <td className="actives-td-credits">{e.credits} créditos</td>
                                                <td className="actives-td-subjects">{e.subjects} disciplinas</td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </React.Fragment>
                }
            </div>
            <Modal backdrop={true} overflow={true} show={show} onHide={handleCloseModal} size="lg" >
                <Modal.Body>
                    <TableDiscent enrollment={search} dataActives={dataActives} ></TableDiscent>
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