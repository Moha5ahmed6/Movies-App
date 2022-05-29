import React from 'react'

function Favourites({movies, remove}) {
  return (
    <>
      {movies.map((movie, i) => <div className='list' key={movie.Title}>
          <img src={movie.Poster} alt='movie'/>
          <div className='upley' onClick={() => remove(movie.Title)}>remove</div>
        </div>
      )}
    </>
  )
}

export default Favourites;