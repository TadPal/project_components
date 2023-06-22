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
 * Updates the finance by sending a request to the server.
 *
 * @param {Object} props - The props for finance update.
 * @param {string} props.id - The ID of the finance.
 * @param {string} props.lastchange - The last change date of the finance.
 * @param {string} props.name - The name of the finance.
 * @param {string} props.typeId - The ID of the type of the finance.
 * @param {number} props.amount - The amount of the finance.
 * @returns {Promise} A promise representing the result of the finance update request.
 */
export const FinanceUpdate = ({id, lastchange, name, typeId, amount}) =>
  authorizedFetch('/gql', {
    body: JSON.stringify(FinanceUpdateJSON(id, lastchange, name, typeId, amount)),
  });
