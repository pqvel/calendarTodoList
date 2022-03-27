import { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { CalendarItemType } from "../../core/types/types";

const CalendarItem: FC<CalendarItemType> = ({day, month, year, dayWeek, active}: CalendarItemType) => {
    const tdClass = classNames("calendar__item", {calendar__item_active: active})
    const calendarLink  = `${year}` + (month.toString().length === 1 ? `0${month}` : month) + (day.toString().length === 1 ? `0${day}` : day);
    
    return (
        <td className={tdClass}>
            <Link className="calendar__item-link" to={`/${calendarLink}`}>
                <span className="calendar__item-dayweek">{dayWeek}</span>
                <span className="calendar__item-day">{day}</span> 
            </Link>
        </td>
    )
}

export default CalendarItem