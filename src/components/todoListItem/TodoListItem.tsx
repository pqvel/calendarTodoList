import { FC, useEffect, useState } from "react";
import classNames from "classnames";
import './todoListItem.scss'
import TrashSvg from "../../assets/TrashSvg";
import { useAppDispatch } from "../../core/store/hooks";
import { deleteTodo } from "../../core/slices/todosSlice";

type TodoListItemProps = {
    id: string,
    descr: string,
    time: string,
    date: number,
    title: string,
    order: number,
    isInitList: boolean
}


const TodoListItem: FC<TodoListItemProps> = ({descr, title, time, id, date, order, isInitList}) => {
    const [isDelete, setDelete] = useState<boolean>(false);
    const [isInitTodo, setInitTodo] = useState<boolean>(true);

    const initTime = 0.5 + 0.05*order;
    const todoListItemClass = classNames("todo-list__item", {delete: isDelete});
    const dispatch = useAppDispatch();
    
    const onDeleteTodo = (): void => {
        setDelete(true); 
    }

    useEffect(() => {
        if (isDelete) {
            const timerId = setTimeout(() => {
                dispatch(deleteTodo({id, date}));
            }, 500)

            return () => {
                clearTimeout(timerId);
            }
        }
    }, [isDelete])
    
    useEffect(() => {
        if (isInitList) {
            const timerId = setTimeout(() => {
                setInitTodo(false);
            }, initTime * 1000)

            return () => {
                clearTimeout(timerId);
            }
        }
    }, [])
    return (
        <li className={todoListItemClass} style={(isInitList && isInitTodo) ? {animationDuration: `${initTime}s`} : {}}>
            <h5 className="todo-list__item-title">{title}</h5>
            <hr className="todo-list__item-line"></hr>
            <p className="todo-list__item-text">
                {descr}
            </p>
            <div className="todo-list__item-buttons">
                <button onClick={onDeleteTodo} disabled={isDelete} className="todo-list__item-button">
                    <TrashSvg/>
                </button>
                <button className="todo-list__item-button"></button>
            </div>
            <span className="todo-list__item-time">{time}</span>
        </li>
    )
}

export default TodoListItem;