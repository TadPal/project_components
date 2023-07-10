import { FinanceTypesFetchAsync } from "../actions/FinanceTypesAsyncLoader";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

/**
 * A React component that represents a select input for filtering finances by type.
 * @function
 * @param {function} props.onChange - The function called when the selected type changes.
 * @returns {JSX.Element} The JSX element representing the finance type select.
 */
const FinanceSelect = ({ onChange }) => {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState("");
  const [financeTypes, setFinanceTypes] = useState([]);

  /**
   * Handles the change event of the finance type select.
   * @param {Object} event - The change event.
   */
  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    setSelectedType(selectedType);
  };

  const handleTypesFetch = (types) => {
    setFinanceTypes(types);
  }

  useEffect(() => {
    // Call the onChange function with the selected type whenever it changes
    onChange(selectedType);
  }, [selectedType, onChange]);

  useEffect(() => {
    dispatch(FinanceTypesFetchAsync(handleTypesFetch));
  },);

  return (
    <select className="form-select form-select-sm" value={selectedType} onChange={handleTypeChange}>
      <option value="">All finances</option>
      {financeTypes.map((type) => (
        <option key={type.id} value={type.id}>
          {type.name}
        </option>
      ))}
    </select>
  );
};

export default FinanceSelect;
