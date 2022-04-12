export type CalendarType = Array<Array<CalendarItemType | EmptyCalendarItemType>>

export type CalendarItemType = {
    day: number,
    month: number,
    year: number,
    dayWeek: string,
    active?: boolean,
} 

export type TodosType = {
  date: number,
  todos: Array<TodoType>
}

export type TodoType = {
    time: string,
    descr: string,
    title: string,
    id: string
  }

export type EmptyCalendarItemType = null;