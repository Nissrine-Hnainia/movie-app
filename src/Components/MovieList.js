import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({movies}) => {
    return (
        <div className="movies">
            {movies.map((movie, key) => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    )
}

export default MovieList
