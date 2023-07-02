import { useDispatch } from 'react-redux';
import { ProjectAsyncInsert } from '../actions/ProjectAsyncInserter';
import React from "react";

/**
 * Renders a button component for adding a project.
 * @param {Object} props.project - The project object to be added.
 * @param {Function} props.onClick - The click event handler.
 * @returns {JSX.Element} The rendered component.
 */
export const ProjectAddButton = ({ project, onClick }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(ProjectAsyncInsert(project)); 
    if (onClick) onClick(); 
  }

  return (
    <button className="btn btn-success" onClick={handleOnClick}>
      Add
    </button>
  );
};
