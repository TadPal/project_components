import { ProjectsTable } from '../components/ProjectsTable';
import Card from "react-bootstrap/Card";
import { ProjectInsertButton } from '../components/ProjectAddModal';
import React from "react";

/**
 * A page component that renders the ProjectsTable and ShowAddProjectFormButton components.
 * @param {Function} props.setProject - The function to update the current project.
 * @param {Object[]} props.projects - The array of projects.
 * @returns {JSX.Element} The JSX element that represents the ProjectsPage component.
 */
export const ProjectsPage = ({setProject, projects}) => {

    if (projects?.length > 0) {
        return(
            <div className='container my-2'>
                <Card>
                    <Card.Title className='p-3 text-start'>Projects</Card.Title>
                    <Card.Body>
                        {/* Pass the projects state as props to the ProjectsTable component */}
                        <ProjectsTable projects={projects} setProject={setProject}/>
                    </Card.Body>
                </Card>
                <ProjectInsertButton />
            </div>
        )
    }
    else {
        return(
            <div className='container my-5'>
                <b>Loading projects...</b>
            </div>
        )
    }
}
