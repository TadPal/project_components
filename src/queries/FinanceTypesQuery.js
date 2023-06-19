import { authorizedFetch } from './authorizedFetch'

/**
 * Funkce, ktera id namapuje na json predstavujici "velky" (podrobny) dotaz na server
 * @returns {json}
 */
const FinanceTypesQueryJSON = () => ({
    "query":
        `query {
          financeTypePage {
            id 
            name
          }
        }`,
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns {promise}
 */
export const FinanceTypesQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(FinanceTypesQueryJSON()),
    })