import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Singin, Singup, BoardPanel } from '../pages';

export const Routes = () =>{
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path="/"><Home/></Route> */}
                <Route path="/Singin"><Singin/></Route>
                <Route path="/Singup"><Singup/></Route>
                {<Route path="/Board"><BoardPanel/></Route>}
            </Switch>
        </BrowserRouter>
    )
}