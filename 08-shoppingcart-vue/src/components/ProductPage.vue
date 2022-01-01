<template>
	<div class="pp">
		<header>
			<div class="pp-header-arrow">&#60;</div>
			<div class="pp-header-name">Search Product</div>
			<div class="pp-header-profile">
				<img src="../assets/logo.png" alt="" />
			</div>
		</header>
		<div class="pp-search">
			<div class="pp-search-input">
				<div class="pp-search-icon f-center">
					<i class="uil uil-search"></i>
				</div>
				<input type="text" placeholder="Search..." />
			</div>
			<div class="pp-search-filter f-center cp">
				<i class="uil uil-sliders-v-alt"></i>
			</div>
		</div>
		<div class="pp-item-header">
			<!-- TODO:  -->
			<h1>Found 10 Results</h1>
		</div>
		<div class="pp-items">
			<ProductCard
				v-for="(item, index) in items"
				:item="item"
				:key="index"
				@addToCart="addToCart"
			/>
		</div>
	</div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import ProductCard from './ProductCard.vue';

const items = ref([
	{
		name: 'Body Scrub',
		img: '1.jpg',
		sub: 'A coffee scrub',
		price: 9.99,
	},
	{
		name: 'Face Scrub',
		img: '2.jpg',
		sub: 'A coffee scrub',
		price: 10.0,
	},
	{
		name: 'Abrica Scrub',
		img: '3.jpg',
		sub: 'A coffee scrub',
		price: 12.99,
	},
	{
		name: 'Lava Ash',
		img: '4.jpg',
		sub: 'A coffee scrub',
		price: 7.99,
	},
	{
		name: 'Face Wash',
		img: '5.jpg',
		sub: 'A coffee scrub',
		price: 15.99,
	},
]);

const emits = defineEmits(['addToCart']);

const addToCart = (item) => {
	emits('addToCart', item);
};
</script>

<style lang="scss">
.f-center {
	display: flex;
	justify-content: center;
	align-items: center;
}
.cp {
	cursor: pointer;
}
.pp {
	$i: &;
	width: 100%;
	height: 100%;
	padding: 1.5rem;
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		#{$i}-header-arrow {
			font-size: 2rem;
			cursor: pointer;
		}
		#{$i}-header-name {
			font-weight: 500;
		}
		#{$i}-header-profile {
			width: 2rem;
			aspect-ratio: 1;
			img {
				width: 100%;
			}
		}
		margin-bottom: 1rem;
	}
	&-search {
		$i: &;
		display: flex;
		justify-content: space-between;
		align-items: center;
		--br: 0.4rem;
		margin-bottom: 1rem;
		&-input {
			height: 2.5rem;
			div {
				background: #fff;
			}
			display: flex;
			#{$i}-icon {
				width: 2rem;
				border-radius: var(--br) 0 0 var(--br);
				i {
					color: rgb(151, 150, 150);
				}
			}
			input {
				outline: none;
				border: none;
				border-radius: 0rem var(--br) var(--br) 0rem;
				width: 13rem;
				font-weight: 600;
				&::placeholder {
					color: rgb(116, 116, 116);
				}
			}
		}
		&-filter {
			background: #fff;
			height: 2.5rem;
			aspect-ratio: 1;
			border-radius: var(--br);
		}
	}
	&-item-header {
		h1 {
			font-weight: 600;
		}
		margin-bottom: 1rem;
	}
	&-items {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		justify-content: space-between;
	}
}
</style>
