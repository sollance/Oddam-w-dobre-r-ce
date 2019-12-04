import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';
import '../css/App.css';
import Home from './home.js'

function App() {
  return (
    <>
          <HashRouter>
               <Route exact path='/' component={Home} />
          </HashRouter>
    </>
  );
}

export default App;
