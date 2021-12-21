import { useContext } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FaCheckDouble } from 'react-icons/fa';

import { TodoContext } from '../context/TodoContext';
import { REMOVE_TODO } from '../context/action.types';

const Todos = () => {
	const { todos, dispatch } = useContext(TodoContext);

	return (
		<ListGroup className="mt-5 mb-2 items">
			{todos.map((todo) => {
				return (
					<ListGroupItem key={todo.id}>
						{todo.todoString}
						<span
							className="float-right"
							onClick={() => {
								dispatch({
									type: REMOVE_TODO,
									payload: todo.id,
								});
							}}
						>
							<FaCheckDouble />
						</span>
					</ListGroupItem>
				);
			})}
		</ListGroup>
	);
};
export default Todos;
