import { useState } from 'react';
import './App.css';
import { Data } from './Components/Data';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';

function App() {
  const [movies, setMovies] = useState(Data)
  const add = (newMovie) => {
    setMovies([...movies, newMovie])
  }
  return (
    <div className="App">
      <h1>React Hooks WS</h1>
      <MovieList movies={movies} />
      <AddMovie addFn={add} />
    </div>
  );
}

export default App;
