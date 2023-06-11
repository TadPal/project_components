import { authorizedFetch } from './authorizedFetch'


const FinanceSplitJSON = (projectId, newFinanceName, newFinanceTypeId, newFinanceAmount, oldFinanceAmount, oldFinanceId, oldFinanceLastChange, oldFinanceTypeId, oldFinanceName) => ({
    "query":
        `mutation {
            newFinance: financeInsert(finance: {name: "${newFinanceName}", financetypeId: "${newFinanceTypeId}", projectId: "${projectId}", amount: ${newFinanceAmount}}) {
              id
              msg
              finance {
                id
                name
                lastchange
                amount
                project {
                  id
                  name
                }
                financeType {
                  id
                  name
                }
              }
            }

            updatedFinance: financeUpdate(finance: {id: "${oldFinanceId}", lastchange: "${oldFinanceLastChange}", amount: ${oldFinanceAmount}, financetypeId: "${oldFinanceTypeId}, name: "${oldFinanceName}}) {
                id
                msg
                finance {
                  id
                  name
                  lastchange
                  amount
                  project {
                    id
                    name
                  }
                  financeType {
                    id
                    name
                  }
                }
              }
            }`,
})

/**
 * Performs a finance insert request to the server using authorizedFetch.
 *
 * @param {string} projectId - The ID of the project to insert the finance into.
 * @param {string} name - The name of the finance.
 * @returns {Promise<Response>} A promise representing the finance insert request.
 */
export const FinanceSplit = ({projectId, newFinanceName, newFinanceTypeId, newFinanceAmount, oldFinanceAmount, oldFinanceId, oldFinanceLastChange, oldFinanceTypeId, oldFinanceName}) =>
  authorizedFetch('/gql', {
    body: JSON.stringify(FinanceSplitJSON(projectId, newFinanceName, newFinanceTypeId, newFinanceAmount, oldFinanceAmount, oldFinanceId, oldFinanceLastChange, oldFinanceTypeId, oldFinanceName)),
  });
