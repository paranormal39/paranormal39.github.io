import React, { Component } from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home.jsx'; 
import About from './pages/About.jsx'; 
import Contact from './pages/Contact'; 

class App extends Component {
  render() {
    return (
   <Router>
     <div>
     <Route exact path="/" component={Home}/>
     <Route path="/About" component={About}/>
     <Route path="/Contact" component={Contact}/>
     </div>
   </Router>
    );
  }
}

export default App;
