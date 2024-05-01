<template>
	<header class="header">
		<div class="container">
			<div class="header__inner">
				<a href="/" class="header__logo">
					<!-- <img
						src="../assets/logo.png"
						alt="Музей камня"
						class="header__logo-image"
					/> -->
				</a>
				<my-navigation />
			</div>
		</div>
	</header>
</template>

<script>
import MyNavigation from './MyNavigation.vue'

export default {
	components: {
		MyNavigation,
	},
}
</script>

<style lang="scss" scoped>
.header {
	font-size: 25px;

	background-color: var(--whiteOpacity-color);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 9999;

	&__inner {
		display: flex;
		justify-content: space-between;
		gap: 30px;
		padding: 40px 0;
	}

	&__logo {
	}
	&__logo-image {
	}
}
</style>
