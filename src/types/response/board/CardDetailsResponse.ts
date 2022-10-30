export interface CardDetailsResponse {
    id: string,
    title: string,
    description: string | null,
    startDate: string | null,
    endDate: string | null,
    concludedAt: string | null,
    createdAt: string,
}

export function cardDetailsResponseFromData(data: any): CardDetailsResponse {
    return {
        id: data.id,
        title: data.title,
        description: data.description,
        startDate: data.start_date,
        endDate: data.end_date,
        concludedAt: data.concluded_at,
        createdAt: data.created_at
    }
}