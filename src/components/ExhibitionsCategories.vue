<template>
	<section class="exhibitions">
		<div class="container">
			<div class="exhibitions__inner">
				<nav class="exhibitions-nav">
					<ul class="list-reset exhibitions-nav__list">
						<li
							class="exhibitions-nav__item"
							v-for="(block, index) in exhibitions"
							:key="block.id"
						>
							<RouterLink
								:to="`/exhibitions/categories/${block.id}`"
								class="exhibitions-nav__link"
								>{{ block.title }}</RouterLink
							>
						</li>
					</ul>
				</nav>
				<RouterView />
			</div>
		</div>
	</section>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapActions, mapState } from 'vuex'

export default {
	data() {
		return {}
	},

	mounted() {
		this.fetchExhibitions()
	},

	methods: {
		...mapActions({
			fetchExhibitions: 'exhibitions/fetchExhibitions',
		}),
	},

	computed: {
		...mapState({
			isLoading: state => state.exhibitions.isLoading,
			exhibitions: state => state.exhibitions.exhibitions,
		}),
	},
}
</script>

<style lang="scss" scoped>
.exhibitions {
	margin-top: 120px;
	&__inner {
		&-loading {
			display: flex;
			justify-content: center;
		}
	}
}

.exhibitions-nav {
	&__list {
		display: flex;
		gap: 30px;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
	&__item {
	}
	&__link {
		position: relative;
		line-height: 1;
		font-size: 20px;
		font-weight: 300;

		&:hover {
			-webkit-text-fill-color: transparent;
			background: linear-gradient(180deg, #d6358c 32.54%, #4f4b98 96.36%);
			background-clip: text;
		}

		&.router-link-active {
			font-weight: 700;
			-webkit-text-fill-color: transparent;
			background: linear-gradient(180deg, #d6358c 32.54%, #4f4b98 96.36%);
			background-clip: text;
		}
	}
}
</style>
