import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import SignIn from './sing_in';

const formTitle = "Welcome Back!"
const App = () => (
    <div>
        <div className="app">
            <SignIn title={formTitle}/>
            <SignIn title='Another Form'/>
        </div>
    </div>
);

export default App;
