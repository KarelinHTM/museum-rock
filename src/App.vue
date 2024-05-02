<template>
	<header-section />
	<main class="main">
		<RouterView />
	</main>
	<footer-section v-if="$route.path !== '/exhibitions'" />
</template>

<script>
import { RouterView } from 'vue-router'
import FooterSection from './components/FooterSection.vue'
import HeaderSection from './components/HeaderSection.vue'

export default {
	components: {
		HeaderSection,
		FooterSection,
	},
	setup() {
		return {}
	},
}
</script>

<style lang="scss">
@keyframes linearGradientAccent {
	0% {
		background-position: -400% 50%;
	}
	50% {
		background-position: 0 50%;
	}
	100% {
		background-position: -400% 50%;
	}
}

@keyframes cardOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>
