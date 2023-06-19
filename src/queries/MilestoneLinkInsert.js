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
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns {promise}
 */
export const MilestoneLinkInsert = ({next, previous}) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(MilestoneLinkInsertJSON(next, previous)),
    })