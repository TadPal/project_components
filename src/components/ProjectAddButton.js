import { useDispatch } from 'react-redux';
import { ProjectAsyncInsert } from '../actions/ProjectAsyncInserter';

/**
 * Renders a button component for adding a project.
 * @param {Object} project - The project object to be added.
 * @param {Function} onClick - The click event handler.
 * @returns {JSX.Element} The rendered component.
 */
export const ProjectAddButton = ({ project, onClick }) => {
  const dispatch = useDispatch();

  return (
    <button className="btn btn-success" onClick={() => { dispatch(ProjectAsyncInsert(project)); onClick(); }}>
      Add
    </button>
  );
};
