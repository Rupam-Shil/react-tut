import { useState, useContext } from 'react';
import { FormGroup, Input, Button, Form, InputGroup } from 'reactstrap';
import { nanoid } from 'nanoid';

import { TodoContext } from '../context/TodoContext';
import { ADD_TODO } from '../context/action.types';

const TodoForm = () => {
	const [todoString, setTodoString] = useState('');
	const { dispatch } = useContext(TodoContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!todoString) {
			return alert('Please enter a todo');
		}
		const todo = {
			todoString,
			id: nanoid(),
		};
		dispatch({
			type: ADD_TODO,
			payload: todo,
		});

		setTodoString('');
	};
	return (
		<Form onSubmit={handleSubmit}>
			<FormGroup>
				<InputGroup>
					<Input
						type="text"
						name="todo"
						id="todo"
						placeholder="Your next todo"
						value={todoString}
						onChange={(e) => setTodoString(e.target.value)}
					/>
					<Button color="warning">Add</Button>
				</InputGroup>
			</FormGroup>
		</Form>
	);
};

export default TodoForm;
