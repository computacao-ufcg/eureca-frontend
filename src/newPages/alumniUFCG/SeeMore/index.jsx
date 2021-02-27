import React, { useState, useEffect } from 'react';

import Header from '../../../newComponents/Header';

import { api_AS } from './../../../services/api'
import ListAlumni from '../SeeMore/listAlumni'
import { Pagination } from 'rsuite';
import { FiSearch } from 'react-icons/fi';

import './styles.css';


const SeeMore = () => {

    const [data, setData] = useState([])
    const [page, setPage] = useState(0)
    const [admission, setAdmission] = useState("")
    const [graduation, setGraduation] = useState("")
    const [name, setName] = useState("")

    useEffect(() => {
        handleProfile(page)

    }, [])

    const handleProfile = async (page) => {
        let query = 'match/search/' + page + `?admission=${admission}&graduation=${graduation}&name=${name}`
        const res = await api_AS.get(query, { headers: { 'Authentication-Token': sessionStorage.getItem('eureca-token') } })

            .then(res => {
                console.log(res)
                setData(res.data)

            })
            .catch(err => {
                console.log(err)
            })
    }

    const handlePage = (eventKey) => {
        setPage(eventKey - 1)
        console.log(eventKey)
        handleProfile(eventKey - 1)
    }

    return (

        <React.Fragment>
            <div className={'main-seemore'}>
                <div className={'header-container'}>
                    <Header />
                </div>
                <div className={'main-content'}>
                    <div className={'main-container-seemore'}>

                        <div className={'container-title-seemore'}>
                            <h1>VER MAIS</h1>
                        </div>
                        <div className="seemore-input-boxes">

                            <div className="seemore-input-box">
                                <div>
                                    <FiSearch size={25} />
                                </div>
                                <input type="text" placeholder="Buscar por nome" />
                            </div>
                            <div className="seemore-input-box">
                                <div>
                                    <FiSearch size={25} />
                                </div>
                                <input type="text" placeholder="Buscar por período de admissão" />
                            </div>
                            <div className="seemore-input-box">
                                <div>
                                    <FiSearch size={25} />
                                </div>
                                <input type="text" placeholder="Buscar por período de graduação" />
                            </div>
                        </div>

                        <div className={'list-alumni'}>
                            <ListAlumni listData={data.content ? data.content : []} />
                            <hr></hr>
                            <Pagination
                                pages={data.totalPages ? data.totalPages : 0}
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

                </div>
            </div>
        </React.Fragment>
    );
}

export default SeeMore
