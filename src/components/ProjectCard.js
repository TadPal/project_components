import Card from "react-bootstrap/Card";
import { StagesTable } from "./StagesTable";
import { FinancesTable } from "./FinancesTable";
import { useDispatch } from "react-redux";
import { changeProjectDetailDisplay } from "../features/displaySlice";
import { ProjectUpdateButton } from "./ProjectUpdateModal";
import { useSelector } from "react-redux";

/**
 * A React component that represents a project card.
 * @param {Object} props - The component props.
 * @param {string} props.projectId - The ID of the project.
 * @param {Array} props.projects - The array of all projects.
 * @returns {JSX.Element} The JSX element representing the project card.
 */
export const ProjectCard = ({projectId, projects}) => {
    
    const dispatch = useDispatch()
    const project = projects.find(p => p.id === projectId)
    const finances = useSelector((state) => state.finances).filter(f => f.project.id === projectId);

    return(
        <div className='container my-3'>
            <div className="row h-100 justify-content-center align-items-center">
                <Card className="p-0" style={{ width: '40rem' }}>
                    <Card.Header className='h3 text-start'>{project.name}<span style={{float: "right"}}><ProjectUpdateButton project={project} finances={finances}/></span></Card.Header>
                    <Card.Body>
                    <div style={{textAlign: "left"}}>
                        <Card.Text><b>Start date: </b>{project.startdate.substring(0, 10)}</Card.Text>
                        <Card.Text><b>End date: </b>{project.enddate.substring(0, 10)}</Card.Text>
                        <Card.Text><b>Project type: </b>{project.projectType.name}</Card.Text>
                        <Card.Text><b>Team: </b>{project.team.name}</Card.Text>
                    </div>
                    <div className="my-3">
                        <StagesTable milestones={project.milestones} project={project.id}/>
                        <FinancesTable finances={finances} />
                    </div>
                    </Card.Body>
                    <Card.Footer>
                        <button className="btn btn-success" onClick={() => dispatch(changeProjectDetailDisplay(""))}>Back</button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    )
}