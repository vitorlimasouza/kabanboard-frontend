export interface SimpleUserResponse {
    userId: string,
    userName: string,
    photoUrl: string | null
}

export function simpleUserResponseFromData(data: any): SimpleUserResponse {
    return {
        userId: data.user_id,
        userName: data.user_name,
        photoUrl: data.photo_url
    }
}