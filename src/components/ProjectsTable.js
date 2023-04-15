import { CheckDate } from "../utilities/CheckDate";

// Custom table component to visualize projects
export const ProjectsTable = ({projectsList}) => {
    return (
        <table className="table table-hover table-light">
            <thead className="table-success">
                <tr>
                    <th>Project Name</th>
                    <th>Description</th>
                    <th>Project manager</th>
                    <th>Budget</th>
                    <th>Submission date</th>
                </tr>
            </thead>
            <tbody>
                {projectsList.map((project) => <ProjectRow key={project.id} project={project}/>)}
            </tbody>
        </table>
    )
} 

// Custom rows used in the ProjectsTable
const ProjectRow = ({project}) => {
    const subDate = new Date(project.submissionDate)
    const rowColor = CheckDate() > subDate ? {color: "#D3D3D3"} : {color: "#000000"};

    console.log(subDate)
    return (
        <tr style={rowColor}>
            <td>{project.name}</td>
            <td>{project.description}</td>
            <td>{project.manager}</td>
            <td>{project.budget}</td>
            <td>{project.submissionDate}</td>
        </tr>)
}