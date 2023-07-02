import { ProjectCard } from '../components/ProjectCard';
import { ProjectGanttChart } from '../components/ProjectGanttChart';
import React from "react";

/**
 * A page component that displays the details of a specific project.
 * It renders the ProjectCard and ProjectGanttChart components.
 * 
 * @param {String} props.projectDetail - Id of project that is displayed.
 * @param {Function} props.setProject - Set the project id to display
 * @param {Array} props.projects - An array of project
 * @param {Array} props.finances - An array of finances
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
