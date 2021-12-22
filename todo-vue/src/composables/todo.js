import { ref } from 'vue';

export const todos = ref([]);

export const ADD_TODO = (payload) => {
	todos.value = [...todos.value, payload];
	localStorage.setItem('todos', JSON.stringify(todos.value));
};

export const REMOVE_TODO = (payload) => {
	todos.value = todos.value.filter((todo) => {
		return todo.id !== payload;
	});
	localStorage.setItem('todos', JSON.stringify(todos.value));
};
