import { CheckDate } from "../utilities/CheckDate";
import { CardText } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { changeProjectDetailDisplay } from "../features/displaySlice";

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

    const dispatch = useDispatch()
  
        return (
            // A table row element that displays the project data and sets the text color based on the submission date.
            <tr style={rowColor}>
                <td>{project.name}</td>
                <td>{project.projectType.name}</td>
                <td>{project.startdate.substring(0,10)}</td>
                <td>{project.enddate.substring(0,10)}</td>
                <td><button className="btn btn-sm btn-success mx-1" onClick={() => {dispatch(changeProjectDetailDisplay(project.id))}}><CardText /> Details</button></td>
            </tr>
        )
}

