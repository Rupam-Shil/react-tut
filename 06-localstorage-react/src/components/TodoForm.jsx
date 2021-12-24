import { useState } from 'react';
import {
	FormGroup,
	Input,
	InputGroup,
	Button,
	Form,
	Container,
} from 'reactstrap';
import { nanoid } from 'nanoid';

const TodoForm = ({ addTodos }) => {
	const [todoString, setTodoString] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		if (todoString === '') return alert('Please fill some value');
		const todo = {
			todoString,
			id: nanoid(),
		};
		setTodoString('');
		addTodos(todo);
	};
	return (
		<Form onSubmit={handleSubmit}>
			<FormGroup>
				<InputGroup>
					<Input
						type="text"
						name="todo"
						placeholder="Enter a todo string"
						id="todo"
						value={todoString}
						onChange={(e) => setTodoString(e.target.value)}
					/>
					<Button color="success">Add Todo</Button>
				</InputGroup>
			</FormGroup>
		</Form>
	);
};

export default TodoForm;
