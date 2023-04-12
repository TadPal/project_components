//Temporary template
export const ProjectsTable = ({projectsList}) => {
    return (
        <table className="table table-hover table-light">
            <thead className="table-success">
                <tr>
                    <th>Project Name</th>
                    <th>Description</th>
                    <th>Project manager</th>
                    <th>Budget</th>
                </tr>
            </thead>
            <tbody>
                {projectsList.map((project) => <ProjectRow key={project.id} project={project}/>)}
            </tbody>
        </table>
    )
} 

const ProjectRow = ({project}) => {
    return (
    <tr>
        <td>{project.name}</td>
        <td>{project.description}</td>
        <td>{project.manager}</td>
        <td>{project.budget}</td>
    </tr>
    )
}