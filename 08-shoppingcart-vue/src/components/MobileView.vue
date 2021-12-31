<template>
	<div class="box">
		<slot></slot>
	</div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
	color: {
		type: String,
		default: 'red',
	},
});

const { color } = toRefs(props);
</script>

<style lang="scss" scoped>
.box {
	width: 350px;
	height: 650px;
	background: v-bind(color);
	border-radius: 2rem;
	flex-shrink: 0;
	box-shadow: 0 0 10px hsl(0, 6%, 86%), 0 0 20px hsl(0, 0%, 88%),
		0 0 25px hsl(0, 0%, 93%);
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
}
</style>
