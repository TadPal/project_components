import Card from "react-bootstrap/Card";
import { StagesTable } from "./StagesTable";

export const ProjectCard = ({project}) => {

    return(
        <div className='container my-2'>
            <Card>
                <Card.Title className='p-3 text-start'>{project.name}</Card.Title>
                <Card.Body>
                    <p>Start date: {project.startdate}</p>
                    <p>End date: {project.enddate}</p>
                    <StagesTable stages={project.milestones}/>
                </Card.Body>
            </Card>
        </div>
    )
}