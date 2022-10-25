import { CreateBoardRequest } from "../types/requests/board/CreateBoardRequest"
import { UpdateBoardRequest } from "../types/requests/board/UpdateBoardRequest"
import { SavedBoardResponse, savedBoardResponseFromData } from "../types/response/board/SavedBoardResponse"
import { SimpleUserResponse, simpleUserResponseFromData } from "../types/response/user/SimpleUserResponse"
import { privateApiCall } from "./baseApiCalls"

export async function createBoard(
    createBoardRequest: CreateBoardRequest
): Promise<SavedBoardResponse> {
    const response = await privateApiCall({
        method: 'POST',
        url: '/api/v1/board',
        body: {
            name: createBoardRequest.name
        }
    })
    
    const data = await response.json()
    if (response.ok) {
        return savedBoardResponseFromData(data)
    } else {
        return Promise.reject({successful: false})
    }
}

export async function updateBoard(
    boardId: string,
    updateBoardRequest: UpdateBoardRequest
): Promise<SavedBoardResponse> {
    const response = await privateApiCall({
        method: 'PUT',
        url: `/api/v1/board/${boardId}`,
        body: {
            name: updateBoardRequest.name
        }
    })
    
    const data = await response.json()
    if (response.ok) {
        return savedBoardResponseFromData(data)
    } else {
        return Promise.reject({successful: false})
    }
}

export async function addMenberToBoard(
    boardId: string,
    menberEmail: string,
): Promise<SavedBoardResponse> {
    const response = await privateApiCall({
        method: 'PUT',
        url: `/api/v1/board/${boardId}/add-member/${menberEmail}`
    })
    
    const data = await response.json()
    if (response.ok) {
        return savedBoardResponseFromData(data)
    } else {
        return Promise.reject({successful: false})
    }
}

export async function removeMenberToBoard(
    boardId: string,
    menberEmail: string,
): Promise<SavedBoardResponse> {
    const response = await privateApiCall({
        method: 'DELETE',
        url: `/api/v1/board/${boardId}/remove-member/${menberEmail}`
    })
    
    const data = await response.json()
    if (response.ok) {
        return savedBoardResponseFromData(data)
    } else {
        return Promise.reject({successful: false})
    }
}

export async function findBoard(
    boardId: string
): Promise<SavedBoardResponse> {
    const response = await privateApiCall({
        method: 'GET',
        url: `/api/v1/board/${boardId}`
    })
    
    const data = await response.json()
    if (response.ok) {
        return savedBoardResponseFromData(data)
    } else {
        return Promise.reject({successful: false})
    }
}

export async function findBoardMembers(
    boardId: string
): Promise<Array<SimpleUserResponse>> {
    const response = await privateApiCall({
        method: 'GET',
        url: `/api/v1/board/${boardId}/members`
    })
    
    const data = await response.json()
    if (response.ok) {
        return (data as Array<any>).map(it => simpleUserResponseFromData(it))
    } else {
        return Promise.reject({successful: false})
    }
}