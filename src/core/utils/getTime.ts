

export const getTime = (): string => {
    const date: Date = new Date();
    const minutes: number =  date.getMinutes(); const hours: number = date.getHours();
    const validMinutes: string = `${minutes}`.length === 2 ? `${minutes}` : `0${minutes}`;
    const validHours: string = `${hours}`.length === 2 ? `${hours}` : `0${hours}`;
    return `${validHours}:${validMinutes}`;
}