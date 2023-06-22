import { authorizedFetch } from './authorizedFetch'

const MilestoneLinkRemoveJSON = (next, previous) => ({
    "query":
        `mutation (
          $nextId: ID!
          $previousId: ID!
        ){
            milestonesLinkRemove(
              link: {previousId: $previousId, nextId: $nextId}
            ) {
              id
              msg
              milestone {
                project {
                  id
                  milestones {
                    id
                    name
                    startdate
                    enddate
                    lastchange
                    nexts {
                      id
                      name
                    }
                    previous {
                      id
                      name
                    }
                  }
                }
              }
            }
          }`,
          variables: {
            nextId: next,
            previousId: previous,
          }
})

/**
 * Performs a milestone link remove request to the server using authorizedFetch.
 *
 * @param {Object} props - The props for milestone link remove.
 * @param {string} props.next - The ID of the next milestone.
 * @param {string} props.previous - The ID of the previous milestone.
 * @returns {Promise<Response>} A promise representing the milestone link remove request.
 */
export const MilestoneLinkRemove = ({next, previous}) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(MilestoneLinkRemoveJSON(next, previous)),
    })