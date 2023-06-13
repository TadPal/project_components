import { Modal } from 'react-bootstrap';
import { useState } from "react";
import { MilestoneLinkTable } from './MilestoneLinkTable';
import { ShareFill } from 'react-bootstrap-icons';

export const MilestoneLinkButton = ({milestone, milestones}) => {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button className="btn btn-outline-success btn-sm" onClick={() => {setShowModal(true)}}>
            <ShareFill />
        </button>
  
        {/* modal bottstrap setting */}
        <Modal className="modal-lg" show={showModal} onHide={() => {setShowModal(false)}}>
          <Modal.Header closeButton>
            <Modal.Title>Next Links: {milestone.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MilestoneLinkTable milestone={milestone} milestones={milestones} />
          </Modal.Body>
          <Modal.Footer>
            <button className='btn btn-success' onClick={() => {setShowModal(false)}}>
              Done
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };