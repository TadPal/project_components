import { authorizedFetch } from './authorizedFetch'


const ProjectsMutationJSON = (id, name, lastchange) => ({
    "query":
        `mutation {
          projectUpdate(
            project: {
              lastchange: "${lastchange}", 
              id: "${id}", 
              name: "${name}"
            })
            {
              id
              msg
              project {
                id
                name
                enddate
                startdate
                lastchange
            }
          }
        }`,
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns 
 */
export const ProjectsUpdateMutation = (props) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(ProjectsMutationJSON(props.project.id, props.project.name, props.project.lastchange)),
    })