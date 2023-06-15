import { ProjectsQuery }  from '../queries/ProjectsQuery';
import { loadProjects } from '../features/projectsSlice';

/**
 * An asynchronous action creator that fetches projects and dispatches the 'loadProjects' action.
 *
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const ProjectsFetchAsync = () => (dispatch, getState) => {
  // Call the ProjectsQuery function to fetch projects
  ProjectsQuery()
    .then(response => response.json())
    .then(json => {
      // Extract the projects data from the JSON response
      const projects = json.data?.projectPage
      if (projects) {
        // Dispatch the 'loadProjects' action with the fetched projects
        dispatch(loadProjects(projects))
      }
      return json
    })
}