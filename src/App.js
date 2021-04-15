import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getShows } from './actions/shows'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Shows from "./components/Shows";
import ErrorPage from './components/Error';
import ShowsForm from './components/ShowsForm';
import Show from './components/Show'
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends Component {
  componentDidMount() {
    this.props.getShows();
  }

  render() {
    if (this.props.loading) {
      return (
        <h3>Loading...</h3>
      )
    }

    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/shows/new" component={ ShowsForm }/>
          <Route exact path="/shows" render={(routerProps) => <Shows {...routerProps} shows={this.props.shows}/>}/>
          <Route exact path='/shows/:id' render={(routerProps) => <Show {...routerProps} shows={this.props.shows}/>}/>
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>

    );
  }
}

const mapStateToProps = state => {
  return ({
    loading: state.loading,
    shows: state.shows
  })
}

export default connect(mapStateToProps, { getShows })(App);
