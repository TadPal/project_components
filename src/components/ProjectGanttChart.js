import { Gantt } from 'gantt-task-react';
import Card from "react-bootstrap/Card";
import "gantt-task-react/dist/index.css";
// Using MaTeMaTuK library https://github.com/MaTeMaTuK/gantt-task-react

export const ProjectGanttChart = ({projects, projectId}) => {
    const project = projects.find(p => p.id === projectId)
    
    const mainProject = {start: new Date(project.startdate), end: new Date(project.enddate), name: project.name, id: project.id, type: 'project', progress: 0};
    let tasks = project.milestones.map((milestone) => ({start: new Date(milestone.startdate), end: new Date(milestone.enddate), name: milestone.name, id: milestone.id, type: 'task', progress: 0, dependencies: milestone.previous.map((previous) => (previous.id))}))
    tasks = [mainProject, ...tasks]

    return(
        <div className='container my-5'>
            <Card>
                <Card.Header className='h3 text-start'>
                    Ganttův Diagram
                </Card.Header>
                <Gantt tasks={tasks} viewMode={"Week"}/>
            </Card>
        </div>

    )
}