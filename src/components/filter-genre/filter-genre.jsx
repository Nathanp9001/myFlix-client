import React from "react";
import { Dropdown } from "react-bootstrap";

const GENRES = ["Action", "Adventure", "Horror", "Sci-Fi"];

export const FilterGenre = ({ value, onSelect }) => {
  return (
    <Dropdown onSelect={onSelect}>
      <Dropdown.Toggle className="dropdown-genre button-primary">
       {value ? value : "Filter Genre"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {GENRES.map((g) => (
          <Dropdown.Item key={g} eventKey={g} active={value === g}>
            {g}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};