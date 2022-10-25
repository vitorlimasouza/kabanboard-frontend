import { SimpleUserResponse } from "../user/SimpleUserResponse";

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