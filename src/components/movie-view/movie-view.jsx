import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import React, {useState} from 'react';


export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m._id === movieId);

  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken ? storedToken : null);
  

  

  const handleFavorite = () => {


    fetch("https://myflixdb9001.herokuapp.com/users/{username}/movies/{m._id}", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.ok) {
        alert("Added to favorites!");
      } else {
        alert("Something went wrong");
      }
    });
  };
 
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
          <Button 
          className="button-add-favorite"
          onClick={() => handleFavorite(movie._id, "add")}
          >
            + Add to Favorites
          </Button>
        </Col>
      </Row>
    );
  };