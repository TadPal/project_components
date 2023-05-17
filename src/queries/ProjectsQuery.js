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
              projectType {
                id
                name
              }
              milestones {
                id
                startdate
                enddate
              }
            }
          }`,
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns 
 */
export const ProjectsQuery = () =>
    authorizedFetch('api/gql', {
        body: JSON.stringify(ProjectsQueryJSON()),
    })