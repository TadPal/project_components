import { MilestoneLinkAsyncRemove } from "../actions/MilestoneLinkAsyncRemover";
import { useDispatch } from "react-redux";
import React from "react";

/**
 * A React component that represents a button for removing a milestone link.
 * @function
 * @param {boolean} props.disabled - Indicates whether the button is disabled.
 * @param {string} props.previous - The ID of the previous milestone.
 * @param {string} props.next - The ID of the next milestone.
 * @returns {JSX.Element} The JSX element representing the link remove button.
 */
const LinkRemoveButton = ({ disabled, previous, next }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="btn btn-danger btn-sm"
      disabled={disabled}
      onClick={() => {
        dispatch(MilestoneLinkAsyncRemove({ nextId: next, previousId: previous }));
      }}
    >
      <b>-</b>
    </button>
  );
};

export default LinkRemoveButton;