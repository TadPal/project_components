import { CheckDate } from "../utilities/CheckDate";
import { PencilSquare } from "react-bootstrap-icons";
import { useState } from "react"

/**
 * A table component used to visualize a list of projects.
 * @param {Array} projects - An array of project objects to be displayed in the table.
 * 
 * @returns {JSX.Element} - Table component
 */
export const ProjectsTable = ({projects}) => {
    return (
        <table className="table table-hover table-light">
            <thead className="table-success">
                <tr>
                    <th>Project Name</th>
                    <th>Description</th>
                    <th>Project manager</th>
                    <th>Budget</th>
                    <th>Submission date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {/* Render a ProjectRow component for each project object in the projects array */}
                {projects.map((project) => <ProjectRow key={project.id} project={project}/>)}
            </tbody>
        </table>
    )
}

/**
 * A custom table row component used in the ProjectsTable component.
 * @param {Object} project - The project object to be displayed in the table row.
 * 
 * @returns {JSX.Element} - Table row component
 */
const ProjectRow = ({project}) => {
    const subDate = new Date(project.submissionDate)
    // Determine the text color of the row based on whether the submission date is past or not
    const rowColor = CheckDate() > subDate ? {color: "#D3D3D3"} : {color: "#000000"};

    const [ editState, setEditState ] = useState(false)

    if(editState) {
        return (
            // A table row element that displays the project data and sets the text color based on the submission date.
            <tr style={rowColor}>
                <td><input className="form-control" type="text" placeholder={project.name} /></td>
                <td><input className="form-control" type="text" placeholder={project.description} /></td>
                <td><input className="form-control" type="text" placeholder={project.manager} /></td>
                <td><input className="form-control" type="text" placeholder={project.budget} /></td>
                <td><input className="form-control" type="text" placeholder={project.budget} /></td>
                <td><button className="btn btn-sm btn-success" onClick={() => {setEditState(!editState)}}>Save</button></td>
            </tr>
        )
    }
    else {
        return (
            // A table row element that displays the project data and sets the text color based on the submission date.
            <tr style={rowColor}>
                <td>{project.name}</td>
                <td>{project.description}</td>
                <td>{project.manager}</td>
                <td>{project.budget}</td>
                <td>{project.submissionDate}</td>
                <td><button className="btn btn-sm btn-success"><PencilSquare /> Update</button></td>
            </tr>
        )
    }
}

