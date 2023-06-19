import { FinancesQuery } from "../queries/FinancesQuery";
import { loadFinances } from "../features/financesSlice";

/**
 * An asynchronous action creator that fetches finances from server and dispatches the 'loadFinances' action.
 *
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const FinancesFetchAsync = () => (dispatch, getState) => (
  // Call the FinancesQuery function to fetch projects
  FinancesQuery()
    .then(response => response.json())
    .then(json => {
      // Extract the finances data from the JSON response
      const finances = json.data?.financePage
      if (finances) {
        // Dispatch the 'loadFinances' action with the fetched projects
        dispatch(loadFinances(finances))
      }
      return json
    })
)