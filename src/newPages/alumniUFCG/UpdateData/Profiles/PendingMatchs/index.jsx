import React, { useState, useEffect } from 'react'
import { Pagination } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import ListAlumnus from './ListAlumnus';
import ListPicker from './ListPicker';

import { api_AS } from '../../../../../services/api';

import './styles.css';

const PendingMatchs = (props) => {

    const alertMsg = "Por favor, selecione alguém para associar.";
    const successMsg = "Associação realizada com sucesso!";

    const [loading, setLoading] = useState(true);

    const [dataMaster, setDataMaster] = useState([]);
    const [dataContent, setDataContent] = useState([]);
    const [page, setPage] = useState(0)

    const [possibleMatches, setPossibleMatches] = useState([])
    const [selectedRegistration, setSelectedRegistration] = useState('')
    const [selectedProfile, setSelectedProfile] = useState(null)


    useEffect(() => {
        handleProfile(page)
    }, [])

    const handleProfile = async (page) => {
        setLoading(true);
        let query = 'match/pending/' + page
        const res = await api_AS.get(query, { headers: { 'Authentication-Token': sessionStorage.getItem('eureca-token') } })

        if (res.status === 200) {
            setDataMaster(res.data);
            setDataContent(res.data.content);
        } else {
            console.error("Response error");
        }
        setLoading(false);
    }

    const handlePage = (eventKey) => {
        setPage(eventKey - 1)
        handleProfile(eventKey - 1)
    }

    const handleAlumnus = (value) => {
        setSelectedRegistration(value.alumnus.registration)
        setPossibleMatches(value.possibleMatches)
    }


    const handleSelectProfile = (person) => {
        if(person){
            const match = {
                'registration': selectedRegistration,
                'linkedinId': person.profile.linkedinId
            }
    
            setSelectedProfile(match)
        }else{
            setSelectedProfile(null);
        }
    }

    const handleMatch = async () => {

        if(!selectedProfile){
            alert(alertMsg);
            return;
        }

        const query = '/match';

        const myBody = {
            'linkedinId': selectedProfile.linkedinId,
            'registration': selectedProfile.registration
        };

        const myHeaders = {
            headers: {
                'Authentication-Token': sessionStorage.getItem('eureca-token'),
                'Content-Type': 'application/json; charset=UTF-8'
            }
        };

        try {
            const res = await api_AS.post(query, myBody, myHeaders);

            if (res.status === 200) {
                alert(successMsg);
            }
        } catch (err) {
            console.error(err.response)
        }
    }

    return (
        <div>
            {loading ? <h1>Carregando...</h1> :
                <React.Fragment>
                    <div className="mainMatches">
                        <div>
                            <ListAlumnus handleAlumnus={handleAlumnus} listData={dataContent} />
                            <hr></hr>
                        </div>
                        <div className="possibleMatch">
                            <h6>Fazer Associação:</h6>
                            <ListPicker data={possibleMatches} onPickerOption={handleSelectProfile}/>
                            <button onClick={handleMatch}>Associar</button>
                        </div>
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

export default PendingMatchs;