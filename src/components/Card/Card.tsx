import { useDispatch, useSelector } from "react-redux";

import { AddTodoForm } from "../AddTodoForm/AddTodoForm";
import { Button } from "../shared/Button";
import SingleTodoCard from "../SingleTodoCard/SingleTodoCard";
import styles from "./Card.module.scss";
import { todoCleared } from "../../store/slices/todoSlice";
import { todoSelector } from "../../store/selectors/todo";

export const Card: () => JSX.Element = () => {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();
  const clearAllTodoes = () => {
    dispatch(todoCleared(null));
  };

  return (
    <div className={styles.wrap}>
      <h1 className={styles.header}>My Todo List</h1>
      <AddTodoForm />
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
