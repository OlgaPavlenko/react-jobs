import { FunctionComponent, useState } from "react";
import {
  todoDeleted,
  todoDone,
  toggleInputForm,
} from "../../store/slices/todoSlice";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import pink from "@mui/material/colors/pink";
import styles from "./SingleTodoCard.module.scss";
import { useDispatch } from "react-redux";

interface ISingleTodoCard {
  id: string;
  name: string;
}

const SingleTodoCard: FunctionComponent<ISingleTodoCard> = ({ name, id }) => {
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();

  const deleteTodo = () => {
    dispatch(todoDeleted(id));
  };

  const markAsDoneTodo = () => {
    setDone(!done);
    dispatch(todoDone(id));
  };

  const editTodo = () => {
    dispatch(toggleInputForm({ id, name }));
  };

  return (
    <li key={id} className={done ? styles.cardDone : styles.card}>
      <Input
        aria-label="Demo input"
        placeholder={name}
        className={styles.todoValue}
      />
      <div className={styles.buttonsSection}>
        <IconButton
          onClick={markAsDoneTodo}
          disabled={done}
          aria-label="done"
          sx={{ px: 0.5, mx: 0.25 }}
        >
          <CheckCircleOutlineIcon color={done ? "success" : "disabled"} />
        </IconButton>
        <IconButton
          onClick={editTodo}
          aria-label="edit"
          sx={{ px: 0.5, mx: 0.25 }}
        >
          <EditIcon color="secondary" />
        </IconButton>
        <IconButton
          onClick={deleteTodo}
          aria-label="delete"
          sx={{ px: 0.5, mx: 0.25 }}
        >
          <DeleteIcon sx={{ color: pink[500] }} />
        </IconButton>
      </div>
    </li>
  );
};

export default SingleTodoCard;
