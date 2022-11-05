export interface SimpleBoardResponse {
    id: string,
    name: string
}

export function simpleBoardResponseFromData(data: any): SimpleBoardResponse {
    return {
        id: data.id,
        name: data.name
    }
}