import { Gantt } from 'gantt-task-react';
import Card from "react-bootstrap/Card";
import "gantt-task-react/dist/index.css";
import React from "react";
// Using MaTeMaTuK library https://github.com/MaTeMaTuK/gantt-task-react

/**
 * A React component that represents a Gantt chart for a project.
 * @param {Array} props.projects - The array of all projects.
 * @param {string} props.projectId - The ID of the project.
 * @returns {JSX.Element} The JSX element representing the Gantt chart.
 */
export const ProjectGanttChart = ({ projects, projectId }) => {
  // Find the project with the matching projectId from the projects array
  const project = projects.find((p) => p.id === projectId);

  // Create the tasks array for the Gantt chart
  const mainProject = {
    start: new Date(project.startdate),
    end: new Date(project.enddate),
    name: project.name,
    id: project.id,
    type: 'project',
    progress: 0,
  };

  let tasks = project.milestones.map((milestone) => ({
    start: new Date(milestone.startdate),
    end: new Date(milestone.enddate),
    name: milestone.name,
    id: milestone.id,
    type: 'task',
    progress: 0,
    dependencies: milestone.previous.map((previous) => previous.id),
  }));
  
  tasks = [mainProject, ...tasks];

  return (
    <div className='container my-5'>
      <Card>
        <Card.Header className='h3 text-start'>
          Gantt Chart
        </Card.Header>
        <Gantt tasks={tasks} viewMode={"Week"} />
      </Card>
    </div>
  );
}
