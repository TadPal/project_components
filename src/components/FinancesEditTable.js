export const FinancesEditTable = (props) => {

    if(props.finances.length > 0)
    {
        return (
            <table className="table table-hover table-light">
                <thead className="table-primary">
                    <tr>
                        <th>Finance Name</th>
                        <th>Last change</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Split</th>
                    </tr>
                </thead>
                <tbody>
                {props.finances.map((finance) => <FinanceRow key={finance.id} index={finance.id}
                                                            name={finance.name}
                                                            change={finance.lastchange.substring(0, 10)}
                                                            amount={finance.amount}                                                      
                                                            type={finance.financeType.name}  />)} 
                </tbody>
            </table>
        )
    }
    else {
        return (
            <div style={{textAlign: "left"}}>
                <p>
                    <b>Finances:</b> Project has no asigned finances
                </p>
            </div>
        )
    }
}

const FinanceRow = ({ name, change, amount, type,}) =>{

    return (
    <tr>
        <td>{name}</td>
        <td>{change}</td>
        <td>{amount} CZK</td>
        <td>{type} </td>
        <td>{/*sem dám button na split*/}</td>
    </tr>
    
    )
}
