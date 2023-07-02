import { Form } from 'react-bootstrap';
import React from "react";

/**
 * A reusable input component for entering finance amounts.
 * @param {Object} props - The component props.
 * @param {function} props.onChange - The callback function to handle input change.
 * @returns {JSX.Element} The JSX element representing the finance amount input.
 */
const FinanceAmountInput = ({ onChange }) => {
  return (
    <Form.Control type="number" placeholder={0} onChange={(e) => { onChange(e.target.value) }} />
  );
};

export default FinanceAmountInput;
