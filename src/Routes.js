import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainComponent from "./components/GamePage/MainComp";
import GamesComponent from "./components/GamesComp";
import HomeComponent from "./components/Home";
import URLparamsComponent from './components/URLparamsComp';

export default function Routes() {
    return (
        <Switch>
            <Route path="/games" exact={true}>
                <GamesComponent />
            </Route>
            <Route path="/games-with-child" exact={true}>
                <MainComponent />
            </Route>
            <Route path="/games/:game_id" exact={true}>
                <URLparamsComponent />
            </Route>
            <Route path="/">
                <HomeComponent />
            </Route>
        </Switch>
    )
}