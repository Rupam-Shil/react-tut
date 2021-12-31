<template>
	<div class="home">
		<MobileView color="#EBEAEF"></MobileView>
		<MobileView color="#F2F0F1"></MobileView>
	</div>
</template>
<script setup>
import MobileView from './components/MobileView.vue';
</script>

<style lang="scss">
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
}
:root {
	--bg: #e5e5e5;
}
.home {
	width: 100vw;
	min-height: 100vh;
	background: var(--bg);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4rem;
}
@media only screen and (max-width: 768px) {
	.home {
		padding: 2rem;
		flex-direction: column;
		gap: 2rem;
	}
}
</style>
