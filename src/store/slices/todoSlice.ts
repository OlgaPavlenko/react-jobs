import { createSlice, nanoid } from "@reduxjs/toolkit";

export interface ITodo {
  id: string;
  name: string;
  isDone: boolean;
}
export interface ITodos {
  todos: ITodo[];
  toggleForm: boolean;
  todoUpdate: {};
}
const initialState: ITodos = {
  todos: [
    {
      id: nanoid(),
      name: "wake up",
      isDone: false,
    },
    { id: nanoid(), name: "make coffe", isDone: false },
    { id: nanoid(), name: "play tennis", isDone: false },
  ],
  toggleForm: true,
  todoUpdate: {},
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todoAdded: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    todoCleared: (state, action) => {
      state.todos = [];
    },
    todoDone: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
    todoDeleted: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { todoAdded, todoCleared, todoDeleted, todoDone } =
  todoSlice.actions;
export default todoSlice.reducer;
