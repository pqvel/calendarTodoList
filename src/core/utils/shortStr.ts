
export const shortStr = (str: string, maxLength?: number, endStr?: string): string => {
    if (maxLength === undefined) maxLength = 20
    if (str.length < maxLength) return str;

    if (endStr === undefined) endStr = ""

    if (str[maxLength - 1] === " ") {
        return str.slice(0, maxLength - 1) + endStr
    } else {
        return str.slice(0, maxLength) + endStr
    }
}