import { FinanceSplitAsync } from '../actions/FinanceAsyncSpliter';
import { useDispatch } from 'react-redux';
import React from "react";

/**
 * Renders a button component for finance split operation.
 * @param {Object} props.newFinance - The new finance object.
 * @param {Object} props.finance - The existing finance object.
 * @param {Function} props.onClick - The click event handler.
 * @returns {JSX.Element} The rendered component.
 */
const FinanceSplitButton = ({ newFinance, finance, onClick }) => {
  const dispatch = useDispatch();

  const handleFinanceSplit = () => {
    if (newFinance.amount <= finance.amount) {
      dispatch(
        FinanceSplitAsync({
          projectId: finance.project.id,
          newFinanceName: newFinance.name,
          newFinanceTypeId: newFinance.type,
          newFinanceAmount: newFinance.amount,
          oldFinanceAmount: finance.amount - newFinance.amount,
          oldFinanceId: finance.id,
          oldFinanceLastChange: finance.lastchange,
          oldFinanceName: finance.name,
          oldFinanceTypeId: finance.financeType.id,
        })
      );
      if (onClick) onClick();
    } else {
      alert('Amount too large!');
    }
  };

  return (
    <button className="btn btn-success" onClick={handleFinanceSplit}>
      Split
    </button>
  );
};

export default FinanceSplitButton;