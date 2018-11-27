import React from 'react';
import '../assets/css/app.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TopStories from './top_story_page';
import HomePage from './home_page';

const App = () => (
    <div>
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/topstories/:term" component={TopStories} />
            </Switch>
        </Router>
    </div>
);

export default App;
