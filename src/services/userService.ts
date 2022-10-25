import { CreateUserRequest } from "../types/requests/user/CreateUserRequest";
import { ForgetPasswordRequest } from "../types/requests/user/ForgetPasswordRequest";
import { OverwritePasswordRequest } from "../types/requests/user/OverwritePasswordRequest";
import { UserLoginRequest } from "../types/requests/user/UserLoginRequest";
import { getLoginEmail, getLoginPassword, isAuthenticated, setBearerToken, setLoginEmail, setLoginPassword } from "./auth";
import { publicApiCall } from "./baseApiCalls";

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
        setLoginEmail(userLoginRequest.email)
        setLoginPassword(userLoginRequest.password)

        return Promise.resolve({successful: true})
    } else {
        return Promise.reject({successful: false})
    }
}

export async function updateToken(): Promise<any> {
    if (isAuthenticated()){
        const loginEmail = getLoginEmail()
        const loginPassword = getLoginPassword()

        const response = await publicApiCall({
            method: 'POST',
            url: '/api/v1/user/login',
            body: {
                username: loginEmail,
                password: loginPassword
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
    return Promise.reject({successful: false})
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