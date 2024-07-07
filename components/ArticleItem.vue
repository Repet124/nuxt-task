<template>
	<article :class="$style.article">
		<img
			:class="$style.image"
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

<style scoped module>
	.article {
		overflow: hidden;
	}
	.image {
		width: 100%;
	}
</style>