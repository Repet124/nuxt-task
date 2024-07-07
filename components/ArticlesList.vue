<template>
	<div
		:class="$style.list"
		:style="{
			gridTemplateColumns: `repeat(${cols}, 1fr)`,
			gridTemplateRows: `repeat(${rows}, ${rowHeight}px)`
		}"
	>
		<ArticleItem v-for="article in articles()" :article="article" />
	</div>
	<nav>
		<UPagination v-model="page" :page-count="articlesPerPage" :total="data.length"/>
	</nav>
</template>

<script setup lang="ts">
	export interface Props {
		cols?: number,
		rows?: number
	}

	const rowHeight: number = 378;
	const { cols, rows } = withDefaults(defineProps<Props>(), {
		cols: 4,
		rows: 2,
	})
	const articlesPerPage = cols * rows;
	const page = useState('page', () => 1);
	const { data } = await useFetch('/api/articles');

	function articles() {
		let result = data.value.slice(
			articlesPerPage * (page.value-1),
			articlesPerPage * page.value
		);
		return result;
	};
</script>

<style scoped module>
	.list {
		display: grid;
		gap: 32px;
	}
</style>