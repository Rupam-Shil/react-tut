<template>
	<div class="box" :class="[mode === 'light' ? 'light' : 'dark']">
		<p>This is provide/inject in vue</p>
		<button @click="changeMode">Click Me</button>
	</div>
</template>

<script setup>
import { inject, ref, onMounted } from 'vue';

let mode = inject('value');
const changeMode = () => {
	mode.value = mode.value === 'light' ? 'dark' : 'light';
};
</script>

<style scoped>
.box {
	height: 200px;
	text-align: center;
	font-size: 1.2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
}
button {
	width: max-content;
	padding: 1rem 10rem;
	background: rgb(0, 190, 0);
}
.light {
	background: #fff;
	color: #000;
}
.dark {
	background: #333;
	color: #fff;
}
</style>
