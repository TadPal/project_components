import { MilestoneInsertButton } from "./MilestoneAddModal";
import { PencilSquare } from "react-bootstrap-icons";
import { DeleteStageButton } from "./DeleteStageButton";
import { ShareFill } from "react-bootstrap-icons";

export const StagesEditTable = ({milestones, project}) => {

    if (milestones.length > 0) {
        return (
            <table className="table table-hover table-light">
           
                <thead>
                    <tr>
                        <th>Stage</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Links</th>
                        <th>Edit</th>
                        <th><MilestoneInsertButton projectId={project}/></th>
                    </tr>
                </thead>
                <tbody>
                    {milestones.map((stage) => <StageRow key={stage.id} 
                                                            name={stage.name} 
                                                            start={stage.startdate.substring(0, 10)} 
                                                            end={stage.enddate.substring(0, 10)}
                                                            previous={stage.previous}
                                                            nexts={stage.nexts}
                                                            id={stage.id} />)} 
                </tbody>
            </table>
        )
    }
    else {
        return (
            <div>
                <span><b>Stages:</b> Press to add stage</span><span className="float-end"><MilestoneInsertButton projectId={project}/></span>
            </div>
        )
    }
    
} 

export const StageRow = ({name, start, end, previous, nexts, id}) => {
    return (
    <tr>
        <td>{name}</td>
        <td>{start}</td>
        <td>{end}</td>
        <td><button className="btn btn-outline-success btn-sm"><ShareFill /></button></td>
        <td><button className="btn btn-outline-success btn-sm"><PencilSquare /></button></td>
        <td><DeleteStageButton stageId={id}/></td>
    </tr>
    )
}


