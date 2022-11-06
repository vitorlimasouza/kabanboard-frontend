import { CreateUserRequest } from "../types/requests/user/CreateUserRequest";
import { UpdateUserRequest } from "../types/requests/user/UpdateUserRequest";
import { ForgetPasswordRequest } from "../types/requests/user/ForgetPasswordRequest";
import { OverwritePasswordRequest } from "../types/requests/user/OverwritePasswordRequest";
import { UserLoginRequest } from "../types/requests/user/UserLoginRequest";
import { UserResponse, userResponseFromData } from "../types/response/user/UserResponse";
import { isAuthenticated, setBearerToken } from "./auth";
import { privateApiCall, publicApiCall } from "./baseApiCalls";

export async function login(userLoginRequest: UserLoginRequest): Promise<any> {
    const response = await publicApiCall({
        method: 'POST',
        url: '/api/v1/user/login',
        body: {
            username: userLoginRequest.email,
            password: userLoginRequest.password
        }
    })
    
    const data = await response.json()
    if (response.ok) {
        setBearerToken(data.access_token)

        return Promise.resolve({successful: true})
    } else {
        return Promise.reject({successful: false})
    }
}

export async function updateToken(): Promise<any> {
    if (isAuthenticated()){
        const response = await privateApiCall({
            method: 'PUT',
            url: '/api/v1/user/refresh-token'
        })
        
        const data = await response.json()
        if (response.ok) {
            setBearerToken(data.access_token)

            return Promise.resolve({successful: true})
        } else {
            return Promise.reject({successful: false})
        }
    }
    return Promise.reject({successful: false})
}

export async function getMe(): Promise<UserResponse> {
    const response = await privateApiCall({
        method: 'GET',
        url: '/api/v1/user/me'
    })

    const data = await response.json()
    if (response.ok) {
        return userResponseFromData(data)
    } else {
        return Promise.reject({successful: false})
    }
}

export async function createUser(createUserRequest: CreateUserRequest): Promise<any> {
    return await publicApiCall({
        method: 'POST',
        url: '/api/v1/user',
        body: {
            first_name: createUserRequest.firstName,
            last_name: createUserRequest.lastName,
            email: createUserRequest.email,
            password: createUserRequest.password
        }
    }).then(response => {
        if (response.ok) {
            return Promise.resolve({successful: true})
        } else {
            return Promise.reject({successful: false})
        }
    })
}

export async function updateUser(userId: string, createUserRequest: UpdateUserRequest): Promise<any> {
    return await privateApiCall({
        method: 'PUT',
        url: `/api/v1/user/${userId}`,
        body: {
            first_name: createUserRequest.firstName,
            last_name: createUserRequest.lastName,
            photo_url: createUserRequest.photoUrl
        }
    }).then(response => {
        if (response.ok) {
            return Promise.resolve({successful: true})
        } else {
            return Promise.reject({successful: false})
        }
    })
}

export async function forgetPassword(forgetPasswordRequest: ForgetPasswordRequest): Promise<any> {
    return await publicApiCall({
        method: 'POST',
        url: '/api/v1/user/forget-password',
        body: {
            email: forgetPasswordRequest.email
        }
    }).then(response => {
        if (response.ok) {
            return Promise.resolve({successful: true})
        } else {
            return Promise.reject({successful: false})
        }
    })
}

export async function overwritePassword(overwritePasswordRequest: OverwritePasswordRequest): Promise<any> {
    return await publicApiCall({
        method: 'PUT',
        url: '/api/v1/user/overwrite-password',
        body: {
            token: overwritePasswordRequest.token,
            password: overwritePasswordRequest.password
        }
    }).then(response => {
        if (response.ok) {
            return Promise.resolve({successful: true})
        } else {
            return Promise.reject({successful: false})
        }
    })
}