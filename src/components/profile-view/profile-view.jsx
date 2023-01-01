import React from "react";
import React, {useState} from 'react';
import { useParams } from "react-router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";




export const ProfileView = ({ user }) => {
  const { userId } = useParams();

  const user = users.find((u) => u._id === userId);

  return (
    <div className="profile-view">
      <div className="user-username">
        <span className="label">Username: </span>
        <span className="value">{user.Name}</span>
      </div>
      <div className="user-email">
        <span className="label">Email: </span>
        <span className="value">{user.Email}</span>
      </div>
      <div className="user-birthday">
        <span className="label">Birthday: </span>
        <span className="value">{user.Birthday}</span>
      </div>
    </div>
  )
}

