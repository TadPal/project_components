import { useDispatch } from 'react-redux';
import { MilestoneAsyncUpdate } from '../actions/MilestoneAsyncUpdater';

/**
 * Renders a button component for updating a milestone.
 * @param {Object} props.milestone - The milestone object to be updated.
 * @param {Function} props.onClick - The click event handler.
 * @returns {JSX.Element} The rendered component.
 */
export const MilestoneUpdateButton = ({ milestone, onClick }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(MilestoneAsyncUpdate(milestone)); 
    if (onClick) onClick(); 
  }

  return (
    <button className="btn btn-success" onClick={handleOnClick}>
      Update
    </button>
  );
};
