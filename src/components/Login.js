import { useDispatch } from "react-redux";
import { login, logout } from "../features/user"

export const Login = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <button className="btn btn-success mx-1" onClick={() => {dispatch(login({name: "Pedro", age: 20, email: "e.mail@email.com"}))}}>Login</button>
            <button className="btn btn-danger mx-1" onClick={() => {dispatch(logout())}}>Logout</button>
        </div>
    )
}