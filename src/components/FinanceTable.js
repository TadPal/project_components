export const FinanceTable = (props) => {
    return (
        <table className="table table-hover table-light">
            <thead className="table-primary">
                <tr>
                    <th>Finance Description</th>
                    <th>Project Name</th>
                    <th>Project Stage</th>
                    <th>Due Date</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {props.finances.map((finance) => <FinanceRow key={finance.id} 
                                                        desc={finance.finDesc}
                                                        name={finance.name} 
                                                        stage={finance.stage} 
                                                        due={finance.dueDate} 
                                                        value={finance.value}/>)} 
            </tbody>
        </table>
    )

}

const FinanceRow = ({desc, name, stage, due, value}) =>{

    const rowColor = value < 0 ? 'table-danger' : 'table-success';

    return (
    <tr className={rowColor}>
        <td>{desc}</td>
        <td>{name}</td>
        <td>{stage}</td>
        <td>{due}</td>
        <td>{value} CZK</td>
    </tr>
    )
}