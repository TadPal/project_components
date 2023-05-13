import { DeleteStageButton } from "./DeleteStageButton";

export const StagesTable = (props) => {
    return (
        <table className="table table-hover table-light">
       
            <thead>
                <tr>
                    <th>Name of stage</th>
                    <th>Beginnnig of stage</th>
                    <th>End of stage</th>
                    <th>Resources</th>
                    <th></th>
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
        <td><DeleteStageButton/></td>
    </tr>
    )
}


