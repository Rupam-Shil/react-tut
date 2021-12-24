import React from 'react';
import Button from './components/Button.js';
// import './style.css';

const App = () => {
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Hello world</h1>
			<Button title="App store" />
			<Button title="play store" />
			<Button />
		</div>
	);
};

export default App;
