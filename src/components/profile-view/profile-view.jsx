import React from "react";
import React, {useState} from 'react';
import { Button, Form, Row, Col } from "react-bootstrap";




export const ProfileView = ({ user }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();  

    const data = {
      Username: username,
      Password: password,
      Email: email,
    };

    fetch("https://myflixdb9001.herokuapp.com/users/:Username", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.ok) {
        alert("Changes saved");
        window.location.reload();
      } else {
        alert("Something went wrong");
      }
    });
  };


  return (
    <Row>
      <Col>
        <div className="profile-info">
          <div className="user-info">
            <span className="label">Username: </span>
            <span className="value">{user.Username}</span>
          </div>
          <div className="user-info">
            <span className="label">Email: </span>
            <span className="value">{user.Email}</span>
          </div>
          <div className="user-info">
            <span className="label">Birthday: </span>
            <span className="value">{user.Birthday}</span>
          </div>
        </div>
      </Col>
      <Col>
        <Form onSubmit={handleSubmit}>
          <h2>Update info</h2>
          <Form.Group>
            <Form.Label>Username: </Form.Label>
            <Form.Control
            type="username" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password: </Form.Label>
            <Form.Control 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email: </Form.Label>
            <Form.Control 
            type="text" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            />
          </Form.Group>
          <Button type="submit" className="button-primary">Save Changes</Button>
        </Form>
      </Col>
    </Row>
  );
};

