import { MilestoneLinkInsert }  from '../queries/MilestoneLinkInsert';
import { updateProject } from '../features/projectsSlice';

/**
 * Asynchronous action creator that sends a new link creation request to a server.
 * 
 * @param {string} nextId - ID of the next milestone
 * @param {string} previousId - ID of the previous milestone
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