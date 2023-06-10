import { authorizedFetch } from './authorizedFetch'

const MilestoneLinkRemoveJSON = (next, previous) => ({
    "query":
        `mutation {
            milestonesLinkRemove(
              link: {previousId: "${previous}", nextId: "${next}"}
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
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns 
 */
export const MilestoneLinkRemove = ({next, previous}) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(MilestoneLinkRemoveJSON(next, previous)),
    })