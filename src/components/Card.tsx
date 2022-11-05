import { Container } from "../styles/card";
import { useDrag } from "react-dnd";

export interface DragItem {
    type: string
    columnId: string
    cardId: string
    columnRefreshCards: () => void,
    index: number
}

type Params = {
    cardId: string,
    columnId: string,
    boardId: string,
    title: string,
    userName: string
    profileIconUrl: string,
    columnRefreshCards: () => void,
    openUpsertCardModal: (cardId: string | null) => void,
    index: number
}
export const Card = ({
    cardId,
    columnId,
    boardId,
    title,
    userName,
    profileIconUrl,
    columnRefreshCards,
    openUpsertCardModal,
    index
}: Params) => {

    const [{ isDragging }, dragRef] = useDrag(() => ({
          type: 'CARD',
          item: {
              type: 'CARD',
              columnId: columnId,
              cardId: cardId,
              columnRefreshCards: columnRefreshCards,
              index: index
          } as DragItem,
          collect: (monitor) => ({ 
            isDragging: monitor.isDragging() 
          })
        })
    );

    return(
        <Container ref={dragRef} isDragging={isDragging} onClick={() => openUpsertCardModal(cardId)}>
            <header>
               <p>{title}</p>
            </header>
            <img src ={profileIconUrl} alt={userName}/>
        </Container>
    );

}
