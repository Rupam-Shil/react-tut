<template>
	<div class="main">
		<header>
			<h1>Vue Todo</h1>
		</header>
		<TodoInput />
		<TodoArea />
	</div>
</template>

<script setup>
import TodoInput from './components/TodoInput.vue';
import TodoArea from './components/TodoArea.vue';
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap');
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
:root {
	--bg: #383f48;
	--text-color: #fff;
}

body {
	font-family: 'Poppins', sans-serif;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	background: var(--bg);
	color: var(--text-color);
}
.main {
	header {
		margin: 1rem 0;
		text-align: center;
	}
}
</style>
