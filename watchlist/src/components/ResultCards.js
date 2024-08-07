import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const ResultCards = ({movie}) => {
    const{ addMovieToWatchlist, addMovieToWatched, watchlist, watched } = useContext(GlobalContext);

    let storedMovie = watchlist.find((o) => o.id === movie.id);
    let storedMovieWatched = watched.find((o) => o.id === movie.id);

    const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;

    const watchedDisabled = storedMovieWatched ? true : false;

    return (
        <div className='result-card'>
            <div className='poster-wrapper'>
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                    />
                ) : (
                <div className='filler-poster'></div> 
                )}
            </div>
            <div className='info'>
                <div className='header'>
                    <h3 className='title'>{movie.title}</h3>
                    <h4 className='release-date'>
                        {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
                    </h4>
                    <p className='overview'>{movie.overview}</p>
                </div>
                <div className='controls'>
                    <button className='btn'
                    disabled={watchlistDisabled}
                    onClick={() => addMovieToWatchlist(movie)}>⭐ Save to Watchlist</button>

                    <button className='btn'
                    disabled={watchedDisabled}
                    onClick={() => addMovieToWatched(movie)}>⭐ Save to Watched</button>

                    <button className='btn'>See more</button>
                </div>
            </div>
        </div>
  )
}
