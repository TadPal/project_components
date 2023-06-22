import { ProjectTypesQuery } from '../queries/ProjectTypesQuery';

/**
 * An asynchronous action creator that fetches project types.
 * 
 * @param {Function} props.setProjectTypes - A function to set the fetched project types.
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const ProjectTypesFetchAsync = ({ setProjectTypes }) => (dispatch, getState) => (
  // Call the ProjectTypesQuery function to fetch project types
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
)
