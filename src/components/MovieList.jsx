import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

function MovieList (props){

    const displayMovies = (props) =>{
        const {movies} = props;

        if(movies.length > 0){
            return (
                movies.map( (movie, index) => {
                    console.log(movie);
                    return (
                        <div className='image-container d-flex justify-content-start m-3'>
					        <img src={movie.Poster} alt='movie'></img>
				        </div>
                    )
                })
            )
        }
    }
    
    return (
        <div>
          {displayMovies(props)}
          </div>  
        
      );

   
        
    }

 
export default MovieList;