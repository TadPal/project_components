import { authorizedFetch } from './authorizedFetch'

/**
 * Funkce, ktera id namapuje na json predstavujici "velky" (podrobny) dotaz na server
 * @returns {json}
 */
const ProjectTypesQueryJSON = () => ({
    "query":
        `query {
          projectTypePage {
            id 
            name
          }
        }`,
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns {promise}
 */
export const ProjectTypesQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(ProjectTypesQueryJSON()),
    })