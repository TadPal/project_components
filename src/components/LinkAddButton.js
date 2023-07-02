import { MilestoneLinkAsyncInsert } from "../actions/MilestoneLinkAsyncInserter";
import { useDispatch } from "react-redux";
import React from "react";

/**
 * A React component that represents a button for adding a milestone link.
 * @param {boolean} props.disabled - Indicates whether the button is disabled.
 * @param {string} props.previous - The ID of the previous milestone.
 * @param {string} props.next - The ID of the next milestone.
 * @returns {JSX.Element} The JSX element representing the link add button.
 */
const LinkAddButton = ({ disabled, previous, next }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="btn btn-success btn-sm"
      disabled={disabled}
      onClick={() => {
        dispatch(MilestoneLinkAsyncInsert({ nextId: next, previousId: previous }));
      }}
    >
      <b>+</b>
    </button>
  );
};

export default LinkAddButton;