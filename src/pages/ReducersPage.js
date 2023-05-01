import { ChangeColorComponent } from "../components/ChangeColorComponent";
import { Login } from "../components/Login";
import { Profile } from "../components/Profile";

export const ReducersPage = (props) => {

    return(
        <div className="container">
            <Profile />
            <Login />
            <ChangeColorComponent />
        </div>
    )
}