import Card from "react-bootstrap/Card";
import { StagesTable } from "./StagesTable";
import { FinancesTable } from "./FinancesTable";
import { ProjectUpdateModalButton } from "./ProjectUpdateModal";
import React from "react";

/**
 * A React component that represents a project card.
 * @param {string} props.projectId - The ID of the project.
 * @param {Object} props.projects - The object containing all projects.
 * @param {Function} props.setProject - The function to update the current project.
 * @param {Array} props.finances - The array of all finances.
 * @returns {JSX.Element} The JSX element representing the project card.
 */
export const ProjectCard = ({projectId, projects, setProject, finances}) => {
    const project = projects.find(p => p.id === projectId)
    const filteredFinances = finances.filter(f => f.project.id === projectId);

    return(
        <div className='container my-3'>
            <div className="row h-100 justify-content-center align-items-center">
                <Card className="p-0" style={{ width: '40rem' }}>
                    <Card.Header className='h3 text-start'>{project.name}<span style={{float: "right"}}><ProjectUpdateModalButton project={project} finances={finances}/></span></Card.Header>
                    <Card.Body>
                    <div style={{textAlign: "left"}}>
                        <Card.Text><b>Start date: </b>{project.startdate.substring(0, 10)}</Card.Text>
                        <Card.Text><b>End date: </b>{project.enddate.substring(0, 10)}</Card.Text>
                        <Card.Text><b>Project type: </b>{project.projectType.name}</Card.Text>
                        <Card.Text><b>Team: </b>{project.team.name}</Card.Text>
                    </div>
                    <div className="my-3">
                        <StagesTable milestones={project.milestones} project={project.id}/>
                        <FinancesTable finances={filteredFinances} />
                    </div>
                    </Card.Body>
                    <Card.Footer>
                        <button className="btn btn-success" onClick={() => setProject(null)}>Back</button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    )
}