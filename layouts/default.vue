<template>
	<HeaderBlock />

	<main>
		<h1>
			<slot name="h1" />
		</h1>
		<slot />
	</main>

	<FooterBlock />
</template>

<script setup>
	
</script>

<style>
	:root {
		--black: #101010;
		--dark-gray: #232323;
		--gray: #868686;
		--light-gray: #F3F3F3;
		--white: #F3F3F3;

		--green: #9EFFBF;
		--purple: #7941A7;
		--light-purple: #E2BEFF;
		--blue: #1059C8;
	}
</style>