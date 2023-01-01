import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m._id === movieId);
 
    return (
      <Row className="movie-view">
        <Col md={6} className="movie-poster"  >
          <img className="movie-img" crossorigin="anonymous" src={movie.ImagePath} />
        </Col>
        <Col md={6}>
          <div className="movie-title">
            <span className="value">{movie.Title}</span>
          </div>
          <div className="movie-description">
            <span className="label">Description: </span>
            <span className="value">{movie.Description}</span>
          </div>
          <Link to={`/`}>
            <Button className="back-button button-primary">Back</Button>
          </Link>
        </Col>
      </Row>
    );
  };