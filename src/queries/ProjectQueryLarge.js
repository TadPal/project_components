import { authorizedFetch } from './authorizedFetch'

/**
 * Funkce, ktera id namapuje na json predstavujici "velky" (podrobny) dotaz na server
 * @param {*} id 
 * @returns 
 */
export const ProjectQueryLargeJSON = (id) => ({
    "query":
        ` `,
    "variables": {"id": id}
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @param {*} id 
 * @returns 
 */
export const ProjectQueryLarge = (id) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(ProjectQueryLargeJSON(id)),
    })