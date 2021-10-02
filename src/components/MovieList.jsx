import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

function MovieList (props){

    const displayMovies = (props) =>{
        const {movies} = props;
        if (movies.length > 0){
            return (
                movies.map( (movie, index) => {
                    console.log(movie);
                    return (
                        <div className="col-sm-6">
                        <div className="card " style={{width: 18 + 'em'}}>
                            <img className="card-img-top" src={movie.Poster} alt='movie'></img>
                            <div className="card-body">
                                <div className="card-text">
                                    <h5 className="card-title text-primary"> {movie.Title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Year of release - {movie.Year}</h6>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                    })
            )
       }else {
        return (<h4>Search for movies</h4>)
    }    
        
    }
    
    return (
        <div>
          {displayMovies(props)}
          </div>  
        
      );

   
        
    }

 
export default MovieList;