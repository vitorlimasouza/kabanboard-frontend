import { Column } from './Column'
import { Container } from '../styles/board'
import { SavedBoardColumnResponse } from "../types/response/board/SavedBoardColumnResponse";
import { SimpleUserResponse } from "../types/response/user/SimpleUserResponse";

type Params = {
    boardId: string,
    boardColumns: SavedBoardColumnResponse[],
    boardMembers: SimpleUserResponse[]
}
export const Board = ({boardId, boardColumns, boardMembers}: Params) => {
    return(
        <Container>
            {boardColumns.map((column, index) =>
                <Column
                    key={column.id}
                    boardId={boardId}
                    columnId={column.id}
                    columnName={column.name}
                    boardMembers={boardMembers}
                    couldAddCards={index === 0}
                />
            )}
        </Container>
    )
}
