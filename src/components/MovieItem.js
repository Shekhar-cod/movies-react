import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Link to={`/movies/${movie.id}`}>
          <Button variant="info">View Details</Button>
        </Link>
        <Link to={`/movies/${movie.id}/edit`}>
          <Button variant="warning">Edit</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MovieItem;
