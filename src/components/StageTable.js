export const StageTable = (props) => {
    return (
        <table className="table table-hover table-light">
            <thead>
                <tr>
                    <th>Název etapy</th>
                    <th>Počátek etapy</th>
                    <th>Konec etapy</th>
                    <th>Náklady</th>
                </tr>
            </thead>
            <tbody>
                {props.stages.map((stage) => <StageRow key={stage.id} 
                                                        name={stage.name} 
                                                        start={stage.start} 
                                                        end={stage.end} 
                                                        finance={stage.finance}/>)} 
            </tbody>
        </table>
    )
} 

export const StageRow = ({name, start, end, finance}) =>{
    return (
    <tr>
        <td>{name}</td>
        <td>{start}</td>
        <td>{end}</td>
        <td>{finance} CZK</td>
    </tr>
    )
}