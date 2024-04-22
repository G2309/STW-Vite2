import PropTypes from 'prop-types';
import {useState} from 'react';

const Task = ({task, onDelete, onEdit}) => {
	const [isEditing, setIsEditing] = useState(false);
  	const [updatedTitle, setUpdatedTitle] = useState(task.title);
  	const [updatedContent, setUpdatedContent] = useState(task.content);

	const handleEdit = () => {
 		setIsEditing(true);
  	};

  	const handleSave = () => {
    		onEdit({ title: updatedTitle, content: updatedContent });
    		setIsEditing(false);
  	};

  	return (
    		<div>
      		{isEditing ? (
        		<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', justifyContent:'center'}}>
          		<input type="text" value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} />
          		<textarea value={updatedContent} onChange={(e) => setUpdatedContent(e.target.value)} />
          		<button onClick={handleSave}>Save</button>
        		</div>
		) : (
        		<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', justifyContent:'center'}}>
         		 <h2>{task.title}</h2>
          		<p>{task.content}</p>
          		<button onClick={onDelete}>Delete</button>
          		<button onClick={handleEdit}>Edit</button>
        		</div>
      		)}
    		</div>
  	);
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Task;

