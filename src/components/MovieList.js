import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieItem from './MovieItem';

const MovieList = ({ movies }) => {
  return (
    <Row>
      {movies.map(movie => (
        <Col key={movie.id} sm={6} md={4} lg={3}>
          <MovieItem movie={movie} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
