import React from "react";
import { Trash } from "react-bootstrap-icons";
import { useState } from "react";

/**
 * A React component that renders a delete button for a stage.
 * @param {string} props.stageId - ID of the stage to be deleted.
 * @param {function} props.onDelete  Call when delete button is clicked
 * @returns {JSX.Element} - The rendered component
 */
const DeleteStageButton = ({ stageId, onDelete }) => {
  const [deleteVisibility, setDeleteVisibility] = useState(false);

  if (deleteVisibility === false) {
    return (
      <button className="btn btn-danger btn-sm mx-1" onClick={() => {setDeleteVisibility(!deleteVisibility)}}><Trash/></button>
    );
  } else {
    return (
      <div className="container">
        <button className="btn btn-outline-danger btn-sm m-1" onClick={() => {setDeleteVisibility(!deleteVisibility)}}>Cancel</button>
        <button className="btn btn-danger btn-sm m-1" onClick={() => {onDelete(stageId)}}>Delete</button>
      </div>   
    );
  }
};

export default DeleteStageButton;
