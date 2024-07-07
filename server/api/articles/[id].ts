export default defineEventHandler(async (event) => {
	const id = event.context.params.id;
	const data = await $fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/'+id);
	return data;
})