import React from 'react'

const Text = (props) => {

    const data = props.data

    return(
        <div>
            <p>
            Entre <strong>{props.min}</strong> e <strong>{props.max}</strong> foram graduados <strong>{data.graduados}</strong> discentes, com uma média de <strong>{data.avg_graduados}</strong> graduados por período. 
            O período <strong>{data.max_periodo}</strong> foi o que mais teve egressos <strong>({data.max_egressos})</strong>, enquanto que o período <strong>{data.min_periodo}</strong> foi o que teve menos <strong>({data.min_egressos})</strong>. 
            O CRA médio dos egressos foi de <strong>{data.avg_cra}</strong>, com mínimo de <strong>{data.min_cra}</strong>, máximo de <strong>{data.max_cra}</strong> e mediana de <strong>{data.mediana_cra}</strong>.
            </p>
        </div>
    )
}

export default Text;