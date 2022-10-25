export interface SimpleUserResponse {
    id: string,
    userName: string,
}

export function simpleUserResponseFromData(data: any): SimpleUserResponse {
    return {
        id: data.id,
        userName: data.user_name
    }
}