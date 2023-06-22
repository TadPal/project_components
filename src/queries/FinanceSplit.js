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
 * Splits the finance by sending a request to the server.
 *
 * @param {Object} props - The props for finance splitting.
 * @param {string} props.projectId - The ID of the project.
 * @param {string} props.newFinanceName - The name of the new finance.
 * @param {string} props.newFinanceTypeId - The ID of the type of the new finance.
 * @param {number} props.newFinanceAmount - The amount of the new finance.
 * @param {number} props.oldFinanceAmount - The amount of the old finance.
 * @param {string} props.oldFinanceId - The ID of the old finance.
 * @param {string} props.oldFinanceLastChange - The last change date of the old finance.
 * @param {string} props.oldFinanceTypeId - The ID of the type of the old finance.
 * @param {string} props.oldFinanceName - The name of the old finance.
 * @returns {Promise} A promise representing the result of the finance split request.
 */
export const FinanceSplit = ({projectId, newFinanceName, newFinanceTypeId, newFinanceAmount, oldFinanceAmount, oldFinanceId, oldFinanceLastChange, oldFinanceTypeId, oldFinanceName}) =>
  authorizedFetch('/gql', {
    body: JSON.stringify(FinanceSplitJSON(projectId, newFinanceName, newFinanceTypeId, Number(newFinanceAmount), oldFinanceAmount, oldFinanceId, oldFinanceLastChange, oldFinanceTypeId, oldFinanceName)),
});