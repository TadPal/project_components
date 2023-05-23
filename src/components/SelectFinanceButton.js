
import { useEffect, useState } from "react";

export const SelectFinanceButton = ({ financeTypes, onChange }) => {
  const [selectedType, setSelectedType] = useState("");

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setSelectedType(selectedType);
  }

  useEffect(() => {
    // Call the onChange function with the selected type whenever it changes
    onChange(selectedType);
  }, [selectedType, onChange]);

  return (
    <select className="form-select form-select-sm" value={selectedType} onChange={handleTypeChange}>
      <option value="">All finances</option>
      {financeTypes.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
};