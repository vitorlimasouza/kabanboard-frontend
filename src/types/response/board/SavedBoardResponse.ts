import { SimpleUserResponse, simpleUserResponseFromData } from "../user/SimpleUserResponse";
import { SavedBoardColumnResponse } from "./SavedBoardColumnResponse";

export interface SavedBoardResponse {
    id: string,
    name: string,
    createdAt: string,
    columns: Array<SavedBoardColumnResponse>,
    members: Array<SimpleUserResponse>,
}

export function savedBoardResponseFromData(data: any): SavedBoardResponse {
    return {
        id: data.id,
        name: data.name,
        createdAt: data.created_at,
        columns: (data.columns as Array<any>).map(column => ({
            id: column.id,
            name: column.name,
            position: column.position,
            createdAt: column.created_at
        })),
        members: (data.members as Array<any>).map(member =>
            simpleUserResponseFromData(member)
        )
    }
}