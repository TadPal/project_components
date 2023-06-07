import { ProjectUpdate }  from '../queries/ProjectUpdate';
import { updateProject } from '../features/projectsSlice';

/**
 * Asynchronous action creator that fetches projects.
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const ProjectUpdaterAsync = (projectId, name, lastchange, startdate, enddate, projecttypeId, groupId) => (dispatch, getState) => {
    ProjectUpdate(projectId, name, lastchange, startdate, enddate, projecttypeId, groupId)
      .then(response => response.json())
      .then(json => {
        const message = json.data?.projectUpdate.msg
        const project = json.data?.projectUpdate.project
        if (message === 'ok') {
          dispatch(updateProject(project))
        }
        return json
      })
  }