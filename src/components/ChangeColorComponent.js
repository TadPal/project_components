import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme"

export const ChangeColorComponent = () => {
    const dispatch = useDispatch()
    const [color, setColor] = useState("")

    return (
        <div className="input-group my-3">
            <input className="form-control" type="text" placeholder="Enter color" onChange={(e) => {setColor(e.target.value)}}/>
            <button className="btn btn-primary" onClick={() => {dispatch(changeColor(color))}}>Set</button>
        </div>
    )
}