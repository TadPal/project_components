import { authorizedFetch } from './authorizedFetch'


const FinanceSplitJSON = (projectId, newFinanceName, newFinanceTypeId, newFinanceAmount, oldFinanceAmount, oldFinanceId, oldFinanceLastChange, oldFinanceTypeId, oldFinanceName) => ({
    "query":
        `mutation (
          $id: ID!
          $name: String
          $typeId: ID
          $amount: Float
          $lastchange: DateTime!
          $newName: String!
          $newTypeId: ID!
          $newAmount: Float
          $projectId: ID!
        ){
          updatedFinance:  financeUpdate(finance: {id: $id, lastchange: $lastchange, name: $name, financetypeId: $typeId, amount: $amount}) {
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
        }`,
        variables: {
          id: oldFinanceId,
          lastchange: oldFinanceLastChange,
          name: oldFinanceName,
          typeId: oldFinanceTypeId,
          amount: oldFinanceAmount,
          newName: newFinanceName,
          projectId: projectId,
          newAmount: newFinanceAmount,
          newTypeId: newFinanceTypeId,
        }
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
    body: JSON.stringify(FinanceSplitJSON(projectId, newFinanceName, newFinanceTypeId, Number(newFinanceAmount), oldFinanceAmount, oldFinanceId, oldFinanceLastChange, oldFinanceTypeId, oldFinanceName)),
});