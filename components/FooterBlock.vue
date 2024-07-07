<template>
<div :class="$style.wrapper">
	<footer 
		class="container"
		:class="$style.footer"
	>
		<p :class="$style.heading_quest">Is there a project?</p>
		<p :class="$style.heading_main">Let's work together</p>
		<div :class="$style.addrs">
			<address :class="$style.addr">
				<span>For all questions</span>
				<span>+7 (920) 278—00—68</span>
				<span>qtim@agency.com</span>
			</address>
			<address :class="$style.addr">
				<span>Office in Russia</span>
				<span>139 Ruben Station Lake Drew, NM 52678</span>
				<!-- <IconBtn></IconBtn> -->
			</address>
			<address :class="$style.addr">
				<span>Office in Dubai</span>
				<span>139 Ruben Station Lake Drew, NM 52678</span>
				<!-- <IconBtn></IconBtn> -->
			</address>
		</div>
		<nav :class="$style.nav">
			<div :class="$style.links">
				<a href="#">Facebook</a>
				<a href="#">Instagram</a>
				<a href="#">Telegram</a>
			</div>
			<button :class="$style.go">
				<span :class="$style.go_text">Go</span>
			</button>
			<div :class="$style.links">
				<a href="#">Behance</a>
				<a href="#">Linkedn</a>
				<a href="#">Privacy Policy</a>
			</div>
		</nav>
	</footer>
</div>
</template>

<script setup>
	
</script>

<style scoped module>

	.wrapper {
		padding-top: 140px;
		background-color: var(--light-purple);
	}
	.footer {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: 70px auto 300px;
		grid-template-areas:
			'h_q h_q'
			'h_m addr'
			'nav nav'
		;
	}

	.addrs {
		display: flex;
		flex-direction: column;
		gap: 36px;
	}

	.heading_quest {
		grid-area: h_q;
		font-size: 16px;
	}
	.heading_main {
		grid-area: h_m;
		font-size: 112px;
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 12px;
	}

	.addrs {
		grid-area: addr;
		display: flex;
		flex-direction: column;
		gap: 36px;
	}

	.addr {
		display: flex;
		flex-direction: column;
		gap: 12px;
		max-width: 152px;
		font-size: 16px;
		font-style: normal;
	}

	.nav {
		grid-area: nav;
		align-self: end;
		display: flex;
		height: 100%;
		padding-bottom: 30px;
		justify-content: space-between;
		align-items: end;
		overflow: hidden;
	}

	.links {
		display: flex;
		gap: 32px;
		a {
			text-decoration: underline;
			text-underline-offset: 8px;
		}
	}

	.go_text {
		font-size:  32px;
		color: var(--white);
		position: relative;
	}

	.go {
		position: relative;
		display: block;
		width: 38px;
		height: 38px;
		&::before {
			position: absolute;
			display: block;
			content: '';
			bottom: -50px;
			left: 0;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			background-color: var(--black);
			transform: scale(9.5);
		}
/* 		box-shadow: 0 0 0 160px var(--black); */
	}
</style>