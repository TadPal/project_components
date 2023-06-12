import { FinanceTypesQuery } from "../queries/FinanceTypesQuery"

/**
* Asynchronous action creator that fetches project types.
* @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
*/
export const FinanceTypesFetchAsync = ({setFinanceTypes}) => (dispatch, getState) => {
    // Call the ProjectsQuery function to fetch projects
        FinanceTypesQuery()
        .then(response => response.json())
        .then(json => {
            // Extract the projectTypes data from the JSON response
            const financeTypes = json.data?.financeTypePage
            if (financeTypes) {
            setFinanceTypes(financeTypes)
            }
            return json
        })
    }