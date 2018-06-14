import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

const user = {
    firstName: "John",
    lastName: "Smith"
}

function fullName({firstName, lastName}){
    return `${firstName} ${lastName}`;
}

const greeting = <h1>Hello {fullName(user)}!</h1>;


ReactDOM.render(
    greeting,
    document.getElementById('root')
);
