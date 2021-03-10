import React, { useState, useEffect } from 'react'
import { Pagination, SelectPicker, Input } from 'rsuite'
import 'rsuite/dist/styles/rsuite-default.css';

import ListAlumnus from './ListAlumnus'

import { api_AS } from '../../../../../services/api';

import './styles.css';

const PendingMatchs = (props) => {

    const successMsg = "Associação realizada com sucesso!";

    const [dataAux, setDataAux] = useState([])
    const [page, setPage] = useState(0)
    const [dataSelect, setDataSelect] = useState([])

    const [possibleMatches, setPossibleMatches] = useState([])
    const [selectedRegistration, setSelectedRegistration] = useState('')
    const [selectedProfile, setSelectedProfile] = useState('')


    useEffect(() => {
        handleProfile(page)
    }, [])

    const handleProfile = async (page) => {
        let query = 'match/pending/' + page
        const res =  await api_AS.get(query, { headers: { 'Authentication-Token': sessionStorage.getItem('eureca-token') } })

        if (res.status === 200) {
            setDataAux(res.data);
        } else {
            console.error("Response error");
        }
    }

    const handlePage = (eventKey) => {
        setPage(eventKey - 1)
        handleProfile(eventKey - 1)
    }

    const handleAlumnus = (value) => {
        setSelectedRegistration(value.alumnus.registration)
        setPossibleMatches(value.possibleMatches)
        handleSelect(value.possibleMatches)
    }

    const handleSelect = (data) => {
        let listAux = []
        data.forEach((e, index) => {
            let item = {
                'label': e.profile.fullName,
                'value': index,
                'role': 'default'
            }
            listAux.push(item)
        })
        setDataSelect(listAux)
    }

    const handleSelectProfile = (index) => {
        const match = {
            'registration': selectedRegistration,
            'linkedinId': possibleMatches[index].profile.linkedinId
        }

        setSelectedProfile(match)
    }

    const handleMatch = async () => {
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

            if(res.status === 200){
                alert(successMsg);
            }
        } catch (err) {
            console.error(err.response)
        }
    }

    return (
        <div>
            <div className="mainMatches">
                <div>
                    <ListAlumnus handleAlumnus={handleAlumnus} listData={dataAux.content ? dataAux.content : []} />
                    <hr></hr>
                </div>
                <div className="possibleMatch">
                    <h6 >Fazer Associação:</h6>
                    <hr></hr>
                    <SelectPicker data={dataSelect} style={{ width: 500 }} onSelect={i => handleSelectProfile(i)} />
                    <hr></hr>
                    <button onClick={handleMatch}>Associar</button>
                </div>
            </div>
            <div className="pagination">
                <Pagination
                    pages={dataAux.totalPages ? dataAux.totalPages : 0}
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
        </div>
    )
}

export default PendingMatchs;