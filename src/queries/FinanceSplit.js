import { authorizedFetch } from './authorizedFetch'


const FinanceSplitJSON = (projectId, newFinanceName, newFinanceTypeId, newFinanceAmount, oldFinanceAmount, oldFinanceId, oldFinanceLastChange, oldFinanceTypeId, oldFinanceName) => ({
  "query":
      `mutation (
        $newName: String!
        $newTypeId: ID!
        $projectId: ID!
        $newAmount: Float
        $oldName: String
        $oldTypeId: ID
        $oldAmount: Float
        $oldLastChange: DateTime!
        $oldId: ID!
      ){
          newFinance: financeInsert(finance: {name: $newName, financetypeId: $newTypeId, projectId: $projectId, amount: $newAmount}) {
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

          updatedFinance: financeUpdate(finance: {id: $oldId, lastchange: $oldLastChange, amount: $oldAmount, financetypeId: $oldTypeId, name: $oldName}) {
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
        variables: {
          newName: newFinanceName,
          newTypeId: newFinanceTypeId,
          projectId: projectId,
          newAmount: newFinanceAmount,
          oldName: oldFinanceName,
          oldTypeId: oldFinanceTypeId,
          oldAmount: oldFinanceAmount,
          oldLastChange: oldFinanceLastChange,
          oldId: oldFinanceId
        }
});

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