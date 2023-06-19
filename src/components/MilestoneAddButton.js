import { useDispatch } from 'react-redux';
import { MilestoneAsyncInsert } from '../actions/MilestoneAsyncInsert';

/**
 * Renders a button component for adding a milestone.
 * @param {Object} milestone - The milestone object to be added.
 * @param {Function} onClick - The click event handler.
 * @returns {JSX.Element} The rendered component.
 */
export const MilestoneAddButton = ({ milestone, onClick }) => {
  const dispatch = useDispatch();

  return (
    <button className="btn btn-success" onClick={() => { dispatch(MilestoneAsyncInsert(milestone)); onClick(); }}>
      Add
    </button>
  );
};
