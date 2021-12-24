<template>
	<div>
		<div class="container mt-3">
			<div class="mb-3">
				<div v-if="winMessage === ''">
					<h1 class="text-warning text-center">
						{{ isCross ? 'Cross' : 'Circle' }} turn
					</h1>
				</div>
				<div v-else>
					<h1 class="text-success text-center">
						{{ winMessage }}
					</h1>
					<button class="btn btn-success" @click="reloadGame">
						Reload Game
					</button>
				</div>
			</div>
			<div class="grid">
				<div
					class="card bg-warning"
					v-for="(item, index) in itemArray"
					:key="index"
					@click="changeValue(index)"
				>
					<div class="card-body box">
						<Icon :icon="item"></Icon>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import Icon from './components/Icon.vue';
import { ref } from 'vue';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

const itemArray = ref(new Array(9).fill(''));
const winMessage = ref('');
const isCross = ref(false);

const reloadGame = () => {
	itemArray.value.fill('', 0, 9);
	winMessage.value = '';
	isCross.value = false;
};
const changeValue = (index) => {
	if (winMessage.value) {
		return createToast(winMessage.value, { type: 'success' });
	}
	if (itemArray.value[index] !== '') {
		return createToast('Already filled', { type: 'danger' });
	} else {
		itemArray.value[index] = isCross.value ? 'cross' : 'circle';
		isCross.value = !isCross.value;
		checkWinner();
	}
};
const checkWinner = () => {
	if (
		itemArray.value[0] === itemArray.value[1] &&
		itemArray.value[0] === itemArray.value[2] &&
		itemArray.value[0] !== ''
	) {
		winMessage.value = `${itemArray.value[0]} won`;
	} else if (
		itemArray.value[3] !== '' &&
		itemArray.value[3] === itemArray.value[4] &&
		itemArray.value[4] === itemArray.value[5]
	) {
		winMessage.value = `${itemArray.value[3]} won`;
	} else if (
		itemArray.value[6] !== '' &&
		itemArray.value[6] === itemArray.value[7] &&
		itemArray.value[7] === itemArray.value[8]
	) {
		winMessage.value = `${itemArray.value[6]} won`;
	} else if (
		itemArray.value[0] !== '' &&
		itemArray.value[0] === itemArray.value[3] &&
		itemArray.value[3] === itemArray.value[6]
	) {
		winMessage.value = `${itemArray.value[0]} won`;
	} else if (
		itemArray.value[1] !== '' &&
		itemArray.value[1] === itemArray.value[4] &&
		itemArray.value[4] === itemArray.value[7]
	) {
		winMessage.value = `${itemArray.value[1]} won`;
	} else if (
		itemArray.value[2] !== '' &&
		itemArray.value[2] === itemArray.value[5] &&
		itemArray.value[5] === itemArray.value[8]
	) {
		winMessage.value = `${itemArray.value[2]} won`;
	} else if (
		itemArray.value[0] !== '' &&
		itemArray.value[0] === itemArray.value[4] &&
		itemArray.value[4] === itemArray.value[8]
	) {
		winMessage.value = `${itemArray.value[0]} won`;
	} else if (
		itemArray.value[2] !== '' &&
		itemArray.value[2] === itemArray.value[4] &&
		itemArray.value[4] === itemArray.value[6]
	) {
		winMessage.value = `${itemArray.value[2]} won`;
	}
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap');
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: 'Poppins', sans-serif;
	background: #000000 !important;
}

.grid {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 15px;
}

.box {
	width: auto;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}
.icon {
	font-size: 35px;
	color: #ffffff;
}
</style>
