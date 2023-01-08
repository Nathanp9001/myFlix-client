import React, {useState} from 'react';
import { Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m._id === movieId);
  
  const storedToken = localStorage.getItem("token");
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [user, setUser] = useState(storedUser ? storedUser : null);

  const handleFavorite = () => {
    fetch("https://myflixdb9001.herokuapp.com/users/"+user.Username+"/movies/"+movie._id, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }).then((response) => {
      alert("Added to favorites!");
      return response.json();
    }).then(data => updateUser(data))
    .catch(err => {
        alert("Something went wrong");
    });
  };

  const handleRemoveFavorite = () => {
    fetch("https://myflixdb9001.herokuapp.com/users/"+user.Username+"/movies/"+movie._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.ok) {
        alert("Removed from favorites");
        const newUser = {
          ...user,
          FavoriteMovies: user.FavoriteMovies.filter(movie => movie._id != movie._id)
        }
        updateUser(newUser);
      } else {
        alert("Something went wrong");
      }
    });
  };

  const updateUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }
 
    return (
      <Row className="movie-view">
        <Col md={6} className="movie-poster"  >
          <img className="movie-img" crossOrigin="anonymous" src={movie.ImagePath} />
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

          {
            storedUser.FavoriteMovies.indexOf(movie._id) >= 0 ? (
              <Button 
                variant="danger"
                onClick={() => handleRemoveFavorite(movie._id, "add")}
              >
                Remove from Favorites
              </Button>
            ) : (
              <Button 
                className="button-add-favorite"
                onClick={() => handleFavorite(movie._id, "add")}
              >
                + Add to Favorites
              </Button>
            )
          }
          
        </Col>
      </Row>
    );
  };