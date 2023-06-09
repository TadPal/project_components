import { SelectFinanceButton } from "./SelectFinanceButton";
import { useState } from "react";

export const FinancesTable = (props) => {
  const [selectedType, setSelectedType] = useState(""); // State for storing the selected type

  const handleTypeChange = (selectedType) => {
    setSelectedType(selectedType); // Update the selected type when it changes
  };

  // Filter the finances based on the selected type
  const filteredFinances = selectedType ? props.finances.filter((finance) => finance.financeType.name === selectedType) : props.finances;

    if(props.finances.length > 0)
    {
        return (
            <table className="table table-hover table-light">
                <thead className="table-primary">
                    <tr>
                        <th>Finance Name</th>
                        <th>Last change</th>
                        <th>Amount</th>
                        <th><SelectFinanceButton financeTypes={["Investments", "Rewards", "Grants", "osobní náklady"]} onChange={handleTypeChange}/></th>
                    </tr>
                </thead>
                <tbody>
                {filteredFinances.map((finance) => <FinanceRow key={finance.id} index={finance.id}
                                                            name={finance.name}
                                                            change={finance.lastchange}
                                                            amount={finance.amount}                                                      
                                                            type={finance.financeType.name}  />)} 
                </tbody>
            </table>
        )
    }
    else {
        return (
            <div>
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
    </tr>
    )
}
