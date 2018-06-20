import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Component1 from './component1';
import Component2 from './component2';
import Component3 from './component3';

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="logo rotate"/>
            <h1>Welcome to React</h1>
            <Component1/>
            <Component2/>
            <Component3/>
        </div>
    </div>
);

export default App;
