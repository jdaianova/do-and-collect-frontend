import styles from "./CreateTaskForm.module.scss";
import { useForm } from "react-hook-form";
import config from "../../../shared/config";
import axios from "axios";

function CreateTaskForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const taskData = {
      description: data.taskDescription,
      reward: parseInt(data.priceForTask, 10),
      completionDate: new Date(data.completionDate).toISOString(),
    };

    axios
      .post(`${config.apiBaseUrl}/tasks`, taskData)
      .then(() => reset())
      // .catch((error) => console.error("axios error", error));
  };

  return (
    <form className={styles.createTaskForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.createTaskBlock}>
        <label htmlFor="taskDescription">какое задание хочешь добавить?</label>
        <textarea
          id="taskDescription"
          placeholder="тут напиши что нужно сделать..."
          {...register("taskDescription", {
            required: "Нужно ввести задание.",
          })}
        />
        {errors.taskDescription && (
          <p className={styles.errorMessage}>
            {errors.taskDescription.message}
          </p>
        )}
      </div>

      <div className={styles.createTaskBlock}>
        <label htmlFor="completionDate">когда надо закончить это задание?</label>
        <input
          id="completionDate"
          type="date"
          {...register("completionDate", { required: "Нужно назначить дату." })}
        />
        {errors.completionDate && (
          <p className={styles.errorMessage}>{errors.completionDate.message}</p>
        )}
      </div>

      <div className={styles.createTaskBlock}>
        <label htmlFor="priceForTask">установи количество монеток за выполнение задания:</label>
        <input
          id="priceForTask"
          type="number"
          {...register("priceForTask", {
            required: "Нужно задать количество монеток.",
          })}
        />
        {errors.priceForTask && (
          <p className={styles.errorMessage}>{errors.priceForTask.message}</p>
        )}
      </div>

      <button type="submit">Добавить задание</button>

      <p className={styles.notification}>Чтобы было все честно, дату и награду нельзя будет поменять. <br />Описание задания менять можно!</p>

    </form>
  );
}

export default CreateTaskForm;
