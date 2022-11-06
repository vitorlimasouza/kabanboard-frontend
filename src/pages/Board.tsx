import { Board } from "../components/Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Header } from "../components/Header";
import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { SavedBoardColumnResponse } from "../types/response/board/SavedBoardColumnResponse";
import { SimpleUserResponse } from "../types/response/user/SimpleUserResponse";
import { findBoard, findBoardMembers } from "../services/boardService";

export const BoardPanel = () => {
    let { boardId } = useParams();
    const [boardName, setBoardName] = useState("")
    const [columns, setColumns] = useState([] as SavedBoardColumnResponse[])
    const [members, setMembers] = useState([] as SimpleUserResponse[])

    useEffect(() => {
        if (boardId !== undefined) {
            findBoard(boardId)
                .then(response => {
                    setBoardName(response.name)
                    setColumns(response.columns)
                    setMembers(response.members)
                })
        } else {
            console.error("Undefined board Id")
        }
    }, [])

    const refreshBoard = () => {
        if (boardId !== undefined) {
            findBoard(boardId)
                .then(response => {
                    setBoardName(response.name)
                    setColumns(response.columns)
                    setMembers(response.members)
                })
        } else {
            console.error("Undefined board Id")
        }
    }

    const refreshMembers = () => {
        if (boardId !== undefined) {
            findBoardMembers(boardId)
                .then(response => {
                    setMembers(response)
                })
        } else {
            console.error("Undefined board Id")
        }
    }

    return(
        <>
            <Header
                boardId={boardId !== undefined ? boardId : ""}
                title={boardName}
                members={members}
                refreshMembers={refreshMembers}
            />

            <DndProvider backend={HTML5Backend}>
                <Board
                    boardId={boardId !== undefined ? boardId : ""}
                    boardColumns={columns}
                    boardMembers={members}
                />
            </DndProvider>
        </>
    );
} 