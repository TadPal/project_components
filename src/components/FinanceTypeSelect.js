import { FinanceTypesQuery } from "../queries/FinanceTypesQuery";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const FinanceSelect = ({ onChange }) => {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState("");
  const [financeTypes, setFinanceTypes] = useState([]);

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setSelectedType(selectedType);
  }

  useEffect(() => {
    // Call the onChange function with the selected type whenever it changes
    onChange(selectedType);
  }, [selectedType, onChange]);

  useEffect(() => {
    dispatch(FinanceTypesQueryAsync());
  }, [dispatch]);

  const FinanceTypesQueryAsync = () => (dispatch, getState) => {
  // Call the ProjectsQuery function to fetch projects
    FinanceTypesQuery()
    .then(response => response.json())
    .then(json => {
        // Extract the projectTypes data from the JSON response
        const financeTypes = json.data?.financeTypePage
        if (financeTypes) {
        setFinanceTypes(financeTypes)
        }
        return json
    })
  }

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