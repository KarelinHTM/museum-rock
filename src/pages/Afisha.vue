<template>
	<section class="afisha">
		<program-list />
	</section>
</template>

<script>
import FooterSection from '../components/FooterSection.vue'
import ProgramList from '../components/ProgramList.vue'

export default {
	components: {
		FooterSection,
		ProgramList,
	},

	data() {
		return {}
	},

	setup() {
		return {}
	},

	methods: {},
}
</script>

<style lang="scss" scoped>
.afisha {
	margin-top: 150px;
	&__title {
		text-align: center;
		text-decoration: underline;
		text-transform: uppercase;
		font-weight: bold;
		font-family: var(--font-accent);
		letter-spacing: 1px;
	}
	&__swiper {
		margin: 100px 0;
	}
	&__slide {
		background-color: #696969;
	}
}
</style>
