import { FinanceSplitModalButton } from "./FinanceSplitModal";
import React from "react";

/**
 * A React component that renders a table to edit finances.
 * @param {Array} props.finances - An array of finance objects.
 * @returns {JSX.Element} Finances table JSX element.
 */
export const FinancesEditTable = ({finances}) => {
  if (finances?.length > 0) {
    return (
      <table className="table table-hover table-light">
        <thead className="table-primary">
          <tr>
            <th>Finance Name</th>
            <th>Last change</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Split</th>
          </tr>
        </thead>
        <tbody>
          {finances.map((finance) => (
            <FinanceRow
              key={finance.id}
              name={finance.name}
              change={finance.lastchange.substring(0, 10)}
              amount={finance.amount}
              type={finance.financeType.name}
              finance={finance}
            />
          ))}
        </tbody>
      </table>
    );
  } else {
    return (
      <div style={{ textAlign: "left" }}>
        <p>
          <b>Finances:</b> Project has no assigned finances
        </p>
      </div>
    );
  }
};

/**
 * A React component that represents a row in the finance table.
 * @param {Object} props - Component props.
 * @param {string} props.name - Name of the finance.
 * @param {string} props.change - Last change date of the finance.
 * @param {number} props.amount - Amount of the finance.
 * @param {string} props.type - Type of the finance.
 * @param {Object} props.finance - Finance object.
 * @returns {JSX.Element} Finance row JSX element.
 */
const FinanceRow = ({ name, change, amount, type, finance }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{change}</td>
      <td>{amount} CZK</td>
      <td>{type}</td>
      <td>
        <FinanceSplitModalButton finance={finance} />
      </td>
    </tr>
  );
};
