import { authorizedFetch } from './authorizedFetch'

const MilestoneLinkInsertJSON = (next, previous) => ({
    "query":
        `mutation {
            milestonesLinkAdd(
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
export const MilestoneLinkInsert = ({next, previous}) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(MilestoneLinkInsertJSON(next, previous)),
    })