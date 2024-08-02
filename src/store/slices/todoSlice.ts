import { createSlice, nanoid } from "@reduxjs/toolkit";

export interface ITodo {
  id: string;
  name: string;
  isDone: boolean;
}

export interface ItodoUpdate {
  id?: string;
  name?: string;
  isDone?: boolean;
}
export interface ITodos {
  todos: ITodo[];
  toggleInputForm: boolean;
  todoUpdate: ItodoUpdate;
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
  toggleInputForm: true,
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
    toggleInputForm: (state, action) => {
      state.toggleInputForm = !state.toggleInputForm;
      state.todoUpdate = { ...action.payload };
    },
    todoUpdated: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, name: action.payload.name };
        }
        return todo;
      });
      state.toggleInputForm = !state.toggleInputForm;
    },
  },
});

export const {
  todoAdded,
  todoCleared,
  todoDeleted,
  todoDone,
  toggleInputForm,
  todoUpdated,
} = todoSlice.actions;
export default todoSlice.reducer;
