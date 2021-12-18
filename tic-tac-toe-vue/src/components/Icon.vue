<template>
	<div>
		<i class="uil uil-times bold" v-if="icon === 'cross'"></i>
		<i class="uil uil-circle bold" v-if="icon === 'circle'"></i>
		<i class="uil uil-pen" v-if="icon === ''"></i>
	</div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
	icon: { type: String },
});
const { icon } = toRefs(props);
</script>

<style lang="scss" scoped>
.uil {
	font-size: 1.5rem;
	color: #007f44;
}
.bold {
	font-size: 1.8rem;
	color: #000;
}
</style>
