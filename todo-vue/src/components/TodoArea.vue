<template>
	<div>
		<div class="todoarea">
			<div v-for="todo in todos" :key="todo.id" class="each-todo">
				<p>{{ todo.todo }}</p>

				<i class="bx bx-x" @click="REMOVE_TODO(todo.id)"></i>
			</div>
		</div>
	</div>
</template>

<script setup>
import { todos } from '../composables/todo';
import { REMOVE_TODO } from '../composables/todo';
</script>

<style lang="scss" scoped>
.todoarea {
	display: flex;
	flex-direction: column;
	margin-top: 2rem;
	.each-todo {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		background: #fff;
		color: #333;
		padding: 1rem;
		transform: perspective(100px) translateY(1px) rotateX(-2deg);
		border-bottom: 1px solid #333;
		&:nth-child(2n) {
			transform: perspective(100px) translateY(1px) rotateX(2deg);
		}
		i {
			font-size: 1.5rem;
			cursor: pointer;
		}
	}
}
</style>
