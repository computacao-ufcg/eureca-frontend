import React, { useEffect, useState } from 'react';

import { CSVLink } from "react-csv";

import api from '../../../services/api';

import './styles.css'

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
        console.log("type no export: ", type)
        const res = await api.get(`api/estatisticas/${type}/csv`, {});
        if(res.status === 200){
            return res.data;
        }else{
            return res.status;
        }
        
    }

    useEffect(() => {
        carregaDados();
    }, [props.type]);



    return (
        <>
            {load ?
                <div className={'mainExport'}>
                    <CSVLink data={data} filename={fileName}>
                        <div className={'exportButton'}>
                            Export CSV
                    </div>
                    </CSVLink>
                </div> : null}
        </>
    )
}

export default ExportStatistics;