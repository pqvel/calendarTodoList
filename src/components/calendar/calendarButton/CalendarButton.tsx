import { FC } from "react";
import ArrowSvg from "../../../assets/ArrowSvg";
import './calendarButton.scss'

export const enum CalendarButtonType {
    next = "next",
    prev = "prev"
}

type CalendarButtonProps = {
    type: CalendarButtonType,
    clickHandler: () => void
}

const CalendarButton: FC<CalendarButtonProps> = ({clickHandler, type}) => {
    const buttonClass: string = `calendar__button calendar__button--${type}`;
 
    return (
        <button className={buttonClass} onClick={() => clickHandler()}>
            <ArrowSvg/>
        </button>
    )
}

export default CalendarButton