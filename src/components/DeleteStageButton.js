/*
Button pro přidání etapy do projektu
Button pro smazání etapy projektu
Button pro vytvoření vazby (prev, next) mezi etapami
 */
import { Trash } from "react-bootstrap-icons"
//import { useDispatch } from "react-redux";

export const DeleteStageButton = ({ stage }) => {
    return(
        <button className="btn btn-danger btn-sm"><Trash/></button>
    )
}