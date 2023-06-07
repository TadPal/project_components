import { authorizedFetch } from './authorizedFetch'


const MilestoneUpdateJSON = (lastchange, id, name, startdate, enddate) => ({
    "query":
        `mutation {
            milestoneUpdate(
              milestone: {id: "${id}", lastchange: "${lastchange}", name: "${name}", startdate: "${startdate}", enddate: "${enddate}"}
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
                    nexts {id}
                    previous {id}
                  }
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
export const MilestoneUpdate = (lastchange, id, name, startdate, enddate) =>
  authorizedFetch('/gql', {
    body: JSON.stringify(MilestoneUpdateJSON(lastchange, id, name, startdate, enddate)),
  });
