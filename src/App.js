import React, { Component } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/shared/home/Home';
import About from './components/shared/About';
import Projects from './components/shared/Projects';
import NoMatch from './components/shared/NoMatch';
import NavBar from './components/shared/nav/NavBar';
import GlobalStyle from './styles/Global';

import './App.css';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    debugger
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
   
  return (
    <>
    <NavBar 
      navbarState={this.state.navbarOpen} 
      handleNavbar={this.handleNavbar}
    />
    <GlobalStyle />
     <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/about" component={About} />
       <Route path="/projects" component={Projects} />
       <Route component={NoMatch} />
     </Switch>
    </>
  )
}
}

export default App;
