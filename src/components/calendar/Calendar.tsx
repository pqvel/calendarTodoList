import { FC, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { CalendarType, EmptyCalendarItemType, CalendarItemType } from "../../core/types/types";
import { daysText, monthText } from "../../core/constants/date"
import { CalendarButtonType } from "./calendarButton/CalendarButton";
import CalendarItem from "../calendarItem/CalendarItem";
import CalendarButton from "./calendarButton/CalendarButton";
import './calendar.scss'


const Calendar: FC = () => {    
    const date = new Date();
    
    const [calendar, setCalendar] = useState<CalendarType>([]);
    const [month, setMonth] = useState<number>(date.getMonth());
    const [year, setYear] = useState<number>(date.getFullYear());

    const daysInMonth = (): number => 32 - new Date(year, month, 32).getDate();

    const getWeekDay = (): number => new Date(year, month, 0).getDay();

    const changeDate = (chgMonthValue: 1 | -1): void => {
        if (month === 0 && chgMonthValue === -1) {
            setYear(year - 1)
            setMonth(11)
            return;
        }
        if (month === 11 && chgMonthValue === 1) {
            setYear(year + 1);
            setMonth(0);
            return;
        }
        setMonth(month + chgMonthValue);
    }

    const changeCalendar = () => {
        const monthData: CalendarType = [];
        let dayCounter: number = 0;
    
        const currentDay: number = date.getDate();
        const currentMonth: number = date.getMonth();
        const currentYear: number = date.getFullYear();

        const weekDay: number = getWeekDay();
        const daysInMonthValue =  daysInMonth()
        for (let i = 0; i < 6; i++) {
            monthData[i] = [];

            for (let k = 0; k < 7; k++) {
                if (i === 0 && k < weekDay) {
                    monthData[i][k] = null;
                    continue;
                } 

                if (dayCounter < daysInMonthValue) {
                    dayCounter++;
                    monthData[i][k] = {
                        day: dayCounter,
                        month: month,
                        year: year,
                        dayWeek: daysText[k],
                        active: (
                            dayCounter === currentDay && 
                            year === currentYear &&
                            month === currentMonth
                        )
                    };
                } else {
                    monthData[i][k] = null;
                }
            }
        }

        setCalendar(monthData);
    }

    useEffect(() => {
        changeCalendar();
    }, [month, year])

    return (
        <>
        <table className="calendar">
            <thead className="calendar__header">
                <tr className="calendar__header-row">
                    <td className="calendar__header-item" colSpan={2}>
                        <CalendarButton type={CalendarButtonType.prev} clickHandler={() => changeDate(-1)}/>
                    </td>
                    <th className="calendar__header-item" colSpan={3}>{monthText[month]}, {year}</th>
                    <td className="calendar__header-item" colSpan={2}>
                        <CalendarButton type={CalendarButtonType.next} clickHandler={() => changeDate(1)}/>
                    </td>
                </tr>
            </thead>
            <tbody className="calendar__body">
                {
                    calendar.map((arr: Array<CalendarItemType | EmptyCalendarItemType>, i) => {
                        return (
                            <tr key={uuidv4()}>
                                {
                                    arr.map((item: CalendarItemType | EmptyCalendarItemType) => {
                                        if (item === null) {
                                            return <td key={uuidv4()} className="calendar__item"></td>
                                        }

                                        const {day, month, year, dayWeek, active} = item;
                                        return <CalendarItem key={uuidv4()} 
                                                             dayWeek={dayWeek} 
                                                             day={day} 
                                                             month={month} 
                                                             year={year}
                                                             active={active}/>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}

export default Calendar;