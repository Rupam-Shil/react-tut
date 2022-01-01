<template>
	<div class="pc">
		<div class="pc-img f-center">
			<img :src="item.img" alt="" />
		</div>
		<div class="pc-name">{{ item.name }}</div>
		<div class="pc-sub">{{ item.sub }}</div>
		<div class="pc-pp">
			<div class="pc-pp-price">${{ item.price }}</div>
			<button class="pc-pp-btn cp f-center" @click="addToCart">
				<i class="uil uil-plus"></i>
			</button>
		</div>
	</div>
</template>

<script setup>
import { defineProps, toRefs, defineEmits } from 'vue';

const props = defineProps({
	item: {
		type: Object,
	},
});

const { item } = toRefs(props);

const emits = defineEmits(['addToCart']);

const addToCart = () => {
	emits('addToCart', item);
};
</script>

<style lang="scss" scoped>
.pc {
	height: 15rem;
	width: 8.9rem;
	background: #fff;
	border-radius: 1rem;
	padding: 0.5rem;
	&-img {
		height: 7rem;
		width: 100%;
		img {
			border-radius: 1rem;
			object-fit: cover;
			height: 100%;
			width: auto;
		}
		margin-bottom: 1rem;
	}
	&-name {
		font-size: 0.9rem;
		font-weight: 700;
		line-height: 0;
		margin-bottom: 1rem;
	}
	&-sub {
		font-size: 0.8rem;
		line-height: 110%;
		color: rgb(126, 126, 126);
		margin-bottom: 1rem;
	}
	&-pp {
		display: flex;
		justify-content: space-between;
		align-items: center;
		&-price {
			font-weight: 600;
			font-size: 1.2rem;
		}
		&-btn {
			outline: none;
			border: none;
			border-radius: 50%;
			aspect-ratio: 1;
			width: 2rem;
			background: #000;
			i {
				color: #fff;
				font-size: 1.2rem;
				transition: 0.3s;
			}
			&:hover i {
				transform: rotate(90deg);
			}
		}
	}
}
</style>
