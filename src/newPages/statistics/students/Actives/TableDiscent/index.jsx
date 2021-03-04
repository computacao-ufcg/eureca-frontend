import React, { useEffect, useState } from 'react';

import { msgModal } from '../activeUtil';

import './styles.css';

const TableActives = ({ enrollment, dataActives }) => {

    const [discent, setDiscent] = useState(msgModal);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        
        console.log(enrollment);
        console.log(dataActives);
        dataActives.forEach( e => {
            if(e.registration === enrollment){
                setDiscent(e);
            }
        });

        setLoading(false);
    },[]);

    return (
        loading ? 
            <div>carregando</div> 
            :
            (discent === msgModal ? discent 
            : 
            <div className="table-discent">
                <table>
                    <thead>
                        <tr>
                            <th>nome</th>
                            <th>matrícula</th>
                            <th>período de ingresso</th>
                            <th>períodos integralizados</th>
                            <th>porcentagem concluída</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="capitalize">joão</td>
                            <td>{discent.registration}</td>
                            <td>{discent.admissionTerm}</td>
                            <td>{discent.completedTerms}</td>
                            <td>{(discent.progress * 100).toFixed(2)}%</td>
                        </tr>
                    </tbody>
                </table>   
            </div>)
    );
}

export default TableActives;
