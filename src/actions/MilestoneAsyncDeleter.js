import { MilestoneDelete }  from '../queries/MilestoneDelete';
import { updateProject } from '../features/projectsSlice';

/**
 * Asynchronous action creator that fetches projects.
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const MilestoneDeleteAsync = () => (dispatch, getState) => {
    MilestoneDelete()
      .then(response => response.json())
      .then(json => {
        const message = json.data?.milestoneDelete.msg
        const project = json.date?.milestoneDelete.milestone.project
        if (message === 'ok') {
        dispatch(updateProject(project))
        }
        return json
      })
  }