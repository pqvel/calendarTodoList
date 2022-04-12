import { useState, ChangeEventHandler, ChangeEvent, useEffect } from "react"
type Element = HTMLInputElement | HTMLTextAreaElement;

type useInputReturn = {
    value: string,
    isDirty: boolean,
    valid: boolean,
    changeHandler: (event: ChangeEvent<Element>) => void,
    blurHandler: () => void,
    resetValue: () => void,
    resetDirty: () => void
}

type ValidationConfig = {
    minLength: number,
    isEmpty: boolean
}


const useValidation = (value: string, minLength: number) => {
    const [valid, setValid] = useState<boolean>(false);

    useEffect(() => {
        value.length > minLength ? setValid(true) : setValid(false);
    }, [value])

    return valid
}



const useInput = (initialValue: string = "", minLength: number): useInputReturn => {
    const [value, setValue] = useState<string>(initialValue);
    const [isDirty, setDirty] = useState<boolean>(false);
    
    const valid: boolean = useValidation(value, minLength);

    const changeHandler: ChangeEventHandler = (event: ChangeEvent<Element>): void => {
        setValue(value => event.target.value);
    }

    const blurHandler = (): void => {
        setDirty(true)
    }

    const resetDirty = (): void => {
        setDirty(false);
    }

    const resetValue = (): void => {
        setValue("");
    }

    return {
        value,
        isDirty,
        changeHandler,
        blurHandler,
        resetValue,
        resetDirty,
        valid
    };
}


export default useInput