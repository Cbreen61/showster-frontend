import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';
import ErrorPage from './components/Error'
import About from './components/About';



class App extends Component {
  render(){
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>

    );
  }
}

export default App;
