import { authorizedFetch } from './authorizedFetch'


const ProjectMutationJSON = (projecttypeId, name, startdate, enddate) => ({
    "query":
        `mutation {
            projectInsert(
              project: {projecttypeId: "${projecttypeId}", name: "${name}", startdate: "${startdate}", enddate: "${enddate}"}
            ) {
              id
              msg
                }
              }
            }
          }`,
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns 
 */
export const ProjectInsert = (props) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(ProjectMutationJSON(props.project.id, props.project.name, props.project.startdate, props.project.enddate)),
    })