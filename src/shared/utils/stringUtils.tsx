export function fillAtStartUntil(value: string, filler: string, maxSize: number): string {
    if (value.length >= maxSize) return value;

    const missingChars = maxSize - value.length
    const timesToRepeatFiller = missingChars / filler.length
    return filler.repeat(timesToRepeatFiller).concat(value)
}
