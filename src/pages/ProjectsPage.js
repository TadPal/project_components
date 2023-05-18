import { ProjectsTable } from '../components/ProjectsTable';
import { ShowAddProjectFormButton } from '../components/ShowAddProjectFormButton';
import Card from "react-bootstrap/Card";
import { useSelector } from 'react-redux';
import { ProjectsLoader } from '../actions/ProjectAsyncLoader';

/**
 * A page component that renders the ProjectsTable and ShowAddProjectFormButton components.
 * 
 * @returns {JSX.Element} The JSX element that represents the ProjectsPage component.
 */
export const ProjectsPage = () => {
    // Extract the projects state from Redux store using the useSelector hook
    const projects = useSelector((state) => state.projects)

    return(
        <div className='container my-2'>
        <ProjectsLoader />
            <Card>
                <Card.Title className='p-3 text-start'>Projects</Card.Title>
                <Card.Body>
                    {/* Pass the projects state as props to the ProjectsTable component */}
                    <ProjectsTable projects={projects}/>
                </Card.Body>
            </Card>
            {/* Render the ShowAddProjectFormButton component */}
            <ShowAddProjectFormButton />
        </div>
    )
}
