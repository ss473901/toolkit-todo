import React from "react";
import { useForm } from "react-hook-form";
import styles from "./TaskForm.module.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type Inputs = {
  taskTitle: string;
};

const TaskForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data: Inputs) => {
    console.log(data);
    reset();
  };

  return (
    <Box className={styles.root}>
      <form onSubmit={handleSubmit(handleCreate)} className={styles.form}>
        <TextField
          id="outlined-basic"
          label="NewTask"
          variant="outlined"
          inputRef={register}
          name="taskTitle"
          className={styles.text_field}
        />
      </form>
    </Box>
  );
};

export default TaskForm;
