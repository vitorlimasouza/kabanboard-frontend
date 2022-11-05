import { fillAtStartUntil } from "./stringUtils";

export function dateTimeToBrazilianDateTimeString(date: Date): string {
    const hour = fillAtStartUntil(date.getHours().toString(), '0', 2);
    const minutes = fillAtStartUntil(date.getMinutes().toString(), '0', 2);
    const day = fillAtStartUntil(date.getDate().toString(), '0', 2);
    const month = fillAtStartUntil(date.getMonth().toString(), '0', 2);
    return `${hour}:${minutes} ${day}/${month}/${date.getFullYear()}`;
}
