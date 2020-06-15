import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Home from './components/Home';
import ListOfBeers from './components/ListOfBeers';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/beers" component={ListOfBeers}/>
        <Route path="/" component={Home}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
