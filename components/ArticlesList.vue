<template>
	<div :style="{
		gridTemplateCols: cols
		gridTemplateRows: `repeat(${rowHeight}px, ${rows})`
	}">
		<ArticleItem v-for="article in articles" :article="article" />
	</div>
	<nav>
		<!-- pagination -->
	</nav>
</template>

<script setup lang="ts">
	export interface Props {
		cols?: number,
		rows?: number
	}

	const rowHeight: number = 300;
	const { cols, rows } = withDefaults(defineProps<Props>(), {
		cols: 4,
		rows: 2,
	})

	const { articles } = await useFetch('/articles');
</script>

<style scoped>
	
</style>