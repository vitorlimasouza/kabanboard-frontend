import { Container, UsersList } from "../styles/card";
import { useDrag } from "react-dnd";
import { SimpleUserResponse } from "../types/response/user/SimpleUserResponse";
import { ProfileIcon } from "./ProfileIcon";

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
    title: string,
    users: SimpleUserResponse[],
    columnRefreshCards: () => void,
    openUpsertCardModal: (cardId: string | null) => void,
    index: number
}
export const Card = ({
    cardId,
    columnId,
    title,
    users,
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
           <p>{title}</p>
            <UsersList>
                {users.map(user =>
                    <ProfileIcon key={user.userId} userName={user.userName} photoUrl={user.photoUrl} color="black"/>
                )}
            </UsersList>
        </Container>
    );

}
