import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { PencilSquare } from "react-bootstrap-icons";
import { MilestoneUpdateButton } from './MilestoneUpdateButton';

/**
 * A React component that represents a button for inserting a new project.
 * @param {Object} props.milestone - The milestone object to be updated
 * @returns {JSX.Element} The JSX element representing the project insert button.
 */
export const MilestoneUpdateModalButton = ({milestone}) => {
  // showing modal if button pressed
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState(milestone.name)
  const [startDate, setStartDate] = useState(milestone.startdate) 
  const [endDate, setEndDate] = useState(milestone.enddate)

  const updatedMilestone = {
    lastchange: milestone.lastchange,
    id: milestone.id,
    name: name, 
    startdate: startDate,
    enddate: endDate,
  }

  const handleModalShow = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <button className="btn btn-outline-success btn-sm" onClick={() => {setShowModal(true)}}><PencilSquare /></button>

      {/* modal bottstrap setting */}
      <Modal className="modal-lg" show={showModal} onHide={() => {setShowModal(false)}}>
        <Modal.Header closeButton>
          <Modal.Title>Milestone update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Milestone name:</Form.Label>
            <Form.Control type="text" placeholder={updatedMilestone.name} onChange={(e) => {setName(e.target.value)}} />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Start date:
            </Form.Label>
            <Form.Control type="date" value={updatedMilestone.startdate.substring(0,10)} onChange={(e) => {setStartDate(e.target.value)}} />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              End date:
            </Form.Label>
            <Form.Control type="date" value={updatedMilestone.enddate.substring(0,10)} onChange={(e) => {setEndDate(e.target.value)}} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-outline-success' onClick={() => {setShowModal(false)}}>
            Close
          </button>
          <MilestoneUpdateButton milestone={updatedMilestone} onClick={handleModalShow}/>
        </Modal.Footer>
      </Modal>
    </>
  );
};