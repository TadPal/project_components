import { MilestoneInsertButton } from "./MilestoneAddModal";
import { PencilSquare } from "react-bootstrap-icons";

export const StagesEditTable = ({milestones, project}) => {
    return (
        <table className="table table-hover table-light">
       
            <thead>
                <tr>
                    <th>Stage</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th><MilestoneInsertButton projectId={project}/></th>
                </tr>
            </thead>
            <tbody>
                {milestones.map((stage) => <StageRow key={stage.id} 
                                                        name={stage.name} 
                                                        start={stage.startdate} 
                                                        end={stage.enddate} />)} 
            </tbody>
        </table>
    )
} 

export const StageRow = ({name, start, end}) => {
    return (
    <tr>
        <td>{name}</td>
        <td>{start}</td>
        <td>{end}</td>
        <td><button className="btn btn-warning btn-sm"><PencilSquare /></button></td>
    </tr>
    )
}


