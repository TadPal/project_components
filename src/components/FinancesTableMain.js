import FinanceSelect from "./FinanceTypeSelect";
import { FinanceProjectSelect } from "./FinanceProjectSelect";
import { useState } from "react";

/**
 * A React component that displays a table of finances with filtering options.
 * @param {Array} props.finances - The array of finances to be displayed.
 * @param {Array} props.projects - An array of project objects.
 * @returns {JSX.Element} The JSX element representing the main finances table.
 */
export const FinancesTableMain = ({finances, projects}) => {
  const [selectedType, setSelectedType] = useState(""); // State for storing the selected type
  const [selectedProject, setSelectedProject] = useState({});

  /**
   * Handles the change event of the finance type select.
   * @param {string} selectedType - The selected finance type.
   */
  const handleTypeChange = (selectedType) => {
    setSelectedType(selectedType); // Update the selected type when it changes
  };

  /**
   * Handles the change event of the project select.
   * @param {string} selectedProject - The selected project.
   */
  const handleProjectChange = (selectedProject) => {
    setSelectedProject(selectedProject); // Update the selected project when it changes
  };

  // Filter the finances based on the selected type and project
  let filteredFinances = selectedType ? finances.filter((finance) => finance.financeType.id === selectedType) : finances;
  filteredFinances = selectedProject ? filteredFinances.filter((finance) => finance.project.id === selectedProject) : filteredFinances;

  if (filteredFinances.length > 0) {
    return (
      <table className="table table-hover table-light">
        <thead className="table-primary">
          <tr>
            <th>Finance Name</th>
            <th><FinanceProjectSelect projects={projects} onChange={handleProjectChange} /></th>
            <th>Last change</th>
            <th>Amount</th>
            <th><FinanceSelect onChange={handleTypeChange} /></th>
          </tr>
        </thead>
        <tbody>
          {filteredFinances.map((finance) => <FinanceRow key={finance.id}
            name={finance.name}
            change={finance.lastchange.substring(0, 10)}
            amount={finance.amount}
            type={finance.financeType.name}
            project={finance.project.name} />)}
        </tbody>
      </table>
    )
  } else {
    return (
      <>
        <table className="table table-hover table-light">
          <thead className="table-primary">
            <tr>
              <th>Finance Name</th>
              <th><FinanceProjectSelect projects={projects} onChange={handleProjectChange} /></th>
              <th>Last change</th>
              <th>Amount</th>
              <th><FinanceSelect onChange={handleTypeChange} /></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div>
          <b>No finances found</b>
        </div>
      </>
    )
  }
}

/**
 * A React component that represents a row in the finances table.
 * @param {string} name - The finance name.
 * @param {string} change - The date of the last change.
 * @param {number} amount - The finance amount.
 * @param {string} type - The finance type.
 * @param {string} project - The finance project.
 * @returns {JSX.Element} The JSX element representing the finance row.
 */
const FinanceRow = ({ name, change, amount, type, project }) => {

  return (
    <tr>
      <td>{name}</td>
      <td>{project}</td>
      <td>{change}</td>
      <td>{amount} CZK</td>
      <td>{type}</td>
    </tr>
  )
}
