import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TopStories from './top_story_page';

import HomePage from './home_page';
// import ResultsPage from './results_page';

const App = () => (
    <div>
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/topstories" component={TopStories} />
                {/* <Route path="/results" component={ResultsPage} /> */}
            </Switch>
        </Router>
    </div>
);

export default App;
