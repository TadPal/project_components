import { authorizedFetch } from './authorizedFetch'


const ProjectMutationJSON = (id, name, lastchange, startdate, enddate, projecttypeId) => ({
    "query":
        `mutation {
          projectUpdate(
            project: {lastchange: "${lastchange}", id: "${id}", name: "${name}", startdate: "${startdate}", enddate: "${enddate}", projecttypeId: "${projecttypeId}"}
          ) {
            msg
            project {
              id
              name
              projectType {
                id
                name
              }
              startdate
              enddate
              lastchange
              finances {
                id
                name
                amount
                lastchange
              }
              milestones {
                id
                name
                startdate
                enddate
              }
            }
          }
        }`,
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns 
 */
export const ProjectUpdate = (props) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(ProjectMutationJSON(props.project.id, props.project.name, props.project.lastchange, props.project.startdate, props.project.enddate, props.project.projectType.id)),
    })