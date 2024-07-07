<template>
	<article :class="$style.article">
		<img
			:class="$style.image"
			src="/images/dev.jpg"
			:alt="`Illustration of ${article.title}`"
		>
		<p :class="$style.text">{{ preview }}</p>
		<NuxtLink :to="`articles/${article.id}`" :class="$style.link">Read more</NuxtLink>
	</article>
</template>

<script setup>
	const { article } = defineProps(['article']);
	const preview = computed(() =>
		article.preview.length > 90
			? article.preview.slice(0, 90)+'...'
			: article.preview
	)
</script>

<style scoped module>
	.article {
		overflow: hidden;
		transition: .3s;
		&:hover {
			margin-top: -20px;
		}

	}
	.image {
		width: 100%;
		height: 280px;
		object-fit: cover;
	}
	.text {
		margin: 24px 0 0;
		height: 74px;
		font-size: 20px;
		line-height: 24px;
		text-align: left;
	}
	.link {
		font-size: 20px;
		line-height: 24px;
		color: var(--light-purple);
		transition: .3s;
		&:hover {
			color: var(--purple);
		}
	}
</style>