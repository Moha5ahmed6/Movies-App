import React from 'react';
import { useState, useEffect } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import SearchBox from './components/SearchBox';
import Favourites from './components/Favourites';


function App() {

  const getMovies = async () => {
    const url = 'http://www.omdbapi.com/?s=Spider-Man&apikey=9db75735';
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.Search);
  }


  const [search, setSearch] = useState('');

  const [movies, setMovies] = useState([]);

  const [favourites, setFavourites] = useState([]);

  
  useEffect(() => {
    getMovies();
  }, []);


  useEffect(() => {
    const data = window.localStorage.getItem('favourites');
    if(data) setFavourites(JSON.parse(data));
  }, []);
  
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);
  

  
  const searchMovies = movies.filter(movie => movie.Title.toLowerCase().includes(search.toLowerCase()));
  
  const addTo = (mov) => {
    if(!favourites.includes(mov)) setFavourites(favourites => [...favourites, mov]);
  }

  const remove = (title) => {
    (favourites.length > 1) ? setFavourites(favourites.filter((item) => item.Title !== title)) : setFavourites([]);
  }

  return (
    <div className='app'>
      <div>
        <SearchBox search={search} setSearch={setSearch}/>
      </div>
      <div className='movie-app'>
        <MoviesList movies={searchMovies} addTo={addTo}/>
      </div>

      <div className='movie-app'>
        <Favourites movies={favourites} remove={remove}/>
      </div>
    </div>
  )
}

export default App;
