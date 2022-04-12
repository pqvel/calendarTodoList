import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../core/store/hooks";
import { binarySearch } from "../../core/utils/binarySearch";
import TodoListItem from "../todoListItem/TodoListItem";

type TodoListProps = {
    date: number
}

const TodoList: FC<TodoListProps> = ({date}) => {
    const [isInitList, setInitList] = useState<boolean>(true);

    const todos = useAppSelector(state => {
        const pos = binarySearch(date, state.todos.todos);
        if (pos === -1) return [];
        return state.todos.todos[pos].todos;
    })

    useEffect(() => {
        const timeInit = (0.5 + todos.length*0.05) * 1000;
        const timerId = setTimeout(() => {
            setInitList(false);
        }, timeInit);
        return () => {
            clearTimeout(timerId)
        }
    }, [])
    
    return (
        <ul className="todo-list">
            {
                todos.map((todo, i) => {
                    const {id, time, descr, title} = todo;
                    return <TodoListItem key={id}
                                         id={id}
                                         isInitList={isInitList}
                                         order={i}
                                         date={date}
                                         time={time}
                                         descr={descr}
                                         title={title}/>
                })
            }
        </ul>
    )
}

export default TodoList