import styles from "./Main.module.scss";
import CreateTaskForm from "./CreateTaskForm/CreateTaskForm";
import TaskList from "./TaskList/TaskList";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainBlock}>
        <CreateTaskForm />
      </div>
      <div className={styles.mainBlock}>
        <TaskList />
      </div>
    </div>
  );
};

export default Main;
