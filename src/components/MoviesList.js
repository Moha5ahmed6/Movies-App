import React from 'react'

function MoviesList({movies, addTo}) {
  return (
    <>
      {movies.map((movie, i) => <div className='list' key={movie.Title}>
          <img src={movie.Poster} alt='movie'/>
          <div className='overlay' onClick={() => addTo(movie)}>add to favourites</div>
        </div>
      )}
    </>
  )
}

export default MoviesList;