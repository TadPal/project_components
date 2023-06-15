import { FinanceSelect } from "./FinanceTypeSelect";
import { useState } from "react";

/**
 * A React component that displays a table of finances.
 * @param {Object} props - The component props.
 * @param {Array} props.finances - The array of finances to be displayed.
 * @returns {JSX.Element} The JSX element representing the finances table.
 */
export const FinancesTable = (props) => {
  const [selectedType, setSelectedType] = useState(""); // State for storing the selected type

  /**
   * Handles the change event of the finance type select.
   * @param {string} selectedType - The selected finance type.
   */
  const handleTypeChange = (selectedType) => {
    setSelectedType(selectedType); // Update the selected type when it changes
  };

  // Filter the finances based on the selected type
  const filteredFinances = selectedType ? props.finances.filter((finance) => finance.financeType.id === selectedType) : props.finances;

  if (props.finances.length > 0) {
    return (
      <table className="table table-hover table-light">
        <thead className="table-primary">
          <tr>
            <th>Finance Name</th>
            <th>Last change</th>
            <th>Amount</th>
            <th><FinanceSelect onChange={handleTypeChange} /></th>
          </tr>
        </thead>
        <tbody>
          {filteredFinances.map((finance) => <FinanceRow key={finance.id} index={finance.id}
            name={finance.name}
            change={finance.lastchange.substring(0, 10)}
            amount={finance.amount}
            type={finance.financeType.name} />)}
        </tbody>
      </table>
    )
  } else {
    return (
      <div style={{ textAlign: "left" }}>
        <p>
          <b>Finances:</b> Project has no assigned finances
        </p>
      </div>
    )
  }
}

/**
 * A React component that represents a row in the finances table.
 * @param {Object} props - The component props.
 * @param {string} props.name - The finance name.
 * @param {string} props.change - The date of the last change.
 * @param {number} props.amount - The finance amount.
 * @param {string} props.type - The finance type.
 * @returns {JSX.Element} The JSX element representing the finance row.
 */
const FinanceRow = ({ name, change, amount, type }) => {

  return (
    <tr>
      <td>{name}</td>
      <td>{change}</td>
      <td>{amount} CZK</td>
      <td>{type}</td>
    </tr>
  )
}
