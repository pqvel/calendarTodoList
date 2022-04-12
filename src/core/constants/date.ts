type ArrConstants<T = string> = Readonly<Array<T>>;
type StrArrConstants = ArrConstants<string>;

export const daysText: StrArrConstants = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] as const;

export const monthText: StrArrConstants = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
] as const;