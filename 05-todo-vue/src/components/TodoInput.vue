<template>
	<div>
		<input type="text" v-model="todoString" />
		<button @click="insertTodo">Add Todo</button>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { ADD_TODO } from '../composables/todo.js';
import { nanoid } from 'nanoid';

const todoString = ref('');

const insertTodo = () => {
	if (!todoString.value) {
		return;
	}
	ADD_TODO({
		todo: todoString.value,
		id: nanoid(),
	});
	todoString.value = '';
};
</script>

<style lang="scss" scoped>
input,
button {
	outline: none;
	border: none;
}
div {
	display: flex;
}
input {
	max-width: 25rem;
	width: 60vw;
	height: 3rem;
	padding: 0 1rem;
	font-size: 1.2rem;
}
button {
	padding: 0 1rem;
	font-size: 1.2rem;
	cursor: pointer;
	background: #06bee1;
	color: var(--text-color);
	transition: 0.3s;
	&:hover {
		box-shadow: inset 0 0 10px hsl(190, 100%, 18%);
	}
	&:active {
		box-shadow: inset 0 0 20px hsl(190, 100%, 18%);
	}
}
</style>
