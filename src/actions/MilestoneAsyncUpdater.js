import { MilestoneUpdate }  from '../queries/MilestoneUpdate';
import { updateProject } from '../features/projectsSlice';

/**
 * Asynchronous action creator that fetches projects.
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const MilestoneAsyncUpdate = (milestone) => (dispatch, getState) => {
  MilestoneUpdate(milestone.lastchange, milestone.id, milestone.name, milestone.startdate, milestone.enddate)
      .then(response => response.json())
      .then(json => {
        const message = json.data?.milestoneUpdate.msg
        const project = json.data?.milestoneUpdate.milestone.project;
        if (message === 'ok') {
          dispatch(updateProject(project))
        }
        return json
      })
  }