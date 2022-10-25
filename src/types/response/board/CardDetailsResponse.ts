export interface CardDetailsResponse {
    id: string,
    title: string,
    description: string | null,
    startDate: string | null,
    endDate: string | null,
    concludedAt: string | null,
    createdAt: string,
}