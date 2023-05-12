import { ProjectsTable } from '../components/ProjectsTable';
import { ShowAddProjectFormButton } from '../components/ShowAddProjectFormButton';
import Card from "react-bootstrap/Card";
import { useSelector } from 'react-redux';

export const ProjectsPage = () => {
    const projects = useSelector((state) => state.projects)

    return(
        <div className='container my-2'>
            <Card>
                <Card.Title className='p-3 text-start'>Projects</Card.Title>
                <Card.Body>
                    <ProjectsTable projects={projects}/>
                </Card.Body>
            </Card>
            <ShowAddProjectFormButton />
        </div>
    )
}