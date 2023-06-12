import { FinanceSelect } from "./FinanceTypeSelect";
import { FinanceProjectSelect } from "./FinanceProjectSelect";
import { useState } from "react";
import { useSelector } from "react-redux";

export const FinancesTableMain = (props) => {
  const [selectedType, setSelectedType] = useState(""); // State for storing the selected type
  const [selectedProject, setSelectedProject] = useState({});
  const projects = useSelector((state) => state.projects);

  const handleTypeChange = (selectedType) => {
    setSelectedType(selectedType); // Update the selected type when it changes
  };

  const handleProjectChange = (selectedProject) => {
    setSelectedProject(selectedProject); // Update the selected project when it changes
  };

  // Filter the finances based on the selected type
  let filteredFinances = selectedType ? props.finances.filter((finance) => finance.financeType.id === selectedType) : props.finances;
  filteredFinances =  selectedProject ? filteredFinances.filter((finance) => finance.project.id === selectedProject) : filteredFinances;

    if(filteredFinances.length > 0)
    {
        return (
            <table className="table table-hover table-light">
                <thead className="table-primary">
                    <tr>
                        <th>Finance Name</th>
                        <th><FinanceProjectSelect projects={projects}  onChange={handleProjectChange}/></th>
                        <th>Last change</th>
                        <th>Amount</th>
                        <th><FinanceSelect onChange={handleTypeChange}/></th>
                    </tr>
                </thead>
                <tbody>
                {filteredFinances.map((finance) => <FinanceRow key={finance.id}
                                                            name={finance.name}
                                                            change={finance.lastchange.substring(0, 10)}
                                                            amount={finance.amount}                                                      
                                                            type={finance.financeType.name}
                                                            project={finance.project.name}  />)} 
                </tbody>
            </table>
        )
    }
    else {
        return (
            <>
                <table className="table table-hover table-light">
                    <thead className="table-primary">
                        <tr>
                            <th>Finance Name</th>
                            <th><FinanceProjectSelect projects={projects}  onChange={handleProjectChange}/></th>
                            <th>Last change</th>
                            <th>Amount</th>
                            <th><FinanceSelect onChange={handleTypeChange}/></th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <div>
                    <b>No finances found</b>
                </div>
            </>
        )
    }
}

const FinanceRow = ({ name, change, amount, type, project}) =>{

    return (
    <tr>
        <td>{name}</td>
        <td>{project}</td>
        <td>{change}</td>
        <td>{amount} CZK</td>
        <td>{type} </td>
    </tr>
    )
}
