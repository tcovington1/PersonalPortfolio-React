import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Projects from './components/shared/Projects';
import NoMatch from './components/shared/NoMatch';
import NavBar from './components/shared/nav/NavBar';

import './App.css';

function App() {
  return (
    <>
    <NavBar />
     <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/about" component={About} />
       <Route path="/projects" component={Projects} />
       <Route component={NoMatch} />
     </Switch>

    </>
  );
}

export default App;
