import { useDispatch } from 'react-redux';
import { MilestoneAsyncUpdate } from '../actions/MilestoneAsyncUpdater';

/**
 * Renders a button component for updating a milestone.
 * @param {Object} milestone - The milestone object to be updated.
 * @param {Function} onClick - The click event handler.
 * @returns {JSX.Element} The rendered component.
 */
export const MilestoneUpdateButton = ({ milestone, onClick }) => {
  const dispatch = useDispatch();

  return (
    <button className="btn btn-success" onClick={() => { dispatch(MilestoneAsyncUpdate(milestone)); onClick(); }}>
      Update
    </button>
  );
};
