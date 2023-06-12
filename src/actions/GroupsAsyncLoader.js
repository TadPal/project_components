import { GroupsQuery } from '../queries/GroupsQuery';

/**
 * Asynchronous action creator that fetches project types.
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const GroupsFetchAsync = ({setTeams}) => (dispatch, getState) => {
// Call the ProjectsQuery function to fetch projects
GroupsQuery()
    .then(response => response.json())
    .then(json => {
    // Extract the groups data from the JSON response
    const groups = json.data?.groupPage
    if (groups) {
        setTeams(groups)
    }
    else {
        console.log("No teams found")
    }
    return json
    })
}