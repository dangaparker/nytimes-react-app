import React from 'react';
import WorldCup from './worldcup';
import ChampionsLeague from './championsleague';
import FaCup from './facup';
import {Route, Link} from 'react-router-dom';

export default ()=>{
    return(
    <div>
        <h1>Articles Page</h1>
        <ul>
            <li>
                <Link to='/worldcup'>World Cup</Link>
            </li>
            <li>
                <Link to='/championsleague'>Champions League</Link>
            </li>
            <li>
                <Link to= '/facup'>FA Cup</Link>
            </li>
        </ul>
        
    </div>
    )
}