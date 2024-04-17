import PropTypes from 'prop-types'
import Task from './Task'

const TaskList = ({tasks, onDeleteTask}) => {
	return (
		<div>
		  {tasks.map(task => (
			<Task key={task.id} task={task} onDelete={() => onDeleteTask(task.id)}/>
		  ))}
		</div>
	);
};

export default TaskList
