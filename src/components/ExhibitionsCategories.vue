<template>
	<section class="exhibitions">
		<div class="container">
			<div class="exhibitions__inner">
				<nav class="exhibitions-nav">
					<ul class="list-reset exhibitions-nav__list">
						<li
							class="exhibitions-nav__item"
							v-for="(block, index) in blocks"
							:key="block.id"
						>
							<router-link
								:to="`/exhibitions/categories/${block.id}`"
								class="exhibitions-nav__link"
								>{{ block.title }}</router-link
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
import { RouterView } from 'vue-router'

export default {
	data() {
		return {
			blocks: [
				{
					id: 1,
					img: '1.jpg',
					title: 'Керамика',
					description:
						'Художественная и интерьерная керамика от талантливых красноярских керамистов для дома и в подарок.',
				},
				{
					id: 2,
					img: '2.jpg',
					title: 'Керамика',
					description:
						'Художественная и интерьерная керамика от талантливых красноярских керамистов для дома и в подарок.',
				},
				{
					id: 3,
					img: '3.jpg',
					title: 'Керамика',
					description:
						'Художественная и интерьерная керамика от талантливых красноярских керамистов для дома и в подарок.',
				},
				{
					id: 4,
					img: '4.jpg',
					title: 'Керамика',
					description:
						'Художественная и интерьерная керамика от талантливых красноярских керамистов для дома и в подарок.',
				},
				{
					id: 5,
					img: '5.jpg',
					title: 'Керамика',
					description:
						'Художественная и интерьерная керамика от талантливых красноярских керамистов для дома и в подарок.',
				},
			],
		}
	},
}
</script>

<style lang="scss" scoped>
.exhibitions {
	margin-top: 120px;
	&__inner {
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
