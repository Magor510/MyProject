import React from "react";
import './Temp.css';

const Temp = props => {
    return <div className="Temp">
        <span className="max">{props.maxTemp}</span>
        <span className="min">{props.minTemp}</span>
    </div>
}

export default Temp;