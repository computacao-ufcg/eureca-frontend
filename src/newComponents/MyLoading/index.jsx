import React from 'react';

const MyLoading = (props) => {
    return(
        <h2>{props.msg || "Carregando..."}</h2>
    )
}

export default MyLoading;