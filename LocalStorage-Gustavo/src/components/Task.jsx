import PropTypes from 'prop-types';

const Task = ({task, onDelete}) => {
	return (
		<div>
		  <h2>{task.title}</h2>
		  <p>{task.desc}</p>
		  <button onClick={onDelete}>Delete</button>
		</div>
	);
};


export default Task
