import { FC } from "react";
import { useAppSelector } from "../../core/store/hooks";
import { TodoType } from "../../core/types/types";
import LastTodosItem from "../lastTodosItem/LastTodosItem";
import './lastTodos.scss';

const LastTodos: FC = () => {
    const lastTodos = useAppSelector(state => {
        const {todos} = state.todos;

        const lastTodos: Array<{date: number, todo: TodoType}> = [];

        dateTodos: for (let i = todos.length - 1; i >= 0; i--) {
        
            for (let k = todos[i].todos.length -1; k >= 0; k--) {
                lastTodos.push({todo: todos[i].todos[k], date: todos[i].date})
                
                if (lastTodos.length >= 10) break dateTodos;
            }
        }
        return lastTodos;
    })

    return (
        <div className="last-todos">
            <h3 className="last-todos__title">Last todos:</h3>
            <ul className="last-todos__list">
                {
                    !lastTodos.length ? <li>empty</li>  : lastTodos.map(item => {
                        const {todo, date} = item;
                        return <LastTodosItem key={todo.id} date={date} todo={todo}/>
                    })
                }
            </ul>
        </div>
    )
}

export default LastTodos;