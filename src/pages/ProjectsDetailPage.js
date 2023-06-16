import { ProjectCard } from '../components/ProjectCard';
import { ProjectGanttChart } from '../components/ProjectGanttChart';

/**
 * A page component that displays the details of a specific project.
 * It renders the ProjectCard and ProjectGanttChart components.
 * 
 * @param {String} projectDetail - Id of project that is displayed.
 * @param {Function} setProject - Set the project id to display
 * @returns {JSX.Element} The JSX element representing the ProjectDetailPage component.
 */
export const ProjectDetailPage = ({ projectDetail, setProject, projects, finances }) => {

  return (
    <div>
      <ProjectCard setProject={setProject} projectId={projectDetail} projects={projects} finances={finances}/>
      <ProjectGanttChart projectId={projectDetail} projects={projects} />
    </div>
  );
};
