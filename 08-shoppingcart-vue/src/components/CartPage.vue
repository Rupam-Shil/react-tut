<template>
	<div class="pp">
		<header>
			<div class="pp-header-arrow">&#60;</div>
			<div class="pp-header-name">Shopping Bag</div>
			<div class="pp-header-profile">
				<img src="../assets/logo.png" alt="" />
			</div>
		</header>
		<div class="pp-cart" v-if="cartItems.length > 0">
			<div class="cart-item"></div>
			<div class="checkout">
				<div class="checkout-price">
					<span>Subtotal</span>
					<h3>${{ totalCartValue.toFixed(2) }}</h3>
				</div>
				<button class="checkout-btn" @click="checkout">
					Proceed to checkout
				</button>
			</div>
		</div>
		<div class="pp-cart" v-else>
			<h1 class="no-item">There is no item in the cart</h1>
		</div>
	</div>
</template>

<script setup>
import { defineProps, toRefs, ref, watch, defineEmits } from 'vue';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

const props = defineProps({
	cartItems: { type: [] },
});

const { cartItems } = toRefs(props);
const totalCartValue = ref(0);

watch(cartItems, () => {
	totalCartValue.value = 0;
	cartItems.value.forEach((item) => {
		totalCartValue.value =
			parseFloat(totalCartValue.value) + parseFloat(item.price);
	});
});
const emits = defineEmits(['checkout']);
const checkout = () => {
	createToast('Item Bought');
	emits('checkout');
};
</script>

<style lang="scss">
.pp-cart {
	height: 90%;
	display: grid;
	grid-template-rows: 80% auto;
	.no-item {
		font-weight: 400;
		color: rgb(129, 129, 129);
	}
	.checkout {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		&-price {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			span {
				font-weight: 400;
			}
		}
		&-btn {
			display: block;
			flex: 1;
			outline: none;
			border: none;
			border-radius: 100vmax;
			background: #000;
			color: #fff;
			font-weight: 700;
			padding: 1rem 0;
			cursor: pointer;
			text-transform: capitalize;
		}
	}
}
</style>
