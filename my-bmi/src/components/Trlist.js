
import React from 'react'

function Trlist({ data ,bmi,index}) {
    var [ min ,max ] = data.range.split("-").map(Number);
    max= (max == 0 )? bmi+1:max; 

    return (
        <tr  className={((bmi <= max) && (bmi > min)) ? "table-warning" : ''}  key={data.id} >
            <td>{index}</td>
            <td>{data.label}</td>
            <td>{data.range}</td>
            <td>{data.low}   -  {data.high}</td>
        </tr>
    );
}

export default Trlist