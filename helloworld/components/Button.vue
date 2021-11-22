<template>
	<div>
		<button>{{ text }}</button>
	</div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';
const props = defineProps({
	text: { type: String, default: 'dummy' },
});

const { text } = toRefs(props);
</script>

<style scoped>
button {
	background: #30c862;
	padding: 0.5rem 1rem;
	margin: 1rem 1rem;
	outline: none;
	border: none;
	color: #fff;
	font-size: 1.2rem;
	cursor: pointer;
}
</style>
