import {useState,useEffect} from 'react'; 
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TaskApp = ({ruta}) => {
	const [tasks, setTasks] = useState([]);
	const [taskId, setTaskId] = useState(0);

	useEffect(() => {
		const storedTasks = JSON.parse(localStorage.getItem('tasks'));
		if(storedTasks) {
			setTasks(storedTasks);
			setTaskId(taskId);
		};
	});

	const handleAddTask = (newTask) => {
		const newTaskWithId = {...newTask,id:taskId};
		const updatedTasks =[...tasks, newTaskWithId];
		setTasks(updatedTasks);
		setTaskId(taskId+1);
		localStorage.setItem('tasks', JSON.stringify(updatedTasks));

	};

	const handleDeleteTask = (taskId) => {
		const updatedTasks = tasks.filter((task) => task.id !== taskId);
		setTasks(updatedTasks);
		localStorage.setItem('tasks',JSON.stringify(updatedTasks));
	};

	const handleEditTask = (taskId, updatedTask) => {
		const updatedTasks = tasks.map(task =>
			task.id === taskId ? { ...task, ...updatedTask } : task
		);
        	setTasks(updatedTasks);
        	localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    	};

	return (
		<div>
			{ruta === '/add' && <TaskForm onSubmit={handleAddTask} />}
			{ruta === '/list' && <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask}/>}
		</div>
	);
};

export default TaskApp;
