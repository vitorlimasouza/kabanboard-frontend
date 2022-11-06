import { SimpleUserResponse, simpleUserResponseFromData } from "../user/SimpleUserResponse";

export interface SimpleCardResponse {
    id: string,
    title: string,
    users: SimpleUserResponse[]
}

export function simpleCardResponseFromData(data: any): SimpleCardResponse {
    return {
        id: data.id,
        title: data.title,
        users: (data.users as Array<any>).map(it => simpleUserResponseFromData(it))
    }
}