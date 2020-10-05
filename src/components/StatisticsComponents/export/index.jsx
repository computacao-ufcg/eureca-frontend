import React, { useEffect, useState } from 'react';

import { CSVLink } from "react-csv";

import api from '../../../services/api';

import './style.css'

const ExportStatistics = (props) => {
    const [data, setData] = useState([]);
    const [fileName, setFileName] = useState('');

    const [load, setLoad] = useState(false);

    const carregaDados = async () => {
        setLoad(false);

        const typeAtual = props.type;

        const dataNow = await getData(typeAtual);
        setData(dataNow);

        setFileName(`${typeAtual}.csv`);

        setLoad(true);
    }

    const getData = async (type) => {
        if(type === 'ativos'){
            const res = await api.get('api/estatisticas/ativos/csv', {});

            return res.data;
        }else{
            let dataExport = props.data.periodos ? props.data.periodos : props.data
            return dataExport;
        }
    }

    useEffect(()=>{
        carregaDados();
    },[props.type]);

    

    return (
        <>
            {load ? 
            <div className={'mainExport'}>
                <CSVLink data={data} filename={fileName}>
                    <div className={'exportButton'}>
                        Export CSV
                    </div>
                </CSVLink>
            </div> : null }
        </>
    )
}

export default ExportStatistics;