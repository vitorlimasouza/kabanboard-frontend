export interface AddCardRequest {
    title: string,
    description: string | null,
    startDate: string | null,
    endDate: string | null,
    concludedAt: string | null,
}