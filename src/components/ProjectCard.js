import Card from "react-bootstrap/Card";
import { StagesTable } from "./StagesTable";

export const ProjectCard = ({project}) => {

    return(
        <div className='container my-2'>
            <Card>
                <Card.Header className='p-3 text-start'>{project.name}</Card.Header>
                <Card.Body>
                    <Card.Text>Start date: {project.startdate}</Card.Text>
                    <Card.Text>End date: {project.enddate}</Card.Text>
                    <StagesTable milestones={project.milestones}/>
                </Card.Body>
            </Card>
        </div>
    )
}