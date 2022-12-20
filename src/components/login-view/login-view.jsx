import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';


export const LoginView = () => {
  const [ username, setUsername] = useState('');
  const [ password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username, password);
  };

  // const data = {
  //   Username: username,
  //   Password: password
  // };

  // fetch("https://myflixdb9001.herokuapp.com/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(data)
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("Login response: ", data);
  //     if (data.user) {
  //       onLoggedIn(data.user, data.token);
  //     } else {
  //       alert("No such user");
  //     }
  //   })
  //   .catch((e) => {
  //     alert("Something went wrong");
  //   });

  return (
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
      </Form.Group>
      
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
      <Button variant="secondary" type="button">Sign up</Button>
    </Form>
  );
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired
};