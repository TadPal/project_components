import { Modal } from 'react-bootstrap';
import { useState } from "react";
import { MilestoneLinkTable } from './MilestoneLinkTable';
import { ShareFill } from 'react-bootstrap-icons';

/**
 * A React component that represents a button for inserting a new milestone link.
 * @param {Object} props - The component props.
 * @param {Object} props.milestone - The milestone object.
 * @param {Object[]} props.milestones - The array of milestones.
 * @returns {JSX.Element} The JSX element representing the milestone link button.
 */
export const MilestoneLinkButton = ({ milestone, milestones }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="btn btn-outline-success btn-sm" onClick={() => { setShowModal(true) }}>
        <ShareFill />
      </button>

      {/* Bootstrap modal */}
      <Modal className="modal-lg" show={showModal} onHide={() => { setShowModal(false) }}>
        <Modal.Header closeButton>
          <Modal.Title>Next Links: {milestone.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MilestoneLinkTable milestone={milestone} milestones={milestones} />
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-success' onClick={() => { setShowModal(false) }}>
            Done
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
