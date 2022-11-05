import { Header } from "../styles"
import { Button, GridDysplay } from "../styles/dashboard";
import { useEffect, useState } from "react";
import { CreateBoardModal } from "../components/CreateBoardModal";
import { SimpleBoardResponse } from "../types/response/board/SimpleBoardResponse";
import { findBoards } from "../services/boardService";
import { BoardMiniature } from "../components/BoardMiniature";
import "../styles/global.css"

export const Dashboard = () => {
    const [boardsPage, setBoardsPage] = useState(0)
    const [boards, setBoards] = useState([] as SimpleBoardResponse[])
    const [showLoadMoreButton, setShowLoadMoreButton] = useState(true)
    const [showCreateBoardModal, setShowCreateBoardModal] = useState(false)

    useEffect(() => {
        fetchNextBoardsPage();
    }, [])

    const fetchNextBoardsPage = () => {
        setBoardsPage(boardsPage + 1);
        findBoards(boardsPage)
            .then(response => {
                setBoards([...boards, ...response.content])
                setShowLoadMoreButton(!response.last)
            })
    }

    const refreshBoards = () => {
        setBoardsPage(0);
        findBoards(0)
            .then(response => {
                setBoards(response.content)
                setShowLoadMoreButton(!response.last)
            })
    }

    const handleOnClickNewBoard = () => {
        setShowCreateBoardModal(true);
    }

    const handleCloseCreateBoardModal = () => {
        setShowCreateBoardModal(false);
    }

    return(
        <>
            <Header></Header>

            <Button onClick={handleOnClickNewBoard}>+ Novo quadro</Button>

            <GridDysplay>
                {boards.map(board =>
                    <BoardMiniature key={board.id} id={board.id} name={board.name}/>
                )}
            </GridDysplay>

            {showLoadMoreButton ? <Button onClick={fetchNextBoardsPage}>Carregar mais</Button> : null}

            <CreateBoardModal
                show={showCreateBoardModal}
                handleClose={handleCloseCreateBoardModal}
                onCreateBoardTrigger={refreshBoards}
            />
        </>
    )
} 