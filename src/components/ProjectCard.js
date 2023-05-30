import Card from "react-bootstrap/Card";
import { StagesTable } from "./StagesTable";
import { useDispatch } from "react-redux";
import { changeProjectDetailDisplay } from "../features/displaySlice";

export const ProjectCard = ({project}) => {
    const dispatch = useDispatch()

    return(
        <div className='container my-2'>
            <div className="row h-100 justify-content-center align-items-center">
                <Card style={{ width: '40rem' }}>
                    <Card.Header className='h3 text-start'>{project.name}</Card.Header>
                    <Card.Body style={{textAlign: "left"}}>
                        <Card.Text><b>Start date: </b>{project.startdate}</Card.Text>
                        <Card.Text><b>End date: </b>{project.enddate}</Card.Text>
                        <Card.Text><b>Project type: </b>{project.projectType.name}</Card.Text>
                        <Card.Text><b>Team: </b>{project.team.name}</Card.Text>
                        <StagesTable milestones={project.milestones} project={project.id}/>
                    </Card.Body>
                    <Card.Footer>
                        <button className="btn btn-success" onClick={() => dispatch(changeProjectDetailDisplay({}))}>Back</button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    )
}