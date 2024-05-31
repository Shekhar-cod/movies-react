import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import DeleteModal from './DeleteModal';

const MovieDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const [movie, setMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/movies/${id}`)
      .then(response => setMovie(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/movies/${id}`)
      .then(() => {
        setShowModal(false);
        history.push('/movies');
      })
      .catch(error => console.error(error));
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <Button variant="danger" onClick={() => setShowModal(true)}>Delete</Button>
      <DeleteModal show={showModal} handleClose={() => setShowModal(false)} handleDelete={handleDelete} />
    </div>
  );
};

export default MovieDetails;

