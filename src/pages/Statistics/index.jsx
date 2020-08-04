import React, { useState } from 'react'

import Header from '../../components/Header'

import NavBar from '../../components/StatisticsComponents/NavBar'
import SideBar from '../../components/StatisticsComponents/SideBar'

import statisticsEnum from './util'

const Statistics = () => {

    const [option, setOption] = useState(statisticsEnum.Discentes)

    const handleOption = (newOption) => {
        console.log(statisticsEnum[newOption])
        setOption(statisticsEnum[newOption])
    }

    return(
        <React.Fragment>
            <Header></Header>
            <div>
                Estatísticas
                <div>
                    <NavBar changeOption={handleOption} listEnum={statisticsEnum}/>
                    <div>
                        <SideBar listOption={option}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Statistics;