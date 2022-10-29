export interface SimpleCardResponse {
    id: string,
    title: string,
}

export function simpleCardResponseFromData(data: any): SimpleCardResponse {
    return {
        id: data.id,
        title: data.title
    }
}