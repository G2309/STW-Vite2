import React from 'react'
import {useState} from 'react';
import PropTypes from 'prop-types'
import Task from './Task'

const TaskList = ({tasks, onDeleteTask, onEditTask}) => {
	return (
		<div>
		  {tasks.map((task) => (
			<Task key={task.id} task={task} onDelete={() => onDeleteTask(task.id)} onEdit={(updatedTask) => onEditTask(task.id, updatedTask)}/>
		  ))}
		</div>
	);
};


TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
};

export default TaskList
