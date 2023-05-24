import { DeleteStageButton } from "./DeleteStageButton";

export const StagesTable = ({milestones}) => {
    return (
        <table className="table table-hover table-light">
       
            <thead>
                <tr>
                    <th>Name of stage</th>
                    <th>Beginnnig of stage</th>
                    <th>End of stage</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {milestones.map((stage) => <StageRow key={stage.id} index={stage.id} 
                                                        name={stage.name} 
                                                        start={stage.startdate} 
                                                        end={stage.enddate} />)} 
            </tbody>
        </table>
    )
} 

export const StageRow = ({index, name, start, end}) => {
    return (
    <tr>
        <td>{name}</td>
        <td>{start}</td>
        <td>{end}</td>
        <td><DeleteStageButton stageId={index} /></td>
    </tr>
    )
}


