<template>
	<div>
		<section class="contact bg-success">
			<div class="container">
				<h2 class="text-white">We love new friends!</h2>
				<div class="row">
					<div class="col-4">
						<Card />
					</div>
					<div class="col-4">
						<Card :title="second" />
					</div>
					<div class="col-4">
						<Card />
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
import Card from './Card.vue';
import { ref } from 'vue';

const second = ref('BasketBall');
</script>

<style lang="scss" scoped></style>
