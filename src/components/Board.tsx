import { Column } from './Column'
import { Container } from '../styles/board'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findBoard } from "../services/boardService";
import { SavedBoardColumnResponse } from "../types/response/board/SavedBoardColumnResponse";
import { SimpleUserResponse } from "../types/response/user/SimpleUserResponse";

export const Board = () => {
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

    return(
        <Container>
            {columns.map((column, index) =>
                <Column
                    key={column.id}
                    boardId={boardId !== undefined ? boardId : ""}
                    columnId={column.id}
                    columnName={column.name}
                    coldAddCards={index === 0}
                />
            )}
        </Container>
    )
}
