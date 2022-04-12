import { FC } from "react";
import { useParams } from "react-router-dom";
import AddTodoForm from "../../components/addTodoForm/AddTodoForm";
import TodoList from "../../components/todoList/TodoList";
import TodoListHeader from "../../components/todoListHeader/TodoListHeader";
import "./todosPage.scss"

const TodosPage: FC = () => {
    const {todosId} = useParams()
    const date:number = Number(todosId);

    return (
        <>
            <div className="todo-page">
                <div className="container todo-page__container">
                    <div className="todo-page__column">
                        <TodoListHeader date={date}/>
                        <TodoList date={date}/>

                    </div>
                    <AddTodoForm date={date}/>
                </div>
            </div>
            
        </>
    )
}

export default TodosPage