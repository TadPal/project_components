import { authorizedFetch } from './authorizedFetch'


const MilestoneDeleteJSON = (id) => ({
    "query":
        `mutation {
            milestoneDelete(id: "${id}") 
          { 
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
                  nexts {id}
                  previous {id}
                }
              }
            }
          }`,
})

/**
 * Performs a milestone update request to the server using authorizedFetch.
 *
 * @param {string} lastchange - The last change timestamp of the milestone.
 * @param {string} id - The ID of the milestone.
 * @param {string} name - The name of the milestone.
 * @param {string} startdate - The start date of the milestone.
 * @param {string} enddate - The end date of the milestone.
 * @returns {Promise<Response>} A promise representing the milestone update request.
 */
export const MilestoneDelete = (id) =>
  authorizedFetch('/gql', {
    body: JSON.stringify(MilestoneDeleteJSON(id)),
  });
