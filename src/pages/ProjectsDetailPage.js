import { useSelector } from 'react-redux';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectGanttChart } from '../components/ProjectGanttChart';

/**
 * A page component that displays the details of a specific project.
 * It renders the ProjectCard and ProjectGanttChart components.
 * 
 * @param {Object} projectDetail - The project details.
 * @param {string} projectDetail.projectId - The ID of the project to display.
 * @returns {JSX.Element} The JSX element representing the ProjectDetailPage component.
 */
export const ProjectDetailPage = ({ projectDetail }) => {
  const projects = useSelector((state) => state.projects);

  return (
    <div>
      <ProjectCard projectId={projectDetail.projectId} projects={projects} />
      <ProjectGanttChart projectId={projectDetail.projectId} projects={projects} />
    </div>
  );
};
