import { authorizedFetch } from './authorizedFetch'


const FinanceInsertJSON = (projectId, name, typeId, amount) => ({
    "query":
        `mutation {
            financeInsert(finance: {name: "${name}", typeId: "${typeId}", projectId: "${projectId}", amount: ${amount}}) {
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
export const FinanceInsert = ({projectId, name, typeId, amount}) =>
  authorizedFetch('/gql', {
    body: JSON.stringify(FinanceInsertJSON(projectId, name, typeId, amount)),
  });
