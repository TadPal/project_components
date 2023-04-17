export const StageTable = (props) => {
    return (
        <table className="table table-hover table-light">
       
            <thead>
                <tr>
                    <th>Name of stage</th>
                    <th>Beginnnig of stage</th>
                    <th>End of stage</th>
                    <th>Resources</th>
                </tr>
            </thead>
            <tbody>
                {props.stages.map((stage) => <StageRow index={stage.id} 
                                                        name={stage.name} 
                                                        start={stage.start} 
                                                        end={stage.end} 
                                                        finance={stage.finance}/>)} 
            </tbody>
        </table>
    )
} 

export const StageRow = ({index, name, start, end, finance}) =>{
    return (
    <tr>
        <td>{name}</td>
        <td>{start}</td>
        <td>{end}</td>
        <td>{finance} CZK</td>
    </tr>
    )
}

export const stages = [
    {id:1, name:"Brainstorming", start:"3/1/2023", end:"6/6/2023",finance:"500"},
    {id:2, name:"Project creation", start:"3/1/2023", end:"6/6/2023",finance:"50"},
    {id:3, name:"Presentation", start:"3/1/2023", end:"6/6/2023",finance:"0"}
]
