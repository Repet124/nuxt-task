<template>
	<header :class="$style.header">
		<NuxtLink to="#">
			<img src="/images/logo.svg" alt="QTIM logo">
		</NuxtLink>
		<nav :class="$style.nav">
			<NuxtLink to="#" :class="$style.link">Works</NuxtLink>
			<NuxtLink to="#" :class="$style.link">About</NuxtLink>
			<div :class="$style.buttons">
				<button class="btn btn-circle" :class="$style.lang"></button>
				<NuxtLink to="#" class="btn">Let's work</NuxtLink>
			</div>
		</nav>
	</header>
</template>

<style scoped module>
	.header {
		display: flex;
		justify-content: space-between;
		padding: 35px 40px;
	}
	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 80px;
	}
	.link {
		font-size: 20px;
	}
	.buttons {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
	}
	.lang {
		background: no-repeat center center;
		background-image: url(/images/uk.svg);
		background-color: var(--white);
		border: 3px solid var(--light-gray);
		&:hover{
			background-color: var(--light-gray);
		}
	}
</style>