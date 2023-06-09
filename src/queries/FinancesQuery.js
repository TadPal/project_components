import { authorizedFetch } from './authorizedFetch'

/**
 * Funkce, ktera id namapuje na json predstavujici "velky" (podrobny) dotaz na server
 * @returns 
 */
const FinancesQueryJSON = () => ({
    "query":
        `query {
          financePage {
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
        }`,
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns 
 */
export const FinancesQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(FinancesQueryJSON()),
    })