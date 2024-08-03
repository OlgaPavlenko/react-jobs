import {
  todoSelector,
  toggleInputFormSelector,
} from "../../store/selectors/todo";
import { useDispatch, useSelector } from "react-redux";

import { AddTodoForm } from "../AddTodoForm/AddTodoForm";
import { Button } from "../shared/Button";
import EditTodo from "../EditTodo/EditTodo";
import SingleTodoCard from "../SingleTodoCard/SingleTodoCard";
import styles from "./Card.module.scss";
import { todoCleared } from "../../store/slices/todoSlice";

export const Card: () => JSX.Element = () => {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();
  const toggleForm = useSelector(toggleInputFormSelector);
  const clearAllTodoes = () => {
    dispatch(todoCleared());
  };

  return (
    <div className={styles.wrap}>
      <h1 className={styles.header}>My Todo List</h1>
      {toggleForm ? <AddTodoForm /> : <EditTodo />}

      <ul>
        {todos.map(({ id, name }) => {
          return <SingleTodoCard key={id} id={id} name={name} />;
        })}
      </ul>
      <Button
        name="Clear"
        onClick={clearAllTodoes}
        className={styles.clearButton}
      />
    </div>
  );
};
