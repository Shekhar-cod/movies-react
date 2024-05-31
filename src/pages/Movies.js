import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import MovieList from '../components/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <Link to="/movies/new">
        <Button variant="primary">Add Movie</Button>
      </Link>
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;

