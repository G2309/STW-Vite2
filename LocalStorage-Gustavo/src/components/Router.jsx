import Task from './Task'
import TaskList from './TaskList'

function Router ({ruta}) {
	
	switch (ruta){
		case "/task":
			return <Task></Task>
		case "/task-list":
			return <TaskList></TaskList>
		default :
			return (
				<div>
					<h1>Bienvenido</h1>
					<p>Selecciona alguno de los botones para comenzar</p>
				</div>
			)
	}
}

export default Router
