import { LinkAddButton } from "./LinkAddButton";
import { LinkRemoveButton } from "./LinkRemoveButton";

export const MilestoneLinkTable = ({milestone, milestones}) => {

 const filteredMilestones = milestones.filter((stage) => stage.id !== milestone.id)
 console.log(filteredMilestones)

 if (filteredMilestones?.length > 0) {
        return (
            <table className="table table-hover table-light">
                <thead>
                    <tr>
                        <th>Stage</th>
                        <th>Add link</th>
                        <th>Remove link</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredMilestones.map((stage) => <StageRow key={stage.id} milestoneName={stage.name} previousMilestone={milestone.id} nextMilestone={stage.id} previous={stage.previous}/>)} 
                </tbody>
            </table>
        )
    }
}

const StageRow = ({previousMilestone, nextMilestone, milestoneName, previous}) => {

    const prev = previous.find((milestone) => milestone.id === previousMilestone);
    const disabledButton = prev ? true : false;
    console.log(disabledButton);  

    return (
    <tr>
        <td>{milestoneName}</td>
        <td><LinkAddButton disabled={disabledButton} previous={previousMilestone} next={nextMilestone} /></td>
        <td><LinkRemoveButton disabled={!disabledButton} previous={previousMilestone} next={nextMilestone} /></td>
    </tr>
    )
}