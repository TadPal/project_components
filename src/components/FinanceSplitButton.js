import { FinanceSplitAsync } from '../actions/FinanceAsyncSpliter';
import { useDispatch } from 'react-redux';

export const FinanceSplitButton = ({newFinance, finance, onClick}) => {
    const dispatch = useDispatch()

    /**
     * Handles the finance split operation.
     */
    const handleFinanceSplit = () => {
        if (newFinance.amount <= finance.amount) {
            dispatch(FinanceSplitAsync({
            projectId: finance.project.id,
            newFinanceName: newFinance.name,
            newFinanceTypeId: newFinance.type,
            newFinanceAmount: newFinance.amount,
            oldFinanceAmount: (finance.amount - newFinance.amount),
            oldFinanceId: finance.id,
            oldFinanceLastChange: finance.lastchange,
            oldFinanceName: finance.name,
            oldFinanceTypeId: finance.financeType.id
            }));
        } else {
            alert("Amount too large!");
        }
    }

    return (
        <button className="btn btn-success" onClick={() => { handleFinanceSplit(); onClick()}}>
        Split
        </button>
    )
}