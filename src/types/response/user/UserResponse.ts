export interface UserResponse {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    photoUrl: string
}

export function userResponseFromData(data: any): UserResponse {
    return {
        id: data.id,
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email,
        photoUrl: data.photo_url
    }
}