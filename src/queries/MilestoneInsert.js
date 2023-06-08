import { authorizedFetch } from './authorizedFetch'


const MilestoneInsertJSON = (projectId, name, startdate, enddate) => ({
    "query":
        `mutation {
            milestoneInsert(
              milestone: {name: "${name}", projectId: "${projectId}", startdate: "${startdate}", enddate: "${enddate}"}
            ) {
              id
              msg
              milestone {
                project {
                  id
                  milestones {
                    id
                    name
                    lastchange
                    enddate
                    startdate
                    nexts {id, name}
                    previous {id, name}
                  }
                }
              }
            }
          }`,
})

/**
 * Performs a milestone insert request to the server using authorizedFetch.
 *
 * @param {string} projectId - The ID of the project to insert the milestone into.
 * @param {string} name - The name of the milestone.
 * @param {string} startdate - The start date of the milestone.
 * @param {string} enddate - The end date of the milestone.
 * @returns {Promise<Response>} A promise representing the milestone insert request.
 */
export const MilestoneInsert = (projectId, name, startdate, enddate) =>
  authorizedFetch('/gql', {
    body: JSON.stringify(MilestoneInsertJSON(projectId, name, startdate, enddate)),
  });
