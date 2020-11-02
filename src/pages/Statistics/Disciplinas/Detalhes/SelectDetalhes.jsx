import React from 'react';

import { SelectPicker } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import {metricas, disciplinas} from './utilDetalhes'

const SelectDetalhes = () => {

    return(
        <React.Fragment>
            <SelectPicker placeholder={"Disciplinas"} data={disciplinas} groupBy="role" defaultValue={'lp2'} block />
            <hr/>
            <SelectPicker placeholder={"Métricas"} data={metricas} defaultValue={'taxaSucesso'} block />
            <hr/>
        </React.Fragment>
    )
}

export default SelectDetalhes;