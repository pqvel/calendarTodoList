import { FC } from "react";
import Calendar from "../../components/calendar/Calendar";
import LastTodos from "../../components/lastTodos/LastTodos";
import './calendarPage.scss'

const CalendarPage: FC = () => {


    return (
        <div className="calendar-page">
            <div className="container calendar-page__container">
                <Calendar/>
                <LastTodos/>
            </div>
        </div>
    )
}

export default CalendarPage