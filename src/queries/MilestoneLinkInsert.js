import { authorizedFetch } from './authorizedFetch'


const MilestoneLinkInsertJSON = (next, previous) => ({
    "query":
        `mutation (
          $nextId: ID!
          $previousId: ID!
        ){
            milestonesLinkAdd(
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
 * Performs a milestone link insert request to the server using authorizedFetch.
 *
 * @param {Object} props - The props for milestone link insertion.
 * @param {string} props.next - The ID of the next milestone.
 * @param {string} props.previous - The ID of the previous milestone.
 * @returns {Promise<Response>} A promise representing the milestone link insert request.
 */
export const MilestoneLinkInsert = ({next, previous}) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(MilestoneLinkInsertJSON(next, previous)),
    })