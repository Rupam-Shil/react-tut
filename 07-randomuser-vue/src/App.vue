<template>
	<div><Card :details="details" @fetchNew="fetchNew" /></div>
</template>

<script setup>
import Card from './components/Card.vue';
import axios from 'axios';
import { ref } from 'vue';

const details = ref({});

const fetchData = async () => {
	const { data } = await axios.get('https://randomuser.me/api');
	details.value = data.results[0];
};

fetchData();

const fetchNew = () => {
	fetchData();
};
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
	--bg: linear-gradient(90deg, #9a75cb, #d8b2f3);
	--text: #fff;
	--card-text: #252f34;
	--card-shadow: 0 0 25px hsl(266, 48%, 58%);
	--btn: #c99ffd;
	--card-btn: #c87ae2;
}
body {
	font-family: 'Poppins', sans-serif;
	background: var(--bg);
	min-height: 100vh;
	color: var(--text);
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
