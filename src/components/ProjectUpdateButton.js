import { useDispatch } from 'react-redux';
import { ProjectUpdateAsync } from '../actions/ProjectAsyncUpdater';
import React from "react";

/**
 * Renders a button component for updating a project.
 * @param {Object} project - The project object to be updated.
 * @param {Function} onClick - The click event handler.
 * @returns {JSX.Element} The rendered component.
 */
export const ProjectUpdateButton = ({ project, onClick }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(ProjectUpdateAsync({project}));

    if (onClick) onClick();
  }

  return (
    <button className="btn btn-success" onClick={handleOnClick}>
      Update
    </button>
  );
};
