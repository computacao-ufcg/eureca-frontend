import React from 'react'

import './style.css'

import CoursesCardHome from './CoursesCardHome'
import EnrollmentsCardHome from './EnrollmentsCardHome'
import PostItsCardHome from './PostItsCardHome'
import SubjectsCardHome from './SubjectsCardHome'
import StudentsCardHome from './StudentsCardHome'
import WarningsCardHome from './WarningsCardHome'
import AlumniCardHome from './AlumniCardHome'

const CardHome = (props) => {

    return(
        <React.Fragment>
            <StudentsCardHome/>
            <SubjectsCardHome/>
            <EnrollmentsCardHome/>
            <PostItsCardHome/>
            <WarningsCardHome/>
            <CoursesCardHome/>
            <AlumniCardHome/>
        </React.Fragment>
    )
}

export default CardHome;