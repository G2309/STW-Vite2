import {useState, useEffect} from 'react'
import Router from './components/Router'
import './App.css'

function App() {
	const [ruta, SetRuta] = useState('app')

	useEffect(() => {
		SetRuta(window.location.pathname)
	}, [])

	return (
		<div className = 'app'>
		  <div className = 'header-app'>
		    <nav style={{gap:'100px',display:'flex'}}>
			<a href='task'>Agregar tarea</a>
			<a href='task-list'>Lista de tareas</a>
		    </nav>
		  </div>
		  <div className='body-app'>
		    <Router ruta={ruta}></Router>
		  </div>
		</div>		
	)
}

export default App
