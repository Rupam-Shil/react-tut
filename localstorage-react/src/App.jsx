import { useState, useEffect } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

const App = () => {
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		const localTodo = localStorage.getItem('todos');
		if (localTodo) {
			setTodos(JSON.parse(localTodo));
		}
	}, []);

	const addTodos = async (todo) => {
		setTodos([...todos, todo]);
	};
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);
	const markComplete = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};
	return (
		<Container fluid>
			<h1>Todo with local storage</h1>
			<Todos todos={todos} markComplete={markComplete} />
			<TodoForm addTodos={addTodos} />
		</Container>
	);
};

export default App;
