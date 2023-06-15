import { MilestoneInsertButton } from "./MilestoneAddModal";
import { DeleteStageButton } from "./DeleteStageButton";
import { MilestoneLinkButton } from "./MilestoneLinkModal";
import { MilestoneUpdateButton } from "./MilestoneUpdateModal";

export const StagesEditTable = ({milestones, project}) => {

    if (milestones.length > 0) {
        return (
            <table className="table table-hover table-light">
                <thead className="table-success">
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
                                                            milestone={stage}
                                                            milestones={milestones} />)} 
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

export const StageRow = ({name, start, end, milestone, milestones}) => {
    return (
    <tr>
        <td>{name}</td>
        <td>{start}</td>
        <td>{end}</td>
        <td><MilestoneLinkButton milestones={milestones} milestone={milestone}/></td>
        <td><MilestoneUpdateButton milestone={milestone}/></td>
        <td><DeleteStageButton stageId={milestone.id}/></td>
    </tr>
    )
}


