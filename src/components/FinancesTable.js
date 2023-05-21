import { DeleteFinanceButton } from "./DeleteFinanceButton";

export const FinancesTable = (props) => {
    return (
        <table className="table table-hover table-light">
            <thead className="table-primary">
                <tr>
                    <th>Finance Name</th>
                    <th>Last change</th>
                    <th>Amount</th>
                    <th>Type of finance</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.finances.map((finance) => <FinanceRow key={finance.id} index={finance.id}
                                                        name={finance.name}
                                                        change={finance.change}
                                                        amount={finance.amount}                                                      
                                                        type={finance.type}  />)} 
            </tbody>
        </table>
    )

}

const FinanceRow = ({ index, name, change, amount, type,}) =>{

    const rowColor = amount < 0 ? 'table-danger' : 'table-success';

    return (
    <tr className={rowColor}>
        <td>{name}</td>
        <td>{change}</td>
        <td>{amount} CZK</td>
        <td>{type} </td>
        <td><DeleteFinanceButton financeId={index} /></td>
    </tr>
    )
}


/*
import { DeleteFinanceButton } from "./DeleteFinanceButton";

export const FinancesTable = (props) => {
    const financeTypes = ['Type 1', 'Type 2', 'Type 3']; // Replace with your actual finance types array

    const handleTypeChange = (e) => {
        // Handle the selected type change here
        const selectedType = e.target.value;
        // Perform any necessary operations based on the selected type
    };

    return (
        <table className="table table-hover table-light">
            <thead className="table-primary">
                <tr>
                    <th>Finance Name</th>
                    <th>Last change</th>
                    <th>Amount</th>
                    <th>
                        <FinanceTypeSelect financeTypes={financeTypes} onChange={handleTypeChange} />
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.finances.map((finance) => (
                    <FinanceRow
                        key={finance.id}
                        index={finance.id}
                        name={finance.name}
                        change={finance.change}
                        amount={finance.amount}
                        type={finance.type}
                    />
                ))}
            </tbody>
        </table>
    );
};

const FinanceTypeSelect = ({ financeTypes, onChange }) => {
    return (
        <select onChange={onChange}>
            <option value="">All</option>
            {financeTypes.map((type) => (
                <option key={type} value={type}>
                    {type}
                </option>
            ))}
        </select>
    );
};

const FinanceRow = ({ index, name, change, amount, type }) => {
    const rowColor = amount < 0 ? "table-danger" : "table-success";

    return (
        <tr className={rowColor}>
            <td>{name}</td>
            <td>{change}</td>
            <td>{amount} CZK</td>
            <td>{type}</td>
            <td>
                <DeleteFinanceButton financeId={index} />
            </td>
        </tr>
    );
};
*/