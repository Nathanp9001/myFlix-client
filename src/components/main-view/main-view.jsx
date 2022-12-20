import React from 'react';
// import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState, useEffect } from "react";
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
// import { SignupView } from '../signup-view/signup-view';



export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://myflixdb9001.herokuapp.com/movies")
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            author: doc.director_name?.[0]
          };
        });

        setMovies(moviesFromApi);
      });
  }, []);



// setSelectedMovie(movie) 
//   this.setState({
//     selectedMovie: movie
//   });


// onLoggedIn(user) 
//   this.setState({
//     user
//   });



  // const { movies, selectedMovie, user } = this.state;

  if (!user) {
    return <LoginView onLoggedIn={(user) => setUser(user)} />;
  }

  if (movies.length === 0) {
     return <div>The list is empty!</div>;
  }

  return (
    <Row className="main-view justify-content-md-center">
      {selectedMovie
        ? (
            <Col md={8}>
              <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
            </Col>
        )
        : movies.map(movie => (
          <Col md={3}>
            <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }}/>
          </Col>
        ))
      }
    </Row>
    );
  }

export default MainView;

  // constructor() {
  //   super();
  //   this.state = {
  //     movies: [],
  //     selectedMovie: null,
  //     user: null
  //   };
  // }

  // componentDidMount(){
  //   axios.get('https://myflixdb9001.herokuapp.com/movies')
  //   .then(response => {
  //     this.setState({
  //       movies: response.data
  //     });
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }