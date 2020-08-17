import axios from 'axios';

export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_ERROR = "GET_MOVIES_ERROR";
export const GET_MOVIE_DETAILS_SUCCESS = "GET_MOVIE_DETAILS_SUCCESS";

export const getMovies = (text) => dispatch => {
    axios
    .get("http://omdbapi.com/?apikey=e754035f&s="+text+"&plot=full")
    .then(response => dispatch({type: GET_MOVIES_SUCCESS, payload: {movie_name: text, data: response.data.Search}}))
    .catch(error => dispatch({type: GET_MOVIES_ERROR, payload: error}))
}


export const getMovieDetails = (id) => dispatch => {
    axios
    .get("http://omdbapi.com/?apikey=e754035f&i="+id+"&plot=full")
    .then(response => dispatch({type: GET_MOVIE_DETAILS_SUCCESS, payload: response.data}))
    .catch(error => dispatch({type: GET_MOVIES_ERROR, payload: error}))
}