import { FinanceTypesQuery } from "../queries/FinanceTypesQuery"

/**
 * An asynchronous action creator that fetches project types.
 * 
 * @param {Function} props.setFinanceTypes - A function to set the fetched finance types.
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const FinanceTypesFetchAsync = ({ setFinanceTypes }) => (dispatch, getState) => (
    FinanceTypesQuery()
    .then(response => response.json())
    .then(json => {
        const financeTypes = json.data?.financeTypePage
        if (financeTypes) {
        setFinanceTypes(financeTypes)
        }
        return json
    })
)
