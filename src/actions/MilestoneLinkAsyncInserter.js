import { MilestoneLinkInsert }  from '../queries/MilestoneLinkInsert';
import { updateProject } from '../features/projectsSlice';

/**
 * Asynchronous action creator that fetches projects.
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const MilestoneLinkAsyncInsert = ({nextId, previousId}) => (dispatch, getState) => {
  MilestoneLinkInsert({next: nextId, previous: previousId})
      .then(response => response.json())
      .then(json => {
        const message = json.data?.milestonesLinkAdd.msg
        const project = json.data?.milestonesLinkAdd.milestone.project;
        if (message === 'ok') {
          dispatch(updateProject(project))
        }
        return json
      })
  }