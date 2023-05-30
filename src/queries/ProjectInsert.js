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
 * Performs a project insert request to the server using authorizedFetch.
 *
 * @param {string} projecttypeId - The ID of the project type.
 * @param {string} name - The name of the project.
 * @param {string} startdate - The start date of the project.
 * @param {string} enddate - The end date of the project.
 * @param {string} teamid - The ID of the team associated with the project.
 * @returns {Promise<Response>} A promise representing the project insert request.
 */
export const ProjectInsert = (projecttypeId, name, startdate, enddate, teamid) =>
  authorizedFetch('/gql', {
    body: JSON.stringify(ProjectMutationJSON(projecttypeId, name, startdate, enddate, teamid)),
  });
