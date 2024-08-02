import { RootState } from "../store";

export const todoSelector = (state: RootState) => state.todos.todos;
export const toggleInputFormSelector = (state: RootState) =>
  state.todos.toggleInputForm;
export const todoUpdateSelector = (state: RootState) => state.todos.todoUpdate;
