export const FinancesTable = (props) => {
    return (
        <table className="table table-hover table-light">
            <thead className="table-primary">
                <tr>
                    <th>Finance Name</th>
                    <th>Last change</th>
                    <th>Amount</th>
                    <th>Type of finance</th>
                </tr>
            </thead>
            <tbody>
                {props.finances.map((finance) => <FinanceRow key={finance.id}
                                                        name={finance.name}
                                                        change={finance.change}
                                                        amount={finance.amount}                                                      
                                                        type={finance.type}  />)} 
            </tbody>
        </table>
    )

}

const FinanceRow = ({ name, change, amount, type}) =>{

    const rowColor = amount < 0 ? 'table-danger' : 'table-success';

    return (
    <tr className={rowColor}>
        <td>{name}</td>
        <td>{change}</td>
        <td>{amount} CZK</td>
        <td>{type} </td>
    </tr>
    )
}