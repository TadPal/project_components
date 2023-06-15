import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { MilestoneAsyncInsert } from '../actions/MilestoneAsyncInsert';

/**
 * A React component that represents a button for inserting a new milestone.
 * @param {Object} props - The component props.
 * @param {string} props.projectId - The ID of the project associated with the milestone.
 * @returns {JSX.Element} The JSX element representing the milestone insert button.
 */
export const MilestoneInsertButton = ({ projectId }) => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("Name");
  const [startDate, setStartDate] = useState("2023-01-01T00:00:00");
  const [endDate, setEndDate] = useState("2025-12-31T23:59:59");

  const milestone = {
    name: name,
    project: projectId,
    startdate: startDate,
    enddate: endDate,
  };

  const resetMilestone = () => {
    setName("Name");
    setStartDate("2023-01-01T00:00:00");
    setEndDate("2025-12-31T23:59:59");
  };

  return (
    <>
      <button className="btn btn-success btn-sm" onClick={() => { setShowModal(true) }}>
        Add
      </button>

      <Modal show={showModal} onHide={() => { setShowModal(false); resetMilestone(); }}>
        <Modal.Header closeButton>
          <Modal.Title>New milestone</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Milestone name:</Form.Label>
            <Form.Control type="text" placeholder="Enter milestone name" onChange={(e) => { setName(e.target.value) }} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Start date:</Form.Label>
            <Form.Control type="date" onChange={(e) => { setStartDate(e.target.value) }} />
          </Form.Group>
          <Form.Group>
            <Form.Label>End date:</Form.Label>
            <Form.Control type="date" onChange={(e) => { setEndDate(e.target.value) }} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-outline-success' onClick={() => { setShowModal(false) }}>
            Close
          </button>
          <button className="btn btn-success" onClick={() => { dispatch(MilestoneAsyncInsert(milestone)); setShowModal(false) }}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
