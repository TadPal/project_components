import { MilestoneInsert }  from '../queries/MilestoneInsert';
import { updateProject } from '../features/projectsSlice';

/**
 * Asynchronous action creator that fetches projects.
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const MilestoneAsyncInsert = (milestone) => (dispatch, getState) => {
  MilestoneInsert(milestone.project, milestone.name, milestone.startdate, milestone.enddate)
      .then(response => response.json())
      .then(json => {
        const message = json.data?.milestoneInsert.msg
        const project = json.data?.milestoneInsert.milestone.project;
        if (message === 'ok') {
          dispatch(updateProject(project))
        }
        return json
      })
  }