import { CheckDate } from "../utilities/CheckDate";
import { PencilSquare, XLg, Check2Square } from "react-bootstrap-icons";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { updateProject } from "../features/projectsSlice";

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
                    <th>Project Type</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Last Change</th>
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
    // Determine the text color of the row based on whether the submission date is past or not
    const endDate = new Date(project.enddate)
    const rowColor = CheckDate() > endDate ? {color: "#D3D3D3"} : {color: "#000000"};

    const [ editState, setEditState ] = useState(false)
    const dispatch = useDispatch()

    const onUpdateProjectClick = () => {
        const updatedProject = {
            id: project.id,
            name: ("" === document.getElementById(project.id + 'nameInput').value ? project.name : document.getElementById(project.id + 'nameInput').value),
            startdate: ("" === document.getElementById(project.id + 'startdateInput').value ? project.startdate : document.getElementById(project.id + 'startdateInput').value),
            enddate: ("" === document.getElementById(project.id + 'enddateInput').value ? project.enddate : document.getElementById(project.id + 'enddateInput').value),
            projectType:{ name: ("" === document.getElementById(project.id + 'projectTypeInput').value ? project.projectType.name : document.getElementById(project.id + 'projectTypeInput').value) },
            lastchange: new Date().toISOString(),
        }

        dispatch(updateProject(updatedProject))
    }

    if(editState) {
        return (
            // A table row element that allows changes to the project data.
            <tr>
                <td><input id={project.id + "nameInput"} className="form-control my-2" type="text" placeholder={project.name} /></td>
                <td><input id={project.id + "projectTypeInput"} className="form-control my-2" type="text" placeholder={project.projectType.name} /></td>
                <td><input id={project.id + "startdateInput"} className="form-control my-2" type="date" placeholder={project.startdate} /></td>
                <td><input id={project.id + "enddateInput"} className="form-control my-2" type="date" placeholder={project.enddate} /></td>
                <td>{project.lastchange}</td>
                <td>
                    <button className="btn btn-sm btn-success m-1" onClick={() => {onUpdateProjectClick(); setEditState(!editState)}}><Check2Square /> Save</button>
                    <button className="btn btn-sm btn-warning m-1" onClick={() => {setEditState(!editState)}}><XLg /> Cancel</button>
                </td>
            </tr>
        )
    }
    else {
        return (
            // A table row element that displays the project data and sets the text color based on the submission date.
            <tr style={rowColor}>
                <td>{project.name}</td>
                <td>{project.projectType.name}</td>
                <td>{project.startdate}</td>
                <td>{project.enddate}</td>
                <td>{project.lastchange}</td>
                <td><button className="btn btn-sm btn-success mx-1" onClick={() => {setEditState(!editState)}}><PencilSquare /> Update</button></td>
            </tr>
        )
    }
}

