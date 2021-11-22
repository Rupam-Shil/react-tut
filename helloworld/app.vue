<template>
	<div>
		<h1>Hello World!</h1>
		<Button :text="firstBtntext" />
		<Button text="Play store" />
		<Button />
	</div>
</template>

<script setup>
import { ref } from 'vue';
const firstBtntext = ref('App store');
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap');
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	background: #383f48;
}

body {
	font-family: 'Poppins', sans-serif;
}
h1 {
	text-align: center;
	color: #fff;
}
</style>
