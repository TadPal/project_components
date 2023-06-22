import { FinanceSplit } from "../queries/FinanceSplit";
import { updateFinance, addFinance } from "../features/financesSlice";

/**
 * An asynchronous action creator that sends a mutation to the GraphQL server and splits the finance.
 * @param {string} props.projectId - ID of the project the finances are assigned to.
 * @param {string} props.newFinanceName - Name of the new finance.
 * @param {string} props.newFinanceTypeId - ID of the new finance type.
 * @param {number} props.newFinanceAmount - Amount of the new finance.
 * @param {number} props.oldFinanceAmount - Amount of the old finance.
 * @param {string} props.oldFinanceId - ID of the old finance.
 * @param {string} props.oldFinanceLastChange - Last change date of the old finance.
 * @param {string} props.oldFinanceTypeId - ID of the old finance type.
 * @param {string} props.oldFinanceName - Name of the old finance.
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const FinanceSplitAsync = ({
  projectId,
  newFinanceName,
  newFinanceTypeId,
  newFinanceAmount,
  oldFinanceAmount,
  oldFinanceId,
  oldFinanceLastChange,
  oldFinanceTypeId,
  oldFinanceName,
}) => (dispatch, getState) => (
  // Call the FinancesQuery function to fetch projects
  FinanceSplit({
    projectId: projectId,
    newFinanceName: newFinanceName,
    newFinanceTypeId: newFinanceTypeId,
    newFinanceAmount: newFinanceAmount,
    oldFinanceAmount: oldFinanceAmount,
    oldFinanceId: oldFinanceId,
    oldFinanceLastChange: oldFinanceLastChange,
    oldFinanceTypeId: oldFinanceTypeId,
    oldFinanceName: oldFinanceName,
  })
    .then((response) => response.json())
    .then((json) => {
      // Extract the finances data from the JSON response
      console.log(json)
      const newFinance = json.data?.newFinance.finance;
      const updatedFinance = json.data?.updatedFinance.finance;
      // Send the updated data to the store
      if (newFinance && updateFinance) {
        dispatch(addFinance(newFinance));
        dispatch(updateFinance(updatedFinance));
      }
      return json;
    })
)
