<template>
	<div
		:class="$style.list"
		:style="{
			gridTemplateColumns: `repeat(${cols}, 1fr)`,
			gridTemplateRows: `repeat(${rows}, ${rowHeight}px)`
		}"
	>
		<ArticleItem v-for="article in articles.reverse()" :article="article" />
	</div>
	<nav>
		<UPagination v-model="usePage" :page-count="pageCount" :total="articles.length" />
	</nav>
</template>

<script setup lang="ts">
	export interface Props {
		cols?: number,
		rows?: number
	}

	const rowHeight: number = 398;
	const { cols, rows } = withDefaults(defineProps<Props>(), {
		cols: 4,
		rows: 2,
	})
	const usePage = () => useState('page');

	const { data: articles } = await useFetch('/api/articles');
	const pageCount = Math.ceil(articles.length / cols / rows);
</script>

<style scoped module>
	.list {
		display: grid;
		gap: 32px;
	}
</style>