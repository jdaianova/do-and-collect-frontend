import { useEffect } from 'react';
import styles from './TaskList.module.scss';
import {
  useGetTasksQuery,
  useDeleteTaskMutation,
} from '../../../redux/tasksSlice';
import { useDispatch } from 'react-redux';
import { incrementCoins } from '../../../redux/coinsSlice';
import TaskCard from './TaskCard';

const TaskList = () => {
  const { data: tasks, error, isLoading, refetch } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const dispatch = useDispatch();


  useEffect(() => {
    const ws = new WebSocket('wss://do-and-collect-backend.onrender.com');
    // const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      // console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.message === 'Task list updated') {
        refetch();
      }
      // console.log('Received from server:', data.message);
    };

    ws.onclose = () => {
      // console.log('Disconnected from WebSocket server');
    };

    return () => {
      ws.close();
    };
  }, [refetch]);

  const handleDelete = async (task) => {
    try {
      await deleteTask(task._id);
      dispatch(incrementCoins(task.reward));
      refetch();
    } catch (error) {
      // console.error('Error deleting task:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching tasks: {error.message}</div>;

  const reversedTasks = tasks ? [...tasks].reverse() : [];

  return (
    <div className={styles.taskList}>
      {reversedTasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onDelete={() => handleDelete(task)}
        />
      ))}
    </div>
  );
};

export default TaskList;
