import { ProjectsTable } from '../components/ProjectsTable';
import { StageTable }  from '../components/StageTable';
import Card from "react-bootstrap/Card";

export const FirstProjectDayPage = (props) => {
    return(
    <Card>
        <Card.Header>
            <Card.Title>First Project Day</Card.Title>
        </Card.Header>
        <Card.Body>
            <ProjectsTable projectsList={projects}/>
            <StageTable stages={stages}/>
        </Card.Body>
    </Card>)
}

const projects = [
    {id:1, name:"SUAS", description:"Building a drone for a multinational competition", manager: "No one knows", budget:"?"},
    {id:2, name:"Project 2", description:"Something about the project", manager: "John Snow", budget:"A lot"},
    {id:3, name:"Project 3", description:"Something more about the project", manager: "TBA", budget:"Not that much"}
]

const stages = [
    {id:1, name:"Brainstorming", start:"1.3.2023", end:"6.6.2023",finance:"500"},
    {id:2, name:"Tvorba projektu", start:"1.3.2023", end:"6.6.2023",finance:"50"},
    {id:3, name:"Prezentace", start:"1.3.2023", end:"6.6.2023",finance:"0"}
]