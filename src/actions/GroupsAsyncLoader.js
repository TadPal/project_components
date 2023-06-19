import { GroupsQuery } from '../queries/GroupsQuery';

/**
 * An asynchronous action creator that fetches groups from a server.
 * 
 * @param {Function} setTeams - A function to set the fetched teams/groups.
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const GroupsFetchAsync = ({ setTeams }) => (dispatch, getState) => (
    GroupsQuery()
    .then(response => response.json())
    .then(json => {
        const groups = json.data?.groupPage
        if (groups) {
            setTeams(groups)
        }
        else {
            console.log("No teams found")
        }
        return json
    })
)
