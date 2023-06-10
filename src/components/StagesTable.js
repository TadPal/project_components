import { v1 as uuid } from 'uuid';

export const StagesTable = ({milestones, project}) => {

    if (milestones.length > 0) {
        return (
            <table className="table table-hover table-light">
           
                <thead>
                    <tr>
                        <th>Stage</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Previous</th>
                        <th>Next</th>
                    </tr>
                </thead>
                <tbody>
                    {milestones.map((stage) => <StageRow key={stage.id} 
                                                            name={stage.name} 
                                                            start={stage.startdate.substring(0, 10)} 
                                                            end={stage.enddate.substring(0, 10)}
                                                            previous={stage.previous}
                                                            nexts={stage.nexts} />)} 
                </tbody>
            </table>
        )
    }
    else {
        return (
            <div style={{textAlign: "left"}}>
                <p>
                    <b>Stages:</b> Project has no asigned stages
                </p>
            </div>
        )
   }
} 

export const StageRow = ({name, start, end, previous, nexts}) => {

    if (previous.length === 0) previous = [{name: "X", id: uuid().toString()}];    
    if (nexts.length === 0) nexts = [{name: "X", id: uuid().toString()}];

    return (
    <tr>
        <td>{name}</td>
        <td>{start}</td>
        <td>{end}</td>
        <td>{previous.map((stage) => <p key={stage.id}>{stage.name}</p>)}</td>
        <td>{nexts.map((stage) => <p key={stage.id}>{stage.name}</p>)}</td>
    </tr>
    )
}


