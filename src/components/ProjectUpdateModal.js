import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { ProjectTypesQuery } from '../queries/ProjectTypesQuery';
import { ProjectUpdate } from '../queries/ProjectUpdate';
import { GroupsQuery } from '../queries/GroupsQuery';
import { updateProject } from '../features/projectsSlice';
import { StagesEditTable } from './StagesEditTable';

/**
 * A React component that represents a button for inserting a new project.
 * @returns {JSX.Element} The JSX element representing the project insert button.
 */
export const ProjectUpdateButton = ({project}) => {
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

    /**
     * Fetches the project insert and dispatches the 'addProject' action.
     * @returns {Promise} A promise representing the asynchronous operation.
     */
    const fetchUpdate = async () => {
        try {
            const response = await ProjectUpdate(newProject.id, newProject.name, newProject.lastchange, newProject.startdate, newProject.enddate, newProject.projectType, newProject.team);
            const data = await response.json();
            dispatch(updateProject(data.data.projectUpdate.project));
            setShowModal(false);
        } catch (error) { 
            console.error('Error adding project:', error);
        }
    };

    /**
    * Asynchronous action creator that fetches project types.
    * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
    */
    const ProjectTypesFetchAsync = () => (dispatch, getState) => {
    // Call the ProjectsQuery function to fetch projects
        ProjectTypesQuery()
        .then(response => response.json())
        .then(json => {
            // Extract the projectTypes data from the JSON response
            const projectTypes = json.data?.projectTypePage
            if (projectTypes) {
            setProjectTypes(projectTypes)
            }
            return json
        })
    }

  /**
  * Asynchronous action creator that fetches project types.
  * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
  */
  const GroupsFetchAsync = () => (dispatch, getState) => {
    // Call the ProjectsQuery function to fetch projects
    GroupsQuery()
      .then(response => response.json())
      .then(json => {
        // Extract the groups data from the JSON response
        const groups = json.data?.groupPage
        if (groups) {
          setTeams(groups)
        }
        else {
          console.log("No teams found")
        }
        return json
      })
  }

  return (
    <>
      <button className="btn btn-success btn-sm my-2" onClick={() => {setShowModal(true); dispatch(ProjectTypesFetchAsync()); dispatch(GroupsFetchAsync())}}>
        Edit
      </button>

      {/* modal bottstrap setting */}
      <Modal show={showModal} onHide={() => {setShowModal(false)}}>
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
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-outline-success' onClick={() => {setShowModal(false)}}>
            Close
          </button>
          <button className="btn btn-success" onClick={fetchUpdate}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};