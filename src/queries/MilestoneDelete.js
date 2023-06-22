import { authorizedFetch } from './authorizedFetch'


const MilestoneDeleteJSON = (id) => ({
    "query":
        `mutation (
          $id: ID!
        ){
            milestoneDelete(id: $id) 
          { 
            id
            msg
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
          }`,
          variables: {
            id: id,
          }
})

/**
 * Performs a milestone delete request to the server using authorizedFetch.
 *
 * @param {string} id - The ID of the milestone to delete.
 * @returns {Promise<Response>} A promise representing the milestone delete request.
 */
export const MilestoneDelete = (id) =>
  authorizedFetch('/gql', {
    body: JSON.stringify(MilestoneDeleteJSON(id)),
  });
