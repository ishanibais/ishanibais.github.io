import React, {  useState, useEffect
} from 'react';
import axios from 'axios';
import './App.css';
import MovieList from './components/MovieList';
import Search from './components/Search';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [movies, getMovies] = useState([]);
  const [value, setValue] = useState('');
 
  
  useEffect(() => {
    console.log(value);
    getAllMovies(value);
  }, [value]); 

  const getAllMovies = (value) => {
    const url = `http://www.omdbapi.com/?s=${value}&apikey=8b647d77`;
    axios.get(url)
    .then ((res) => {
      const allMovies = res.data;
      getMovies(allMovies);
      console.log(res.data);
    });
    
  }
  


  return (
    <React.Fragment>
      <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<Search value={value} setValue={setValue} />
			</div>
        <div className='row '>
          <MovieList movies={movies} />
        </div>
		  </div>
      
    </React.Fragment>
  );
}

export default App;
