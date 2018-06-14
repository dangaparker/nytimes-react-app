import React from 'react';

function Greeting(props){
     const style = {
        color: props.favColor
    }
    return  <h1 style={style}>Hello, {props.name}. Welcome to our site</h1>
}




export default Greeting;