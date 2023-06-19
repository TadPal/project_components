import { MilestoneDelete } from '../queries/MilestoneDelete';
import { updateProject } from '../features/projectsSlice';

/**
 * An asynchronous action creator that sends a milestone delete request to a server.
 * 
 * @param {string} id - ID of the milestone to delete.
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const MilestoneDeleteAsync = (id) => (dispatch, getState) => (
    MilestoneDelete(id)
      .then(response => response.json())
      .then(json => {
        const message = json.data?.milestoneDelete.msg
        const project = json.data?.milestoneDelete.project
        if (message === 'ok') {
          dispatch(updateProject(project))
        }
        return json
      })
)
