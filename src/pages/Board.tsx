import { Board } from "../components/Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const BoardPanel = () => {
    return(
        <DndProvider backend={HTML5Backend}>
            <Board />
        </DndProvider>
        
    );
} 