import { FinanceSplitAsync } from '../actions/FinanceAsyncSpliter';
import { useDispatch } from 'react-redux';

/**
 * Renders a button component for finance split operation.
 * @param {Object} newFinance - The new finance object.
 * @param {Object} finance - The existing finance object.
 * @param {Function} onClick - The click event handler.
 * @returns {JSX.Element} The rendered component.
 */
export const FinanceSplitButton = ({ newFinance, finance, onClick }) => {
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
    } else {
      alert('Amount too large!');
    }
  };

  return (
    <button className="btn btn-success" onClick={() => { handleFinanceSplit(); onClick(); }}>
      Split
    </button>
  );
};
