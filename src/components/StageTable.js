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
    {id:1, name:"Brainstorming", start:"1.3.2023", end:"6.6.2023",finance:"500"},
    {id:2, name:"Tvorba projektu", start:"1.3.2023", end:"6.6.2023",finance:"50"},
    {id:3, name:"Prezentace", start:"1.3.2023", end:"6.6.2023",finance:"0"}
]