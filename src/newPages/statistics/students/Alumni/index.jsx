import React, { useEffect, useState } from 'react';

import Header from '../../../../components/General/Header';
import NavBar from '../../../../components/StatisticsComponents/NavBar/index.jsx';
import SideBar from '../../../../components/StatisticsComponents/SideBar';

import { navOptions, studentsOptions, nameStudents } from '../../../../pages/Statistics/statisticsUtil';

import Title from '../../../../components/General/Title/';

import AlumniGraph from './AlumniGraph';
import AlumniSlider from './AlumniSlider';

import '../../../../pages/Statistics/styles.css';

import { api_EB } from '../../../../services/api';

const Alumni = () => {
    const [loadding, setLoadding] = useState(true);

    const [dataAlumni, setDataAlumni] = useState([]);
    const [dataExport, setDataExport] = useState([]);
    const [label, setLabel] = useState([]);
    const [alumniSummary, setAlumniSummary] = useState([]);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);


    const handleSlider = (min, max) => {
        setMin(min);
        setMax(max);
    }

    const fetchDataApiWithLabel = async (min, max) => {

        setLoadding(true);
        const queryAlumni = `api/statistics/students/alumni?from=${min}&to=${max}`;
        const queryAlumniCSV = `api/statistics/students/alumni/csv?from=${min}&to=${max}`;

        const token = sessionStorage.getItem('eureca-token');

        const options = {
            headers: {
                'Authentication-Token': token,
            },
        }

        const resAlumni = await api_EB.get(queryAlumni, options);
        const resAlumniCSV = await api_EB.get(queryAlumniCSV, options);

        if (resAlumni.status === 200) {
            setDataAlumni(resAlumni.data.terms);
            setAlumniSummary(resAlumni.data.summary);
        } else {
            console.error("Error Data Egressos");
        }

        if (resAlumniCSV.status === 200) {
            setDataExport(resAlumniCSV.data);
        } else {
            console.error("Error Data Export");
        }
        setLoadding(false);
    }

    useEffect(() => {
        const fetchDataApiWithoutLabel = async () => {
            setLoadding(true);
            const queryAlumni = 'api/statistics/students/alumni?from=1950.0&to=2049.9';
            const queryAlumniCSV = 'api/statistics/students/alumni/csv?from=1950.0&to=2049.9';

            const token = sessionStorage.getItem('eureca-token');

            const options = {
                headers: {
                    'Authentication-Token': token,
                },
            }

            const resAlumni = await api_EB.get(queryAlumni, options);
            const resAlumniCSV = await api_EB.get(queryAlumniCSV, options);

            if (resAlumni.status === 200) {
                setDataAlumni(resAlumni.data.terms);
                setLabel(resAlumni.data.sliderLabel);
                setMax(resAlumni.data.sliderLabel.length - 1);
                setAlumniSummary(resAlumni.data.summary);
            } else {
                console.error("Error Data Egressos");
            }

            if (resAlumniCSV.status === 200) {
                setDataExport(resAlumniCSV.data);
            } else {
                console.error("Error Data Export");
            }
            setLoadding(false);
        }

        fetchDataApiWithoutLabel();
    }, []);

    return (
        <React.Fragment>
            <Header />
            <div className="main-statistics">
                <Title name={"Estatísticas"} />
                <div className="content-statistics">
                    <NavBar selectedOption={"Students"} listEnum={navOptions} />
                    <div className="model-statistics">
                        <div className="list-statistics">
                            <SideBar selectedOption={"Egressos"} navSelected={"students"} listOption={studentsOptions} names={nameStudents} />
                            <div className="comp-statistics">
                                <div onMouseUp={() => fetchDataApiWithLabel(min, max)}>
                                    <AlumniSlider changeSlider={handleSlider} label={label} min={min} max={max} />
                                </div>
                                <AlumniGraph data={dataAlumni} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Alumni;