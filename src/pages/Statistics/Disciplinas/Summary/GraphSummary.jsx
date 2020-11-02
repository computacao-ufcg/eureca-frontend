import React, {useState, useEffect} from 'react';

import  CanvasJSReact  from './canvas/canvasjs.react';

const GraphSummary = (props) => {
    
    const [data, setData] = useState(props.data);
    
    const options = {
        animationEnabled: true,
        theme: "light1",
        title:{
            text: "Sumário"
        },
        axisY: {
            title: "Taxa de Sucesso"
        },
        data: [{
            type: "boxAndWhisker",
            color: "black",
            upperBoxColor: "#A3A3A3",
            lowerBoxColor: "#0073e5",
            yValueFormatString: "##.0#",
            dataPoints: props.data,
        }]
    }


    return(
        <React.Fragment>      
			<CanvasJSReact.CanvasJSChart options = {options} />
        </React.Fragment>
    );
}

export default GraphSummary;