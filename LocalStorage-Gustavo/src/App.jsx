import React, { useState, useEffect } from 'react';
import Router from './components/Router';
import './App.css';

function App() {
  const [ruta, setRuta] = useState('app');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setRuta(window.location.pathname);
  }, []);

  const handleNavigation = (ruta) => {
    setRuta(ruta);
    window.history.pushState({}, '', ruta);
  };

  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleEditTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className='app'>
      <div className='header-app'>
        <nav style={{ gap: '100px', display: 'flex' }}>
          <button onClick={() => handleNavigation('/add')}>Agregar tarea</button>
          <button onClick={() => handleNavigation('/list')}>Lista de tareas</button>
        </nav>
      </div>
      <div className='body-app'>
        <Router ruta={ruta} onAddTask={handleAddTask} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} tasks={tasks} />
      </div>
    </div>
  );
}

export default App;

