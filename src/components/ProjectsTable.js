import { CheckDate } from "../utilities/CheckDate";
import { CardText } from "react-bootstrap-icons";
import React from "react";

/**
 * A table component used to visualize a list of projects.
 * @function
 * @param {Array} props.projects - An array of project objects to be displayed in the table.
 * @param {Function} props.setProject
 * @returns {JSX.Element} - Table component
 */
export const ProjectsTable = ({projects, setProject}) => {
    return (
        <table className="table table-hover table-light">
            <thead className="table-success">
                <tr>
                    <th>Project Name</th>
                    <th>Team</th>
                    <th>Project Type</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {/* Render a ProjectRow component for each project object in the projects array */}
                {projects.map((project) => <ProjectRow key={project.id} project={project} setProject={setProject}/>)}
            </tbody>
        </table>
    )
}

/**
 * A custom table row component used in the ProjectsTable component.
 * @param {Object} props.project - The project object to be displayed in the table row.
 * @param {Function} props.setProject - The function that takes project ID
 * @returns {JSX.Element} - Table row component
 */
const ProjectRow = ({project, setProject}) => {
    // Determine the text color of the row based on whether the submission date is past or not
    const endDate = new Date(project.enddate)
    const rowColor = CheckDate() > endDate ? {color: "#D3D3D3"} : {color: "#000000"};
  
        return (
            // A table row element that displays the project data and sets the text color based on the submission date.
            <tr style={rowColor}>
                <td>{project.name}</td>
                <td>{project.team.name}</td>
                <td>{project.projectType.name}</td>
                <td>{project.startdate.substring(0,10)}</td>
                <td>{project.enddate.substring(0,10)}</td>
                <td><button className="btn btn-sm btn-success mx-1" onClick={() => {setProject(project.id)}}><CardText /> Details</button></td>
            </tr>
        )
}

