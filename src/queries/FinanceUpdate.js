import { authorizedFetch } from './authorizedFetch'


const FinanceUpdateJSON = (id, lastchange, name, typeId, amount) => ({
    "query":
        `mutation (
          $id: ID!
          $name: String
          $typeId: ID
          $amount: Float
          $lastchange: DateTime!
        ){
            financeUpdate(finance: {id: $id, lastchange: $lastchange, name: $name, financetypeId: $typeId, amount: $amount}) {
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
            id: id,
            lastchange: lastchange,
            name: name,
            typeId: typeId,
            amount: amount,
          }
})

/**
 * Performs a milestone update request to the server using authorizedFetch.
 *
 * @param {string} projectId - The ID of the project to update the milestone into.
 * @param {string} name - The name of the milestone.
 * @returns {Promise<Response>} A promise representing the milestone update request.
 */
export const FinanceUpdate = ({id, lastchange, name, typeId, amount}) =>
  authorizedFetch('/gql', {
    body: JSON.stringify(FinanceUpdateJSON(id, lastchange, name, typeId, amount)),
  });
