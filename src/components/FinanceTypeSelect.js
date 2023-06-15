import { FinanceTypesQuery } from "../queries/FinanceTypesQuery";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

/**
 * A React component that represents a select input for filtering finances by type.
 * @param {Object} props - The component props.
 * @param {function} props.onChange - The function called when the selected type changes.
 * @returns {JSX.Element} The JSX element representing the finance type select.
 */
export const FinanceSelect = ({ onChange }) => {
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

  useEffect(() => {
    // Call the onChange function with the selected type whenever it changes
    onChange(selectedType);
  }, [selectedType, onChange]);

  useEffect(() => {
    dispatch(FinanceTypesQueryAsync());
  }, [dispatch]);

  /**
   * Asynchronous action creator for fetching finance types.
   */
  const FinanceTypesQueryAsync = () => (dispatch, getState) => {
    // Call the FinanceTypesQuery function to fetch finance types
    FinanceTypesQuery()
      .then((response) => response.json())
      .then((json) => {
        // Extract the financeTypes data from the JSON response
        const financeTypes = json.data?.financeTypePage;
        if (financeTypes) {
          setFinanceTypes(financeTypes);
        }
        return json;
      });
  };

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
