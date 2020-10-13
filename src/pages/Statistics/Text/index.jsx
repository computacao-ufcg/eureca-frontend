import React from 'react'

const Text = (props) => {

    const data = props.data

    return(
        <div>
            <p>
            Entre <strong>{props.min}</strong> e <strong>{props.max}</strong> foram graduados <strong>{data.total_graduados}</strong> discentes, com uma média de <strong>{data.media_graduados}</strong> graduados por período. 
            O período <strong>{data.periodo_max_graduados}</strong> foi o que mais teve egressos <strong>({data.max_graduados})</strong>, enquanto que o período <strong>{data.periodo_min_graduados}</strong> foi o que teve menos <strong>({data.min_graduados})</strong>. 
            </p>
        </div>
    )
}

export default Text;