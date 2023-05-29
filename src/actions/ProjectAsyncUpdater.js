import { ProjectUpdate }  from '../queries/ProjectUpdate';
import { updateProject } from '../features/projectsSlice';

/**
 * Asynchronous action creator that fetches projects.
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const ProjectsFetchAsync = () => (dispatch, getState) => {
    ProjectUpdate()
      .then(response => response.json())
      .then(json => {
        const message = json.data?.msg
        const project = json.date?.project
        if (message === 'ok') {
          dispatch(updateProject(project))
        }
        return json
      })
  }