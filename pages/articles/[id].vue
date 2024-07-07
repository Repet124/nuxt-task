<template>
	<h1>{{ data.title }}</h1>
	<img :src="data.image" :alt="`Illustration of ${data.title}`">
	<h2>About</h2>
	<p>{{ data.description }}</p>
</template>

<script setup>
	const { id } = useRoute().params;
	const { data } = await useFetch('/api/articles/'+id, {key: id});
</script>

<style scoped>
	
</style>