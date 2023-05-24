import { DeleteFinanceButton } from "./DeleteFinanceButton";
import { SelectFinanceButton } from "./SelectFinanceButton";
import { useState } from "react";

export const FinancesTable = (props) => {
  const [selectedType, setSelectedType] = useState(""); // State for storing the selected type

  const handleTypeChange = (selectedType) => {
    setSelectedType(selectedType); // Update the selected type when it changes
  };

  // Filter the finances based on the selected type
  const filteredFinances = selectedType ? props.finances.filter((finance) => finance.type === selectedType) : props.finances;
    
    return (
        <table className="table table-hover table-light">
            <thead className="table-primary">
                <tr>
                    <th>Finance Name</th>
                    <th>Last change</th>
                    <th>Amount</th>
                    <th><SelectFinanceButton financeTypes={["Investments", "Rewards", "Grants"]} onChange={handleTypeChange}/></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {filteredFinances.map((finance) => <FinanceRow key={finance.id} index={finance.id}
                                                        name={finance.name}
                                                        change={finance.change}
                                                        amount={finance.amount}                                                      
                                                        type={finance.type}  />)} 
            </tbody>
        </table>
    )

}

const FinanceRow = ({ index, name, change, amount, type,}) =>{

    return (
    <tr>
        <td>{name}</td>
        <td>{change}</td>
        <td>{amount} CZK</td>
        <td>{type} </td>
        <td><DeleteFinanceButton financeId={index} /></td>
    </tr>
    )
}
