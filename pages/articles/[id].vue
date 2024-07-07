<template>
	<h1>{{ title }}</h1>
	<img :src="image" :alt="`Illustration of ${title}`">
	<h2>About</h2>
	<p>{{ description }}</p>
</template>

<script setup>
	const { id } = useRoute().params;
	const { title, image, descriprion } = await useFetch('/articles/'+id, {key: id});
</script>

<style scoped>
	
</style>