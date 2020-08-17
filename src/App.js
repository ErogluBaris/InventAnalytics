import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getMovies, getMovieDetails } from './actions';
import {Route} from 'react-router';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';

const App = props => { 
  return (
    <div className="App">
        <Route exact path="/" component={Movies}/>
        <Route path="/details/:id" component={MovieDetails}/>
    </div>
  );
}

const mapStateToPtops = state => {
  return {
    movie_name : state.movie_name,
    movies: state.movies,
    movie_detail: state.movie_detail,
    message: state.message
  }
}

export default connect(mapStateToPtops, { getMovies, getMovieDetails })(App);
