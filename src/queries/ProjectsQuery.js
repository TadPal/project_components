import { authorizedFetch } from './authorizedFetch'

/**
 * Funkce, ktera id namapuje na json predstavujici "velky" (podrobny) dotaz na server
 * @returns {json}
 */
const ProjectsQueryJSON = () => ({
    "query":
        `query {
          projectPage{
            id
            name
            lastchange
            startdate
            enddate
            team {
              id
              name
            }
            projectType {
              id
              name
            }
            milestones {
              id
              name
              startdate
              enddate
              lastchange
              nexts { id, name }
              previous { id, name }
            }
          }
        }`,
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns {promise}
 */
export const ProjectsQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(ProjectsQueryJSON()),
    })