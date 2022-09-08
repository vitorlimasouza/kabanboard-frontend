import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Singin, Singup } from '../pages';

export const Routes = () =>{
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path="/"><Home/></Route> */}
                <Route path="/Singin"><Singin/></Route>
                <Route path="/Singup"><Singup/></Route>
                {/* <Route path="/Board"><Board/></Route> */}
            </Switch>
        </BrowserRouter>
    )
}