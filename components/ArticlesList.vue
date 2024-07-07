<template>
	<div :style="{
		gridTemplateCols: cols,
		gridTemplateRows: `repeat(${rowHeight}px, ${rows})`
	}">
		<ArticleItem v-for="article in articles" :article="article" />
	</div>
	<!-- <nav>
		<UPagination v-model="usePage" :page-count="pageCount" :total="articles.length" />
	</nav> -->
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
	// const usePage = () => useState('page');

	const { data: articles } = await useFetch('/api/articles');
	// const pageCount = Math.ceil(articles.length / cols / rows);
</script>

<style scoped>
	
</style>