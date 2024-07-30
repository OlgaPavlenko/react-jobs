import { RootState } from "../store";

export const todoSelector = (state: RootState) => state.todos.todos;
