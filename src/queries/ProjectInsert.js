import { authorizedFetch } from './authorizedFetch'


const ProjectMutationJSON = (projecttypeId, name, startdate, enddate, groupId) => ({
    "query":
        `mutation {
            projectInsert(
              project: {projecttypeId: "${projecttypeId}", name: "${name}", startdate: "${startdate}", enddate: "${enddate}", groupId: "${groupId}"}
            ) {
              id
              msg
              project {
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
                }
              }
            }
          }`,
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns 
 */
export const ProjectInsert = (projecttypeId, name, startdate, enddate, teamid) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(ProjectMutationJSON(projecttypeId, name, startdate, enddate, teamid)),
    })