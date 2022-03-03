import React from "react";
import styles from "./TaskList.module.scss";
import sampleDate from "./sampleDate.json";
import TaskItem from "../taskItem/TaskItem";

const TaskList: React.FC = () => {
  return (
    <div className={styles.root}>
      {sampleDate.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
