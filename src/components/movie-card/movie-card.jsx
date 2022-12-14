import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


export const MovieCard = ({ movie }) => {

    return (
      <Card className="h-100">
        <Card.Img crossOrigin="anonymous" variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
            <Button className="button-primary">Open</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  };


MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
};