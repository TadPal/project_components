import { authorizedFetch } from './authorizedFetch'


const ProjectMutationJSON = (id, name, lastchange, startdate, enddate, projecttypeId, groupId) => ({
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
          groupId: groupId,
        }
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns {promise}
 */
export const ProjectUpdate = (projectId, name, lastchange, startdate, enddate, projecttypeId, groupId) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(ProjectMutationJSON(projectId, name, lastchange, startdate, enddate, projecttypeId, groupId)),
    })