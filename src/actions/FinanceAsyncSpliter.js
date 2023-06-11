import { FinanceSplit } from "../queries/FinanceUpdate";
import { updateFinance, loadFinances } from "../features/financesSlice";

/**
 * An asynchronous action creator that fetches finances and dispatches the 'loadFinances' action.
 *
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const FinancesSplitAsync = ({projectId, newFinanceName, newFinanceTypeId, newFinanceAmount, oldFinanceAmount, oldFinanceId, oldFinanceLastChange}) => (dispatch, getState) => {
  // Call the FinancesQuery function to fetch projects
  FinanceSplit({projectId: projectId, newFinanceName: newFinanceName, newFinanceTypeId: newFinanceTypeId, newFinanceAmount: newFinanceAmount, oldFinanceAmount: oldFinanceAmount, oldFinanceId: oldFinanceId, oldFinanceLastChange: oldFinanceLastChange})
    .then(response => response.json())
    .then(json => {
      // Extract the finances data from the JSON response
      const newFinance = json.data?.newFinance.finance
      const updatedFinance = json.data?.splitedFinance.finance
      if (newFinance && updateFinance) {
        // Dispatch the 'loadFinances' and 'updateFinance' action with the fetched projects
        dispatch(loadFinances(newFinance))
        dispatch(updateFinance(updatedFinance))
      }
      return json
    })
}