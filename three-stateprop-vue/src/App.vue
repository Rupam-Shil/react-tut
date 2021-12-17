<template>
	<div class="App">
		<header>
			<h1>Vue version of state checking</h1>
		</header>
		<h2>The count no is {{ count }}</h2>
		<button @click="count = 0">Reset Counter</button>
		<button @click="changeCount(1)">Increase Counter</button>
		<button @click="changeCount(-1)">Decrease Counter</button>
	</div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);

const changeCount = (val) => {
	count.value < 0 || count.value > 10 ? null : (count.value += val);
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap');
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: 'Poppins', sans-serif;
}
.App {
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
	background: #383f48;
	color: #06bee1;
	min-height: 100vh;
}
button {
	border: none;
	outline: none;
	color: #fff;
	padding: 0.5rem 1rem;
	border-radius: 0.2rem;
	font-size: 20px;
	text-transform: uppercase;
	width: 300px;
	background: #007bff;
	box-shadow: inset 0 0 10px #183758;
	transition: 0.2s ease-in-out;
}
button:active {
	box-shadow: inset 0 0 20px #183758;
}
</style>
