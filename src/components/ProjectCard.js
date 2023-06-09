import Card from "react-bootstrap/Card";
import { StagesTable } from "./StagesTable";
import { FinancesTable } from "./FinancesTable";
import { useDispatch } from "react-redux";
import { changeProjectDetailDisplay } from "../features/displaySlice";
import { ProjectUpdateButton } from "./ProjectUpdateModal";
import { useSelector } from "react-redux";

export const ProjectCard = ({projectId, projects}) => {
    
    const dispatch = useDispatch()
    const project = projects.find(p => p.id === projectId)
    const finances = useSelector((state) => state.finances).filter(f => f.project.id === projectId);

    return(
        <div className='container my-3'>
            <div className="row h-100 justify-content-center align-items-center">
                <Card className="p-0" style={{ width: '40rem' }}>
                    <Card.Header className='h3 text-start'>{project.name}<span style={{float: "right"}}><ProjectUpdateButton project={project}/></span></Card.Header>
                    <Card.Body style={{textAlign: "left"}}>
                        <Card.Text><b>Start date: </b>{project.startdate}</Card.Text>
                        <Card.Text><b>End date: </b>{project.enddate}</Card.Text>
                        <Card.Text><b>Project type: </b>{project.projectType.name}</Card.Text>
                        <Card.Text><b>Team: </b>{project.team.name}</Card.Text>
                        <StagesTable milestones={project.milestones} project={project.id}/>
                        <FinancesTable finances={finances} />
                    </Card.Body>
                    <Card.Footer>
                        <button className="btn btn-success" onClick={() => dispatch(changeProjectDetailDisplay(""))}>Back</button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    )
}