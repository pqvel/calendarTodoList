import { FC, useMemo } from "react";
import { monthText } from "../../core/constants/date";
import "./todoListHeader.scss";

type TodoListHeaderProps = {
    date: number
}

const TodoListHeader: FC<TodoListHeaderProps> = ({date}) => {
    
    const validDate = useMemo(() => {
        const strDate = date.toString()
        
        const year = strDate.slice(0,4)
        const monthNum = strDate.slice(4,5) === "0" ? Number(strDate.slice(5,6)) : Number(strDate.slice(4,6))
        const day = date.toString().slice(6,8)

        return `${day} ${monthText[monthNum]}, ${year}`
    }, [])

    return (
        <div className="todo-list-header">
            {validDate}
        </div>
    )
}


export default TodoListHeader
