import { Form } from 'react-bootstrap';
import React from "react";

/**
 * A reusable select component for choosing project types.
 * @function
 * @param {Object} props - The component props.
 * @param {string} props.value - The currently selected value.
 * @param {function} props.onChange - The callback function to handle value change.
 * @param {Array} props.types - The array of project types to populate the select options.
 * @returns {JSX.Element} The JSX element representing the project type select component.
 */
const ProjectTypeSelect = ({ value, onChange, types }) => {
  return (
    <Form.Select
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      {types.map((type) => (
        <option key={type.id} value={type.id}>
          {type.name}
        </option>
      ))}
    </Form.Select>
  );
};

export default ProjectTypeSelect;
