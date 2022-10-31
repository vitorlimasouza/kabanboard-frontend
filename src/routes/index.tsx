import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { BoardPanel, Dashboard, Singin, Singup } from '../pages';
import { ForgetPasswordPage } from "../pages/ForgetPassword";
import { RedefinePassword } from "../pages/RedefinePassword";
import { Welcome } from "../pages/Welcome";

export const Routes = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Welcome/>}></Route>
                <Route path="/singin" element={<Singin/>}/>
                <Route path="/singup" element={<Singup/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/board" element={<BoardPanel/>}/>
                <Route path="/forget-password" element={<ForgetPasswordPage/>}/>
                <Route path="/redefine-password/:token" element={<RedefinePassword/>}/>
            </Switch>
        </BrowserRouter>
    )
}