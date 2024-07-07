<template>
	<h1 class="h1">{{ data.title }}</h1>
	<img :src="data.image" :alt="`Illustration of ${data.title}`" :class="$style.image">
	<h2>About</h2>
	<p :class="$style.desc">{{ data.description }}</p>
</template>

<script setup>
	const { id } = useRoute().params;
	const { data } = await useFetch('/api/articles/', {key: id});
</script>

<style scoped module>
	.image {
		display: block;
		max-width: 100%;
		margin: 0 auto 80px;
	}

	.desc {
		margin-top: 32px;
		max-width: 695px;
		font-size: 36px;
		font-weight: 400;
		line-height: 44.64px;
	}
</style>