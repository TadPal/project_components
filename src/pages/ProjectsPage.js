import { ProjectsTable } from '../components/ProjectsTable';
import Card from "react-bootstrap/Card";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ProjectsFetchAsync } from '../actions/ProjectAsyncLoader';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectInsertButton } from '../components/ProjectAddModal';

/**
 * A page component that renders the ProjectsTable and ShowAddProjectFormButton components.
 * 
 * @returns {JSX.Element} The JSX element that represents the ProjectsPage component.
 */
export const ProjectsPage = () => {
    // Extract the projects state from Redux store using the useSelector hook
    const projects = useSelector((state) => state.projects)
    const projectDetail = useSelector((state) => state.display.projectDetail)
    const dispatch = useDispatch();
    
    useEffect(
        () => {
        dispatch(ProjectsFetchAsync())
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []
    )

    if (projectDetail.display) {
        return(
            <ProjectCard project={projectDetail.project}/>
        )  
    }
    else {
        return(
            <div className='container my-2'>
                <Card>
                    <Card.Title className='p-3 text-start'>Projects</Card.Title>
                    <Card.Body>
                        {/* Pass the projects state as props to the ProjectsTable component */}
                        <ProjectsTable projects={projects}/>
                    </Card.Body>
                </Card>
                {/* Render the ShowAddProjectFormButton component */}
                <ProjectInsertButton />
            </div>
        )
    }
}
