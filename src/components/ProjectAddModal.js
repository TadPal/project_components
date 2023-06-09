import React, { useState } from 'react';
import { ProjectTypesQuery } from '../queries/ProjectTypesQuery';
import { GroupsQuery } from '../queries/GroupsQuery';
import { Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { ProjectAsyncInsert } from '../actions/ProjectAsyncInserter';

/**
 * A React component that represents a button for inserting a new project.
 * @returns {JSX.Element} The JSX element representing the project insert button.
 */
export const ProjectInsertButton = () => {
  const dispatch = useDispatch();

  // showing modal if button pressed
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("Name")
  const [projectType, setProjectType] = useState("a825d8e1-2e60-4884-afdb-25642db581d8")
  const [startDate, setStartDate] = useState("2023-01-01T00:00:00") 
  const [endDate, setEndDate] = useState("2025-12-31T23:59:59")
  const [team, setTeam] = useState("2d9dcd22-a4a2-11ed-b9df-0242ac120003")
  
  const [projectTypes, setProjectTypes] = useState([])
  const [teams, setTeams] = useState([])

    // Creates a new project object with the current state values.
    const newProject = {
      name: name, 
      projectType: projectType, 
      team: team,
      startdate: startDate,
      enddate: endDate,
    }

   // Resets the state values to their default values.
   const resetProject = () => {
    setName("Name")
    setProjectType("a825d8e1-2e60-4884-afdb-25642db581d8")
    setTeam("2d9dcd22-a4a2-11ed-b9df-0242ac120003")
    setStartDate("2023-01-01T00:00:00")
    setEndDate("2025-12-31T23:59:59")
   }

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
        else {
          console.log("No groups found")
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
      <button className="btn btn-outline-success btn-sm my-2" onClick={() => {setShowModal(true); dispatch(ProjectTypesFetchAsync()); dispatch(GroupsFetchAsync())}}>
        New project
      </button>

      {/* modal bottstrap setting */}
      <Modal show={showModal} onHide={() => {setShowModal(false); resetProject()}}>
        <Modal.Header closeButton>
          <Modal.Title>New project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Project name:</Form.Label>
            <Form.Control type="text" placeholder="Enter project name" onChange={(e) => {setName(e.target.value)}} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Type:</Form.Label>
            <Form.Select onChange={(e) => {setProjectType(e.target.value)}}>
              {projectTypes.map((type) => <option key={type.id} value={type.id}>{type.name}</option>)}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Team:
            </Form.Label>
            <Form.Select  onChange={(e) => {setTeam(e.target.value)}}>
              {teams.map((team) => <option key={team.id} value={team.id}>{team.name}</option>)}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Start date:
            </Form.Label>
            <Form.Control type="date" onChange={(e) => {setStartDate(e.target.value)}} />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              End date:
            </Form.Label>
            <Form.Control type="date" onChange={(e) => {setEndDate(e.target.value)}} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-outline-success' onClick={() => {setShowModal(false)}}>
            Close
          </button>
          <button className="btn btn-success" onClick={() => {setShowModal(false); dispatch(ProjectAsyncInsert(newProject))}}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};