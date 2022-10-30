import { AddCardRequest } from "../types/requests/board/AddCardRequest"
import { MoveCardToRequest } from "../types/requests/board/MoveCardToRequest"
import { UpdateCardParticipantsRequest } from "../types/requests/board/UpdateCardParticipantsRequest"
import { UpdateCardRequest } from "../types/requests/board/UpdateCardRequest"
import { CardDetailsResponse, cardDetailsResponseFromData } from "../types/response/board/CardDetailsResponse"
import { SaveCardResponse, saveCardResponseFromData } from "../types/response/board/SaveCardResponse"
import { SimpleCardResponse, simpleCardResponseFromData } from "../types/response/board/SimpleCardResponse"
import Pageable, { pageableFromData } from "../types/response/PageableResponse"
import { privateApiCall } from "./baseApiCalls"

export async function createCard(
    boardId: string,
    columnId: string,
    addCardRequest: AddCardRequest
): Promise<SaveCardResponse> {
    const response = await privateApiCall({
        method: 'POST',
        url: `/api/v1/column/${columnId}/card`,
        headers: {
            'Board-Id': boardId
        },
        body: {
            title: addCardRequest.title,
            description: addCardRequest.description,
            start_date: addCardRequest.startDate,
            end_date: addCardRequest.endDate,
            concluded_at: addCardRequest.concludedAt
        }
    })
    
    const data = await response.json()
    if (response.ok) {
        return saveCardResponseFromData(data)
    } else {
        return Promise.reject({successful: false})
    }
}

export async function updateCard(
    boardId: string,
    columnId: string,
    cardId: string,
    updateCardRequest: UpdateCardRequest
): Promise<SaveCardResponse> {
    const response = await privateApiCall({
        method: 'PUT',
        url: `/api/v1/column/${columnId}/card/${cardId}`,
        headers: {
            'Board-Id': boardId
        },
        body: {
            title: updateCardRequest.title,
            description: updateCardRequest.description,
            start_date: updateCardRequest.startDate,
            end_date: updateCardRequest.endDate,
            concluded_at: updateCardRequest.concludedAt,
            column_id: updateCardRequest.columnId
        }
    })
    
    const data = await response.json()
    if (response.ok) {
        return saveCardResponseFromData(data)
    } else {
        return Promise.reject({successful: false})
    }
}

export async function moveCardTo(
    boardId: string,
    columnId: string,
    cardId: string,
    moveCardToRequest: MoveCardToRequest
): Promise<SaveCardResponse> {
    const response = await privateApiCall({
        method: 'PUT',
        url: `/api/v1/column/${columnId}/card/${cardId}/move-to`,
        headers: {
            'Board-Id': boardId
        },
        body: {
            column_id: moveCardToRequest.columnId,
            order: moveCardToRequest.order
        }
    })
    
    const data = await response.json()
    if (response.ok) {
        return saveCardResponseFromData(data)
    } else {
        return Promise.reject({successful: false})
    }
}

export async function updateCardParticipants(
    boardId: string,
    columnId: string,
    cardId: string,
    updateCardParticipantsRequest: UpdateCardParticipantsRequest
): Promise<SaveCardResponse> {
    const response = await privateApiCall({
        method: 'PUT',
        url: `/api/v1/column/${columnId}/card/${cardId}/participants`,
        headers: {
            'Board-Id': boardId
        },
        body: {
            add_participants: updateCardParticipantsRequest.addParticipants,
            remove_participants: updateCardParticipantsRequest.removeParticipants
        }
    })
    
    const data = await response.json()
    if (response.ok) {
        return saveCardResponseFromData(data)
    } else {
        return Promise.reject({successful: false})
    }
}

export async function findCardsByColumn(
    boardId: string,
    columnId: string,
    page: number
): Promise<Pageable<SimpleCardResponse>> {
    const response = await privateApiCall({
        method: 'GET',
        url: `/api/v1/column/${columnId}/card/list?page=${page}&size=10`,
        headers: {
            'Board-Id': boardId
        }
    })
    
    const data = await response.json()
    if (response.ok) {
        return pageableFromData(data, (contentItem) => simpleCardResponseFromData(contentItem))
    } else {
        return Promise.reject({successful: false})
    }
}

export async function findCardDetails(
    boardId: string,
    columnId: string,
    cardId: string
): Promise<CardDetailsResponse> {
    const response = await privateApiCall({
        method: 'GET',
        url: `/api/v1/column/${columnId}/card//${cardId}/details`,
        headers: {
            'Board-Id': boardId
        }
    })
    
    const data = await response.json()
    if (response.ok) {
        return cardDetailsResponseFromData(data)
    } else {
        return Promise.reject({successful: false})
    }
}
