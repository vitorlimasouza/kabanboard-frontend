import { SimpleUserResponse, simpleUserResponseFromData } from "../user/SimpleUserResponse";

export interface SaveCardResponse {
    id: string,
    title: string,
    description: string | null,
    boardId: string,
    columnId: string,
    startDate: string | null,
    endDate: string | null,
    concludedAt: string | null,
    createdAt: string | null,
    participants: Array<SimpleUserResponse>,
}

export function saveCardResponseFromData(data: any): SaveCardResponse {
    return {
        id: data.id,
        title: data.title,
        description: data.description,
        boardId: data.board_id,
        columnId: data.column_id,
        startDate: data.start_date,
        endDate: data.end_date,
        concludedAt: data.concluded_at,
        createdAt: data.created_at,
        participants: (data.participants as Array<any>).map(it => simpleUserResponseFromData(it))
    }
}