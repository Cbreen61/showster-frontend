import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getShows } from './actions/shows'
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Shows from "./components/Shows";
import ErrorPage from './components/Error';
import ShowsForm from './components/ShowsForm';
import Show from './components/Show';




class App extends Component {
  componentDidMount() {
    this.props.getShows();
  }

  render() {
    const { shows } = this.props
    if (this.props.loading) {
      return (
        <h3>Loading...</h3>
      )
    }

    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/shows" component={ Shows } />
          <Route exact path="/shows/new" component={ ShowsForm }/>
          <Route exact path='/shows/:id' render={props => {
            const show = shows.find(show => show.id === props.match.params.id)
            console.log(show)
            return <Show show={show} {...props} />
          }}/>
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
