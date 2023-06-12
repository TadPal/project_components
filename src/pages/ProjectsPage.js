import { ProjectsTable } from '../components/ProjectsTable';
import Card from "react-bootstrap/Card";
import { useSelector } from 'react-redux';
import { ProjectInsertButton } from '../components/ProjectAddModal';

/**
 * A page component that renders the ProjectsTable and ShowAddProjectFormButton components.
 * 
 * @returns {JSX.Element} The JSX element that represents the ProjectsPage component.
 */
export const ProjectsPage = () => {
    const projects = useSelector((state) => state.projects)

    if (projects.length > 0) {
        return(
            <div className='container my-2'>
                <Card>
                    <Card.Title className='p-3 text-start'>Projects</Card.Title>
                    <Card.Body>
                        {/* Pass the projects state as props to the ProjectsTable component */}
                        <ProjectsTable projects={projects}/>
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
