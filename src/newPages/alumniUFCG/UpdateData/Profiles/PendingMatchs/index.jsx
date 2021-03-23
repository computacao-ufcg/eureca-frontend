import React, { useState, useEffect } from 'react';

import { Pagination, Alert } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import ListAlumnus from './ListAlumnus';
import ListPicker from './ListPicker';
import Informer from '../../Informer';
import { optionsSelect } from './util';
import { useClearCache } from 'react-clear-cache';

import { api_AS } from '../../../../../services/api';

import './styles.css';

const PendingMatchs = (props) => {
    const { isLatestVersion, emptyCacheStorage } = useClearCache();

    const warningMsg = "Por favor, selecione alguém para associar.";
    const successMsg = "Associação realizada com sucesso!";
    const timeMSG = 5000;

    const [loading, setLoading] = useState(true);

    const [dataMaster, setDataMaster] = useState([]);
    const [dataContent, setDataContent] = useState([]);
    const [page, setPage] = useState(0);

    const [possibleMatches, setPossibleMatches] = useState([]);
    const [selectedRegistration, setSelectedRegistration] = useState('');
    const [selectedProfile, setSelectedProfile] = useState(null);

    const [filter, setFilter] = useState("very-likely");


    useEffect(() => {
        handleProfile(page, filter, true);
    }, []);

    const handleProfile = async (page, filter, flag) => {
        if(flag){
            setLoading(true);
        }

        let query = 'match/pending/' + page;
        const res = await api_AS.get(query, { headers: { 'Authentication-Token': sessionStorage.getItem('eureca-token') } });

        if (res.status === 200) {
            setDataMaster(res.data);
            setDataContent(res.data.content);
            if(!flag){
                console.log(res.data.content)
               var matches = res.data.content.filter(function(match){
                   return match.alumnus.registration === selectedRegistration;
               })
               setPossibleMatches(matches[0] ? matches[0].possibleMatches : [])
            }
            setLoading(false);
        } else {
            console.error("Response error");
        }
    }

    const handlePage = (eventKey) => {
        setPage(eventKey - 1);
        handleProfile(eventKey - 1, filter, true);
    }

    const handleAlumnus = (value) => {
        console.log(value)
        setSelectedRegistration(value.alumnus.registration);
        setPossibleMatches(value.possibleMatches);
    }

    const handleSelectProfile = (person) => {
        if (person) {
            const match = {
                'registration': selectedRegistration,
                'linkedinId': person.profile.linkedinId
            }

            setSelectedProfile(match);
        } else {
            setSelectedProfile(null);
        }
    }

    const handleMatch = async () => {

        if (!selectedProfile) {
            Alert.warning(warningMsg, timeMSG);
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
                Alert.success(successMsg, timeMSG);
            }
        } catch (err) {
            console.error(err.response)
        }
    }

    return (
        <div>
            {loading ? <h1>Carregando...</h1> :
                <React.Fragment>
                    <div className="main-matches">
                        <div>
                            <ListAlumnus handleAlumnus={handleAlumnus} listData={dataContent} />
                            <hr></hr>
                        </div>
                        {
                            !selectedRegistration ? <Informer msg={"Por favor, selecione alguém para realizar possíveis associações."} /> :
                                <div className="possible-match">
                                    <div className="possible-match-div">
                                        <h6>Fazer Associação:</h6>
                                        <select onChange={(event) => {
                                            setFilter(event.target.value)
                                        }} className="possible-match-select" >
                                            {optionsSelect.map(e => <option value={e.value}>{e.label}</option>)}
                                        </select>
                                    </div>
                                    <ListPicker data={possibleMatches} onPickerOption={handleSelectProfile} filter={filter}/>
                                    <button onClick={handleMatch}>Associar</button>
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

export default PendingMatchs;