import React, { useEffect, useState } from 'react'

import './style.css'

import { api_AS } from '../../../services/api'

import CoursesCardHome from './CoursesCardHome'
import EnrollmentsCardHome from './EnrollmentsCardHome'
import PostItsCardHome from './PostItsCardHome'
import SubjectsCardHome from './SubjectsCardHome'
import StudentsCardHome from './StudentsCardHome'
import WarningsCardHome from './WarningsCardHome'
import AlumniCardHome from './AlumniCardHome'
import TeachersCardHome from './TeachersCardHome'

const CardHome = (props) => {

    const [alumniData, setAlumniData] = useState({})

    useEffect(() => {
        fetch();
    }, [])

    const fetch = async () => {
        let query = "statistics?courseName=computing-science&level=undergraduate"
        const res = await api_AS.get(query, { headers: { 'Authentication-Token': sessionStorage.getItem('eureca-token') } })
        if (res.status === 200) {
            console.log(res)
            setAlumniData(res.data);

        } else {
            console.error("Response error");
        }
    }

    return (
        <React.Fragment>
            <StudentsCardHome/>
            <AlumniCardHome data={alumniData}/>
            <EnrollmentsCardHome/>

            <SubjectsCardHome/>
            <TeachersCardHome/>
        </React.Fragment>
    )
}

export default CardHome;