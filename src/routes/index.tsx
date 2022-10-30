import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Singin, Singup, BoardPanel } from '../pages';

export const Routes = () =>{
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path="/"><Home/></Route> */}
                <Route path="/Singin" element={<Singin/>}></Route>
                <Route path="/Singup" element={<Singup/>}></Route>
                {<Route path="/Board" element={<BoardPanel/>}></Route>}
            </Switch>
        </BrowserRouter>
    )
}