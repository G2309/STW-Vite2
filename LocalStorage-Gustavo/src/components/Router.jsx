import React from 'react';
import PropTypes from 'prop-types';
import TaskApp from './TaskApp';

const Router = ({ruta}) => {
	return (
		<div>
			<h1>Bienvenido</h1>
			<p>Selecciona alguno de los botones para comenzar</p>
			<TaskApp ruta={ruta}/>
		</div>
		)
};

Router.propTypes = {
	ruta: PropTypes.string.isRequired
};

export default Router;
