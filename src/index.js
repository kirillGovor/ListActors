import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Actors from "./components/actors/Actors";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header/Header';

ReactDOM.render(
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/actors" component={Actors} />
        </Switch>
    </Router>
    , document.getElementById('root'));

serviceWorker.unregister();