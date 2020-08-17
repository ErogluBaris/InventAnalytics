import {  GET_MOVIES_SUCCESS, GET_MOVIES_ERROR, GET_MOVIE_DETAILS_SUCCESS } from "../actions";

const INITIAL_STATE = {
    movie_name: "pokemon",
    movies: [],
    movie_detail: {},
    message: ""
};

export const reducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case GET_MOVIES_SUCCESS:
            return { ...state, movie_name: action.payload.movie_name, movies: action.payload.data}
        case GET_MOVIES_ERROR:
            return { ...state, message: action.payload}
        case GET_MOVIE_DETAILS_SUCCESS:
            return { ...state, movie_detail: action.payload}
        default:
            return state;
    }
}