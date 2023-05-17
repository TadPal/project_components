/*
Button pro přidání etapy do projektu
Button pro smazání etapy projektu
Button pro vytvoření vazby (prev, next) mezi etapami
 */
import { Trash } from "react-bootstrap-icons"
import { useDispatch } from "react-redux";
import { deleteStage } from "../features/stagesSlice";


export const DeleteStageButton = ({ stageId }) => {
    const dispatch = useDispatch()

    return(
        <button className="btn btn-danger btn-sm" onClick={() => { dispatch(deleteStage(stageId)) }}><Trash/></button>
    )
}