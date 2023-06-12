import { ProjectTypesQuery } from '../queries/ProjectTypesQuery';

/**
* Asynchronous action creator that fetches project types.
* @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
*/
export const ProjectTypesFetchAsync = ({setProjectTypes}) => (dispatch, getState) => {
    // Call the ProjectsQuery function to fetch projects
        ProjectTypesQuery()
        .then(response => response.json())
        .then(json => {
            // Extract the projectTypes data from the JSON response
            const projectTypes = json.data?.projectTypePage
            if (projectTypes) {
            setProjectTypes(projectTypes)
            }
            return json
        })
    }