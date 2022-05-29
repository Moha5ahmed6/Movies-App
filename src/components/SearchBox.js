import React from 'react'

function SearchBox({search, setSearch}) {
  return (
    <div className='movie-head'>
      <h1>Spider-Man Movies</h1>
      <h1 className='h-inpt'><input type='text' className='right' value={search} onChange={e => setSearch(e.target.value)}/>
      </h1>
    </div>
  )
}


export default SearchBox;