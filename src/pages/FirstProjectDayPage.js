import { ProjectsTable } from '../components/ProjectsTable';
import { StageTable }  from '../components/StageTable';
import { FinanceTable } from '../components/FinanceTable';
import Card from "react-bootstrap/Card";

export const FirstProjectDayPage = (props) => {
    return(
    <Card className="container border-0 backgroundcolor">
        <Card.Title className='p-3 text-start'>First Project Day</Card.Title>
        <Card.Body>
            <ProjectsTable projectsList={projects}/>
            <StageTable stages={stages}/>
            <FinanceTable finances={finances}/>
        </Card.Body>
    </Card>)
}

const projects = [
    {id:1, name:"SUAS", description:"Building a drone for a multinational competition", manager: "No one knows", budget:"?", submissionDate: "3/20/2023"},
    {id:2, name:"Project 2", description:"Something about the project", manager: "John Snow", budget:"A lot", submissionDate: "4/20/2023"},
    {id:3, name:"Project 3", description:"Something more about the project", manager: "TBA", budget:"Not that much", submissionDate: "4/13/2023"},
]

const stages = [
    {id:1, name:"Brainstorming", start:"3/1/2023", end:"6/6/2023",finance:"500"},
    {id:2, name:"Project creation", start:"3/1/2023", end:"6/6/2023",finance:"50"},
    {id:3, name:"Presentation", start:"3/1/2023", end:"6/6/2023",finance:"0"}
]

const finances = [
    {id:1, finDesc:"Investice", name:"SUAS", stage:"Brainstorming",dueDate:"6/6/2023",value:"-2300000"},
    {id:2, finDesc:"Dotace", name:"SUAS", stage:"Tvorba projektu",dueDate:"6/6/2023",value:"500000"},
    {id:3, finDesc:"Odměny", name:"SUAS", stage:"Prezentace",dueDate:"6/6/2023",value:"-100000"}
]