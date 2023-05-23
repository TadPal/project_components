import { authorizedFetch } from './authorizedFetch'


const ProjectsMutationJSON = (project) => ({
    "query":
        `mutation {
          projectUpdate(
            project: {
              lastchange: ${project.lastchange}, 
              id: ${project.id}, 
              name: ${project.name}
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
export const ProjectsUpdateMutation = ({UpdatedProject}) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(ProjectsMutationJSON(project={UpdatedProject})),
    })