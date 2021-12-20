<template>
	<div>Main:{{ mode }}</div>
	<button @click="changeMode">Click Me</button>
	<ChildOne />
</template>

<script setup>
import { provide, ref } from 'vue';
import ChildOne from './components/ChildOne.vue';

const mode = ref('light');
provide('value', mode);

const changeMode = () => {
	mode.value = mode.value === 'light' ? 'dark' : 'light';
};
</script>

<style lang="scss" scoped></style>
