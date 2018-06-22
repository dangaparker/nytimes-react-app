import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './home';
import About from './about';
import Articles from './articles';
import WorldCup from './worldcup';
import ChampionsLeague from './championsleague';
import FaCup from './facup';

const App = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/articles'>Articles</Link>
                </li>
            </ul>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/articles' component={Articles} />
            <Route path='/worldcup' component = {WorldCup}/>
            <Route path='/championsleague' component = {ChampionsLeague}/>
            <Route path='/facup' component = {FaCup}/>
        </div>
    </Router>
);

export default App;
