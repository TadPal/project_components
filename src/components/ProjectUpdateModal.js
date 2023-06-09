import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { StagesEditTable } from './StagesEditTable';
import { ProjectUpdateButton } from './ProjectUpdateButton';
import { ProjectTypesFetchAsync } from '../actions/ProjectTypesAsyncLoader';
import { GroupsFetchAsync } from '../actions/GroupsAsyncLoader';
import { FinancesEditTable } from './FinancesEditTable';
import ProjectNameInput from './ProjectNameInput';
import ProjectTypeSelect from './ProjectTypeSelect';

/**
 * A React component that represents a button for updating a project.
 * @function
 * @param {Object} props.project - The project object to be updated.
 * @param {Array} props.finances - The array of financial data for the project.
 * @returns {JSX.Element} The JSX element representing the project update button.
 */
export const ProjectUpdateModalButton = ({ project, finances }) => {
  const dispatch = useDispatch();

  // Showing modal if button pressed
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState(project.name);
  const [projectType, setProjectType] = useState(project.projectType.id);
  const [startDate, setStartDate] = useState(project.startdate);
  const [endDate, setEndDate] = useState(project.enddate);
  const [team, setTeam] = useState(project.team.id);

  const [projectTypes, setProjectTypes] = useState([]);
  const [teams, setTeams] = useState([]);

  // Creates a new project object with the current state values.
  const newProject = {
    id: project.id,
    name: name,
    projectType: projectType,
    team: team,
    startdate: startDate,
    enddate: endDate,
    lastchange: project.lastchange,
  };

  const handleTypesRequest = (projectTypes) => {
    setProjectTypes(projectTypes);
  };

  const handleGroupRequest = (groups) => {
    setTeams(groups);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleSetName = (name) => {
    setName(name)
  };

  const handleTypeChange = (type) => {
    setProjectType(type);
  }

  return (
    <>
      <button
        className="btn btn-success btn-sm my-2"
        onClick={() => {
          setShowModal(true);
          dispatch(
            ProjectTypesFetchAsync({ setProjectTypes: handleTypesRequest })
          );
          dispatch(GroupsFetchAsync({ setTeams: handleGroupRequest }));
        }}
      >
        Edit
      </button>

      {/* Modal bootstrap settings */}
      <Modal className="modal-lg" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Project name:</Form.Label>
            <ProjectNameInput placeholder={name} onChange={handleSetName}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Type:</Form.Label>
            <ProjectTypeSelect onChange={handleTypeChange} value ={projectType} types={projectTypes}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Team:</Form.Label>
            <Form.Select
              value={team}
              onChange={(e) => {
                setTeam(e.target.value);
              }}
            >
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Start date:</Form.Label>
            <Form.Control
              type="date"
              value={newProject.startdate.substring(0, 10)}
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>End date:</Form.Label>
            <Form.Control
              type="date"
              value={newProject.enddate.substring(0, 10)}
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="my-2">
            <StagesEditTable milestones={project.milestones} project={project.id} />
          </Form.Group>
          <Form.Group className="my-2">
            <FinancesEditTable finances={finances} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-outline-success" onClick={() => handleShowModal()}>
            Close
          </button>
          <ProjectUpdateButton onClick={handleShowModal} project={newProject}/>
        </Modal.Footer>
      </Modal>
    </>
  );
};
