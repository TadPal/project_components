import { useSelector } from 'react-redux';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectGanttChart } from '../components/ProjectGanttChart';

/**
 * A page component that renders the ProjectsTable and ShowAddProjectFormButton components.
 * 
 * @returns {JSX.Element} The JSX element that represents the ProjectsPage component.
 */
export const ProjectDetailPage = ({projectDetail}) => {
    const projects = useSelector((state) => state.projects)

        return(
            <div>
                <ProjectCard projectId={projectDetail.projectId} projects={projects}/>
                <ProjectGanttChart projectId={projectDetail.projectId} projects={projects}/>
            </div>
        )
}