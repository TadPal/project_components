import { useDispatch } from 'react-redux';
import { MilestoneAsyncInsert } from '../actions/MilestoneAsyncInsert';

/**
 * Renders a button component for adding a milestone.
 * @param {Object} props.milestone - The milestone object to be added.
 * @param {Function} props.onClick - The click event handler.
 * @returns {JSX.Element} The rendered component.
 */
export const MilestoneAddButton = ({ milestone, onClick }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(MilestoneAsyncInsert(milestone)); 
    if (onClick) onClick(); 
  }

  return (
    <button className="btn btn-success" onClick={handleOnClick}>
      Add
    </button>
  );
};
