import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { FinanceTypesFetchAsync } from '../actions/FinanceTypesAsyncLoader';
import { CurrencyExchange } from "react-bootstrap-icons";
import { FinanceSplitButton } from './FinanceSplitButton';

/**
 * A React component that represents a button for inserting a new finance.
 * @param {Object} props.finance - The finance object to be split.
 * @returns {JSX.Element} The JSX element representing the finance split button.
 */
export const FinanceSplitModalButton = ({ finance }) => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState("Splited Finance");
  const [financeType, setFinanceType] = useState(finance.financeType.id);
  const [newAmount, setNewAmount] = useState(0);

  const [financeTypes, setFinanceTypes] = useState([]);

  /**
   * Handles the response from fetching finance types.
   * @param {Array} financeTypes - The fetched finance types.
   */
  const handleTypesRequest = (financeTypes) => {
    setFinanceTypes(financeTypes);
  }

  const handleModalShow = () => {
    setShowModal(!showModal);
  }

  const newFinance = {
    name: newName,
    type: financeType,
    amount: newAmount,
  };

  return (
    <>
      <button className="btn btn-outline-success btn-sm" onClick={() => { dispatch(FinanceTypesFetchAsync({ setFinanceTypes: handleTypesRequest })); setShowModal(true) }}>
        <CurrencyExchange />
      </button>

      <Modal className="modal-lg" show={showModal} onHide={() => { setShowModal(false) }}>
        <Modal.Header closeButton>
          <Modal.Title>Split finance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label className='mt-2'><b>Finance to be split: </b>{finance.name}</Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label className='mt-2'><b>Amount available: </b>{finance.amount}</Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label className='mt-2'><b>New finance name:</b></Form.Label>
            <Form.Control type="text" placeholder={"Splited finance"} onChange={(e) => { setNewName(e.target.value) }} />
          </Form.Group>
          <Form.Group>
            <Form.Label className='mt-2'><b>New finance type:</b></Form.Label>
            <Form.Select value={finance.financeType.id} onChange={(e) => { setFinanceType(e.target.value) }}>
              {financeTypes.map((type) => <option key={type.id} value={type.id}>{type.name}</option>)}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label className='mt-2'><b>Amount to be transferred:</b></Form.Label>
            <Form.Control type="number" placeholder={0} onChange={(e) => { setNewAmount(e.target.value) }} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-outline-success' onClick={() => { setShowModal(false) }}>
            Close
          </button>
          <FinanceSplitButton finance={finance} newFinance={newFinance} onClick={handleModalShow} />
        </Modal.Footer>
      </Modal>
    </>
  );
};
