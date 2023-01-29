import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Routes, Route, Navigate, useResolvedPath } from "react-router-dom";

import { useState, useEffect } from "react";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { SignupView } from "../signup-view/signup-view";
import { ProfileView } from "../profile-view/profile-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { FilterGenre } from "../filter-genre/filter-genre";

export const MainView = () => {
  const storedUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  const storedToken = localStorage.getItem("token");
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState();
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, ] = useState(storedToken ? storedToken : null);


  useEffect(() => {
    if (!token) return;

    fetch("https://myflixdb9001.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((movies) => {
        if (genre) {
          const filteredMovies = movies.filter((m) => m.Genre.Name === genre);
          setMovies(filteredMovies);
        } else {
          setMovies(movies);
        }
      });
  }, [token, user, genre]);

  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
        }}
       />
      <Row className="justify-content-md-center">
        <Routes>
          <Route 
           path="/signup"
           element={
            <>
              {user ? (
                <Navigate to="/" />
              ) : (
                <Col md={5}>
                  <SignupView />
                </Col>
              )}
            </>

            }
          />
          <Route
            path="/login"
            element={
            <>
              {user ? (
                <Navigate to="/" />
              ) : (
                <Col md={5}>
                  <LoginView onLoggedIn={(user) => setUser(user)} />
                </Col>
              )}
            </>

            }
          />
        <Route
          path="/movies/:movieId"
          element={
            <>
              {!user ? (
                <Navigate to="/login" replace />
              ) : movies.length === 0 ? (
                <Col>The list is empty!</Col>
              ) : (
                <Col md={8}>
                  <MovieView movies={movies} />
                </Col>
              )}
            </>
          }
        />
        <Route 
          path="/"
          element={
            <>
              {!user ? (
                <Navigate to="/login" replace />
              ) : movies.length === 0 ? (
                <Col>The list is empty!</Col>
              ) : (
                <>
                  <FilterGenre value={genre} onSelect={(genre) => setGenre(genre)} />
                  {movies.map((movie) => (
                      <Col className="mb-5" key={movie._id} sm={5} md={3}>
                        <MovieCard movie={movie} />
                      </Col>
                  ))}
                </>
              )}
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              {!user ? (
                <Navigate to="/login" replace />
              ) : user.length === 0 ? (
                <Col>No such user found!</Col>
              ) : (
                <Col>
                  <ProfileView user={user} movies={movies} />
                </Col>
              )}
            </>
          }
        />
      </Routes>
    </Row>
    </BrowserRouter>
  );
};

export default MainView;

