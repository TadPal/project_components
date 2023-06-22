import { authorizedFetch } from './authorizedFetch'


const FinanceInsertJSON = (projectId, name, typeId, amount) => ({
    "query":
        `mutation (
          $name: String!
          $typeId: ID!
          $projectId: ID!
          $amount: Float
        ){
            financeInsert(finance: {name: $name, financetypeId: $typeId, projectId: $projectId, amount: $amount}) {
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
            name: name,
            typeId: typeId,
            projectId: projectId,
            amount: amount,
          }
})

/**
 * Performs a finance insert request to the server using authorizedFetch.
 * @param {strings} props.amount - The amount of a newFinance
 * @param {string} props.typeId - The ID of a project type
 * @param {string} props.projectId - The ID of the project to insert the finance into.
 * @param {string} props.name - The name of the finance.
 * @returns {Promise<Response>} A promise representing the finance insert request.
 */
export const FinanceInsert = ({projectId, name, typeId, amount}) =>
  authorizedFetch('/gql', {
    body: JSON.stringify(FinanceInsertJSON(projectId, name, typeId, amount)),
  });
