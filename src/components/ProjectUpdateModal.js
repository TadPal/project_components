import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { StagesEditTable } from './StagesEditTable';
import { ProjectUpdaterAsync } from '../actions/ProjectAsyncUpdater';
import { ProjectTypesFetchAsync } from '../actions/ProjectTypesAsyncLoader';
import { GroupsFetchAsync } from '../actions/GroupsAsyncLoader';
import { FinancesEditTable } from './FinancesEditTable';

/**
 * A React component that represents a button for inserting a new project.
 * @returns {JSX.Element} The JSX element representing the project insert button.
 */
export const ProjectUpdateButton = ({project, finances}) => {
  const dispatch = useDispatch();

  // showing modal if button pressed
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState(project.name)
  const [projectType, setProjectType] = useState(project.projectType.id)
  const [startDate, setStartDate] = useState(project.startdate) 
  const [endDate, setEndDate] = useState(project.enddate)
  const [team, setTeam] = useState(project.team.id)
  
  const [projectTypes, setProjectTypes] = useState([])
  const [teams, setTeams] = useState([])

    // Creates a new project object with the current state values.
    const newProject = {
      id: project.id,
      name: name, 
      projectType: projectType, 
      team: team,
      startdate: startDate,
      enddate: endDate,
      lastchange: project.lastchange,
    }

    const handleTypesRequest = (projectTypes) => {
      setProjectTypes(projectTypes)
    }

    const handleGroupRequest = (groups) => {
      setTeams(groups)
    }

  return (
    <>
      <button className="btn btn-success btn-sm my-2" onClick={() => {setShowModal(true); dispatch(ProjectTypesFetchAsync({setProjectTypes: handleTypesRequest})); dispatch(GroupsFetchAsync({setTeams: handleGroupRequest}))}}>
        Edit
      </button>

      {/* modal bottstrap setting */}
      <Modal className="modal-lg" show={showModal} onHide={() => {setShowModal(false)}}>
        <Modal.Header closeButton>
          <Modal.Title>New project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Project name:</Form.Label>
            <Form.Control type="text" placeholder={newProject.name} onChange={(e) => {setName(e.target.value)}} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Type:</Form.Label>
            <Form.Select value={newProject.projectType} onChange={(e) => {setProjectType(e.target.value)}}>
              {projectTypes.map((type) => <option key={type.id} value={type.id}>{type.name}</option>)}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Team:
            </Form.Label>
            <Form.Select value={newProject.team} onChange={(e) => {setTeam(e.target.value)}}>
              {teams.map((team) => <option key={team.id} value={team.id}>{team.name}</option>)}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Start date:
            </Form.Label>
            <Form.Control type="date" value={newProject.startdate.substring(0,10)} onChange={(e) => {setStartDate(e.target.value)}} />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              End date:
            </Form.Label>
            <Form.Control type="date" value={newProject.enddate.substring(0,10)} onChange={(e) => {setEndDate(e.target.value)}} />
          </Form.Group>
          <Form.Group className='my-2'>
            <StagesEditTable milestones={project.milestones} project={project.id}/>
          </Form.Group>
          <Form.Group className='my-2'>
            <FinancesEditTable finances={finances} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-outline-success' onClick={() => {setShowModal(false)}}>
            Close
          </button>
          <button className="btn btn-success" onClick={() => {dispatch(ProjectUpdaterAsync(newProject.id, newProject.name, newProject.lastchange, newProject.startdate, newProject.enddate, newProject.projectType, newProject.team)); setShowModal(false);}}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};