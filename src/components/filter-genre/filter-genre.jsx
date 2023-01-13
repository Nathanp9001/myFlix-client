import React from "react";
import { Dropdown } from "react-bootstrap";

export const FilterGenre = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle className="dropdown-genre button-primary">
        Filter Genre
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Adventure</Dropdown.Item>
        <Dropdown.Item>Horror</Dropdown.Item>
        <Dropdown.Item>Sci-Fi</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};