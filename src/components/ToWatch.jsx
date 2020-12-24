import React from 'react';

const ToWatch = ({movie, handleWatched, watched}) => {
  let button;
  if (watched) {
    button = <button className='status' onClick={() => handleWatched(movie)}>To watch</button>
  } else {
    button = <button className='status' onClick={() => handleWatched(movie)}>Watched</button>
  }

  return (
    <div>
      <div className='movie-title'>
        {movie.title}
        {button}
      </div>
    </div>
  )
}

export default ToWatch;