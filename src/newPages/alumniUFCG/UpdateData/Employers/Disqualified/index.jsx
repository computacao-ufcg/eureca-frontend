import React, { useEffect, useState } from 'react'
import { Pagination, Alert } from 'rsuite';

import ListDisqualified from './ListDisqualified';
import ListOptions from './ListOptions';
import Informer from '../../Informer';

import { api_AS } from '../../../../../services/api';

import './styles.css';

const Disqualified = (props) => {
    const msgAlertError = "Dados faltando";
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [dataMaster, setDataMaster] = useState({});
    const [selectCompany, setSelectCompany] = useState('');
    const [type, setType] = useState('');
    const [linkedinID, setLinkedinID] = useState('');
    const [dataCompanyType, setDataCompanyType] = useState('');

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        handleDisqualified(page);
    }, [])

    const handleDisqualified = async (page) => {
        setLoading(true);
        const query = `employer/unclassified/${page}`;
        const queryCompanyType = `employer/types`;
        const myHeaders = {
            headers: { 'Authentication-Token': sessionStorage.getItem('eureca-token') }
        };

        try {
            const res = await api_AS.get(query, myHeaders);
            const resCompanyTypes = await api_AS.get(queryCompanyType, myHeaders);

            if (res.status === 200 && resCompanyTypes.status === 200) {
                setData(res.data.content);
                setDataMaster(res.data);
                setDataCompanyType(resCompanyTypes.data);
                setLoading(false);
            } else {
                console.error("Error: response error");
            }
        } catch (e) {
            console.error("Error: ", e);
        }
    }

    const handlePage = (eventKey) => {
        setPage(eventKey - 1);
        handleDisqualified(eventKey - 1);
    }

    const handleInput = (input, link) => {
        setSelectCompany(input);
        setLinkedinID(link);
    }

    const handleSelect = (value) => {
        setType(value);
    }

    const handleSubmit = async () => {

        if (selectCompany === '' || type === '') {
            Alert.warning(msgAlertError);
            return;
        }

        const query = `employer`;
        const myHeaders = {
            headers: {
                'Authentication-Token': sessionStorage.getItem('eureca-token'),
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }
        const myBody = {
            'linkedinId': linkedinID,
            'type': type,
        }

        try {
            const res = await api_AS.put(query, myBody, myHeaders);
            if (res.status === 200) {
                setData(data.filter(e => e.linkedinId !== linkedinID));
                props.handleData(myBody);
                Alert.success("Empresa classificada.");
            } else {
                console.error("Error: response error");
            }
        } catch (e) {
            console.error("Error: ", e);
        }
    }

    return (
        <div>
            { loading ? <h1>Carregando...</h1> :
                <React.Fragment>
                    <div className="main-disqualified">
                        <div>
                            <ListDisqualified handleInput={handleInput} listData={data ? data : []} />
                            <hr />
                        </div>
                        {
                            !selectCompany ? <Informer msg={"Por favor, selecione uma empresa."} /> :

                                <div className="select-company">
                                    <h6>Selecione um tipo para a Empresa:</h6>
                                    <ListOptions data={dataCompanyType} onPickerOption={handleSelect} />
                                    <button onClick={handleSubmit}>Associar</button>
                                </div>
                        }
                    </div>
                    <div className="pagination">
                        <Pagination
                            pages={dataMaster.totalPages ? dataMaster.totalPages : 0}
                            maxButtons={5}
                            onSelect={handlePage}
                            activePage={page + 1}
                            prev
                            next
                            first
                            last
                            ellipsis
                            boundaryLinks
                        />
                    </div>
                </React.Fragment>
            }
        </div>
    )
}
export default Disqualified;