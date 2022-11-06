export interface AddCardRequest {
    title: string,
    description: string | null,
    priority: number,
    startDate: string | null,
    endDate: string | null,
    concludedAt: string | null,
}