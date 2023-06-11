import { MilestoneLinkRemove }  from '../queries/MilestoneLinkRemove';
import { updateProject } from '../features/projectsSlice';

/**
 * Asynchronous action creator that fetches projects.
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const MilestoneAsyncRemove = ({nextId, previousId}) => (dispatch, getState) => {
  MilestoneLinkRemove({next: nextId, previous: previousId})
      .then(response => response.json())
      .then(json => {
        const message = json.data?.milestoneLinkRemove.msg
        const project = json.data?.milestoneLinkRemove.milestone.project;
        if (message === 'ok') {
          dispatch(updateProject(project))
        }
        return json
      })
  }