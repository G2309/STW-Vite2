import {useState} from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({onSubmit}) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault(); //Evitar que se recargue la pagina
		onSubmit({title, content});
		setTitle('');
		setContent('');
	};

	return (
		<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', justifyContent:'center'}} >
		  <input style={{width: '750px'}} type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
		  <textarea style={{width:'750px'}} placeholder='Content' value={content} onChange={(e) => setContent(e.target.value)}/>
		  <button type='submit'>Add Task</button>
		</form>
		);
};

TaskForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default TaskForm;

