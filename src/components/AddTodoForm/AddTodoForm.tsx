import { ChangeEvent, FunctionComponent, useState } from "react";

import { Button } from "../shared/Button";
import Input from "@mui/material/Input";
import { nanoid } from "@reduxjs/toolkit";
import styles from "./AddTodoForm.module.scss";
import { todoAdded } from "../../store/slices/todoSlice";
import { useDispatch } from "react-redux";

export const AddTodoForm: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const getInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const dispatch = useDispatch();
  const getTodoFromInput = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (/^\s*$/.test(inputValue)) {
      alert("enter todo");
      setInputValue("");
      return;
    } else {
      dispatch(
        todoAdded({
          id: nanoid(),
          name: inputValue,
          isDone: false,
        })
      );
      setInputValue("");
    }
  };
  return (
    <form onSubmit={getTodoFromInput} className={styles.form}>
      <Input
        value={inputValue}
        onChange={getInputValue}
        aria-label="Demo input"
        placeholder="Type something…"
        className={styles.todoValue}
      />
      <Button name="Add" className={styles.addButton} />
    </form>
  );
};
