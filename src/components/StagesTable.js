export const StagesTable = ({milestones}) => {
    return (
        <table className="table table-hover table-light">
       
            <thead>
                <tr>
                    <th>Stage</th>
                    <th>Start Date</th>
                    <th>End Date</th>
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
    </tr>
    )
}


