import { Container, Button, ColumnHeader } from '../styles/column'
import { Card, DragItem } from './Card'
import { useEffect, useState } from 'react';
import { SimpleCardResponse } from "../types/response/board/SimpleCardResponse";
import { findCardsByColumn, moveCardTo } from "../services/cardService";
import { UpsertCardModal } from "./UpsertCardModal";
import { useDrop } from "react-dnd";

type UseDropCollectedProps = {
    canDrop: boolean,
    isHovered: boolean
}

type Params = {
    boardId: string,
    columnId: string,
    columnName: string,
    coldAddCards: boolean
}
export const Column = ({boardId, columnId, columnName, coldAddCards}:Params) => {
    const [cardsPage, setCardsPage] = useState(0);
    const [cards, setCards] = useState([] as SimpleCardResponse[]);
    const [showLoadMoreButton, setShowLoadMoreButton] = useState(false);
    const [showUpsertCardModal, setShowUpsertCardModal] = useState(false);
    const [updateCardId, setUpdateCardId] = useState(null as string | null)

    useEffect(() => {
        fetchNextCardsPage()
    }, []);

    const [{ canDrop, isHovered }, dropRef] = useDrop<DragItem, void, UseDropCollectedProps>(() => ({
        accept: 'CARD',
        drop(item) {
            moveCard(item.cardId, item.columnId, columnId, item.columnRefreshCards)
        },
        canDrop(item) {
            return item.columnId !== columnId
        },
        collect: (monitor) => ({
            canDrop: monitor.canDrop(),
            isHovered: monitor.isOver()
        })
    }));

    const fetchNextCardsPage = () => {
        setCardsPage(cardsPage + 1)
        findCardsByColumn(boardId, columnId, cardsPage)
            .then(response => {
                setCards([...cards, ...response.content])
                setShowLoadMoreButton(!response.last)
            })
    };

    const refreshColumnCards = () => {
        findCardsByColumn(boardId, columnId, 0)
            .then(response => {
                setCardsPage(0)
                setCards(response.content)
            })
    }

    const handleOnClickNewCard = () => {
        openUpsertCardModal(null);
    }

    const openUpsertCardModal = (cardId: string | null) => {
        setUpdateCardId(cardId);
        setShowUpsertCardModal(true);
    }

    const handleCloseUpsertCardModal = () => {
        setShowUpsertCardModal(false);
        setUpdateCardId(null)
    }

    const moveCard = (
        cardId: string,
        fromColumnId: string,
        toColumnId: string,
        fromColumnRefreshCards: () => void
    ) => {
        moveCardTo(
            boardId,
            fromColumnId,
            cardId,
            {
                columnId: toColumnId,
                order: 0
            }
        ).then(response => {
            fromColumnRefreshCards()
            refreshColumnCards()
        })
    }

    return(
        <>
            <Container ref={dropRef} isHovered={isHovered} canDrop={canDrop}>
                <ColumnHeader>
                    <h2>{columnName}</h2>
                    {coldAddCards ? <Button onClick={handleOnClickNewCard}>+</Button> : null}
                </ColumnHeader>
                <ul>
                    {cards.map((card, index) =>
                        <Card
                            key={card.id}
                            cardId={card.id}
                            columnId={columnId}
                            boardId={boardId}
                            title={card.title}
                            userName="Vitor"
                            profileIconUrl="https://avatars.githubusercontent.com/u/60241528?s=400&u=3c2329862da72db63bd5a4ccb95e47d89c29d077&v=4"
                            columnRefreshCards={refreshColumnCards}
                            openUpsertCardModal={openUpsertCardModal}
                            index={index}
                        />
                    )}
                    {showLoadMoreButton ? <Button onClick={fetchNextCardsPage}>Carregar mais</Button> : null}
                </ul>
            </Container>

            {showUpsertCardModal
                ? <UpsertCardModal
                    cardId={updateCardId}
                    boardId={boardId}
                    columnId={columnId}
                    handleClose={handleCloseUpsertCardModal}
                    onAddCardTrigger={refreshColumnCards}
                />
                : null
            }

        </>
    )
} 