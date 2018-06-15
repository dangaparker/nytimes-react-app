import React from 'react';


function Time (props){
    return <span>{props.time.toLocaleTimeString()}</span>
}

export default Time;