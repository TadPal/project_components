import { ProjectsTable } from '../components/ProjectsTable';
import { AddProjectButton } from '../components/AddProjectButton';
import Card from "react-bootstrap/Card";
import { useSelector } from 'react-redux';

export const ProjectsPage = () => {
    const projects = useSelector((state) => state.projects)

    return(
        <Card>
            <Card.Title className='p-3 text-start'>First Project Day</Card.Title>
            <Card.Body>
                <ProjectsTable projects={projects}/>
            </Card.Body>
            <Card.Footer>
                <AddProjectButton />
            </Card.Footer>
        </Card>
    )
}