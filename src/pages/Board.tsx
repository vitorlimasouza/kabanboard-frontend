import { Board } from "../components/Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Header } from "../components/Header";

export const BoardPanel = () => {
    return(
        <>
            <Header></Header>
            <DndProvider backend={HTML5Backend}>
                <Board />
            </DndProvider>
        </>
    );
} 