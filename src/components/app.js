import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Greeting from './greeting';

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="logo rotate"/>
            {/* <h1>Welcome to React</h1> */}
            <Greeting name='Dan' age = '26' favColor = 'blue'/>
            <Greeting name="John Smith" favColor = 'red'/>
        </div>
    </div>
);

export default App;
