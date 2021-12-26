<template>
	<div class="card">
		<div class="card-img">
			<img :src="details.picture?.large" alt="" />
		</div>
		<div class="card-details">
			<div class="name">
				{{ details.name?.title }} {{ details.name?.first }}
				{{ details.name?.last }}
			</div>
			<div class="gender">{{ details.gender }}</div>
		</div>
		<div class="card-location">
			<span>
				{{ details.location.street?.number }},
				{{ details.location.street?.name }} {{ details.location.city }}
				{{ details.location.state }} {{ details.location.country }}
				{{ details.location.postcode }}
			</span>
		</div>
		<div class="card-social">
			<div class="social-each">
				<i class="uil uil-envelope"></i>
				<span>{{ details.email }}</span>
			</div>
			<div class="social-each">
				<i class="uil uil-phone"></i>
				<span>{{ details.phone }}</span>
			</div>
		</div>
		<button class="card-btn" @click="toFetch">Generate</button>
	</div>
</template>

<script setup>
import { defineProps, defineEmits, toRefs } from 'vue';

const props = defineProps({
	details: {},
});

const { details } = toRefs(props);
const emits = defineEmits(['fetchNew']);

const toFetch = () => {
	emits('fetchNew');
};
</script>

<style lang="scss" scoped>
@mixin fcenter($dir: row, $j: center) {
	display: flex;
	flex-direction: $dir;
	align-items: center;
	justify-content: $j;
}
.card {
	background: var(--text);
	color: var(--card-text);
	width: 90vw;
	max-width: 350px;
	height: 70vh;
	box-shadow: var(--card-shadow);
	@include fcenter(column, none);
	padding: 2rem 2rem;
	text-align: center;
	&-img {
		width: 120px;
		aspect-ratio: 1;
		@include fcenter;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			border: 2px solid var(--btn);
			border-radius: 50%;
			box-shadow: inset 0 0 12px var(--btn), inset 0 0 8px var(--btn);
		}
		img {
			border-radius: 50%;
			width: calc(100% - 20px);
			aspect-ratio: 1;
		}
	}
	&-details {
		margin-top: 1rem;
		.name {
			font-weight: 500;
			line-height: 0.6;
		}
		.gender {
			font-size: 0.9rem;
		}
	}
	&-location {
		margin-top: 2rem;
		line-height: 120%;
		font-size: 0.8rem;
	}
	&-btn {
		outline: none;
		border: none;
		margin-top: 2rem;
		width: 100%;
		height: 4rem;
		border-radius: 0.5rem;
		color: #fff;
		background: var(--card-btn);
		font-size: 1.2rem;
		box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
		cursor: pointer;
		transition: 0.3s;
		&:active {
			transform: translateY(5px);
			box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.2);
		}
	}
	&-social {
		$i: social;
		display: grid;
		width: 100%;
		margin-top: 1rem;
		gap: 0.5rem;
		.#{$i}-each {
			display: flex;
			flex-direction: column;
			flex: 1;
		}
	}
}
</style>
