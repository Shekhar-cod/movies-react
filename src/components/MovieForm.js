import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const MovieForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const [movie, setMovie] = useState({ title: '', description: '', releaseYear: '' });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/movies/${id}`)
        .then(response => setMovie(response.data))
        .catch(error => console.error(error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = id ? 'put' : 'post';
    const url = id ? `http://localhost:5000/movies/${id}` : 'http://localhost:5000/movies';

    axios[method](url, movie)
      .then(() => history.push('/movies'))
      .catch(error => console.error(error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter movie title"
          name="title"
          value={movie.title}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter movie description"
          name="description"
          value={movie.description}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formReleaseYear">
        <Form.Label>Release Year</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter release year"
          name="releaseYear"
          value={movie.releaseYear}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default MovieForm;

