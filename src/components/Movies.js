import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { getMovies, getMovieDetails } from '../actions';
import Pagination from './Pagination';


const Movies = props => {
    const [text, setText] = useState(props.movie_name);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviePerPage] = useState(5);

    useEffect(() => {
    props.getMovies(text)
    }, [])
    console.log(props.movie_name);

    const indexOfLastMovie = currentPage * moviePerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviePerPage;
    const currentMovies = (props.movies === undefined) ? window.alert("Aramanızda bir sorun oluştu sayfayı yükleyip tekrar deneyeniz")
     : props.movies.sort((a,b)=> (a.Year > b.Year) ? 1:-1).slice(indexOfFirstMovie, indexOfLastMovie);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return(
        <div>
            <div className="input-group mb-3" style={{width:"30%", marginLeft:"auto", marginRight: "auto", marginTop:"20px"}}>
                <input className="form-control" placeholder="Film Ara"  value={text} onChange={e => setText(e.target.value)}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-primary" type="button" onClick={(currentMovies) => props.getMovies(text)}>Ara</button>
                </div>
            </div>
            
            <table className="table table-striped" style={{marginTop:"20px"}}>
            <thead>
            <tr>
                <th scope="col">IMDB ID</th>
                <th scope="col">Filmin Adı</th>
                <th scope="col">Yayınlanma Tarihi</th>
            </tr>
            </thead>
            <tbody>
            {
            Object.entries(currentMovies).map(movie => {
                return(
                    <tr onClick={() => {window.location = "/details/"+movie[1].imdbID }} id="movie_rows">
                        <th scope="row" id="id">{movie[1].imdbID}</th>
                        <td>{movie[1].Title}</td>
                        <td>{movie[1].Year}</td>
                    </tr>
                );
            })
            }
            </tbody>
            </table>
            
            <div className="row">
                <Pagination moviePerPage={moviePerPage} totalMovies={props.movies.length} paginate={paginate}/>
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

  export default connect(mapStateToPtops, { getMovies, getMovieDetails })(Movies);