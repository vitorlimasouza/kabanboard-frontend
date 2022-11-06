import { KANBAN_BACKEND_API_ROOT_URL } from "../shared/rootUrls";
import { getBearerToken, isAuthenticated } from "./auth";
import { login } from "./userService";

export async function publicApiCall({method = 'GET', url, headers = {}, body = null}: {
    method?: string,
    url: string,
    headers?: any,
    body?: any | null
}): Promise<Response> {
    const requestOptions = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        body: body && JSON.stringify(body)
    }

    return await fetch(KANBAN_BACKEND_API_ROOT_URL + "/public" + url, requestOptions)
        .then(async response => {
            return response;
        })
        .catch(error => {
            return Promise.reject({});
        })
}

export async function privateApiCall({method = 'GET', url, headers = {}, body = null}: {
    method?: string,
    url: string,
    headers?: any,
    body?: any | null
}): Promise<Response> {
    const requestOptions = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getBearerToken()}`,
            ...headers
        },
        body: body && JSON.stringify(body)
    }

    return await fetch(KANBAN_BACKEND_API_ROOT_URL + url, requestOptions)
        .then(async response => {
            return response;
        })
        .catch(error => {
            return Promise.reject({});
        })
}