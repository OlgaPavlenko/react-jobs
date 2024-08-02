import { ChangeEvent, FunctionComponent, useState } from "react";
import { ItodoUpdate, todoUpdated } from "../../store/slices/todoSlice";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../shared/Button";
import Input from "@mui/material/Input";
import styles from "./EditTodo.module.scss";
import { todoUpdateSelector } from "../../store/selectors/todo";

const EditTodo: FunctionComponent = () => {
  const todoToUpdate: ItodoUpdate = useSelector(todoUpdateSelector);
  const dispatch = useDispatch();
  const [inputEdited, setInputEdited] = useState<string | undefined>(
    todoToUpdate.name
  );

  const getInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputEdited(event.target.value);
  };

  const getEditedInput = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputEdited);
    if (/^\s*$/.test(inputEdited as string)) {
      alert("enter todo");
      setInputEdited("");
      return;
    } else {
      dispatch(
        todoUpdated({
          id: todoToUpdate.id,
          name: inputEdited,
          isDone: false,
        })
      );
      setInputEdited("");
    }
  };

  return (
    <form onSubmit={getEditedInput} className={styles.form}>
      <Input
        value={inputEdited}
        onChange={getInputValue}
        aria-label="Demo input"
        placeholder="Type something…"
        className={styles.todoValue}
      />
      <Button name="Edit todo" className={styles.editButton} />
    </form>
  );
};

export default EditTodo;
