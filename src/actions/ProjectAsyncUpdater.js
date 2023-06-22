import { ProjectUpdate } from '../queries/ProjectUpdate';
import { updateProject } from '../features/projectsSlice';

/**
 * An asynchronous action creator that updates a project.
 * 
 * @param {string} projectId - ID of the project to update.
 * @param {string} name - New name of the project.
 * @param {string} lastchange - Last change date of the project.
 * @param {string} startdate - Start date of the project.
 * @param {string} enddate - End date of the project.
 * @param {string} projecttypeId - ID of the project type.
 * @param {string} groupId - ID of the group associated with the project.
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const ProjectUpdateAsync = ({project}) => (dispatch, getState) => {
  console.log(project);
  return (
  ProjectUpdate(project.id, project.name, project.lastchange, project.startdate, project.enddate, project.projectType, project.groupId)
    .then(response => response.json())
    .then(json => {
      const message = json.data?.projectUpdate.msg
      const project = json.data?.projectUpdate.project
      if (message === 'ok') {
        dispatch(updateProject(project))
      }
      return json
    })
)}
