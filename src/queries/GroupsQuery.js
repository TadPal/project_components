import { authorizedFetch } from './authorizedFetch'

/**
 * Funkce, ktera id namapuje na json predstavujici "velky" (podrobny) dotaz na server
 * @returns {json}
 */
const GroupsQueryJSON = () => ({
    "query":
        `query {
            groupPage {
                name 
                id
            }
          }`,
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns {promise}
 */
export const GroupsQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(GroupsQueryJSON()),
    })