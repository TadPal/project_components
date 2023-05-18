import { authorizedFetch } from './authorizedFetch'

/**
 * Funkce, ktera id namapuje na json predstavujici "velky" (podrobny) dotaz na server
 * @returns 
 */
export const ProjectsQueryJSON = () => ({
    "query":
        `query {
          projectPage{
            id
            name
            lastchange
            startdate
            enddate
            projectType {
              id
            }
            milestones {
              id
            }
          }
        }`,
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns 
 */
export const ProjectsQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(ProjectsQueryJSON()),
    })