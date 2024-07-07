<template>
	<HeaderBlock />

	<main class="container main">
		<slot />
	</main>

	<FooterBlock />
</template>

<script setup>
	
</script>

<style>
	@font-face {
		font-family: 'tt_commons';
		src: url('/fonts/tt_commons_regular.woff') format('woff');
	}
	:root {
		--black: #101010;
		--dark-gray: #232323;
		--gray: #868686;
		--light-gray: #F3F3F3;
		--white: #fff;

		--green: #9EFFBF;
		--purple: #7941A7;
		--light-purple: #E2BEFF;
		--blue: #1059C8;
		color-scheme: light;
	}

	.btn {
		display: inline-block;
		padding: 16px 32px;
		height: 52px;
		border-radius: 26px;
		background-color: var(--black);
		text-align: center;
		line-height: 20px;
		font-size: 20px;
		color: #fff;
	}

	* {
		margin: 0;
		padding: 0;
		font-family: tt_commons, sans-serif;
	}

	.main {
		padding: 140px 0;
	}

	.container {
		margin: 0 auto;
		max-width: 1217px;
	}

	.h1 {
		font-size: 84px;
		font-weight: 400;
		margin-bottom: 60px;
	}
</style>