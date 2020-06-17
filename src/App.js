import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Home from './components/Home';
import ListOfBeers from './components/ListOfBeers';
import SingleBeer from './components/SingleBeer'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={ListOfBeers}/>
        <Route path="/beers/:id" component={SingleBeer}/>
        <Route path="/beers/random" component={RandomBeer}/>
        <Route path="/beers/new-beer" component={NewBeer}/>
      </Switch>
    </div>
  );
}

export default App;
