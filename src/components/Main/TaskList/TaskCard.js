import styles from "./TaskCard.module.scss";
import { FaEdit } from "react-icons/fa";
import gifCoins from "../../../shared/assets/images/shine-coins.gif";
import { useState } from "react";
import { MdFileDownloadDone } from "react-icons/md";
import { useUpdateTaskMutation } from "../../../redux/tasksSlice";

const TaskCard = ({ task, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState();
    const [updateTask] = useUpdateTaskMutation();

    const handleDelete = () => {
        onDelete(task._id);
    };

    const handleEditing = () => {
        if (!isEditing) {
            setNewText(task.description);
        }

        if (isEditing) {
            updateTask({ id: task._id, description: newText })
            .unwrap()
            // .then(() => {
            //     // console.log('Task updated successfully');
            // })
            // .catch((error) => {
            //     console.error('Ошибка при обновлении задачи:', error);
            // });
        }

        setIsEditing(!isEditing);
    };

    const handleChangeDescription = (e) => {
        setNewText(e.target.value);
    };

    return (
        <div className={styles.taskCard}>
            <div className={styles.taskContainer}>
                <div className={styles.reward}>
                    <img src={gifCoins} alt="coins" />
                    <p>{task.reward}</p>
                </div>

                <div className={styles.description}>
                    <div className={styles.descriptionText}>
                        {!isEditing && <p>{task.description}</p>}
                        {isEditing && (
                            <textarea
                                name="newText"
                                value={newText}
                                onChange={handleChangeDescription}
                            />
                        )}
                        <button onClick={handleEditing}>
                            {isEditing ? (
                                <MdFileDownloadDone size={30} color="green" />
                            ) : (
                                <FaEdit size={20} color="ffa700" />
                            )}
                        </button>
                    </div>

                    <p className={styles.date}>
                        ВЫПОЛНИТЬ ДО {new Date(task.completionDate).toLocaleDateString()}
                    </p>
                </div>
            </div>
            <button className={styles.deleteBtn} onClick={handleDelete}>
                СДЕЛАНО
            </button>
        </div>
    );
};

export default TaskCard;
