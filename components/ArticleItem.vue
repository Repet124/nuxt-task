<template>
	<article>
		<img
			class="image"
			:src="article.image"
			:srcset="article.image"
			:alt="`Illustration of ${article.title}`"
		>
		<p>{{ article.preview }}</p>
		<NuxtLink :to="`articles/${article.id}`">Read more</NuxtLink>
	</article>
</template>

<script setup>
	const { article } = defineProps(['article']);
</script>

<style scoped>
	.image {
		width: 100%;
	}
</style>