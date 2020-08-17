import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getMovies, getMovieDetails } from '../actions';

const MovieDetails = props => {
    const {movie_detail} = props;
    const {params} = props.match;
    console.log(params)
    useEffect(() => {
        props.getMovieDetails(params.id)
      }, [])
    return(
        <div className="detail">
            <div className="row" style={{marginTop:"30px"}}>
                <div className="col-sm-6">
                    <img src={movie_detail.Poster}></img>
                </div>
                <div className="col-sm-6" id="text">
                    <h1>{movie_detail.Title}</h1>
                    <h4>Çıkış Tarihi: {movie_detail.Released}</h4>
                    <h4>Yönetmen: {movie_detail.Director}</h4>
                    <h5>Tür: {movie_detail.Genre}</h5>
                    <h6>Konusu: {movie_detail.Plot}</h6>
                </div>
                
            </div>
        </div>
    )

}
const mapStateToPtops = state => {
    return {
      movie_name : state.movie_name,
      movies: state.movies,
      movie_detail: state.movie_detail,
      message: state.message
    }
  }

  export default connect(mapStateToPtops, { getMovies, getMovieDetails })(MovieDetails);