import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { binarySearch } from '../utils/binarySearch';
import { TodosType, TodoType } from '../types/types';

export type InitialStateType = {
    todos: Array<TodosType>
}

type AddTodoPayload = {
  todo: TodoType,
  date: number
}

type DeleteTodoPayload = {
  id: string,
  date: number
}

const initialState: InitialStateType = {
    todos: [
        {
          date: 20220221,
          todos: [
            {
              time: '14:00',
              descr: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
              title: 'example awd ad ad ad adad wa wa a wad wad wadwad ad ',
              id: 'faeawda31-cqcq2x-rx2q3rcvaxr3v'
            }
          ],
        }
    ] 
  };
  
const sortTodos = (state: InitialStateType): void => {
  state.todos.sort((a, b) => a.date - b.date);
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<AddTodoPayload>) => {
      const {date, todo} = action.payload
      const pos: number = binarySearch(date, state.todos);
      
      if (pos !== -1) {
        state.todos[pos].todos.push(todo);
        state.todos[pos].todos.sort((a, b) => {
          const item1: number = Number(a.time.split(":").join(""));
          const item2 : number= Number(b.time.split(":").join(""));
          return item1 - item2
        })
      } else {
        state.todos.push({
          date,
          todos: [
            todo
          ]
        });
      }

      sortTodos(state);
    },
    deleteTodo: (state, action: PayloadAction<DeleteTodoPayload>) => {
      const {id, date} = action.payload;
      const pos: number = binarySearch(date, state.todos);
      state.todos[pos].todos = state.todos[pos].todos.filter(todo => todo.id !== id)
    }
  }
});

export const { addTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
