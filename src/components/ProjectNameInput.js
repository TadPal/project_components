import { Form } from 'react-bootstrap';
import React from "react";

/**
 * A reusable input component for entering project names.
 * @param {Object} props - The component props.
 * @param {function} props.onChange - The callback function to handle input change.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @returns {JSX.Element} The JSX element representing the project name input.
 */
const ProjectNameInput = ({ onChange, placeholder }) => {
  return (
    <Form.Control type="text" placeholder={placeholder} onChange={(e) => { onChange(e.target.value) }} />
  );
};

export default ProjectNameInput;
