import { MilestoneUpdate } from '../queries/MilestoneUpdate';
import { updateProject } from '../features/projectsSlice';

/**
 * Asynchronous action creator that updates a milestone.
 * @param {Object} milestone - The milestone object to update.
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const MilestoneAsyncUpdate = (milestone) => (dispatch, getState) => {
  // Invoke the MilestoneUpdate function to update the milestone
  MilestoneUpdate(milestone.lastchange, milestone.id, milestone.name, milestone.startdate, milestone.enddate)
    .then(response => response.json())
    .then(json => {
      const message = json.data?.milestoneUpdate.msg;
      const project = json.data?.milestoneUpdate.milestone.project;
      if (message === 'ok') {
        // Dispatch the updateProject action with the updated project
        dispatch(updateProject(project));
      }
      return json;
    });
};
