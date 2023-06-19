import { MilestoneLinkRemove }  from '../queries/MilestoneLinkRemove';
import { updateProject } from '../features/projectsSlice';

/**
 * Asynchronous action creator that sends a link removal request to a server.
 * 
 * @param {string} nextId - ID of the next milestone
 * @param {string} previousId - ID of the previous milestone
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const MilestoneLinkAsyncRemove = ({nextId, previousId}) => (dispatch, getState) => (
  MilestoneLinkRemove({next: nextId, previous: previousId})
      .then(response => response.json())
      .then(json => {
        const message = json.data?.milestonesLinkRemove.msg
        const project = json.data?.milestonesLinkRemove.milestone.project;
        if (message === 'ok') {
          dispatch(updateProject(project))
        }
        return json
      })
)