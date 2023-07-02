import { authorizedFetch } from './authorizedFetch'


const ProjectMutationJSON = (id, name, lastchange, startdate, enddate, projecttypeId, team) => ({
    "query":
        `mutation (
          $lastchange: DateTime!
          $id: ID!
          $projecttypeId: ID
          $name: String
          $startdate: DateTime
          $enddate: DateTime
          $groupId: ID
        ){
          projectUpdate(
            project: {lastchange: $lastchange, id: $id, name: $name, startdate: $startdate, enddate: $enddate, projecttypeId: $projecttypeId, groupId: $groupId}
          ) {
            msg
            project {
              id
              name
              team {
                id
                name
              }
              projectType {
                id
                name
              }
              startdate
              enddate
              lastchange
            }
          }
        }`,
        variables: {
          lastchange: lastchange,
          id: id,
          name: name,
          startdate: startdate,
          enddate: enddate,
          projecttypeId: projecttypeId,
          groupId: team,
        }
})

/**
 * Performs a project update request to the server using authorizedFetch.
 *
 * @param {string} projectId - The ID of the project to update.
 * @param {string} name - The updated name of the project.
 * @param {string} lastchange - The last change timestamp of the project.
 * @param {string} startdate - The updated start date of the project.
 * @param {string} enddate - The updated end date of the project.
 * @param {string} projecttypeId - The ID of the updated project type.
 * @param {string} team - The ID of the updated group.
 * @returns {Promise<Response>} A promise representing the project update request.
 */
export const ProjectUpdate = (projectId, name, lastchange, startdate, enddate, projecttypeId, team) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(ProjectMutationJSON(projectId, name, lastchange, startdate, enddate, projecttypeId, team)),
    })