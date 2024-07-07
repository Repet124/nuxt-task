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
		<UPagination
			:inactiveButton="{class: 'pagination', variant: 'ghost'}"
			:prevButton="{class: 'pagination pagination-arrow', variant: 'ghost'}"
			:nextButton="{class: 'pagination pagination-arrow', variant: 'ghost'}"
			:activeButton="{class: 'pagination pagination-active', variant: 'ghost'}"
			v-model="page" :page-count="articlesPerPage" :total="data.length"/>
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
		// поворот массива, т.к. в предоставленном апи идёт битые картинки
		// просто чтобы первая страница была визуально приятнее
		let result = data.value.slice().reverse().slice(
		// нормальный вариант
		// let result = data.value.slice(
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
		margin-bottom: 50px;
	}

</style>

<style>
	.pagination{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 44px;
		height: 44px;
		color: var(--black) !important;
		border-radius: 13px !important;
		background-color: var(--light-gray) !important;
		border: none !important;
		&+.pagination {
			margin-left: 8px !important;
		}
		&:hover {
			background-color: #E8E8E8 !important;
		}
	}
	.pagination-active{
		color: #fff !important;
		background-color: var(--black) !important;
		&:hover{
			background-color: var(--black) !important;
		}
	}
	.pagination-arrow{
		color: var(--black) !important;
		background-color: var(--white) !important;
		border: 2px solid var(--light-gray) !important;
	}
</style>